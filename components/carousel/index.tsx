"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

const PROJECTS = [
  { id: 1, title: "Project One", imagePath: "/carousel1.png" },
  { id: 2, title: "Project Two", imagePath: "/carousel2.png" },
  { id: 3, title: "Project Three", imagePath: "/carousel3.png" },
];

export function MainCarousel() {
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));

  return (
    <div className="w-full px-12">
      <Carousel
        plugins={[plugin.current]}
        opts={{ loop: true }}
        className="w-full max-w-5xl mx-auto"
      >
        <CarouselContent>
          {PROJECTS.map((project) => (
            <CarouselItem key={project.id} className="basis-full">
              <Card className="overflow-hidden border-none shadow-sm bg-transparent">
                <CardContent className="p-0">
                  {/* 'aspect-[3/1]' makes it short and wide. 
                    Use 'object-cover' to ensure the image fills the area 
                    without stretching, even if the original file is a different shape.
                  */}
                  <div className="relative aspect-[3/1] w-full overflow-hidden rounded-lg">
                    <Image
                      src={project.imagePath}
                      alt={project.title}
                      fill
                      priority={project.id === 1}
                      className="object-cover"
                    />
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2" />
        <CarouselNext className="right-2" />
      </Carousel>
    </div>
  );
}
