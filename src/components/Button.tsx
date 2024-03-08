import { FunctionComponent, ReactNode } from "react";
import { cn } from "../utils";

interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  children: ReactNode;
  className?: string;
}

export const Button: FunctionComponent<ButtonProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={cn(
        "px-4 py-4 bg-white rounded-lg border-2 border-black uppercase font-bold button-shadow",
        className
      )}
      {...props}
    >
      <h1 className="">{children}</h1>
    </button>
  );
};

export default Button;
