"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Toaster } from "react-hot-toast";
import { useBrands } from "@/hooks/useBrands";
import { brandsFormSchema, BrandsFormData } from "@/lib/validations";
import { ZodError } from "zod";

const EarlyAccess = () => {
  const { submitBrands, isLoading } = useBrands();
  const [focusedInput, setFocusedInput] = useState<string | null>(null);
  const [formData, setFormData] = useState<BrandsFormData>({
    brandName: "",
    representative: "",
    campaignTypes: [],
    marketingEmail: "",
    monthlyAccess: "",
    campaignBudget: "",
    cryptoRewards: "",
    privacy: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const campaignOptions = [
    "Sponsored Chains",
    "School/College Viral Campaigns", 
    "UGC / Creator Partnerships",
    "Discount Reward Drops"
  ];

  const cryptoOptions = [
    { value: "1", label: "Yes" },
    { value: "0", label: "No" },
    { value: "2", label: "Not sure yet" }
  ];

  const handleFocus = (inputId: string) => setFocusedInput(inputId);
  const handleBlur = () => setFocusedInput(null);

  const handleInputChange = (field: string, value: string | boolean | string[]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  const handleCampaignTypeChange = (campaignType: string) => {
    const updatedTypes = formData.campaignTypes.includes(campaignType)
      ? formData.campaignTypes.filter(type => type !== campaignType)
      : [...formData.campaignTypes, campaignType];
    
    handleInputChange('campaignTypes', updatedTypes);
  };

  const handleCryptoRewardChange = (selectedValue: string) => {
    // If the same option is clicked again, uncheck it, otherwise set the new value
    const newValue = formData.cryptoRewards === selectedValue ? "" : selectedValue;
    handleInputChange('cryptoRewards', newValue);
  };

  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    
    try {
      const validatedData = brandsFormSchema.parse(formData);
      const result = await submitBrands(validatedData);
      
      if (result.success) {
        // Reset form on success
        setFormData({
          brandName: "",
          representative: "",
          campaignTypes: [],
          marketingEmail: "",
          monthlyAccess: "",
          campaignBudget: "",
          cryptoRewards: "",
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
          Claim Your Spot
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl font-sans text-center max-w-sm sm:max-w-md lg:max-w-none z-50 px-2 sm:px-0">
          Be one of the first brands to launch Branded Crowns and earn from the chain.
        </p>

        <form onSubmit={handleSubmit} className="w-full z-50 max-w-[544px] flex flex-col items-center justify-center gap-3 sm:gap-4 lg:gap-5 px-2 sm:px-0">
          
          {/* Brand Name */}
          <div className="flex flex-col w-full">
            <label
              htmlFor="brandName"
              className="text-[#424242] font-[600] font-sans text-sm md:text-[14px]"
            >
              What&apos;s your brand name and industry?*
            </label>
            <div className="relative">
              <input
                type="text"
                id="brandName"
                value={formData.brandName}
                onChange={(e) => handleInputChange("brandName", e.target.value)}
                className={`w-full h-[44px] px-4 bg-white border-1 focus:outline-none text-sm md:text-base placeholder:text-[#868A92] placeholder:font-sans placeholder:font-[600] ${
                  errors.brandName ? "border-red-500" : "border-[#757575]"
                }`}
                placeholder="Aryl"
                onFocus={() => handleFocus("brandName")}
                onBlur={handleBlur}
              />
              {focusedInput === "brandName" && (
                <div
                  className="absolute inset-0 border-3 rounded-md pointer-events-none"
                  style={{
                    borderImage: "linear-gradient(90deg, #7024B4, #F8A80D) 1",
                  }}
                />
              )}
            </div>
            {errors.brandName && (
              <p className="text-red-500 text-sm mt-1">{errors.brandName}</p>
            )}
          </div>

          {/* Representative */}
          <div className="flex flex-col w-full">
            <label
              htmlFor="representative"
              className="text-[#424242] font-[600] font-sans text-sm md:text-[14px]"
            >
              Who is your representative and their contact?*
            </label>
            <div className="relative">
              <input
                type="text"
                id="representative"
                value={formData.representative}
                onChange={(e) => handleInputChange("representative", e.target.value)}
                className={`w-full h-[44px] px-4 bg-white border-1 focus:outline-none text-sm md:text-base placeholder:text-[#868A92] placeholder:font-sans placeholder:font-[600] ${
                  errors.representative ? "border-red-500" : "border-[#757575]"
                }`}
                placeholder="e.g. John Doe - Head of Partnerships, john@brand.com"
                onFocus={() => handleFocus("representative")}
                onBlur={handleBlur}
              />
              {focusedInput === "representative" && (
                <div
                  className="absolute inset-0 border-3 rounded-md pointer-events-none"
                  style={{
                    borderImage: "linear-gradient(90deg, #7024B4, #F8A80D) 1",
                  }}
                />
              )}
            </div>
            {errors.representative && (
              <p className="text-red-500 text-sm mt-1">{errors.representative}</p>
            )}
          </div>

          {/* Campaign Types */}
          <div className="flex flex-col w-full">
            <label className="text-[#424242] font-[600] font-sans text-sm md:text-[14px] mb-3">
              What type of campaign are you interested in?*
            </label>
            <div className="flex flex-wrap flex-row items-start justify-start gap-2">
              {campaignOptions.map((option) => (
                <div key={option} className="flex items-center  gap-2 border border-[#757575] p-2 sm:p-2  grow">
                  <input
                    type="checkbox"
                    id={option}
                    checked={formData.campaignTypes.includes(option)}
                    onChange={() => handleCampaignTypeChange(option)}
                    className={`h-5 w-5 border-2 rounded p-1 sm:p-0 focus:outline-[#AE93C8] cursor-pointer appearance-none checked:bg-[#AE93C8] checked:border-[#AE93C8] relative ${
                      errors.campaignTypes ? "border-red-500" : "border-[#AE93C8]"
                    }`}
                    style={{
                      backgroundImage: formData.campaignTypes.includes(option) ? `url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='m13.854 3.646-7.5 7.5a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6 10.293l7.146-7.147a.5.5 0 0 1 .708.708z'/%3e%3c/svg%3e")` : 'none',
                      backgroundSize: '15px 15px',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat'
                    }}
                  />
                  <label 
                    htmlFor={option} 
                    className="text-[#616161] font-sans text-sm md:text-base cursor-pointer text-nowrap font-[600]  sm:py-0 p-1"
                  >
                    {option}
                  </label>
                </div>
              ))}
            </div>
            {errors.campaignTypes && (
              <p className="text-red-500 text-sm mt-1">{errors.campaignTypes}</p>
            )}
          </div>

          {/* Marketing Email */}
          <div className="flex flex-col w-full">
            <label
              htmlFor="marketingEmail"
              className="text-[#424242] font-[600] font-sans text-sm md:text-[14px]"
            >
              Marketing contact email
            </label>
            <div className="relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="#757575" strokeWidth="2" fill="none"/>
                  <polyline points="22,6 12,13 2,6" stroke="#757575" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <input
                type="email"
                id="marketingEmail"
                value={formData.marketingEmail}
                onChange={(e) => handleInputChange("marketingEmail", e.target.value)}
                className={`w-full h-[44px] pl-12 pr-4 bg-white border-1 focus:outline-none text-sm md:text-base placeholder:text-[#868A92] placeholder:font-sans placeholder:font-[600] ${
                  errors.marketingEmail ? "border-red-500" : "border-[#757575]"
                }`}
                placeholder="e.g. marketing@brand.com"
                onFocus={() => handleFocus("marketingEmail")}
                onBlur={handleBlur}
              />
              {focusedInput === "marketingEmail" && (
                <div
                  className="absolute inset-0 border-3 rounded-md pointer-events-none"
                  style={{
                    borderImage: "linear-gradient(90deg, #7024B4, #F8A80D) 1",
                  }}
                />
              )}
            </div>
            {errors.marketingEmail && (
              <p className="text-red-500 text-sm mt-1">{errors.marketingEmail}</p>
            )}
          </div>

          {/* Monthly Access */}
          <div className="flex flex-col w-full">
            <label
              htmlFor="monthlyAccess"
              className="text-[#424242] font-[600] font-sans text-sm md:text-[14px]"
            >
              How much would you pay for monthly access ($500–$10k+)?*
            </label>
            <div className="relative">
              <input
                type="text"
                id="monthlyAccess"
                value={formData.monthlyAccess}
                onChange={(e) => handleInputChange("monthlyAccess", e.target.value)}
                className={`w-full h-[44px] px-4 bg-white border-1 focus:outline-none text-sm md:text-base placeholder:text-[#868A92] placeholder:font-sans placeholder:font-[600] ${
                  errors.monthlyAccess ? "border-red-500" : "border-[#757575]"
                }`}
                placeholder="e.g. $2,500 / month"
                onFocus={() => handleFocus("monthlyAccess")}
                onBlur={handleBlur}
              />
              {focusedInput === "monthlyAccess" && (
                <div
                  className="absolute inset-0 border-3 rounded-md pointer-events-none"
                  style={{
                    borderImage: "linear-gradient(90deg, #7024B4, #F8A80D) 1",
                  }}
                />
              )}
            </div>
            {errors.monthlyAccess && (
              <p className="text-red-500 text-sm mt-1">{errors.monthlyAccess}</p>
            )}
          </div>

          {/* Campaign Budget */}
          <div className="flex flex-col w-full">
            <label
              htmlFor="campaignBudget"
              className="text-[#424242] font-[600] font-sans text-sm md:text-[14px]"
            >
              Estimated campaign budget for launch ($10k+)?*
            </label>
            <div className="relative">
              <input
                type="text"
                id="campaignBudget"
                value={formData.campaignBudget}
                onChange={(e) => handleInputChange("campaignBudget", e.target.value)}
                className={`w-full h-[44px] px-4 bg-white border-1 focus:outline-none text-sm md:text-base placeholder:text-[#868A92] placeholder:font-sans placeholder:font-[600] ${
                  errors.campaignBudget ? "border-red-500" : "border-[#757575]"
                }`}
                placeholder="e.g. $25,000"
                onFocus={() => handleFocus("campaignBudget")}
                onBlur={handleBlur}
              />
              {focusedInput === "campaignBudget" && (
                <div
                  className="absolute inset-0 border-3 rounded-md pointer-events-none"
                  style={{
                    borderImage: "linear-gradient(90deg, #7024B4, #F8A80D) 1",
                  }}
                />
              )}
            </div>
            {errors.campaignBudget && (
              <p className="text-red-500 text-sm mt-1">{errors.campaignBudget}</p>
            )}
          </div>

          {/* Crypto Rewards */}
          <div className="flex flex-col w-full">
            <label className="text-[#424242] font-[600] font-sans text-sm md:text-[14px] mb-3">
              Are you interested in cryptobased reward chains?*
            </label>
            <div className="flex flex-wrap flex-row items-start justify-start gap-2">
              {cryptoOptions.map((option) => (
                <div key={option.value} className="flex items-center gap-2 border border-[#757575] p-2 sm:p-1 flex-1 sm:grow">
                  <input
                    type="checkbox"
                    id={`crypto-${option.value}`}
                    checked={formData.cryptoRewards === option.value}
                    onChange={() => handleCryptoRewardChange(option.value)}
                    className={`h-4 w-4 sm:h-5 sm:w-5 border-2 rounded focus:outline-[#AE93C8] cursor-pointer flex-shrink-0 appearance-none checked:bg-[#AE93C8] checked:border-[#AE93C8] relative ${
                      errors.cryptoRewards ? "border-red-500" : "border-[#AE93C8]"
                    }`}
                    style={{
                      backgroundImage: formData.cryptoRewards === option.value ? `url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='m13.854 3.646-7.5 7.5a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6 10.293l7.146-7.147a.5.5 0 0 1 .708.708z'/%3e%3c/svg%3e")` : 'none',
                      backgroundSize: '15px 15px',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat'
                    }}
                  />
                  <label 
                    htmlFor={`crypto-${option.value}`} 
                    className="text-[#616161] font-sans text-sm md:text-base cursor-pointer text-nowrap font-[600]"
                  >
                    {option.label}
                  </label>
                </div>
              ))}
            </div>
            {errors.cryptoRewards && (
              <p className="text-red-500 text-sm mt-1">{errors.cryptoRewards}</p>
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
                className={`h-4 w-4 sm:h-5 sm:w-5 border-2 rounded focus:outline-none cursor-pointer flex-shrink-0 appearance-none checked:bg-[#AE93C8] checked:border-[#AE93C8] relative ${
                  errors.privacy ? "border-red-500" : "border-[#AE93C8]"
                }`}
                style={{
                  backgroundImage: formData.privacy ? `url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='m13.854 3.646-7.5 7.5a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6 10.293l7.146-7.147a.5.5 0 0 1 .708.708z'/%3e%3c/svg%3e")` : 'none',
                  backgroundSize: '15px 15px',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              />
              <label htmlFor="privacy" className="text-[#616161] font-sans text-sm sm:text-base lg:text-xl font-[600]">
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