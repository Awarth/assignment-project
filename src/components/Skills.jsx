import { data } from "./MySkills";

function Skills() {
  return (
    <section
      id="skills"
      className="max-w-[1300px] w-full flex flex-col justify-center items-center py-8"
    >
      <h2 className="text-center text-5xl font-bold text-[#333333] mb-4">
        My Skills
      </h2>
      <p className="text-center text-[#4D4D4D] w-[70%] text-2xl font-semibold max-[800px]:w-[80%] max-[500px]:w-[100%] max-[500px]:text-xl mb-7">
        I put your ideas and thus your wishes into the form of a unique web
        project that inspires you and your customers.
      </p>
      <div className="skillsCollection flex flex-wrap justify-center items-center gap-6">
        {data.map((item, index) => (
          <div
            className="skillsCard flex flex-col justify-center items-center bg-[#F7F6F3] rounded-lg w-44 p-3 aspect-square grayscale hover:translate-y-[-8px] hover:grayscale-0 hover:shadow-[0px_8px_24px_rgba(149,157,165,0.2)] transition-all duration-200 ease-in text-center gap-2"
            key={index}
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-[90%] aspect-square"
            />
            <p className="text-2xl font-semibold text-[#4D4D4D]">{item.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
