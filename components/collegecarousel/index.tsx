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

const collegesData = [
  {
    id: 1,
    name: "Oriental Institute of Science & Technology",
    location: "Bhopal, MP",
    image:
      "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=600",
    description:
      "Premier private engineering college with excellent placement records.",
    offerings: ["Engineering", "Management"],
    whatsappLink: "https://wa.me/919109250739?text=Enquiry%20for%20Oriental",
  },
  {
    id: 2,
    name: "LNCT Group of Institutes",
    location: "Bhopal, MP",
    image:
      "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=600",
    description: "Central India's oldest and most renowned technical group.",
    offerings: ["Engineering", "Medical", "Management"],
    whatsappLink: "https://wa.me/919109250739?text=Enquiry%20for%20LNCT",
  },
  {
    id: 3,
    name: "SAGE University",
    location: "Bhopal, MP",
    image:
      "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=600",
    description:
      "Modern infrastructure with focus on industry-ready education.",
    offerings: ["Engineering", "Management"],
    whatsappLink: "https://wa.me/919109250739?text=Enquiry%20for%20SAGE",
  },
  {
    id: 4,
    name: "LNCT Group of Institutes",
    location: "Bhopal, MP",
    image:
      "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=600",
    description: "Central India's oldest and most renowned technical group.",
    offerings: ["Engineering", "Medical", "Management"],
    whatsappLink: "https://wa.me/919109250739?text=Enquiry%20for%20LNCT",
  },
  {
    id: 5,
    name: "SAGE University",
    location: "Bhopal, MP",
    image:
      "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=600",
    description:
      "Modern infrastructure with focus on industry-ready education.",
    offerings: ["Engineering", "Management"],
    whatsappLink: "https://wa.me/919109250739?text=Enquiry%20for%20SAGE",
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
                <Card className="overflow-hidden border-slate-100 rounded-3xl group hover:shadow-xl transition-all ">
                  <CardContent className="p-0">
                    {/* Image Header */}
                    <div className="relative -top-4 h-50 w-full">
                      <img
                        src={college.image}
                        alt={college.name}
                        className="h-full w-full object-cover transition-transform group-hover:scale-105 duration-500"
                      />
                      {/* <div className="absolute inset-0 bg-black/20" /> */}
                    </div>

                    {/* Content Body */}
                    <div className="px-6">
                      <div className="flex flex-wrap gap-2">
                        {college.offerings.map((offering) => (
                          <span
                            key={offering}
                            className="text-[10px] font-bold uppercase bg-[#E9FAF1] text-[#108A58] px-2 py-1 rounded-full"
                          >
                            {offering}
                          </span>
                        ))}
                      </div>
                      <h3 className="font-bold text-lg text-slate-900 line-clamp-1 mb-1">
                        {college.name}
                      </h3>
                      <p className="text-xs text-slate-500 mb-4">
                        {college.location}
                      </p>
                      <p className="text-sm  text-slate-700 mb-4">
                        {college.description}
                      </p>

                      <a
                        href={college.whatsappLink}
                        target="_blank"
                        className="flex items-center justify-center gap-2 w-full bg-[#108A58] text-white py-3 rounded-2xl text-sm font-bold hover:bg-emerald-600 transition-colors"
                      >
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                          className="h-4 w-4 brightness-0 invert"
                          alt="WA"
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
