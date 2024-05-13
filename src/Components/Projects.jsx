import { projectData } from "../Constants";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

function Projects() {
  return (
    <section className="flex justify-center flex-col items-center">
      <h1 className="text-sm text-blue-500 font-montserrat font-bold">
        Projects
      </h1>
      <div className="  w-[85%] flex justify-center flex-col items-center ">
        {projectData.map((val) => (
          <>
            <div
              key={val.title}
              className=" relative flex justify-center flex-col md:flex-row items-center mt-6 bg-gray-100 rounded-xl border-black/5 border-2 "
            >
              <div className="md:max-w-[32rem] md:h-full w-full  md:pr-8  flex">
                <div className="py-4 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-1/2 flex flex-col ">
                  <h2 className="text-2xl font-semibold ">{val.title}</h2>
                  <p className="mt-2 leading-relaxed text-gray-700 text-wrap">
                    {val.description}
                  </p>
                  <ul className="flex flex-wrap mt-4 gap-2 ">
                    {val.tag.map((tagval, index) => (
                      <li
                        key={index}
                        className="bg-black/[0.5] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
                      >
                        {tagval}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-row gap-4 mt-4">
                    <a href={val.git} target="_blank">
                      <button className="bg-black/[0.7] hover:bg-gradient-to-r from-pink-500 hover:to-yellow-500 px-3 py-1 text-[0.7rem] uppercase tracking-wider flex justify-center items-center gap-2 text-white rounded-full">
                        <span>Git link</span> <FaGithub className="text-xl" />
                      </button>
                    </a>
                    <a href={val.live} target="_blank">
                      <button className="bg-black/[0.7] hover:bg-gradient-to-r from-green-400 to-blue-500 px-3 py-1 flex justify-center items-center gap-2 text-[0.7rem] uppercase tracking-wider text-white rounded-full">
                        Live Demo <FaArrowCircleRight className="text-xl" />
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              <img
                src={val.imgUrl}
                alt={val.title}
                className="md:w-[40.25rem] w-full rounded-lg shadow-2xl "
              />
            </div>
          </>
        ))}
      </div>
    </section>
  );
}

export default Projects;
