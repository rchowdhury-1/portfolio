import { Metadata } from "next";
import { getServerSession } from "next-auth";
import { notFound, redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import { getPostBySlug } from "@/lib/posts";
import AdminGuard from "@/components/admin/AdminGuard";
import PostEditor from "@/components/admin/PostEditor";

interface Props {
  params: { slug: string };
}

export const metadata: Metadata = {
  title: "Edit Post",
  robots: { index: false, follow: false },
};

export default async function EditPostPage({ params }: Props) {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/admin/login");

  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <AdminGuard>
      <div className="pt-24 pb-20 px-4 sm:px-6 max-w-5xl mx-auto">
        <PostEditor
          slug={params.slug}
          initialFrontmatter={post.frontmatter}
          initialContent={post.content}
          isNew={false}
        />
      </div>
    </AdminGuard>
  );
}
