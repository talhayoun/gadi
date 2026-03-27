"use client";

import { useEffect } from "react";
import Image from "next/image";
import logo from "../logo.png"

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full mx-4 relative animate-in fade-in zoom-in duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 left-4 text-slate-400 hover:text-slate-600 transition-colors"
          aria-label="סגור"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="text-center">
          <div className="mb-6 flex justify-center">
            <Image
              src={logo}
              alt="Matrix-טכנלוגיות"
              width={180}
              height={180}
              className="object-contain mix-blend-multiply"
            />
          </div>

          <h3 className="font-headline text-2xl font-bold text-slate-900 mb-4">
            נשמח לעזור לכם
          </h3>

          <p className="text-slate-600 mb-6">
            ניתן ליצור קשר טלפוני במספר:
          </p>

          <a
            href="tel:0505750724"
            className="inline-block bg-cyan-600 text-white font-headline font-bold px-8 py-4 rounded-xl hover:bg-cyan-700 transition-all duration-300 text-xl mb-4"
          >
            050-575-0724
          </a>

          <p className="text-sm text-slate-500 mt-4">
            זמינים לשירותכם בכל שעה
          </p>
        </div>
      </div>
    </div>
  );
}
