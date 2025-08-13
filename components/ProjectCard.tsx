import Image from "next/image";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import { useState } from "react";

type ProjectCardProps = {
  projectImg: string;
  projectName: string;
  projectTools: string[];
  projectDesc: string;
  projectGithub: string;
  // projectLink: string;
};

const ProjectCard = ({
  projectImg,
  projectName,
  projectTools,
  projectDesc,
  projectGithub,
}: ProjectCardProps) => {
  const [hover, setHover] = useState(false);
  const toggleHover = () => {
    setHover(!hover);
  };

  return (
    <div
      className="flex flex-col bg-white rounded-[20px]"
      onMouseLeave={() => {
        if (hover) toggleHover();
      }}
    >
      <Image
        className="w-full aspect-square object-cover rounded-t-[20px]"
        width={100}
        height={100}
        src={projectImg}
        alt={projectName}
      />
      <div className="relative p-5">
        <div className="flex justify-between items-center">
          <span className="text-xl font-semibold">{projectName}</span>
          <Link className="text-2xl" href={projectGithub} target="_blank">
            <FontAwesomeIcon icon={faGithub} />
          </Link>
        </div>
        <div className="flex gap-2 mt-2 mb-2 pb-2 custom-scroll">
          {projectTools.map((tool: string, index: number) => (
            <span
              key={index}
              className="bg-accent text-sm text-white py-1 px-2 rounded-[5px]"
            >
              {tool}
            </span>
          ))}
        </div>
        <p
          className={`text-justify overflow-hidden transition-all duration-500 ease-in-out ${
            hover ? "max-h-[1000px]" : "max-h-[96px]"
          }`}
        >
          {projectDesc}
        </p>
        <p
          className={
            hover
              ? `hidden absolute bottom-[22px] right-5 bg-white pl-1 text-sm text-accent font-semibold cursor-pointer`
              : `absolute bottom-[22px] right-5 bg-white pl-1 text-sm text-accent font-semibold cursor-pointer`
          }
          onClick={toggleHover}
        >
          <span className="text-secondary">...</span> Read more
        </p>
        {/* <button className="relative inline-block w-full bg-main text-center text-white font-medium mt-6 py-2 rounded-[10px]">
          See details{" "}
          <FontAwesomeIcon
            className="absolute top-1/2 right-4 -translate-y-1/2"
            icon={faArrowRight}
          />
        </button> */}
      </div>
    </div>
  );
};

export default ProjectCard;
