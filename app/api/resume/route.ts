import prisma from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { title } = await req.json();

    const { userId } = auth();
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const user = await prisma.user.findUnique({
      where: {
        clerkId: userId,
      },
    });

    if (!user) {
      return new NextResponse("User not found", { status: 404 });
    }

    const resume = await prisma.resume.create({
      data: {
        title,
        userId: user.id,
      },
    });

    return NextResponse.json(resume);
  } catch (error) {
    console.log("[CREATE_RESUME]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
export async function GET(req: Request) {
  try {
    console.log(req);

    const { userId } = auth();
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const user = await prisma.user.findUnique({
      where: {
        clerkId: userId,
      },
    });

    if (!user) {
      return new NextResponse("User not found", { status: 404 });
    }

    const resumes = await prisma.resume.findMany({
      where: {
        userId: user.id,
      },
    });
    return NextResponse.json(resumes);
  } catch (error) {
    console.log("[CREATE_RESUME]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
