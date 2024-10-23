import prisma from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { experiences } = await req.json();

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

    const result = await Promise.all(
      experiences.map(
        async (item: {
          companyName: string;
          profession: string;
          startDate: Date;
          endDate: Date;
          description: string;
        }) => {
          await prisma.experience.create({
            data: {
              companyName: item.companyName,
              description: item.description,
              jobProfession: item.profession,
              startDate: item.startDate,
              endDate: item.endDate,
              resumeId: params.id,
            },
          });
        }
      )
    );

    return NextResponse.json(result);
  } catch (error) {
    console.log("[UPDATE_EXPERIENCE_RESUME]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
