"use client";
import Image from "next/image";
import WhatsappIcon from "@/public/whatsapp-svgrepo-com (1).svg";
const WHATSAPP_LINK = "https://wa.me/+919109250739";

export function WhatsAppFab() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-7 left-7 z-40 inline-flex items-center justify-center rounded-full p-3 shadow-lg transition-all hover:scale-110 active:scale-95 whatsapp-fab"
      aria-label="Contact Us on WhatsApp"
    >
      <div className="relative flex items-center justify-center">
        <span
          className="whatsapp-ping absolute inset-0 rounded-full"
          aria-hidden="true"
        />
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
