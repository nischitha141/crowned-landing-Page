"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Toaster } from "react-hot-toast";
import { useCreators } from "@/hooks/useCreators";
import { creatorsFormSchema, CreatorsFormData } from "@/lib/validations";
import { ZodError } from "zod";


const EarlyAccess = () => {
  const { submitCreators, isLoading } = useCreators();
  const [focusedInput, setFocusedInput] = useState<string | null>(null);
  const [formData, setFormData] = useState<CreatorsFormData>({
    creatorName: "",
    socialAccount: "",
    contentCategory: "",
    excitedAbout: [],
    privacy: false,
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    
    try {
      const validatedData = creatorsFormSchema.parse(formData);
      const result = await submitCreators(validatedData);
      
      if (result.success) {
        // Reset form on success
        setFormData({
          creatorName: "",
          socialAccount: "",
          contentCategory: "",
          excitedAbout: [],
          privacy: false,
        });
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
    <div id="early-access-form" className="relative container">
      <div className="flex flex-col items-center justify-center gap-4 sm:gap-5 lg:gap-6 my-6 sm:my-8 lg:my-10 relative px-4 sm:px-6 lg:px-0">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bowlby text-[#424242] text-center leading-tight">
          Be First to Crown & Earn
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl font-sans text-center max-w-sm sm:max-w-md lg:max-w-none z-50 px-2 sm:px-0">
          Be one of the first creators to drop Premium Crowns and earn from the chain.
        </p>

        <form onSubmit={handleSubmit} className="w-full z-50 max-w-[544px] flex flex-col items-center justify-center gap-3 sm:gap-4 lg:gap-5 px-2 sm:px-0">
          
          {/* Creator Name */}
          <div className="flex flex-col w-full">
            <label
              htmlFor="creatorName"
              className="text-[#4E525A] font-sans text-sm md:text-[14px]"
            >
              What&apos;s your creator name or handle?*
            </label>
            <div className="relative">
              <input
                type="text"
                id="creatorName"
                value={formData.creatorName}
                onChange={(e) => handleInputChange("creatorName", e.target.value)}
                className={`w-full h-[44px] px-4 bg-white border-1 focus:outline-none text-sm md:text-base ${
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

          {/* Social Account */}
          <div className="flex flex-col w-full">
            <label
              htmlFor="socialAccount"
              className="text-[#4E525A] font-sans text-sm md:text-[14px]"
            >
              Link to your main social account (TikTok, Instagram, etc.)*
            </label>
            <div className="relative">
              <input
                type="text"
                id="socialAccount"
                value={formData.socialAccount}
                onChange={(e) => handleInputChange("socialAccount", e.target.value)}
                className={`w-full h-[44px] px-4 bg-white border-1 focus:outline-none text-sm md:text-base ${
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

          {/* Content Category */}
          <div className="flex flex-col w-full">
            <label
              htmlFor="contentCategory"
              className="text-[#4E525A] font-sans text-sm md:text-[14px]"
            >
              What content category best describes you? (e.g., music, fashion, lifestyle, crypto)
            </label>
            <div className="relative">
              <input
                type="text"
                id="contentCategory"
                value={formData.contentCategory}
                onChange={(e) => handleInputChange("contentCategory", e.target.value)}
                className={`w-full h-[44px] px-4 bg-white border-1 focus:outline-none text-sm md:text-base ${
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

          {/* What are you excited about */}
          <div className="flex flex-col w-full">
            <label className="text-[#4E525A] font-sans text-sm md:text-[14px] mb-3">
              What are you excited about?*
            </label>
            <div className="flex flex-wrap flex-row items-start justify-start gap-2">
              {excitedOptions.map((option) => (
                <div key={option} className="flex w-full sm:w-auto items-center gap-2 border border-[#757575] p-2 sm:p-0 shrink-0">
                  <input
                    type="checkbox"
                    id={option}
                    checked={formData.excitedAbout.includes(option)}
                    onChange={() => handleExcitedAboutChange(option)}
                    className={`h-5 w-5 border-1 focus:outline-[#AE93C8] cursor-pointer ${
                      errors.excitedAbout ? "border-red-500" : "border-[#757575]"
                    }`}
                  />
                  <label
                    htmlFor={option}
                    className="text-[#4E525A] text-sm md:text-base cursor-pointer text-nowrap"
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

          {/* Privacy Policy */}
          <div className="flex flex-col items-start gap-2 text-sm md:text-[14px] font-sans text-[#424242] w-full">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="privacy"
                checked={formData.privacy}
                onChange={(e) => handleInputChange("privacy", e.target.checked)}
                className={`h-4 w-4 sm:h-5 sm:w-5 border-1 focus:outline-none cursor-pointer flex-shrink-0 ${
                  errors.privacy ? "border-red-500" : "border-[#757575]"
                }`}
              />
              <label htmlFor="privacy" className="text-[#212121] text-sm sm:text-base lg:text-xl my-4">
                You agree to our friendly{" "}
                <span>
                  {" "}
                  <Link href="/policy" className="font-bold underline">
                    privacy policy
                  </Link>
                </span>
              </label>
            </div>
            {errors.privacy && (
              <p className="text-red-500 text-sm mt-1">{errors.privacy}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="relative flex items-center justify-center gap-5 w-full">
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full text-nowrap border-2 border-[#212121] bg-[#E1D6EA] shadow-[6px_6px_0px_#000000] py-1.5 px-3 h-[40px] md:h-[44px] font-bowlby font-[400] text-lg md:text-xl text-[#2C1D39] text-center transition-all duration-200 ${
                isLoading
                  ? "opacity-50 cursor-not-allowed"
                  : "cursor-pointer hover:shadow-[9px_9px_0px_#000000] hover:opacity-90"
              }`}
            >
              {isLoading ? "SUBMITTING..." : "GET ME EARLY ACCESS"}
            </button>
          </div>
        </form>

        {/* Decorative Images */}
        <Image
          className="absolute top-[5%] md:top-[10%] right-[5%] md:right-[10%] z-10 w-16 h-12 md:w-[125px] md:h-[100px]"
          src="/assets/crown.svg"
          alt="crown"
          width={125}
          height={100}
        />
        <Image
          className="absolute top-[5%] md:top-[10%] left-[5%] md:left-[10%] z-10 w-16 h-12 md:w-[125px] md:h-[100px]"
          src="/assets/lock.svg"
          alt="lock"
          width={125}
          height={100}
        />
        <Image
          className="absolute bottom-[30%] md:bottom-[20%] right-[5%] md:right-[10%] z-10 w-16 h-12 md:w-[125px] md:h-[100px]"
          src="/assets/cloud.svg"
          alt="cloud"
          width={125}
          height={100}
        />
        <Image
          className="absolute bottom-[30%] md:bottom-[20%] left-[5%] md:left-[10%] z-10 w-16 h-12 md:w-[125px] md:h-[100px]"
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

export default EarlyAccess;