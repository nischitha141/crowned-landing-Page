import React from "react";
import SubmitHeader from "@/components/SubmitHeader";
import Footer from "@/components/brands/Footer/Index";
import BrandsForm from "@/components/brands/BrandsForm";

const SubmitPage = () => {
  return (
    <div className="bg-[#F0EBF5] flex flex-col relative min-h-screen">
      <SubmitHeader backgroundColor="#F0EBF5" />
      <BrandsForm />
      <Footer />
    </div>
  );
};

export default SubmitPage;