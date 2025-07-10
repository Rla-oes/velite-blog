import Link from "next/link";
import { slug } from "github-slugger";
import { badgeVariants } from "./ui/badge";
import { cn } from "@/lib/utils"; 

interface TagProps {
  tag: string;
  current?: boolean;
  count?: number;
}

export function Tag({ tag, current, count }: TagProps) {
  return (
  <Link
    href={`/tags/${slug(tag)}`}
    className={cn(
      badgeVariants({ variant: current ? "default" : "secondary" }),
      "no-underline rounded-md break-words whitespace-normal max-w-full"
    )}
    style={{ wordBreak: "break-all", overflowWrap: "anywhere" }}
  >
    {tag} {count ? `(${count})` : null}
  </Link>
  );
}