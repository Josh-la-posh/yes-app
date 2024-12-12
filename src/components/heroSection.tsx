"use client";
import Link from 'next/link';
import React from 'react';
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';

const HeroSection: React.FC = () => {
  const router = useRouter();
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto flex items-center justify-between">
        <div className="w-1/2">
          <h1 className="text-xl md:text-3xl text-center md:text-left text-[#101720] text-[500] mb-12">
            Create Simple Contracts in 3 Minutes or Less
          </h1>
          <p className="text-xl sm:text-[20px] text-[#5D615F] mb-8">
            With the Yes App you can avoid unnecessary disagreements with clients and customers and prevent financial loss when you do business. We've made it easy to CREATE, SEND, RECEIVE & SIGN simple contracts for any given situation.
          </p>
          <Button onClick={() => router.push("/Auth/register")}>
            Get started
          </Button>
        </div>
        <div className="w-1/2">
          {/* <img src="/hero-image.png" alt="Hero Image" className="w-full" /> */}
          <div>Image</div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
