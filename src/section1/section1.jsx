import React from 'react'
import { useEffect, useState } from "react";
import girl from "../img/Girl.png"
import Man from "../img/Man.png"
import Cat from "../img/Cat.png"

const profileData = [
  {
    id: 1,
    image: girl,
    name: "Sed ut perspiciatis",
    title: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem.",
    more: "LEARN MORE",
  },
  {
    id: 2,
    image: Man,
    name: "Lorem ipsum dolor",
    title: "Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
    more: "LEARN MORE",
  },
  {
    id: 3,
    image: Cat,
    name: "Nemo enim ipsam",
    title: "Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor.",
    more: "LEARN MORE",
  },
];
const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};
function Section1() {
  const [profiles, setProfiles] = useState(() => shuffleArray(profileData));
  return (
    <section className="">
      <div className='w-[1680px] h-[300px] mb-[70px] mx-auto'>
        <span className="pt-[120px] ml-[80px] mr-[850px] block font-normal text-5xl leading-normal text-left -tracking-[0.72px]">Snap photos and share like<br /> never before</span>
      </div>
      <div className="flex justify-center gap-5 mx-[80px]">
        {profiles.map((profile) => (
          <div
            key={profile.id}
            className="w-[493px] h-[352px] bg-white rounded-xl flex flex-col items-start"
          >
            <img
              src={profile.image}
              alt={profile.name}
              className="w-[108px] h-[108px] rounded-full mb-10"
            />
            <span className="text-2xl leading-9 font-montserrat-bold -tracking-[0.36px] mb-[24px]">{profile.name}</span>
            <span className="text-lg leading-[30px] font-montserrat -tracking-[0.27px] mb-[24px] text-black opacity-80">{profile.title}</span>
            <span className="text-lg leading-[30px] text-blue font-Exo2-Bold -tracking-[0.27px]">{profile.more}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Section1
