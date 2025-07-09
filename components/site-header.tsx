import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { Icons } from "./icons";
import { MainNav } from "./main-nav";
import { MobileNav } from "./mobile-nav";
import { ModeToggle } from "./mode-toggle";

export function SiteHeader() {
  return (
    <header className="z-10 sticky top-0 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <MainNav />
        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="flex items-center">
            <a
              href="https://hitscounter.dev"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "flex", alignItems: "center" }}
            >
              <img
                src="https://hitscounter.dev/api/hit?url=https%3A%2F%2Freina-log.vercel.app%2F&label=visits&icon=eye&color=%23000&message=&style=flat-square&tz=Asia%2FSeoul"
                alt="visits"
                style={{ height: "20px", marginRight: "8px" }}
              />
            </a>
            <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
              <div
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  "w-10 px-0 hidden sm:inline-flex"
                )}
              >
                <Icons.gitHub className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <ModeToggle />
            <MobileNav />
          </nav>
        </div>
      </div>
    </header>
  );
}
