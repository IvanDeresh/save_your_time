import { clock, prod } from "../../assets/img";
import Cube from "./components/GravityCube";

const Home = () => {
  return (
    <div className="h-screen w-full flex items-center">
      <div className="w-1/2 relative">
        <Cube />
        <div className="absolute w-[100px] h-[100px] bg-black blur-3xl left-60 top-36 text-center flex items-center justify-center rounded-full shadow-[0px_4px_30px_rgba(0,0,0,0.2)]"></div>
      </div>
      <main className="w-1/2 flex gap-2 flex-col items-start ">
        <h2 className="font-bold uppercase text-2xl">Save Your Time</h2>
        <h3 className="font-bold uppercase text-md">
          Save Your Time &#8211; Maximize Every Moment!
        </h3>
        <p className="font-nunito font-extralight text-start">
          Save Your Time is your ultimate productivity companion, designed to
          help you organize tasks, set priorities, and manage your schedule
          effortlessly. With intuitive tools for time tracking, reminders, and
          goal setting, this app ensures you stay on top of your day while
          minimizing wasted time. Optimize your workflow, boost efficiency, and
          make every second count!
        </p>
        <div className="flex gap-2">
          <img className="w-8" src={clock} alt="sand clock icon" />
          <img className="w-8" src={prod} alt="productivity icon" />
        </div>
      </main>
    </div>
  );
};

export default Home;
