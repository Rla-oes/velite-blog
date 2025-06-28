import Image from "next/image";
import * as runtime from "react/jsx-runtime";
import { Callout } from "./callout";
import { cn } from "@/lib/utils";

const useMDXComponent = (code: string) => {
  try {
    const fn = new Function(code);
    return fn({ ...runtime }).default;
  } catch (error) {
    console.error("Failed to compile MDX:", error);
    return () => <p>MDX 렌더링 실패</p>;
  }
};

const components = {
  Image,
  Callout,
};

interface MdxProps {
  code: string;
}

export function MDXContent({ code }: MdxProps) {
  const Component = useMDXComponent(code);
  return <Component components={components} />;
}
