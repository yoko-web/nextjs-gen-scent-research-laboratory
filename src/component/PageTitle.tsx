import cc from "classcat";
import type { FC, ReactNode } from "react";

type FontProps = {
  fontWeight?: "ordinary" | "bold";
  children: ReactNode;
};

export const PageTitle: FC<FontProps> = (props) => {
  return (
    <h1 className="mb-5 mt-20 text-2xl font-extrabold leading-9 tracking-tight sm:text-2xl sm:leading-10 md:mb-16 md:mt-24 md:text-3xl md:leading-10 lg:mb-10">
      {props.children}
    </h1>
  );
};
export const PageSubTitle: FC<FontProps> = (props) => {
  return (
    <h2
      className={cc([
        { "mt-10 mb-5 text-lg font-bold text-primary md:mt-14 md:mb-8 md:text-2xl": "ordinary" },
        { "mt-10 mb-5 text-lg text-primary md:mt-14 md:mb-8 md:text-2xl": "bold" },
      ])}
    >
      {props.children}
    </h2>
  );
};
export const ProductTitle: FC<FontProps> = (props) => {
  return <h1 className="mb-6 mt-10 text-xl font-bold leading-relaxed text-primary">{props.children}</h1>;
};
export const ProductMainTitle: FC<FontProps> = (props) => {
  return <h1 className="mb-6 text-xl font-bold leading-relaxed text-primary md:text-2xl">{props.children}</h1>;
};
