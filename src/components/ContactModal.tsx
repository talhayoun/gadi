"use client";

import { useEffect } from "react";

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
            <span className="text-3xl font-black bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Matrix-טכנלוגיות
            </span>
          </div>

          <h3 className="font-headline text-2xl font-bold text-slate-900 mb-4">
            נשמח לעזור לכם
          </h3>

          <p className="text-slate-600 mb-6">
            ניתן ליצור קשר טלפוני במספר:
          </p>

          <a
            href="tel:0505750724"
            className="inline-block bg-gradient-to-r from-primary to-primary-container text-white font-headline font-bold px-8 py-4 rounded-full hover:scale-105 transition-all duration-300 text-xl mb-4 shadow-lg shadow-primary/20"
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
