import React from "react";
import { cn } from "@/lib/utils";
import { SocialCard } from "./social-card";

interface FooterLink {
  label: string;
  href: string;
}

interface SocialLink {
  icon: React.ReactNode;
  href: string;
  label: string;
}

interface FooterProps {
  brandName?: string;
  brandDescription?: string;
  socialLinks?: SocialLink[];
  navLinks?: FooterLink[];
  creatorName?: string;
  creatorUrl?: string;
  brandIcon?: React.ReactNode;
  className?: string;
}

export const Footer = ({
  brandName = "Happy Pet",
  brandDescription = "Mumbai's most trusted pet training, grooming, walking and daycare. Because happy pets make happy homes.",
  navLinks = [],
  creatorName,
  creatorUrl,
  brandIcon,
  className,
}: FooterProps) => {
  return (
    <section className={cn("relative w-full mt-0 overflow-hidden", className)}>
      <footer className="border-t border-teal-500/20 bg-gradient-to-br from-charcoal via-teal-900 to-charcoal mt-0 relative pb-10">
        <div className="max-w-site flex flex-col justify-between mx-auto min-h-[30rem] sm:min-h-[35rem] md:min-h-[40rem] relative px-4 sm:px-8 pt-10 pb-40 md:pb-48">
          <div className="flex flex-col lg:flex-row mb-12 sm:mb-20 md:mb-0 w-full justify-between items-start">
            <div className="w-full lg:w-auto flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="space-y-4 flex flex-col items-center lg:items-start flex-1">
                <div className="flex items-center gap-4">
                  <span className="text-white text-3xl md:text-4xl font-heading font-black tracking-tight">
                    {brandName}
                  </span>
                  <span className="text-teal-500 text-xs font-heading font-bold tracking-[0.2em] uppercase mt-1">
                    Training
                  </span>
                </div>
                <p className="text-white/60 font-body font-light w-full max-w-sm px-4 sm:px-0 leading-relaxed">
                  {brandDescription}
                </p>
              </div>

              {/* Custom Social Card */}
              <div className="mt-6 mb-8 w-full flex justify-center lg:justify-start">
                <SocialCard />
              </div>

              {navLinks.length > 0 && (
                <div className="flex flex-col items-center lg:items-start gap-4 text-sm font-body font-medium text-white/40 max-w-full px-4 mb-10 w-full">
                  <h4 className="text-teal-500 font-heading font-bold uppercase tracking-widest text-xs mb-2">Quick Links</h4>
                  <div className="flex flex-wrap justify-center lg:justify-start gap-x-8 gap-y-2">
                    {navLinks.map((link, index) => (
                      <a
                        key={index}
                        className="hover:text-teal-400 duration-300 hover:font-semibold transition-colors"
                        href={link.href}
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Side Info */}
            <div className="w-full lg:w-auto flex flex-col gap-8 mt-12 lg:mt-0 px-4 text-center lg:text-right">
              <div className="flex flex-col gap-2">
                <h4 className="text-teal-500 font-heading font-bold uppercase tracking-widest text-xs mb-1">Contact Us</h4>
                <p className="font-body text-white/60 text-sm max-w-xs mx-auto lg:mx-0 lg:ml-auto">
                  Aman Adarsh Society, Chandavarkar Rd, opposite Indian Bank, Kamdhenu Society, Borivali West, Mumbai, Maharashtra 400092
                </p>
                <div className="flex flex-col gap-1 mt-2">
                  <a href="tel:+91-88799-52169" className="font-heading font-bold text-white hover:text-teal-400 transition-colors">+91 88799 52169</a>
                  <a href="tel:+91-88799-51612" className="font-heading font-bold text-white hover:text-teal-400 transition-colors">+91 88799 51612</a>
                  <a href="mailto:info@happypettraining.com" className="font-body text-sm text-white/60 hover:text-teal-400 transition-colors">info@happypettraining.com</a>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <h4 className="text-teal-500 font-heading font-bold uppercase tracking-widest text-xs mb-1">Opening Hours</h4>
                <p className="font-body text-white/60 text-sm">Mon–Sun, 9:00 AM – 9:00 PM</p>
              </div>
            </div>
          </div>
          {/* Logo and Big Text Container */}
          <div className="relative w-full flex flex-col items-center justify-center mt-20 pt-10 pb-16">
            {/* Large background text */}
            <div
              className="bg-gradient-to-b from-white/10 via-white/5 to-transparent bg-clip-text text-transparent leading-none font-heading font-black tracking-tighter pointer-events-none select-none text-center px-4 whitespace-nowrap w-full"
              style={{
                fontSize: 'clamp(2.5rem, 10vw, 8rem)',
              }}
            >
              HAPPY PET
            </div>

            {/* Bottom line through middle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 backdrop-blur-sm h-px bg-gradient-to-r from-transparent via-white/10 to-transparent w-[90%] z-0"></div>

            {/* Bottom logo icon centered over the text */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hover:border-teal-400 duration-300 drop-shadow-[0_0px_30px_rgba(23,107,104,0.4)] backdrop-blur-md rounded-[2rem] bg-charcoal border border-white/20 flex items-center justify-center p-4 z-10 transition-transform hover:scale-105">
              <div className="w-16 sm:w-20 md:w-28 h-16 sm:h-20 md:h-28 flex items-center justify-center">
                {brandIcon || (
                  <img src="/logo.png" alt="Happy Pet Logo" className="w-12 sm:w-16 md:w-24 h-12 sm:h-16 md:h-24 object-contain drop-shadow-md" />
                )}
              </div>
            </div>
            
            {/* Bottom gradient shadow to blend into the floor */}
            <div className="bg-gradient-to-t from-charcoal via-charcoal/80 blur-[1em] to-transparent absolute bottom-0 w-full h-1/2 pointer-events-none z-0"></div>
          </div>

          <div className="flex flex-col gap-4 items-center justify-center md:flex-row md:justify-between px-4 md:px-0 w-full border-t border-white/5 pt-8 relative z-20">
            <p className="text-sm text-white/30 text-center md:text-left font-body font-light">
              Copyright © {new Date().getFullYear()} {brandName} Training. All Rights Reserved.
            </p>
            {creatorName && creatorUrl && (
              <nav className="flex gap-4">
                <a
                  href={creatorUrl}
                  target="_blank"
                  className="text-sm text-white/30 hover:text-teal-400 transition-colors duration-300 hover:font-medium font-body"
                >
                  Made with ❤️ by {creatorName}
                </a>
              </nav>
            )}
          </div>
        </div>
      </footer>
    </section>
  );
};
