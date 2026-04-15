import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { getAllPostsAdmin, createPost } from "@/lib/posts";

// NOTE: File-system writes won't persist on Vercel's serverless functions (read-only filesystem).
// For production: use Vercel Blob, Supabase, or another storage solution.
// In local development, posts are written to /content/blog/ and can be committed to Git.

export async function GET() {
  const posts = getAllPostsAdmin();
  return NextResponse.json(posts);
}

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { slug, frontmatter, content } = await req.json();

    if (!slug || !frontmatter?.title || !content) {
      return NextResponse.json({ error: "slug, frontmatter.title and content are required" }, { status: 400 });
    }

    createPost(slug, frontmatter, content);
    return NextResponse.json({ success: true, slug });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Internal server error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
