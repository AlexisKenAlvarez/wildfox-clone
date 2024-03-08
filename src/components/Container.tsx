import { ReactNode, forwardRef } from "react";
import { cn } from "../utils";

interface myProps {
  className?: string;
  children: ReactNode;
}

const Container = forwardRef<HTMLDivElement, myProps>(
  ({ className, children }, ref) => {
    return (
      <section
        className={cn("w-full h-auto relative px-5", className)}
        ref={ref}
      >
        {children}
      </section>
    );
  }
);

export default Container;
