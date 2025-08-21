import React from 'react';

const ViralCard = ({ title, description, number }: { title: string; description: string; number: string }) => {
  return (
    <div className="bg-gradient-to-br from-purple-200 to-purple-300 rounded-lg p-6 flex items-center justify-between min-h-[200px]">
      <div className="flex flex-col justify-between h-full">
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-700 mt-2">{description}</p>
      </div>
      <div className="relative w-32 h-32">
        <div className="absolute w-full h-full bg-purple-800 rounded-full flex items-center justify-center text-white text-3xl font-bold">
          {number}
        </div>
        <div className="absolute w-24 h-24 bg-purple-200 rounded-full transform translate-x-8 -translate-y-8"></div>
      </div>
    </div>
  );
};

export default ViralCard;