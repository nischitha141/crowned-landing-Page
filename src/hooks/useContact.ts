"use client";
import { useState } from "react";
import { ContactFormData } from "@/lib/validations";
import toast from "react-hot-toast";
import axios from "axios";

export const useContact = () => {
  const [isLoading, setIsLoading] = useState(false);

  const submitContact = async (formData: ContactFormData) => {
    setIsLoading(true);
    
    try {
      const cleanCountryCode = formData.countryCode.split(' ')[0]; 
      const payload = {
        email: formData.email,
        firstName: formData.firstName,
        lastName: formData.lastName,
        phone: `${cleanCountryCode} ${formData.phone}`,
        message: formData.message
      };
      
      console.log('Contact form payload:', payload);
      
      const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
      if (!apiBaseUrl) {
        throw new Error('API base URL is not configured');
      }
      
      const response = await axios.post(`${apiBaseUrl}/api/contact-us/contactUs`, payload, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      toast.success("Thanks for reaching out! We'll get back to you soon.", {
        duration: 4000,
        position: 'top-center',
      });
      
      return { success: true, data: response.data };
    } catch (error) {
      console.error('Contact form submission error:', error);
      
      let errorMessage = "Something went wrong. Please try again later.";
      
      if (axios.isAxiosError(error)) {
        if (error.response?.data?.message) {
          errorMessage = error.response.data.message;
        } else if (error.response?.status) {
          errorMessage = `HTTP error! status: ${error.response.status}`;
        } else if (error.message) {
          errorMessage = error.message;
        }
      } else if (error instanceof Error) {
        errorMessage = error.message;
      }
      
      toast.error(errorMessage, {
        duration: 4000,
        position: 'top-center',
      });
      
      return { success: false, error: errorMessage };
    } finally {
      setIsLoading(false);
    }
  };

  return {
    submitContact,
    isLoading,
  };
};