import { countryPhoneData, CountryPhoneData } from "../data/countryPhoneData";

export const validatePhoneNumber = (phone: string, countryCode: string): {
  isValid: boolean;
  error?: string;
  country?: CountryPhoneData;
} => {
  const country = countryPhoneData.find(c => c.code === countryCode);
  
  if (!country) {
    return {
      isValid: false,
      error: "Invalid country code"
    };
  }
  
  // Check if phone is empty
  if (!phone || phone.length === 0) {
    return {
      isValid: false,
      error: "Phone number is required",
      country
    };
  }
  
  // Check length
  if (phone.length < country.minLength) {
    return {
      isValid: false,
      error: `Phone number must be at least ${country.minLength} digits for ${country.country}`,
      country
    };
  }
  
  if (phone.length > country.maxLength) {
    return {
      isValid: false,
      error: `Phone number must be at most ${country.maxLength} digits for ${country.country}`,
      country
    };
  }
  
  // Check regex pattern
  const regex = new RegExp(country.regex);
  if (!regex.test(phone)) {
    return {
      isValid: false,
      error: `Please enter a valid phone number for ${country.country}`,
      country
    };
  }
  
  return {
    isValid: true,
    country
  };
};

export const getPhoneNumberPlaceholder = (country: CountryPhoneData): string => {
  const lengthText = country.minLength === country.maxLength 
    ? `${country.minLength}` 
    : `${country.minLength}-${country.maxLength}`;
  return `Enter ${lengthText} digits`;
};

export const formatPhoneNumber = (phone: string, country: CountryPhoneData): string => {
  // Basic formatting - you can extend this based on country-specific formatting rules
  const digits = phone.replace(/\D/g, '');
  
  // For now, just return the digits as is
  // You could add country-specific formatting logic here
  return digits.slice(0, country.maxLength);
};