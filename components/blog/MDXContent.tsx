import { MDXRemote } from "next-mdx-remote/rsc";
import { rehypePlugins } from "@/lib/mdx";
import Link from "next/link";
import type { MDXComponents as MDXComponentsType } from "mdx/types";

const mdxComponents: MDXComponentsType = {
  h1: ({ children, ...props }) => (
    <h1 className="font-serif text-3xl sm:text-4xl text-zinc-100 mt-10 mb-4 scroll-mt-24" {...props}>
      {children}
    </h1>
  ),
  h2: ({ children, ...props }) => {
    const id = children
      ?.toString()
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-");
    return (
      <h2
        id={id}
        className="font-serif text-2xl sm:text-3xl text-zinc-100 mt-10 mb-4 scroll-mt-24"
        {...props}
      >
        {children}
      </h2>
    );
  },
  h3: ({ children, ...props }) => {
    const id = children
      ?.toString()
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-");
    return (
      <h3
        id={id}
        className="text-xl font-semibold text-zinc-100 mt-8 mb-3 scroll-mt-24"
        {...props}
      >
        {children}
      </h3>
    );
  },
  p: ({ children, ...props }) => (
    <p className="text-zinc-400 leading-relaxed mb-5" {...props}>
      {children}
    </p>
  ),
  a: ({ href, children, ...props }) => {
    const isExternal = href?.startsWith("http");
    if (isExternal) {
      return (
        <a
          href={href}
          className="text-amber-400 hover:text-amber-300 underline underline-offset-2 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
          {...props}
        >
          {children}
        </a>
      );
    }
    return (
      <Link
        href={href || "#"}
        className="text-amber-400 hover:text-amber-300 underline underline-offset-2 transition-colors"
      >
        {children}
      </Link>
    );
  },
  ul: ({ children, ...props }) => (
    <ul className="text-zinc-400 space-y-2 mb-5 pl-5 list-disc marker:text-amber-500" {...props}>
      {children}
    </ul>
  ),
  ol: ({ children, ...props }) => (
    <ol className="text-zinc-400 space-y-2 mb-5 pl-5 list-decimal marker:text-amber-500" {...props}>
      {children}
    </ol>
  ),
  li: ({ children, ...props }) => (
    <li className="leading-relaxed" {...props}>
      {children}
    </li>
  ),
  blockquote: ({ children, ...props }) => (
    <blockquote className="border-l-2 border-amber-500 pl-4 my-6 text-zinc-500 italic" {...props}>
      {children}
    </blockquote>
  ),
  hr: () => <hr className="border-zinc-800 my-8" />,
  strong: ({ children, ...props }) => (
    <strong className="text-zinc-200 font-semibold" {...props}>
      {children}
    </strong>
  ),
};

interface MDXContentProps {
  source: string;
}

export default function MDXContent({ source }: MDXContentProps) {
  return (
    <MDXRemote
      source={source}
      components={mdxComponents}
      options={{
        mdxOptions: {
          rehypePlugins,
        },
      }}
    />
  );
}
