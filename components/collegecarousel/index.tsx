"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import WhatsappIcon from "@/public/whatsapp-svgrepo-com (1).svg";
import Oriental from "@/public/oriental_group_of_institutes_cover.webp";
import Lnct from "@/public/LNCT_cover.webp";
import Sage from "@/public/sage-bhopal.webp";
import ScopeGlobal from "@/public/scopeglobal.webp";
import Vaishnavi from "@/public/vaishnavigroup.webp";
import RNTU from "@/public/RNTU.webp";
import RGPM from "@/public/RGPM.webp";
import Shriram from "@/public/shriramcollege.webp";
import KNP from "@/public/KNP.webp";

const collegesData = [
  {
    id: 1,
    name: "Oriental Group of Institute ",
    location: "Bhopal, MP",
    address:
      "Oriental Campus, Opp. Patel Nagar, Raisen Road, Bhopal, MP 462021",
    image: Oriental,
    description:
      "A flagship institution of the Oriental Group, OIST is renowned for its placement excellence and state-of-the-art IDEA labs. It remains a top choice for engineering aspirants in Central India.",
    offerings: [
      "Engineering",
      "Pharmacy",
      "Management",
      "Computer Applications",
    ],
    whatsappLink: "https://wa.me/919109250739?text=Enquiry%20for%20Oriental Group of Institute",
  },
  {
    id: 2,
    name: "LNCT Group of Institutes",
    location: "Bhopal, MP",
    address: "LNCT Campus, Kalchuri Nagar, Raisen Road, Bhopal, MP 462022",
    image: Lnct,
    description:
      "The first self-financed engineering institute in MP, LNCT is a massive educational conglomerate known for its rigorous academic discipline and industry-leading placement records.",
    offerings: [
      "Engineering",
      "Medical",
      "Management",
      "Pharmacy",
      "Ayurveda",
      "Law",
    ],
    whatsappLink: "https://wa.me/919109250739?text=Enquiry%20for%20LNCT Group of Institutes",
  },
  {
    id: 3,
    name: "SAGE University",
    location: "Bhopal, MP",
    address: "Sahara Bypass Road, Katara Hills Extension, Bhopal, MP 462022",
    image: Sage,
    description:
      "A modern, multidisciplinary university with a sprawling 75-acre lush green campus, focusing on innovative research and industry-aligned vocational training.",
    offerings: [
      "Engineering",
      "Design",
      "Agriculture",
      "Management",
      "Performing Arts",
    ],
    whatsappLink: "https://wa.me/919109250739?text=Enquiry%20for%20SAGE University",
  },
  {
    id: 4,
    name: "Scope Global Skills University (SGSU)",
    location: "Bhopal, MP",
    address: "NH-12, Near Misrod, Hoshangabad Road, Bhopal, MP 462026",
    image: ScopeGlobal,
    description:
      "Central India’s first 'Skills University' aligned with NEP 2020, emphasizing hands-on vocational training and apprenticeship-embedded degree programs.",
    offerings: [
      "Skill-based B.Voc",
      "Engineering",
      "Digital Marketing",
      "Management",
    ],
    whatsappLink: "https://wa.me/919109250739?text=Enquiry%20for%20Scope Global Skills University",
  },
  {
    id: 5,
    name: "Vaishnavi Group of Institutions",
    location: "Bhopal, MP",
    address: "Mendua, Bhojpur Road, Bhopal, MP 462026",
    image: Vaishnavi,
    description:
      "Focuses on creating industry-ready professionals through tech-enabled classrooms and a robust training and placement cell targeting top IT firms.",
    offerings: ["Engineering", "Management", "AI & Machine Learning"],
    whatsappLink: "https://wa.me/919109250739?text=Enquiry%20for%20Vaishnavi Group of Institutions",
  },
  {
    id: 6,
    name: "Bhopal Institute of Technology & Science (BITS)",
    location: "Bhopal, MP",
    address: "BITS Campus, Bhojpur Road, Bangrasia, Bhopal, MP 462045",
    image: Vaishnavi,
    description:
      "Established in 2002, BITS provides a student-friendly environment with a strong emphasis on core engineering branches and practical laboratory exposure.",
    offerings: ["Engineering", "Management", "Post-Graduate Technical Studies"],
    whatsappLink: "https://wa.me/919109250739?text=Enquiry%20for%20BITS",
  },
  {
    id: 7,
    name: "Rabindranath Tagore University (RNTU)",
    location: "Bhopal, MP",
    address: "Mendua, Raisen Road, Post-Bhojpur, Bhopal, MP 464993",
    image: RNTU,
    description:
      "Recognized as India's first skills-based private university, RNTU offers a diverse cultural ecosystem with students from over 28 states and various countries.",
    offerings: ["Engineering", "Law", "Pharmacy", "Education", "Paramedical"],
    whatsappLink: "https://wa.me/919109250739?text=Enquiry%20for%20Rabindranath Tagore University",
  },
  {
    id: 8,
    name: "Rajiv Gandhi Proudyogiki Mahavidhyalaya",
    location: "Bhopal, MP",
    address: "Salaiya, Via- Misrod, Kolar Road, Bhopal, MP 462042",
    image: RGPM,
    description:
      "Affiliated with RGPV, this institution is dedicated to providing affordable, high-quality technical education with a focus on holistic student development.",
    offerings: ["Engineering", "Polytechnic Diploma", "Management"],
    whatsappLink:
      "https://wa.me/919109250739?text=Enquiry%20for%20Rajiv Gandhi Proudyogiki Mahavidhyalaya",
  },
  {
    id: 9,
    name: "Shri Ram College Of Technology (SRCT)",
    location: "Bhopal, MP",
    address: "Shri Ram Nagar, Thua Kheda, Kolar Road, Bhopal, MP 462042",
    image: Shriram,
    description:
      "Part of the prestigious Shri Ram Group, SRCT is known for its discipline, academic excellence, and consistent placement track record in core industries.",
    offerings: ["Engineering", "Computer Engineering", "Mechanical", "Civil"],
    whatsappLink:
      "https://wa.me/919109250739?text=Enquiry%20for%20Shri Ram College Of Technology (SRCT)",
  },
  {
    id: 10,
    name: "KNP Group of Institutions",
    location: "Bhopal, MP",
    address: "Bagli, Hoshangabad Road, Misrod, Bhopal, MP 462041",
    image: KNP,
    description:
      "KNP offers a specialized focus on healthcare and technical sectors, providing well-equipped e-libraries and modern infrastructure for professional growth.",
    offerings: [
      "Engineering",
      "Pharmacy",
      "Nursing",
      "Physiotherapy",
      "Management",
    ],
    whatsappLink: "https://wa.me/919109250739?text=Enquiry%20for%20KNP",
  },
];
export default function CollegesCarousel() {
  // Autoplay Plugin configuration
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true }),
  );

  return (
    <section className="py-24 bg-white ">
      <div className="mx-auto max-w-6xl px-12">
        {" "}
        {/* Increased padding for buttons */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-slate-900 text-center">
            Colleges We <span className="text-[#108A58]">Work With</span>
          </h2>
        </div>
        <Carousel
          plugins={[plugin.current]}
          className="w-full"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="ml-0 md:-ml-4 ">
            {collegesData.map((college) => (
              <CarouselItem
                key={college.id}
                className=" px-2 md:px-5 py-3 basis-full md:basis-1/2 lg:basis-1/3"
              >
                <Card className="overflow-hidden border-slate-100 rounded-3xl group hover:shadow-md transition-all ">
                  <CardContent className="p-0">
                    {/* Image Header */}
                    <div className="relative -top-4 h-48 w-full overflow-hidden">
                      {" "}
                      {/* Ensure height is defined here */}
                      <Image
                        src={college.image}
                        alt={college.name}
                        fill // This makes the image fill the parent div
                        className="object-cover transition-transform group-hover:scale-105 duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>

                    {/* Content Body */}
                    <div className="px-6">
                      <h3 className="font-bold text-md text-slate-900  mb-1">
                        {college.name}
                      </h3>
                      <p className="text-xs text-slate-500 mb-4">
                        {college.location}
                      </p>
                      <p className="text-sm  text-slate-700 mb-4">
                        {college.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {college.offerings.map((offering) => (
                          <span
                            key={offering}
                            className="text-[10px] font-bold uppercase bg-[#E9FAF1] text-[#108A58] px-2 py-1 rounded-full"
                          >
                            {offering}
                          </span>
                        ))}
                      </div>

                      <a
                        href={college.whatsappLink}
                        target="_blank"
                        className="flex items-center justify-center gap-2 w-full bg-[#25D366] text-white py-2 rounded-lg text-sm font-bold transition-colors"
                      >
                        <Image
                          src={WhatsappIcon}
                          alt="WhatsApp"
                          width={24}
                          height={24}
                          className="relative"
                        />
                        Enquire Now
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation Buttons */}
          <CarouselPrevious className="-left-10 md:-left-12 border-slate-200 text-[#108A58]" />
          <CarouselNext className="-right-10 md:-right-12 border-slate-200 text-[#108A58]" />
        </Carousel>
      </div>
    </section>
  );
}
