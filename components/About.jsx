import React from "react";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div
      id="about"
      className="w-full md:h-screen p-2 flex items-center py-16 px-11"
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            I specialize in building mobile responsive front-end UI applications
            that connect with API’s and other backend technologies. I’m
            passionate about learning new technologies and understand there is
            more than one way to accomplish a task. I am a quick learner and can
            pick up new tech stacks as needed. I believe that being a great
            developer is not using one specific language, but choosing the best
            tool for the job.
          </p>
          <p className="py-2 text-gray-600">
            I started coding about two years ago, it was something my dad and
            brother got me into, however, I originally did not find it
            interested, because I just wasnt sure what the end result ever was.
            After I got introduced to front end development, that all changed. I
            immediately saw change on the screen from my first div tag on a HTML
            page, and now, after alot of hard work, I have built more complex
            apps, and thouroughly see why both front and and back and
            development are phenomenal.
          </p>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
