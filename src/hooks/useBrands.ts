"use client";
import { useState } from "react";
import { BrandsFormData } from "@/lib/validations";
import toast from "react-hot-toast";
import axios from "axios";

export const useBrands = () => {
  const [isLoading, setIsLoading] = useState(false);

  const submitBrands = async (formData: BrandsFormData) => {
    setIsLoading(true);
    
    try {
      const payload = {
        brandName: formData.brandName,
        representative: formData.representative,
        campaignTypes: formData.campaignTypes,
        marketingEmail: formData.marketingEmail,
        monthlyAccessBudget: formData.monthlyAccess,
        estimatedCampaignBudget: formData.campaignBudget,
        interestedInCryptobasedChains: getCryptoRewardsLabel(formData.cryptoRewards),
        privacyPolicyAgreed: formData.privacy
      };
      
      console.log('Brands form payload:', payload);
      
      const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
      if (!apiBaseUrl) {
        throw new Error('API base URL is not configured');
      }
      
      const response = await axios.post(`${apiBaseUrl}/api/contact-us/brands`, payload, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      const successMessage = response.data?.message || "Thanks for your interest! We'll be in touch soon about early access.";
      toast.success(successMessage, {
        duration: 4000,
        position: 'top-center',
      });
      
      return { success: true, data: response.data };
    } catch (error) {
      console.error('Brands form submission error:', error);
      
      let errorMessage = "Something went wrong. Please try again later.";
      
      if (axios.isAxiosError(error)) {
        if (error.response?.data?.message) {
          errorMessage = error.response.data.message;
        } else if (error.message) {
          errorMessage = error.message;
        } else if (error.response?.status) {
          errorMessage = `HTTP error! status: ${error.response.status}`;
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

  const getCryptoRewardsLabel = (value: string): string => {
    const cryptoOptionsMap: Record<string, string> = {
      "1": "Yes",
      "0": "No", 
      "2": "Not sure yet"
    };
    return cryptoOptionsMap[value] || "Not sure yet";
  };

  return {
    submitBrands,
    isLoading,
  };
};