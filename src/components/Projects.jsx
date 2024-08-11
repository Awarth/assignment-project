import { ArrowCircleRight } from "@phosphor-icons/react";

function Projects() {
  return (
    <section
      id="project"
      className="max-w-[1300px] w-full flex flex-col items-center justify-center py-8"
    >
      <h2 className="text-center text-5xl font-bold text-[#333333] mb-4">
        My Projects
      </h2>
      <p className="text-center text-[#4D4D4D] w-[70%] text-2xl font-semibold max-[800px]:w-[80%] max-[500px]:w-[100%] max-[500px]:text-xl mb-7">
        We put your ideas and thus your wishes in the form of a unique web
        project that inspires you and you customers.
      </p>
      <div className="projectCollection w-full flex justify-center items-center gap-8 max-[800px]:flex-col">
        <div className="projectContainer w-[45%] max-[800px]:w-[75%]  max-[500px]:w-[90%]  p-6 relative rounded-xl bg-[#F5F3F0] duration-300 transition-all ease-in">
          <div className="projectCard">
            <iframe
              src="https://pizza-website-sooty.vercel.app/"
              className="w-full aspect-square"
            ></iframe>
          </div>
          <a
            href="https://pizza-website-sooty.vercel.app/"
            className="hoverCard border w-[90%] py-4 rounded-lg bg-white"
          >
            <div className="flex w-full justify-evenly items-center">
              <h3 className="text-3xl">Pizza Website</h3>
              <ArrowCircleRight size={32} />
            </div>
          </a>
        </div>
        <div className=" projectContainer overflow-hidden w-[45%] max-[800px]:w-[75%] max-[500px]:w-[90%] p-6 relative rounded-xl bg-[#F5F3F0] duration-300 transition-all ease-in">
          <div className="projectCard ">
            <iframe
              src="https://the-indian-times.vercel.app"
              className="w-full aspect-square"
            ></iframe>
          </div>
          <a
            href="https://the-indian-times.vercel.app"
            className="hoverCard w-[90%] border py-4 rounded-lg bg-white"
          >
            <div className="flex w-full justify-evenly items-center">
              <h3 className="text-3xl">News Website</h3>
              <ArrowCircleRight size={32} />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
