import prisma from "@/lib/db";
import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { userId } = auth();
  const user = await currentUser();
  if (!userId) {
    return redirect("/sign-in");
  }
  // Check if the user exists in the database
  const currentUserDb = await prisma.user.findFirst({
    where: { clerkId: userId! },
  });

  // Create the user if not found in the database
  if (!currentUserDb && userId) {
    const email = user?.emailAddresses[0]?.emailAddress ?? "";

    await prisma.user.create({
      data: { clerkId: userId, email },
    });
  }

  return <div className="h-screen">{children}</div>;
}
