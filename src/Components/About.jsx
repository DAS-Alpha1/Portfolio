import Timeline from "./Timeline";

function About() {
  return (
    <div className="flex flex-col w-full h-full items-center">
      <div className="flex flex-col md:flex-row justify-center items-center max-container w-full pt-20 gap-8">
        <div className="md:w-[30%] w-[50%] pr-4 ">
          <img
            src="about-img.62b47e7f183d4b4e9feb.webp"
            alt="aboutimg"
            className="rounded-2xl"
          />
        </div>
        <div className="flex flex-col md:w-[30%] w-[50%] gap-2">
          <h2 className="text-sm text-blue-500 font-montserrat font-bold">
            About me
          </h2>
          <h1 className="text-xl font-rubik font-semibold">
            Front-end Developer based in Madurai, India 📍
          </h1>
          <p className="text-sm font-palanquin text-slate-700">
            Hey, my name is Deeraj Alagarsamy V R, and I'm a Frontend Developer.
            My passion is to create and develop a clean UI/UX for my users.
          </p>
          <p className="text-sm font-palanquin text-slate-700">
            My main stack currently is React.js in combination with Tailwind
            CSS.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-4 pt-16">
        <div className="px-4 md:border-r-2  border-black max-md:border-b-2">
          Tech Stack
        </div>
        <div className="flex flex-row gap-2">
          <img
            src="icons8-html-5.svg"
            alt="html"
            className="transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110  duration-300 "
          />
          <img
            src="icons8-css-logo.svg"
            alt="css"
            className="transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110  duration-300 "
          />
          <img
            src="icons8-javascript.svg"
            alt="html"
            className="transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110  duration-300 "
          />
          <img
            src="icons8-react.svg"
            alt="html"
            className="w-[42px] transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110  duration-300"
          />
          <img
            src="icons8-tailwind-css.svg"
            alt="html"
            className="transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110  duration-300 "
          />
        </div>
      </div>
      <div className="pt-16 flex-col justify-center items-center ">
        <Timeline />
      </div>
    </div>
  );
}

export default About;
//dev-work.png
