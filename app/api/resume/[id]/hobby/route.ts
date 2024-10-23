import prisma from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { hobbies } = await req.json();

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
      hobbies.map(async (hobby:string) => {
        await prisma.hobby.create({
          data: {
            name: hobby,
            resumeId: params.id,
          },
        });
      })
    );

    return NextResponse.json(result);
  } catch (error) {
    console.log("[UPDATE_HOBBY_RESUME]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
