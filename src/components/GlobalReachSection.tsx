import React from 'react';
import { DottedMap } from '@/registry/magicui/dotted-map';

export const GlobalReachSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#F7F4ED] text-[#17211F] overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        
        {/* Clean Centered Serif Headline matching reference */}
        <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-serif font-normal text-[#17211F] leading-[1.2] mb-12 sm:mb-16 tracking-tight">
          Trusted by NRI families
          <span className="block">worldwide</span>
        </h2>

        {/* Pure Dotted Map floating directly on page background */}
        <div className="w-full flex items-center justify-center">
          <DottedMap dotRadius={0.22} dotColor="#17352F" />
        </div>

      </div>
    </section>
  );
};
