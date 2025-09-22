import React from "react";
import SubmitHeader from "@/components/SubmitHeader";
import Footer from "@/components/creators/Footer/Index";
import CreatorsForm from "@/components/creators/CreatorsForm";

const SubmitPage = () => {
  return (
    <div className="bg-[#FFFAF1] flex flex-col relative min-h-screen">
      <SubmitHeader backgroundColor="#FFFAF1" />
      <CreatorsForm />
      <Footer />
    </div>
  );
};

export default SubmitPage;