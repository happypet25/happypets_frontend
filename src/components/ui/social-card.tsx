"use client";
import React from "react";
import { cn } from "@/lib/utils";

// Types
interface SocialBoxProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  bgColor: string;
  delay?: string;
}

interface SocialCardProps {
  title?: string;
  className?: string;
}

// Social Box Component
const SocialBox = ({ href, icon, label, bgColor, delay }: SocialBoxProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="group"
    style={{ transitionDelay: delay }}
  >
    <div
      className={cn(
        "w-12 h-12 rounded-[1.2rem] flex items-center justify-center transition-all duration-500 group-hover:-translate-y-2 cursor-pointer border border-white/5",
        bgColor
      )}
    >
      <span className="text-white w-5 h-5 flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity">
        {icon}
      </span>
    </div>
    <p className="text-[10px] text-center mt-3 text-white/30 group-hover:text-teal-400 font-heading font-bold uppercase tracking-widest transition-colors">
      {label}
    </p>
  </a>
);

// Instagram SVG
const InstagramIcon = () => (
  <svg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current">
    <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z" />
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current">
    <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/>
  </svg>
);

const TwitterIcon = () => (
  <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current">
    <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
  </svg>
);

export const SocialCard = ({ title = "Follow Happy Pet", className }: SocialCardProps) => {
  const socials = [
    { href: "https://instagram.com", icon: <InstagramIcon />, label: "Insta", bgColor: "bg-white/5 hover:bg-white/10 hover:border-white/30", delay: "0s" },
    { href: "https://facebook.com", icon: <FacebookIcon />, label: "Facebook", bgColor: "bg-white/5 hover:bg-[#1877F2]/40 hover:border-[#1877F2]/60", delay: "0.1s" },
    { href: "https://youtube.com", icon: <YoutubeIcon />, label: "YouTube", bgColor: "bg-white/5 hover:bg-[#FF0000]/40 hover:border-[#FF0000]/60", delay: "0.2s" },
    { href: "https://twitter.com", icon: <TwitterIcon />, label: "Twitter", bgColor: "bg-white/5 hover:bg-white/20 hover:border-white/40", delay: "0.3s" },
  ];

  return (
    <div className={cn("flex flex-col items-center gap-2", className)}>
      <p className="text-xs font-heading font-bold text-white/30 uppercase tracking-[0.25em] mb-4">{title}</p>
      <div className="flex items-end gap-4">
        {socials.map((s, i) => (
          <SocialBox key={i} {...s} />
        ))}
      </div>
    </div>
  );
};
