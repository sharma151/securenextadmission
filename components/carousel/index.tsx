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

// 1. Define your data here
const PROJECTS = [
  {
    id: 1,
    title: "Project One",
    imagePath: "/placeholder-1.jpg", // REPLACE THIS
    description: "Brief description of your first project.",
  },
  {
    id: 2,
    title: "Project Two",
    imagePath: "/placeholder-2.jpg", // REPLACE THIS
    description: "Brief description of your second project.",
  },
  {
    id: 3,
    title: "Project Three",
    imagePath: "/placeholder-3.jpg", // REPLACE THIS
    description: "Brief description of your third project.",
  },
];

export function MainCarousel() {
  const plugin = useRef(Autoplay({ delay: 1000, stopOnInteraction: true }));
  return (
    <div className="w-full px-12">
      <Carousel
        plugins={[plugin.current]}
        opts={{
          loop: true,
        }}
        className="w-full max-w-6xl mx-auto"
      >
        <CarouselContent>
          {PROJECTS.map((project) => (
            // Change this line:
            <CarouselItem key={project.id} className="basis-full">
              <div className="p-2">
                <Card className="overflow-hidden border-none shadow-lg">
                  <CardContent className="p-0">
                    {/* IMAGE PLACEHOLDER SECTION */}
                    <div className="relative h-30 w-full bg-muted">
                      <Image
                        src={project.imagePath}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform hover:scale-105"
                      />
                    </div>

                    <div className="p-4 bg-background">
                      <h3 className="font-bold text-lg">{project.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {project.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
