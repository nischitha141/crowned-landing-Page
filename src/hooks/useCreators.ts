"use client";
import { useState } from "react";
import { CreatorsFormData } from "@/lib/validations";
import toast from "react-hot-toast";
import axios from "axios";

export const useCreators = () => {
  const [isLoading, setIsLoading] = useState(false);

  const submitCreators = async (formData: CreatorsFormData) => {
    setIsLoading(true);
    
    try {
      const payload = {
        creatorName: formData.creatorName,
        socialLink: formData.socialAccount,
        contentCategory: formData.contentCategory,
        interests: formData.excitedAbout,
        agreedPrivacy: formData.privacy
      };
      
      console.log('Creators form payload:', payload);
      
      const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
      if (!apiBaseUrl) {
        throw new Error('API base URL is not configured');
      }
      
      const response = await axios.post(`${apiBaseUrl}/api/contact-us/creators`, payload, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      toast.success("Thanks for joining! We'll notify you when early access is available.", {
        duration: 4000,
        position: 'top-center',
      });
      
      return { success: true, data: response.data };
    } catch (error) {
      console.error('Creators form submission error:', error);
      
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
    submitCreators,
    isLoading,
  };
};