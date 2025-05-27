"use client";

import { useEffect } from "react";
import { renderCanvas } from "@/components/ui/canvas";
import { DIcons } from "dicons";
import { motion } from "framer-motion";

export function Hero() {
  useEffect(() => {
    renderCanvas();
  }, []);

  return (
    <motion.section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-gray-900 via-black to-black"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="animation-delay-8 animate-fadeIn pt-1 flex flex-col items-center justify-center px-4 text-center">
        <div className="z-10 mb-6 md:mt-5 sm:justify-center md:mb-4">
          {/*
            Uncomment and customize this promo badge if needed:
            <div className="relative flex items-center whitespace-nowrap rounded-full border bg-popover px-3 py-1 text-xs leading-6 text-primary/60">
              <DIcons.Shapes className="h-5 p-1" />
              Introducing Dicons.
              <a
                href="/products/dicons"
                rel="noreferrer"
                className="hover:text-ali ml-1 flex items-center font-semibold"
              >
                <div className="absolute inset-0 flex" aria-hidden="true" />
                Explore{" "}
                <span aria-hidden="true">
                  <DIcons.ArrowRight className="h-4 w-4" />
                </span>
              </a>
            </div>
          */}
        </div>

        <div className="mb-10">

          <div className="w-full mx-auto hidden md:flex items-center justify-around ">
            <h2 className="mb-7 md:mb-10 text-2xl md:text-6xl font-semibold text-gray-50 uppercase">
              Tas-HEEL Co
            </h2>
            <h2 className="mb-7 md:mb-10 text-2xl md:text-6xl font-semibold text-gray-50">
              تسهیل ک
            </h2>
          </div>

          {/* <p className="md:text-md mx-auto mb-16 mt-2 max-w-2xl px-6 text-sm text-gray-50 sm:px-6 md:max-w-4xl md:px-20 lg:text-lg">
            I craft enchanting visuals for brands, and conjure design resources
            to empower others.
          </p> */}

          <div className="px-2">
            <div className="border-white relative mx-auto h-full max-w-7xl border p-6  [mask-image:radial-gradient(800rem_96rem_at_center,white,transparent)] md:px-12 md:py-16">
              <h1 className="flex font-serif capitalize select-none flex-col px-3 py-2 text-center text-5xl font-semibold leading-none tracking-tight md:flex-col md:text-8xl lg:flex-row lg:text-8xl text-white">
                <DIcons.Plus
                  strokeWidth={4}
                  className="text-white absolute -left-5 -top-5 h-10 w-10"
                />
                <DIcons.Plus
                  strokeWidth={4}
                  className="text-white absolute -bottom-5 -left-5 h-10 w-10"
                />
                <DIcons.Plus
                  strokeWidth={4}
                  className="text-white absolute -right-5 -top-5 h-10 w-10"
                />
                <DIcons.Plus
                  strokeWidth={4}
                  className="text-white absolute -bottom-5 -right-5 h-10 w-10"
                />
                Setup your business investment with expert!
              </h1>
              <div className="flex items-center justify-center gap-1 md:mt-6">
                <span className="relative flex h-3 w-3 items-center justify-center">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                </span>
                <p className="text-xs text-green-500">Available Now</p>
              </div>
            </div>
          </div>

          {/*
            Uncomment and customize these buttons if you want CTAs:
            <div className="flex justify-center gap-2">
              <Link href={"/dashboard"}>
                <Button variant="default" size="lg">
                  Start Project
                </Button>
              </Link>
              <Link href={"https://cal.com/aliimam/designali"} target="_blank">
                <Button variant="outline" size="lg">
                  Book a call
                </Button>
              </Link>
            </div>
          */}
        </div>
      </div>

      <canvas
        id="canvas"
        className="bg-skin-base pointer-events-none absolute inset-0 mx-auto"
      ></canvas>
    </motion.section>
  );
}
