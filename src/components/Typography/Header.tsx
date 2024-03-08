import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const Header = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <h1 className={cn("text-5xl sm:text-6xl 2xl:text-7x font-primary ", className)}>
      {children}
    </h1>
  );
};

export default Header;
