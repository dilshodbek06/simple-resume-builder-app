// import prisma from "@/lib/db";
// import { auth } from "@clerk/nextjs/server";
// import { NextResponse } from "next/server";

// export async function PATCH(
//   req: Request,
//   { params }: { params: { id: string } }
// ) {
//   try {
//     const { educations } = await req.json();

//     const { userId } = auth();

//     const currentUser = await prisma.user.findUnique({
//       where: {
//         clerkId: userId!,
//       },
//     });
//     if (!userId || !currentUser) {
//       return new NextResponse("Unauthorized", { status: 401 });
//     }

//     const currentResume = await prisma.resume.findUnique({
//       where: {
//         id: params.id,
//       },
//     });
//     if (!currentResume) {
//       return new NextResponse("Not found", { status: 404 });
//     }

//     const result = await Promise.all(
//       educations.map(
//         async (item: {
//           university: string;
//           course: string;
//           startDate: Date;
//           endDate: Date;
//           location: string;
//         }) => {
//           await prisma.education.create({
//             data: {
//               course: item.course,
//               location: item.location,
//               university: item.university,
//               startDate: item.startDate,
//               endDate: item.endDate,
//               resumeId: params.id,
//             },
//           });
//         }
//       )
//     );

//     return NextResponse.json(result);
//   } catch (error) {
//     console.log("[UPDATE_EDUCATION_RESUME]", error);
//     return new NextResponse("Internal Error", { status: 500 });
//   }
// }

import prisma from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

interface EducationData {
  university: string;
  course: string;
  startDate: Date | null; // Use null for optional dates
  endDate: Date | null; // Use null for optional dates
  location: string;
}

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { educations }: { educations: EducationData[] } = await req.json();

    const { userId } = auth();

    const currentUser = await prisma.user.findUnique({
      where: {
        clerkId: userId!,
      },
    });
    if (!userId || !currentUser) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const currentResume = await prisma.resume.findUnique({
      where: {
        id: params.id,
      },
    });
    if (!currentResume) {
      return new NextResponse("Not found", { status: 404 });
    }

    // Delete existing education records for the specified resume
    await prisma.education.deleteMany({
      where: {
        resumeId: params.id,
      },
    });

    // Create new education records
    const result = await Promise.all(
      educations.map(async (item) => {
        return prisma.education.create({
          data: {
            course: item.course,
            location: item.location,
            university: item.university,
            startDate: item.startDate!,
            endDate: item.endDate,
            resumeId: params.id,
          },
        });
      })
    );

    return NextResponse.json(result);
  } catch (error) {
    console.log("[UPDATE_EDUCATION_RESUME]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
