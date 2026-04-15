import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { getPostBySlug, updatePost, deletePost } from "@/lib/posts";

// NOTE: File-system writes/deletes won't persist on Vercel's serverless functions.
// For production: use Vercel Blob, Supabase, or another persistent storage solution.
// Option 2: The CMS works locally — commit new/edited posts to Git and deploy via Vercel.

interface Props {
  params: { slug: string };
}

export async function GET(_req: NextRequest, { params }: Props) {
  const post = getPostBySlug(params.slug);
  if (!post) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(post);
}

export async function PUT(req: NextRequest, { params }: Props) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const { frontmatter, content } = await req.json();
    updatePost(params.slug, frontmatter, content);
    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Internal server error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function DELETE(_req: NextRequest, { params }: Props) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    deletePost(params.slug);
    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Internal server error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
