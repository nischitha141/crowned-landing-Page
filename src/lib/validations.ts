import { z } from "zod";
import { countryPhoneData } from "@/app/contact/data/countryPhoneData";

export const contactFormSchema = z.object({
  firstName: z
    .string()
    .min(1, "First name is required")
    .min(2, "First name must be at least 2 characters")
    .max(50, "First name must be less than 50 characters")
    .regex(/^[A-Za-z\s]+$/, "First name must contain only alphabetical characters"),
  lastName: z
    .string()
    .min(1, "Last name is required")
    .min(2, "Last name must be at least 2 characters")
    .max(50, "Last name must be less than 50 characters")
    .regex(/^[A-Za-z\s]+$/, "Last name must contain only alphabetical characters"),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
  countryCode: z.string().min(1, "Country code is required"),
  phone: z.string().min(1, "Phone number is required"),
  message: z
    .string()
    .min(1, "Message is required")
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be less than 1000 characters"),
  privacy: z.boolean().refine((val) => val === true, {
    message: "You must agree to the privacy policy",
  }),
}).refine((data) => {
  const country = countryPhoneData.find(c => c.code === data.countryCode);
  
  if (!country) {
    return false;
  }
  
  // Check phone number length
  if (data.phone.length < country.minLength || data.phone.length > country.maxLength) {
    return false;
  }
  
  // Check phone number format
  const regex = new RegExp(country.regex);
  return regex.test(data.phone);
}, {
  message: "Please enter a valid phone number for the selected country",
  path: ["phone"]
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

// Brands form validation schema
export const brandsFormSchema = z.object({
  brandName: z
    .string()
    .min(1, "Brand name is required")
    .min(2, "Brand name must be at least 2 characters")
    .max(100, "Brand name must be less than 100 characters"),
  representative: z
    .string()
    .min(1, "Representative name is required")
    .min(2, "Representative name must be at least 2 characters")
    .max(50, "Representative name must be less than 50 characters")
    .regex(/^[A-Za-z\s]+$/, "Representative name must contain only alphabetical characters"),
  campaignTypes: z
    .array(z.string())
    .min(1, "Please select at least one campaign type"),
  marketingEmail: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
  monthlyAccess: z
    .string()
    .min(1, "Monthly access is required")
    .regex(/^\d+$/, "Monthly access must be a number"),
  campaignBudget: z
    .string()
    .min(1, "Campaign budget is required")
    .regex(/^\d+$/, "Campaign budget must be a number"),
  cryptoRewards: z
    .string()
    .min(1, "Crypto rewards amount is required")
    .regex(/^\d+$/, "Crypto rewards must be a number"),
  privacy: z.boolean().refine((val) => val === true, {
    message: "You must agree to the privacy policy",
  }),
});

export type BrandsFormData = z.infer<typeof brandsFormSchema>;

// Creators form validation schema
export const creatorsFormSchema = z.object({
  creatorName: z
    .string()
    .min(1, "Creator name is required")
    .min(2, "Creator name must be at least 2 characters")
    .max(50, "Creator name must be less than 50 characters")
    .regex(/^[A-Za-z\s]+$/, "Creator name must contain only alphabetical characters"),
  socialAccount: z
    .string()
    .min(1, "Social account is required")
    .min(3, "Social account must be at least 3 characters")
    .max(50, "Social account must be less than 50 characters"),
  contentCategory: z
    .string()
    .min(1, "Content category is required")
    .min(2, "Content category must be at least 2 characters")
    .max(50, "Content category must be less than 50 characters"),
  excitedAbout: z
    .array(z.string())
    .min(1, "Please select at least one option you're excited about"),
  privacy: z.boolean().refine((val) => val === true, {
    message: "You must agree to the privacy policy",
  }),
});

export type CreatorsFormData = z.infer<typeof creatorsFormSchema>;