import { z } from "zod";

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
  phone: z
    .string()
    .min(1, "Phone number is required")
    .length(10, "Phone number must be exactly 10 digits")
    .regex(/^\d{10}$/, "Phone number must contain exactly 10 digits"),
  message: z
    .string()
    .min(1, "Message is required")
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be less than 1000 characters"),
  privacy: z.boolean().refine((val) => val === true, {
    message: "You must agree to the privacy policy",
  }),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;