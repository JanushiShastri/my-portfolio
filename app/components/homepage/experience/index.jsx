import { experiences } from "@/utils/data/experience";
import Image from "next/image";
import { FaGithub, FaFilePowerpoint } from "react-icons/fa";
import GlowCard from "../../helper/glow-card";
import AnimationLottie from "../../helper/animation-lottie";
import experienceAnimation from '/public/lottie/code.json';

function Experience() {
  return (
    <div id="experience" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <Image
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center relative w-full">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-3xl rounded-md flex items-center gap-4 mx-auto">
            Experiences
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <div className="absolute right-10 w-50 h-40 max-w-lg">
            <AnimationLottie animationPath={experienceAnimation} />
          </div>
          <div className="absolute left-10 w-50 h-40 max-w-lg">
            <AnimationLottie animationPath={experienceAnimation} />
          </div>
        </div>
      </div>

      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
            {experiences.map((experience) => (
              <div key={experience.id} className="flex flex-col items-center justify-center">
                <GlowCard identifier={`experience-${experience.id}`} className="w-80 h-96 flex flex-col justify-between items-center relative">
                  <div className="absolute top-2 left-2 flex gap-2">
                    <a
                      href={experience.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-gray-700"
                    >
                      <FaGithub size={20} />
                    </a>
                    <a
                      href={experience.ppt}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-gray-700"
                    >
                      <FaFilePowerpoint size={20} />
                    </a>
                  </div>
                  <div className="p-3 w-full h-full flex flex-col justify-between overflow-hidden">
                    <Image
                      src="/blur-23.svg"
                      alt="Hero"
                      width={1080}
                      height={200}
                      className="absolute bottom-0 opacity-80"
                    />
                    <div className="text-center overflow-auto p-4">
                      <a href={experience.github} target="_blank" rel="noopener noreferrer" className="text-lg sm:text-xl font-bold text-[#16f2b3] font-medium hover:underline">
                        {experience.title}
                      </a>
                      <p className="text-sm sm:text-base font-bold">{experience.company}</p>
                      <p className="text-xs sm:text-sm text-[#16f2b3] mt-2">{experience.duration}</p>
                      <div className="text-justify mt-4">
                        {experience.description.map((desc, index) => (
                          <p
                            key={index}
                            className="text-sm mb-2"
                            dangerouslySetInnerHTML={{ __html: desc }}
                          ></p>
                        ))}
                        <p className="text-sm font-semibold mt-2"></p>
                        <div className="flex overflow-x-auto no-scrollbar whitespace-nowrap">
                          {experience.skills.map((skill, index) => (
                            <span key={index} className="text-sm text-amber-500 font-bold mr-2">{skill}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </GlowCard>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
