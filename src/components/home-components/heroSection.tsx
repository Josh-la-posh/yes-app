"use client";
import React from 'react';
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const HeroSection: React.FC = () => {
  const router = useRouter();
  return (
    <section className="">
      <div className="md:flex items-center justify-between gap-16">
        <div className="md:flex-1 my-10 md:my-0">
          <h1 className="text-5xl md:text-left text-[#101720] text-[500] mb-8">
            Create Simple Contracts in 3 Minutes or Less
          </h1>
          <p className="text-md md:text-xl text-[#5D615F] mb-8">
            With the Yes App you can avoid unnecessary disagreements with clients and customers and prevent financial loss when you do business. We&apos;ve made it easy to CREATE, SEND, RECEIVE & SIGN simple contracts for any given situation.
          </p>
          <div className="">
            <Button onClick={() => router.push("/Auth/register")}>
              Get started
            </Button>
          </div>
        </div>
        <div className="md:flex-1 flex gap-4">
          <div className="space-y-4">
            <Image
              src="/hero_img_1.svg"
              alt="Hero Image"
              width={500}
              height={500}
              className="w-full" />
            <Image
              src="/hero_img_2.svg"
              alt="Hero Image"
              width={500}
              height={500}
              className="w-full" />
          </div>
          <div className="space-y-4 md:mt-4">
            <Image
              src="/hero_img_3.svg"
              alt="Hero Image"
              width={500}
              height={500}
              className="w-full" />
            <Image
              src="/hero_img_4.svg"
              alt="Hero Image"
              width={500}
              height={500}
              className="w-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
