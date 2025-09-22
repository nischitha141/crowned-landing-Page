"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Toaster } from "react-hot-toast";
import { useCreators } from "@/hooks/useCreators";
import { creatorsFormSchema, CreatorsFormData } from "@/lib/validations";
import { ZodError } from "zod";

const CreatorsForm = () => {
  const { submitCreators, isLoading } = useCreators();
  const [focusedInput, setFocusedInput] = useState<string | null>(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<CreatorsFormData>({
    email: "",
    creatorName: "",
    socialAccount: "",
    contentCategory: "",
    excitedAbout: [],
    privacy: true,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const excitedOptions = [
    "Running viral Crown challenges?",
    "Earning from Crown Cam?",
    "Early creator verification?",
    "Earning from chain reactions?",
    "Partnering with brands?",
    "Participating in referral program?"
  ];

  const handleFocus = (inputId: string) => setFocusedInput(inputId);
  const handleBlur = () => setFocusedInput(null);

  const handleInputChange = (field: string, value: string | boolean | string[]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  const handleExcitedAboutChange = (option: string) => {
    const updatedOptions = formData.excitedAbout.includes(option)
      ? formData.excitedAbout.filter(item => item !== option)
      : [...formData.excitedAbout, option];

    handleInputChange('excitedAbout', updatedOptions);
  };

  const validateStep = (step: number): boolean => {
    const stepErrors: Record<string, string> = {};

    if (step === 1) {
      if (!formData.email.trim()) stepErrors.email = "Email is required";
      if (!formData.creatorName.trim()) stepErrors.creatorName = "Creator name is required";
      if (!formData.socialAccount.trim()) stepErrors.socialAccount = "Social account is required";
    } else if (step === 2) {
      if (formData.contentCategory.length === 0) stepErrors.contentCategory = "Please select at least one content category";
    } else if (step === 3) {
      if (formData.excitedAbout.length === 0) stepErrors.excitedAbout = "Please select at least one option";
    }

    setErrors(stepErrors);
    return Object.keys(stepErrors).length === 0;
  };

  const handleNextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const isStepComplete = (step: number): boolean => {
    if (step === 1) {
      return formData.email.trim() !== "" && formData.creatorName.trim() !== "" && formData.socialAccount.trim() !== "";
    } else if (step === 2) {
      return formData.contentCategory.length > 0;
    } else if (step === 3) {
      return formData.excitedAbout.length > 0;
    }
    return false;
  };

  const getButtonText = (): string => {
    switch (currentStep) {
      case 1: return "Next - Your Vibe 🎯";
      case 2: return "Next - What Excites You 🚀";
      case 3: return "Submit & Lock My Spot 👑";
      default: return "Submit & Lock My Spot 👑";
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (currentStep < 3) {
      handleNextStep();
      return;
    }
    setErrors({});

    try {
      const validatedData = creatorsFormSchema.parse(formData);
      const result = await submitCreators(validatedData);

      if (result.success) {
        setFormData({
          email: "",
          creatorName: "",
          socialAccount: "",
          contentCategory: "",
          excitedAbout: [],
          privacy: true,
        });
        setCurrentStep(1);
      }
    } catch (error) {
      if (error instanceof ZodError) {
        const formattedErrors: Record<string, string> = {};
        error.issues.forEach((issue) => {
          const field = issue.path[0] as string;
          formattedErrors[field] = issue.message;
        });
        setErrors(formattedErrors);
      }
    }
  };

  return (
    <div className="relative container">
      <div className="flex flex-col items-center justify-center gap-4 sm:gap-5 lg:gap-6 my-6 sm:my-8 lg:my-10 relative px-4 sm:px-6 lg:px-0">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bowlby text-[#424242] text-center leading-tight">
          You're In Early!
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl font-sans text-center max-w-[600px] z-50 px-2 sm:px-0">
          Lock your early creator spot and tell us a bit about you. The more we know, the better collabs we can line up for you.
        </p>

        <form onSubmit={handleSubmit} className="w-full z-50 max-w-[544px] flex flex-col items-center justify-center gap-3 sm:gap-4 lg:gap-5 px-2 sm:px-0">

          {currentStep >= 1 && (
          <>
          {/* Email */}
          <div className="flex flex-col w-full">
            <label
              htmlFor="email"
              className="text-[#424242] font-[600] font-sans text-sm md:text-[14px]"
            >
              Your email address*
            </label>
            <div className="relative">
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className={`w-full h-[44px] px-4 bg-white border-1 focus:outline-none text-sm md:text-base placeholder:text-[#868A92] placeholder:font-sans placeholder:font-[600] ${
                  errors.email ? "border-red-500" : "border-[#757575]"
                }`}
                placeholder="your.email@example.com"
                onFocus={() => handleFocus("email")}
                onBlur={handleBlur}
              />
              {focusedInput === "email" && (
                <div
                  className="absolute inset-0 border-3 rounded-md pointer-events-none"
                  style={{
                    borderImage: "linear-gradient(90deg, #7024B4, #F8A80D) 1",
                  }}
                />
              )}
            </div>
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div className="flex flex-col w-full">
            <label
              htmlFor="creatorName"
              className="text-[#424242] font-[600] font-sans text-sm md:text-[14px]"
            >
              What&apos;s your creator name or handle?*
            </label>
            <div className="relative">
              <input
                type="text"
                id="creatorName"
                value={formData.creatorName}
                onChange={(e) => handleInputChange("creatorName", e.target.value)}
                className={`w-full h-[44px] px-4 bg-white border-1 focus:outline-none text-sm md:text-base placeholder:text-[#868A92] placeholder:font-sans placeholder:font-[600] ${
                  errors.creatorName ? "border-red-500" : "border-[#757575]"
                }`}
                placeholder="Aryl"
                onFocus={() => handleFocus("creatorName")}
                onBlur={handleBlur}
              />
              {focusedInput === "creatorName" && (
                <div
                  className="absolute inset-0 border-3 rounded-md pointer-events-none"
                  style={{
                    borderImage: "linear-gradient(90deg, #7024B4, #F8A80D) 1",
                  }}
                />
              )}
            </div>
            {errors.creatorName && (
              <p className="text-red-500 text-sm mt-1">{errors.creatorName}</p>
            )}
          </div>

          <div className="flex flex-col w-full">
            <label
              htmlFor="socialAccount"
              className="text-[#424242] font-[600] font-sans text-sm md:text-[14px]"
            >
              Link to your main social account (TikTok, Instagram, etc.)*
            </label>
            <div className="relative">
              <input
                type="text"
                id="socialAccount"
                value={formData.socialAccount}
                onChange={(e) => handleInputChange("socialAccount", e.target.value)}
                className={`w-full h-[44px] px-4 bg-white border-1 focus:outline-none text-sm md:text-base placeholder:text-[#868A92] placeholder:font-sans placeholder:font-[600] ${
                  errors.socialAccount ? "border-red-500" : "border-[#757575]"
                }`}
                placeholder="e.g., https://www.instagram.com/yourhandle"
                onFocus={() => handleFocus("socialAccount")}
                onBlur={handleBlur}
              />
              {focusedInput === "socialAccount" && (
                <div
                  className="absolute inset-0 border-3 rounded-md pointer-events-none"
                  style={{
                    borderImage: "linear-gradient(90deg, #7024B4, #F8A80D) 1",
                  }}
                />
              )}
            </div>
            {errors.socialAccount && (
              <p className="text-red-500 text-sm mt-1">{errors.socialAccount}</p>
            )}
          </div>
          </>
          )}

          {currentStep >= 2 && (
          <>
          <div className="flex flex-col w-full">
            <label
              htmlFor="contentCategory"
              className="text-[#424242] font-[600] font-sans text-sm md:text-[14px]"
            >
              What content category best describes you? (e.g., music, fashion, lifestyle, crypto)
            </label>
            <div className="relative">
              <input
                type="text"
                id="contentCategory"
                value={formData.contentCategory}
                onChange={(e) => handleInputChange("contentCategory", e.target.value)}
                className={`w-full h-[44px] px-4 bg-white border-1 focus:outline-none text-sm md:text-base placeholder:text-[#868A92] placeholder:font-sans placeholder:font-[600] ${
                  errors.contentCategory ? "border-red-500" : "border-[#757575]"
                }`}
                placeholder="e.g., Fashion & Lifestyle"
                onFocus={() => handleFocus("contentCategory")}
                onBlur={handleBlur}
              />
              {focusedInput === "contentCategory" && (
                <div
                  className="absolute inset-0 border-3 rounded-md pointer-events-none"
                  style={{
                    borderImage: "linear-gradient(90deg, #7024B4, #F8A80D) 1",
                  }}
                />
              )}
            </div>
            {errors.contentCategory && (
              <p className="text-red-500 text-sm mt-1">{errors.contentCategory}</p>
            )}
          </div>
          </>
          )}

          {currentStep >= 3 && (
          <>
          <div className="flex flex-col w-full">
            <label className="text-[#424242] font-[600] font-sans text-sm md:text-[14px] mb-3">
              What are you excited about?*
            </label>
            <div className="flex flex-wrap flex-row items-start justify-start gap-2">
              {excitedOptions.map((option) => (
                <div key={option} className="flex w-full sm:w-auto items-center gap-2 border border-[#757575] p-2  shrink-0">
                  <input
                    type="checkbox"
                    id={option}
                    checked={formData.excitedAbout.includes(option)}
                    onChange={() => handleExcitedAboutChange(option)}
                    className={`h-5 w-5 border-2 rounded focus:outline-[#AE93C8] cursor-pointer appearance-none checked:bg-[#AE93C8] checked:border-[#AE93C8] relative ${
                      errors.excitedAbout ? "border-red-500" : "border-[#AE93C8]"
                    }`}
                    style={{
                      backgroundImage: formData.excitedAbout.includes(option) ? `url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='m13.854 3.646-7.5 7.5a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6 10.293l7.146-7.147a.5.5 0 0 1 .708.708z'/%3e%3c/svg%3e")` : 'none',
                      backgroundSize: '15px 15px',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat'
                    }}
                  />
                  <label
                    htmlFor={option}
                    className="text-[#616161] font-sans text-sm md:text-base cursor-pointer text-nowrap font-[600]"
                  >
                    {option}
                  </label>
                </div>
              ))}
            </div>
            {errors.excitedAbout && (
              <p className="text-red-500 text-sm mt-1">{errors.excitedAbout}</p>
            )}
          </div>
          </>
          )}

          <div className="relative flex items-center justify-center gap-5 w-full">
            <button
              type="submit"
              disabled={isLoading || !isStepComplete(currentStep)}
              className={`w-full my-4 text-nowrap border-2 border-[#212121] bg-[#E1D6EA] shadow-[6px_6px_0px_#000000] py-1.5 px-3 h-[40px] md:h-[44px] font-bowlby font-[400] text-lg md:text-xl text-[#2C1D39] text-center transition-all duration-200 ${
                isLoading || !isStepComplete(currentStep)
                  ? "opacity-50 cursor-not-allowed"
                  : "cursor-pointer hover:shadow-[9px_9px_0px_#000000] hover:opacity-90"
              }`}
            >
              {isLoading && (
                <div className="w-5 h-5 border-2 border-[#2C1D39] border-t-transparent rounded-full animate-spin"></div>
              )}
              {isLoading ? "SUBMITTING..." : getButtonText()}
            </button>
          </div>
        </form>

        {/* Decorative Images */}
        <Image
          className="hidden md:block absolute top-[5%] md:top-[10%] right-[5%] md:right-[10%] z-10 w-16 h-12 md:w-[125px] md:h-[100px]"
          src="/assets/crown.svg"
          alt="crown"
          width={125}
          height={100}
        />
        <Image
          className="hidden md:block absolute top-[5%] md:top-[10%] left-[5%] md:left-[10%] z-10 w-16 h-12 md:w-[125px] md:h-[100px]"
          src="/assets/lock.svg"
          alt="lock"
          width={125}
          height={100}
        />
        <Image
          className="hidden md:block absolute bottom-[30%] md:bottom-[20%] right-[5%] md:right-[10%] z-10 w-16 h-12 md:w-[125px] md:h-[100px]"
          src="/assets/cloud.svg"
          alt="cloud"
          width={125}
          height={100}
        />
        <Image
          className="hidden md:block absolute bottom-[30%] md:bottom-[20%] left-[5%] md:left-[10%] z-10 w-16 h-12 md:w-[125px] md:h-[100px]"
          src="/assets/fifth_section_coin.svg"
          alt="coin"
          width={125}
          height={100}
        />
      </div>

      <Toaster />
    </div>
  );
};

export default CreatorsForm;