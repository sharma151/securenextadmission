// import { admissions } from "@/constants/admissions";
// import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/Tabs";
// import {
//   Accordion,
//   AccordionItem,
//   AccordionTrigger,
//   AccordionContent
// } from "@/components/ui/Accordion";
// import { Badge } from "@/components/ui/Badge";
// import type { Metadata } from "next";

// export function generateMetadata(): Metadata {
//   return {
//     title: "Admission"
//   };
// }

// const admissionCategories = Object.keys(admissions) as (keyof typeof admissions)[];

// export default function AdmissionPage() {
//   return (
//     <section className="bg-background">
//       <div className="mx-auto max-w-6xl px-4 py-12">
//         <header className="mb-8 space-y-3">
//           <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
//             Admission Guidance
//           </h1>
//           <p className="max-w-2xl text-muted-foreground">
//             Explore our curated programs across Engineering, Medical, and
//             Management. Courses are organized by demand level and specialization
//             so you can quickly shortlist the best-fit options.
//           </p>
//         </header>
//         <Tabs defaultValue={admissionCategories[0]} className="space-y-6">
//           <TabsList className="w-full justify-start overflow-x-auto">
//             {admissionCategories.map((category) => (
//               <TabsTrigger key={category} value={category} className="shrink-0">
//                 {category}
//               </TabsTrigger>
//             ))}
//           </TabsList>
//           {admissionCategories.map((category) => {
//             const groups = admissions[category];
//             return (
//               <TabsContent key={category} value={category}>
//                 <div className="grid gap-6 md:grid-cols-2">
//                   {groups.map((group) => (
//                     <article
//                       key={group.title}
//                       className="rounded-xl border bg-card p-4 shadow-sm"
//                     >
//                       <header className="mb-3 flex items-center justify-between gap-3">
//                         <div>
//                           <h2 className="text-lg font-semibold">
//                             {group.title}
//                           </h2>
//                           {group.subtitle && (
//                             <p className="text-xs text-muted-foreground">
//                               {group.subtitle}
//                             </p>
//                           )}
//                         </div>
//                         <div className="flex flex-wrap gap-2">
//                           {group.tags?.map((tag) => (
//                             <Badge
//                               key={tag}
//                               variant={
//                                 tag === "High Demand"
//                                   ? "destructive"
//                                   : tag === "Core"
//                                   ? "outline"
//                                   : "secondary"
//                               }
//                             >
//                               {tag}
//                             </Badge>
//                           ))}
//                         </div>
//                       </header>
//                       <Accordion type="single" collapsible>
//                         {group.courses.map((course) => (
//                           <AccordionItem
//                             key={course.name}
//                             value={course.name}
//                           >
//                             <AccordionTrigger>
//                               <div className="flex flex-1 items-center justify-between gap-3 text-left">
//                                 <span>{course.name}</span>
//                                 <span className="text-xs font-medium text-muted-foreground">
//                                   {course.level}
//                                 </span>
//                               </div>
//                             </AccordionTrigger>
//                             <AccordionContent>
//                               <div className="space-y-1 text-sm text-muted-foreground">
//                                 {course.colleges && (
//                                   <p>
//                                     <span className="font-medium">Top colleges: </span>
//                                     {course.colleges.join(", ")}
//                                   </p>
//                                 )}
//                                 {course.notes && <p>{course.notes}</p>}
//                               </div>
//                             </AccordionContent>
//                           </AccordionItem>
//                         ))}
//                       </Accordion>
//                     </article>
//                   ))}
//                 </div>
//               </TabsContent>
//             );
//           })}
//         </Tabs>
//       </div>
//     </section>
//   );
// }

import { admissions } from "@/constants/admissions";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/Tabs";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/Accordion";
import { Badge } from "@/components/ui/Badge";
import type { Metadata } from "next";
import { ChevronDown, Star, Sparkles, BookOpen } from "lucide-react";

export function generateMetadata(): Metadata {
  return {
    title: "Admission Guidance | Secure Next Admission",
  };
}

const admissionCategories = Object.keys(
  admissions,
) as (keyof typeof admissions)[];

export default function AdmissionPage() {
  return (
    <section className="relative min-h-screen bg-white py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header Section */}
        <header className="mb-10 max-w-2xl">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-600">
            <Sparkles className="h-3 w-3 text-[#10b981]" />
            LET'S TALK
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Admission <span className="text-[#059669]">Guidance.</span>
          </h1>
          <p className="mt-3 text-base leading-relaxed text-slate-500">
            Navigate through top-tier programs. Find the right specialization
            based on demand.
          </p>
        </header>

        <Tabs defaultValue={admissionCategories[0]} className="space-y-8">
          {/* TAB BAR: Matches your image b722f9.png exactly */}
          <div className="flex justify-center md:justify-start">
            <TabsList className="inline-flex h-auto w-full max-w-full items-center gap-1 rounded-full border border-slate-200 bg-slate-50 p-1 md:w-auto">
              {admissionCategories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="flex-1 rounded-full px-3 py-1.5 text-[11px] font-bold text-slate-800 transition-all duration-200 
  hover:text-[#059669]
  /* Active State: Dark Green text + Very Light Green background */
  data-[state=active]:bg-[#ecfdf5] 
  data-[state=active]:text-[#064e3b] 
  data-[state=active]:shadow-sm 
  data-[state=active]:ring-1 
  data-[state=active]:ring-[#d1fae5]
  md:px-6 md:py-2 md:text-xs"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {admissionCategories.map((category) => {
            const groups = admissions[category];
            return (
              <TabsContent
                key={category}
                value={category}
                // className="mt-0 outline-none"
              >
                <div className="grid gap-5 md:grid-cols-2">
                  {groups.map((group) => (
                    <article
                      key={group.title}
                      className="flex flex-col rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md"
                    >
                      <header className="mb-4 flex items-start justify-between gap-4">
                        <div>
                          <h2 className="text-xl font-bold text-slate-900">
                            {group.title}
                          </h2>
                          {group.subtitle && (
                            <p className="text-[11px] font-medium text-slate-400 uppercase tracking-tight">
                              {group.subtitle}
                            </p>
                          )}
                        </div>

                        <div className="flex flex-wrap justify-end gap-1.5">
                          {group.tags?.map((tag) => (
                            <Badge
                              key={tag}
                              // className={`rounded-md border-none px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest ${
                              //   tag === "High Demand"
                              //     ? "bg-rose-50 text-rose-600"
                              //     : "bg-slate-100 text-slate-500"
                              // }`}
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </header>

                      <Accordion
                        type="single"
                        collapsible
                        // className="w-full space-y-2"
                      >
                        {group.courses.map((course) => (
                          <AccordionItem
                            key={course.name}
                            value={course.name}
                            // className="overflow-hidden rounded-xl border border-slate-50 bg-slate-50/50 transition-all data-[state=open]:border-[#d1fae5] data-[state=open]:bg-white"
                          >
                            <AccordionTrigger
                            // className="px-4 py-3.5 hover:no-underline group/trigger"
                            >
                              <div className="flex flex-1 items-center justify-between text-left">
                                <span className="text-sm font-bold text-slate-700 group-data-[state=open]/trigger:text-[#059669]">
                                  {course.name}
                                </span>
                                <div className="flex items-center gap-2">
                                  <span className="text-[9px] font-bold text-slate-400 uppercase">
                                    {course.level}
                                  </span>
                                  <ChevronDown className="h-4 w-4 text-slate-400 transition-transform duration-300 group-data-[state=open]/trigger:rotate-180 group-data-[state=open]/trigger:text-[#059669]" />
                                </div>
                              </div>
                            </AccordionTrigger>
                            <AccordionContent
                            // className="px-4 pb-4"
                            >
                              <div className="space-y-3 pt-1">
                                {course.colleges && (
                                  <div className="rounded-lg bg-[#f0fdf4] p-3 border border-[#d1fae5]">
                                    <div className="mb-1.5 flex items-center gap-1.5 text-[9px] font-black text-[#059669] uppercase tracking-widest">
                                      <Star className="h-2.5 w-2.5 fill-[#059669]" />
                                      Top Institutions
                                    </div>
                                    <p className="text-xs leading-relaxed text-slate-600 font-medium">
                                      {course.colleges.join(", ")}
                                    </p>
                                  </div>
                                )}
                                {course.notes && (
                                  <div className="flex gap-2 px-1">
                                    <BookOpen className="h-3.5 w-3.5 shrink-0 text-slate-300" />
                                    <p className="text-xs italic text-slate-400 leading-relaxed">
                                      {course.notes}
                                    </p>
                                  </div>
                                )}
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </article>
                  ))}
                </div>
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
    </section>
  );
}
