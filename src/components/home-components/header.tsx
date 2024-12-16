"use client";
import { RxCaretUp } from "react-icons/rx";
import { RxCaretDown } from "react-icons/rx";
import Link from "next/link";
import React, { useEffect, useState } from "react";
// import logo from "@/public/Yes logo.png";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "../ui/button";

function Header() {
  const pathName = usePathname();
  const [hasScrolled, setHasScrolled] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleArrow, setToggleArrow] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Blog",
      link: "/Blog",
    },
    {
      name: "Solutions",
      link: "#",
    },
    {
      name: "Pricing",
      link: "#",
    },
  ];

  return (
    <>
      <header
        className={`flex items-center justify-between md:px-10 bg-white px-5 py-5 fixed w-full left-0 top-0 z-30 bg-opacity-[0.95] ${
          hasScrolled ? "border-b dark:border-slate-700 shadow-sm" : ""
        }`}
      >
        <Link href="/">
            <div className="w-[80px] h-[48px]">
            <Image
              src='/logo.svg'
              alt='Logo'
              priority
              width={500}
              height={500}
            />
          </div>
        </Link>

          <div className="flex items-center gap-5">
            <nav
              className={`${
                toggleMenu ? "flex flex-col" : "hidden"
              } md:flex md:items-center md:gap-16 absolute md:static top-0 left-0 h-screen w-full md:h-auto md:mt-0 mt-16 transition-all duration-300 ease-in-out `}
            >
              <ul className="flex flex-col md:flex-row md:gap-5">
                {navLinks.map((item, index) => (
                  <li
                    key={index}
                    className="text-[#070F0B] md:hover:border-b-2 md:hover:border-b-black px-5 py-3 md:p-1 transition-all duration-300 ease-in"
                  >
                    {item.name === "Solutions" ? (
                      <span
                        className="cursor-pointer flex items-center gap-1"
                        onClick={() => setToggleArrow(!toggleArrow)}
                      >
                        Solutions{" "}
                        {toggleArrow ? <RxCaretUp /> : <RxCaretDown />}
                      </span>
                    ) : (
                      <>
                        <Link href={item.link}>{item.name}</Link>
                        {item.name === "Solutions" && (
                          <span
                            className="cursor-pointer"
                            onClick={() => setToggleArrow(!toggleArrow)}
                          >
                            Solutions{" "}
                            {toggleArrow ? <RxCaretUp /> : <RxCaretDown />}
                          </span>
                        )}
                      </>
                    )}
                  </li>
                ))}
              </ul>
              <div className="flex gap-3 md:p-0 p-5 ">
                <button
                  onClick={() => router.push("/Auth/login")}
                  className="bg-[#F2F3F3] text-black rounded-md w-[97px] py-2 hover:bg-gray-200 transition-all duration-200"
                >
                  Sign in
                </button>
                <Button onClick={() => router.push("/Auth/register")}>
                  Get started
                </Button>
              </div>
            </nav>
          </div>
        
      </header>
    </>
  );
}

export default Header;
