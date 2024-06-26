/* eslint-disable @typescript-eslint/naming-convention */
import cc from "classcat";
import type { FC } from "react";
import { Logo, LogoSmall } from "src/component/Logo";

type Props = {
  className?: string;
  opacity?: "100" | "80" | "0";
};

/**
 * @package
 */
export const Header: FC<Props> = (props) => {
  return (
    <header>
      <div className="absolute right-[10%] top-2 z-50 translate-x-[50%] translate-y-[50%] justify-between sm:block md:right-[6%]">
        <Logo />
        <LogoSmall />
      </div>
      <div className="relative flex min-w-full justify-center pb-32 pt-16 opacity-100">
        <div
          className={cc([
            {
              "absolute top-0 w-full h-full bg-top bg-cover opacity-100": props.opacity === "100",
            },
            {
              "absolute top-0 w-full h-full bg-top bg-cover opacity-80": props.opacity === "80",
            },
            {
              "absolute top-0 w-full h-full bg-top bg-cover opacity-0": props.opacity === "0",
            },
          ])}
          style={{
            backgroundImage: "url('/static/images/header/background.webp')",
          }}
        ></div>
        <div className="container relative w-full py-4 text-center sm:py-10 md:py-14">
          <div className="absolute right-[50%] top-[30%] z-30 translate-x-[50%] translate-y-[50%] sm:top-[35%]">
            <h1 className="z-20 text-2xl font-black text-white sm:text-3xl md:whitespace-nowrap md:text-4xl lg:text-5xl lg:tracking-wide xl:text-7xl">
              <span className="whitespace-nowrap font-caribri">Gen-Scent Research</span>{" "}
              <span className="font-caribri">Laboratory</span>
            </h1>
          </div>
        </div>
      </div>
    </header>
  );
};
