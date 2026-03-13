// import { NextResponse } from "next/server";

// type InquiryPayload = {
//   type?: "inquiry" | "contact";
//   name?: string;
//   phone?: string;
//   course?: string;
//   email?: string;
//   message?: string;
// };

// export async function POST(request: Request) {
//   let payload: InquiryPayload;
//   try {
//     payload = (await request.json()) as InquiryPayload;
//   } catch {
//     return NextResponse.json(
//       { ok: false, error: "Invalid JSON" },
//       { status: 400 }
//     );
//   }

//   const name = (payload.name ?? "").toString().trim();
//   const phone = (payload.phone ?? "").toString().trim();

//   if (!name || !phone) {
//     return NextResponse.json(
//       { ok: false, error: "Name and phone are required" },
//       { status: 400 }
//     );
//   }

//   // In production: save to DB / CRM and trigger notification.
//   return NextResponse.json({
//     ok: true
//   });
// }

