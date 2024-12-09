"use client";

import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import React from "react";
import { FaDocker, FaGitAlt, FaNodeJs, FaReact } from "react-icons/fa";
import { SiDotnet, SiMysql, SiTypescript } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { AiOutlineJavaScript } from "react-icons/ai";

export default function StackTech() {
  const plugin = React.useRef(
    Autoplay({ delay: 1500, stopOnFocusIn: false, stopOnInteraction: false })
  );
  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full"
      opts={{ align: "start", loop: true }}
    >
      <CarouselContent>
        {ListIcons.map((icon, index) => (
          <CarouselItem
            className="md:basis-1/2 lg:basis-1/6 flex justify-center"
            key={index}
          >
            {icon}
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

const ListIcons = [
  <FaReact key="react" className="size-11" />,
  <SiDotnet key="react" className="size-11" />,
  <SiTypescript key="react" className="size-11" />,
  <FaNodeJs key="react" className="size-11" />,
  <FaDocker key="react" className="size-11" />,
  <SiMysql key="react" className="size-11" />,
  <RiNextjsFill key="react" className="size-11" />,
  <AiOutlineJavaScript key="react" className="size-11" />,
  <FaGitAlt key="react" className="size-11" />,
];
