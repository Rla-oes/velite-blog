import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { siteConfig } from "@/config/site";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reina.log",
  description: "Technical notes on AI, MLOps, and web development.",
};

export default async function AboutPage() {
  return (
    <div className="container max-w-6xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-x-4">
          <h1 className="inline-block font-black text-4xl lg:text-5xl">
            About Me
          </h1>
        </div>
      </div>
      <hr className="my-8" />
      <div className="flex flex-col md:flex-row gap-8 items-center md:items-center">
        <div className="min-w-48 max-w-48 flex flex-col gap-2">
          <Avatar className="h-48 w-48">
            <AvatarImage src="/avatar.png" alt={siteConfig.author} />
            <AvatarFallback>MS</AvatarFallback>
          </Avatar>
          <h2 className="text-2xl font-bold text-center break-words">
            Minseo Kim <span className="text-base text-muted-foreground">(Reina)</span>
          </h2>
          <p className="text-muted-foreground text-center break-words">
            AI & Backend Dev in Training
          </p>
        </div>
        <p className="text-muted-foreground text-lg py-4">
          백엔드와 인공지능 관련 분야를 공부 중입니다.<br />
          이 블로그는 공부하면서 정리한 내용과 생각들을 기록해두는 용도로 운영합니다.
        </p>
      </div>
    </div>
  );
}
