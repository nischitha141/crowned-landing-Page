"use client";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

interface EmailCTAProps {
  targetSectionId?: string;
  targetPage?: string;
  buttonText?: string;
}

const EmailCTA: React.FC<EmailCTAProps> = ({
  targetSectionId,
  targetPage,
  buttonText = "Get Early Access"
}) => {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleNavigation = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 100;
      const viewportHeight = window.innerHeight;
      const elementHeight = element.offsetHeight;

      const elementTop = element.offsetTop;
      const scrollPosition =
        elementTop -
        headerHeight -
        (viewportHeight - headerHeight - elementHeight) / 2;

      window.scrollTo({
        top: Math.max(0, scrollPosition),
        behavior: "smooth",
      });
    }
  };

  const handleSubmit = () => {
    if (!email.trim()) {
      toast.error("Please enter your email address");
      return;
    }

    if (!validateEmail(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    if (targetPage) {
      // Pass email as URL parameter
      const url = `${targetPage}?email=${encodeURIComponent(email)}`;
      router.push(url);
    } else if (targetSectionId) {
      handleNavigation(targetSectionId);
    }
  };

  return (
    <div className="flex items-center gap-4 bg-white rounded-lg shadow-lg overflow-hidden">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email Address..."
        className="px-6 py-4 text-[#757575] placeholder-[#757575] font-sans font-[600] outline-none border-none text-lg w-80"
      />
      <button
        onClick={handleSubmit}
        className="px-6 py-4 text-white font-bowlby text-xl rounded-full mx-3 my-1 transition-all duration-200 hover:opacity-90 active:scale-95 cursor-pointer"
        style={{
          background:
            "linear-gradient(135deg, #583A73 0%, #8459AB 25%, #AE93C8 50%, #8459AB 75%, #583A73 100%)",
          borderRadius: "8px 8px 8px 8px",
        }}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default EmailCTA;