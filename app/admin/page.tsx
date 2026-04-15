import { Metadata } from "next";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import { getAllPostsAdmin } from "@/lib/posts";
import AdminGuard from "@/components/admin/AdminGuard";
import PostList from "@/components/admin/PostList";

export const metadata: Metadata = {
  title: "Admin",
  robots: { index: false, follow: false },
};

export default async function AdminPage() {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/admin/login");

  const posts = getAllPostsAdmin();

  return (
    <AdminGuard>
      <div className="pt-24 pb-20 px-4 sm:px-6 max-w-5xl mx-auto">
        <div className="mb-8">
          <p className="text-amber-500 text-sm font-mono tracking-widest mb-2 uppercase">CMS</p>
          <h1 className="font-serif text-3xl text-zinc-100">Blog Admin</h1>
          <p className="text-zinc-500 text-sm mt-1">
            File-based CMS — posts are saved to /content/blog/ and deploy with the site via Git.
            {" "}
            <span className="text-zinc-600">
              Note: file writes are ephemeral on Vercel serverless. Commit new posts to Git for production.
            </span>
          </p>
        </div>
        <PostList posts={posts} />
      </div>
    </AdminGuard>
  );
}
