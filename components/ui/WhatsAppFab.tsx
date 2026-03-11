"use client";
import Image from "next/image";
import WhatsappIcon from "@/public/whatsapp-svgrepo-com (1).svg";
const WHATSAPP_LINK = "https://wa.me/YOUR_NUMBER";

export function WhatsAppFab() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      // Added group for tooltip targeting and forced a circular shape
      className="group fixed bottom-6 left-6 z-40 inline-flex items-center justify-center rounded-full p-3 shadow-lg transition-all hover:scale-110 active:scale-95 whatsapp-fab"
      aria-label="Contact Us on WhatsApp"
    >
      <div className="relative flex items-center justify-center">
        <span
          className="whatsapp-ping absolute inset-0 rounded-full"
          aria-hidden="true"
        />
        {/* <MessageCircle className="relative h-6 w-6" /> */}
        <Image
          src={WhatsappIcon}
          alt="WhatsApp"
          width={34}
          height={34}
          className="relative"
        />
      </div>

      {/* Tooltip - Simple CSS implementation */}
      <span className="absolute left-15 hidden whitespace-nowrap rounded bg-slate-800 px-2 py-1 text-xs text-white group-hover:block">
        Contact Us
      </span>
    </a>
  );
}
