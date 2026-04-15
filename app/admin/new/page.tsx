import { Metadata } from "next";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import AdminGuard from "@/components/admin/AdminGuard";
import PostEditor from "@/components/admin/PostEditor";

export const metadata: Metadata = {
  title: "New Post",
  robots: { index: false, follow: false },
};

export default async function NewPostPage() {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/admin/login");

  return (
    <AdminGuard>
      <div className="pt-24 pb-20 px-4 sm:px-6 max-w-5xl mx-auto">
        <PostEditor isNew />
      </div>
    </AdminGuard>
  );
}
