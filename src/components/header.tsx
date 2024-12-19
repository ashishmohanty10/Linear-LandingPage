"use client";

import Link from "next/link";
import { Logo } from "./icons/logo";
import { Container } from "./container";
import { Button } from "./button";
import { Hamburger } from "./icons/hamburger";
import { useEffect, useState } from "react";
import { cn } from "@/utils/utils";

export const Header = () => {
  const [hamburgerIcon, setHamhamburgerIcon] = useState<boolean>(false);

  const handleToggle = () => {
    console.log("clicked");
    setHamhamburgerIcon(!hamburgerIcon);
  };

  useEffect(() => {
    const html = document.querySelector("html");

    if (html) html.classList.toggle("overflow-hidden", hamburgerIcon);
  }, [hamburgerIcon]);

  useEffect(() => {
    const closehamburgerNavigation = () => setHamhamburgerIcon(false);
    window.addEventListener("orientationchange", closehamburgerNavigation);

    window.addEventListener("resize", closehamburgerNavigation);

    return () => {
      window.removeEventListener("orientationchange", closehamburgerNavigation);

      window.removeEventListener("resize", closehamburgerNavigation);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full border-b border-transparent-white backdrop-blur-[12px] z-50">
      <Container className="flex h-navigation-height items-center">
        <Link href="/" className="flex items-center text-md">
          <Logo className="w-[1.8rem] h-[1.8rem] mr-4 " /> Linear
        </Link>

        <div
          className={cn(
            "tranition-[visibility] md:visible",
            hamburgerIcon ? "visible" : "invisible delay-300"
          )}
        >
          <nav
            className={cn(
              "transition-opacity duration-500 h-[calc(100vh_-_var(--navigation-height))] overflow-auto md:block fixed top-navigation-height left-0 w-full bg-background md:relative md:h-auto md:top-0 md:w-auto md:bg-transparent md:opacity-100 md:translate-x-0 ",
              hamburgerIcon
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-[-100vw]"
            )}
          >
            <ul
              className={cn(
                "flex h-full flex-col md:flex-row md:items-center [&_li]:ml-6 [&_li]:border-b  [&_li]:border-grey-dark md:[&_li]:border-none ease-in [&_a:hover]:text-grey [&_a]:flex [&_a]:h-navigation-height [&_a]:w-full [&_a]:translate-y-8 [&_a]:items-center [&_a]:text-xl [&_a]:transition-[color,transform] [&_a]:duration-300 md:[&_a]:translate-y-0 md:[&_a]:text-sm [&_a]:md:transition-colors",
                hamburgerIcon && "[&_a]:translate-y-0"
              )}
            >
              <li>
                <Link href="#">Features</Link>
              </li>
              <li>
                <Link href="#">Method</Link>
              </li>
              <li className="md:hidden lg:block">
                <Link href="#">Customers</Link>
              </li>
              <li className="md:hidden lg:block">
                <Link href="#">Changelog</Link>
              </li>
              <li className="md:hidden lg:block">
                <Link href="#">Integrations</Link>
              </li>
              <li>
                <Link href="#">Pricing</Link>
              </li>
              <li>
                <Link href="#">Company</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex items-center ml-auto h-full">
          <Button href="#" variant="secondary" className="text-sm mr-6">
            Log in
          </Button>
          <Button href="#" variant="primary" className="text-sm ">
            Sign up
          </Button>
        </div>

        <button className="ml-6 md:hidden" onClick={handleToggle}>
          <span className="sr-only ">Toggle Menu</span>
          <Hamburger />
        </button>
      </Container>
    </header>
  );
};
