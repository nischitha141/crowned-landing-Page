"use client";
import React, { useState } from "react";
import Header from "@/components/Headers";
import Footer from "@/components/FooterAlternates";
import Image from "next/image";
import Link from "next/link";
import { Toaster } from "react-hot-toast";
import { contactFormSchema } from "@/lib/validations";
import { useContact } from "@/hooks/useContact";
import { countryPhoneData, CountryPhoneData } from "./data/countryPhoneData";
import { validatePhoneNumber, getPhoneNumberPlaceholder } from "./utils/phoneValidation";

interface ZodError {
  issues: {
    path: string[];
    message: string;
  }[];
}


// Use comprehensive country phone data
const countryCodes = countryPhoneData;

const Index = () => {
  const [selectedCountry, setSelectedCountry] = useState<CountryPhoneData>(
    countryCodes.find(country => country.country === "United States") || countryCodes[0]
  );
  const [focusedInput, setFocusedInput] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    countryCode: countryCodes.find(country => country.country === "United States")?.code || countryCodes[0].code,
    phone: "",
    message: "",
    privacy: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { submitContact, isLoading } = useContact();

  const handleFocus = (inputId: string) => setFocusedInput(inputId);
  const handleBlur = () => setFocusedInput(null);

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  const handleNameChange = (field: string, value: string) => {
    // Allow only alphabetical characters and spaces
    const filteredValue = value.replace(/[^A-Za-z\s]/g, '');
    handleInputChange(field, filteredValue);
    
    // Real-time validation
    if (value !== filteredValue) {
      setErrors(prev => ({ 
        ...prev, 
        [field]: `${field === 'firstName' ? 'First' : 'Last'} name must contain only alphabetical characters` 
      }));
    } else if (filteredValue.length > 0 && filteredValue.length < 2) {
      setErrors(prev => ({ 
        ...prev, 
        [field]: `${field === 'firstName' ? 'First' : 'Last'} name must be at least 2 characters` 
      }));
    } else if (filteredValue.length > 50) {
      setErrors(prev => ({ 
        ...prev, 
        [field]: `${field === 'firstName' ? 'First' : 'Last'} name must be less than 50 characters` 
      }));
    }
  };

  const handlePhoneChange = (value: string) => {
    // Allow only digits and limit to max length for selected country
    const filteredValue = value.replace(/[^0-9]/g, '').slice(0, selectedCountry.maxLength);
    handleInputChange('phone', filteredValue);
    
    // Real-time validation using utility function
    const validation = validatePhoneNumber(filteredValue, selectedCountry.code);
    if (!validation.isValid && filteredValue.length > 0) {
      setErrors(prev => ({ 
        ...prev, 
        phone: validation.error || 'Invalid phone number' 
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const validatedData = contactFormSchema.parse(formData);
      const result = await submitContact(validatedData);
      
      if (result.success) {
        const usCountry = countryCodes.find(country => country.country === "United States") || countryCodes[0];
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          countryCode: usCountry.code,
          phone: "",
          message: "",
          privacy: false,
        });
        setSelectedCountry(usCountry);
      }
    } catch (error) {
      if (error instanceof Error && 'issues' in error) {
        const zodError = error as ZodError;
        const newErrors: Record<string, string> = {};
        zodError.issues.forEach((issue) => {
          newErrors[issue.path[0]] = issue.message;
        });
        setErrors(newErrors);
      }
    }
  };

  return (
    <div className="relative container">
      <Header />
      <div className="flex flex-col items-center justify-center gap-4 md:gap-5 my-6 md:my-10 relative px-4 md:px-0">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bowlby text-[#424242] text-center leading-tight">Contact Us</h1>
        <p className="text-base md:text-xl font-sans text-center max-w-md md:max-w-none z-50">
          Reach out to our friendly team with any app questions!
        </p>

        <form onSubmit={handleSubmit} className="w-full z-50 max-w-[544px] flex flex-col items-center justify-center gap-4 md:gap-5">
          <div className="w-full flex flex-col sm:flex-row gap-4 items-start justify-between">
            <div className="flex flex-col items-start gap-2 w-full">
              <label
                htmlFor="firstName"
                className="text-[#424242] font-sans text-sm md:text-[14px]"
              >
                First name*
              </label>
              <div className="relative w-full">
                <input
                  type="text"
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => handleNameChange("firstName", e.target.value)}
                  className={`w-full h-[44px] px-4 bg-white border-1 focus:outline-none text-sm md:text-base placeholder:text-[#868A92] placeholder:font-sans placeholder:font-[600] ${
                    errors.firstName ? "border-red-500" : "border-[#757575]"
                  }`}
                  placeholder="Aryi"
                  onFocus={() => handleFocus("firstName")}
                  onBlur={handleBlur}
                />
                {focusedInput === "firstName" && (
                  <div
                    className="absolute inset-0 border-3 rounded-md pointer-events-none"
                    style={{
                      borderImage: "linear-gradient(90deg, #7024B4, #F8A80D) 1",
                    }}
                  />
                )}
              </div>
              {errors.firstName && (
                <div className="h-6 w-full">
                  <p className="text-red-500 text-sm">{errors.firstName}</p>
                </div>
              )}
            </div>

            <div className="flex flex-col items-start gap-2 w-full">
              <label
                htmlFor="lastName"
                className="text-[#424242] font-sans text-sm md:text-[14px]"
              >
                Last name*
              </label>
              <div className="relative w-full">
                <input
                  type="text"
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => handleNameChange("lastName", e.target.value)}
                  className={`w-full h-[44px] px-4 bg-white border-1 focus:outline-none text-sm md:text-base placeholder:text-[#868A92] placeholder:font-sans placeholder:font-[600] ${
                    errors.lastName ? "border-red-500" : "border-[#757575]"
                  }`}
                  placeholder="Last name"
                  onFocus={() => handleFocus("lastName")}
                  onBlur={handleBlur}
                />
                {focusedInput === "lastName" && (
                  <div
                    className="absolute inset-0 border-3 rounded-md pointer-events-none"
                    style={{
                      borderImage: "linear-gradient(90deg, #7024B4, #F8A80D) 1",
                    }}
                  />
                )}
              </div>
              {errors.lastName && (
                <div className="h-6 w-full">
                  <p className="text-red-500 text-sm">{errors.lastName}</p>
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col w-full">
            <label
              htmlFor="email"
              className="text-[#424242] font-sans text-sm md:text-[14px]"
            >
              Email*
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
                placeholder="you@company.com"
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
              htmlFor="phone"
              className="text-[#424242] font-sans text-sm md:text-[14px]"
            >
              Phone number*
            </label>
            <div className="relative">
              <div className="w-full flex items-center">
                <select
                  value={selectedCountry.code}
                  onChange={(e) => {
                    const code = e.target.value;
                    const newCountry = countryCodes.find((c) => c.code === code) || countryCodes[0];
                    setSelectedCountry(newCountry);
                    handleInputChange("countryCode", code);
                    // Clear phone validation errors when country changes
                    if (errors.phone) {
                      setErrors(prev => ({ ...prev, phone: "" }));
                    }
                    // Clear phone input if it doesn't match new country format
                    if (formData.phone) {
                      const phoneRegex = new RegExp(newCountry.regex);
                      if (!phoneRegex.test(formData.phone) || 
                          formData.phone.length < newCountry.minLength || 
                          formData.phone.length > newCountry.maxLength) {
                        handleInputChange("phone", "");
                      }
                    }
                  }}
                  className={`h-[44px] px-2 md:px-4 bg-white border-1 border-r-0 focus:outline-none w-[80px] md:w-[100px] appearance-none text-sm md:text-base ${
                    errors.phone || errors.countryCode ? "border-red-500" : "border-[#757575]"
                  }`}
                  onFocus={() => handleFocus("phone")}
                  onBlur={handleBlur}
                >
                  {countryCodes.map((country, index) => (
                    <option key={`${country.code}-${index}`} value={country.code}>
                      {country.flag} {country.code}
                    </option>
                  ))}
                </select>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => handlePhoneChange(e.target.value)}
                  className={`w-full h-[44px] px-4 bg-white border-1 border-l-0 focus:outline-none text-sm md:text-base placeholder:text-[#868A92] placeholder:font-sans placeholder:font-[600] ${
                    errors.phone || errors.countryCode ? "border-red-500" : "border-[#757575]"
                  }`}
                  placeholder={getPhoneNumberPlaceholder(selectedCountry)}
                  onFocus={() => handleFocus("phone")}
                  onBlur={handleBlur}
                />
              </div>
              {focusedInput === "phone" && (
                <div
                  className="absolute inset-0 border-3 rounded-md pointer-events-none"
                  style={{
                    borderImage: "linear-gradient(90deg, #7024B4, #F8A80D) 1",
                  }}
                />
              )}
            </div>
            {(errors.phone || errors.countryCode) && (
              <p className="text-red-500 text-sm mt-1">
                {errors.phone || errors.countryCode}
              </p>
            )}
          </div>
          <div className="flex flex-col w-full">
            <label
              htmlFor="message"
              className="text-[#424242] font-sans text-sm md:text-[14px]"
            >
              Message*
            </label>
            <div className="relative">
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => handleInputChange("message", e.target.value)}
                className={`w-full h-[128px] px-4 py-2 bg-white border-1 focus:outline-none text-sm md:text-base placeholder:text-[#868A92] placeholder:font-sans placeholder:font-[600] ${
                  errors.message ? "border-red-500" : "border-[#757575]"
                }`}
                placeholder="Leave us a message..."
                onFocus={() => handleFocus("message")}
                onBlur={handleBlur}
              />
              {focusedInput === "message" && (
                <div
                  className="absolute inset-0 border-3 rounded-md pointer-events-none"
                  style={{
                    borderImage: "linear-gradient(90deg, #7024B4, #F8A80D) 1",
                  }}
                />
              )}
            </div>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>
          <div className="flex flex-col items-start gap-2 text-sm md:text-[14px] font-sans text-[#424242] w-full">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="privacy"
                checked={formData.privacy}
                onChange={(e) => handleInputChange("privacy", e.target.checked)}
                className={`h-5 w-5 border-2 rounded focus:outline-none cursor-pointer appearance-none checked:bg-[#AE93C8] checked:border-[#AE93C8] relative ${
                  errors.privacy ? "border-red-500" : "border-[#AE93C8]"
                }`}
                style={{
                  backgroundImage: formData.privacy ? `url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='m13.854 3.646-7.5 7.5a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6 10.293l7.146-7.147a.5.5 0 0 1 .708.708z'/%3e%3c/svg%3e")` : 'none',
                  backgroundSize: '15px 15px',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              />
              <label htmlFor="privacy" className="text-[#212121] text-base md:text-xl">
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
              {isLoading ? "SENDING..." : "SEND MESSAGE"}
            </button>
          </div>
        </form>

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
          alt="lock"
          width={125}
          height={100}
        />
      </div>

      <div className="h-10 md:h-32"></div>
      <Toaster />
      <Footer />
    </div>
  );
};

export default Index;