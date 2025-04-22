import React from 'react'
import { useState } from "react";
import ltaly from '../img/Ltaly.png';
import Spain from '../img/Spain.png';
import Us from '../img/US.png';
import Russia from '../img/Russia.png';

const continent = ["All", "Asia", "Europe", "America", "Oceania"];
const yearsvalue = [1000, 1300, 1700, 2000];
const countryData = [
  {
    region: "Europe",
    name: "Italy, Pica",
    year: "1173",
    image: ltaly,
    title: "The Leaning Tower of Pisa, or simply the Tower of Pisa (torre di Pisa), is the campanile, or freestanding bell tower, of Pisa Cathedral. It is known for its nearly four-degree lean, the result of an unstable foundation. The tower is one of three structures in the Pisa's Cathedral Square (Piazza del Duomo), which includes the cathedral and Pisa Baptistry.",
  },
  {
    region: "Europe",
    name: "Spain, Sagrada Família",
    year: "1882",
    image: Spain,
    title: "The Basílica i Temple Expiatori de la Sagrada Família, otherwise known as Sagrada Família, is a church under construction in the Eixample district of Barcelona, Catalonia, Spain. It is the largest unfinished Catholic church in the world. Designed by Catalan architect Antoni Gaudí (1852–1926), in 2005 his work on Sagrada Família was added to an existing (1984) UNESCO World Heritage Site, Works of Antoni Gaudí. On 7 November 2010, Pope Benedict XVI consecrated the church and proclaimed it a minor basilica.",
  },
  {
    region: "America",
    name: "US, Fallingwater",
    year: "1935",
    image: Us,
    title: "Fallingwater is a house designed by the architect Frank Lloyd Wright in 1935. Situated in the Mill Run section of Stewart township, in the Laurel Highlands of southwest Pennsylvania, about 70 miles (110 km) southeast of Pittsburgh in the United States, it is built partly over a waterfall on the Bear Run river. The house was designed to serve as a weekend retreat for Liliane and Edgar J. Kaufmann, the owner of Pittsburgh's Kaufmann's Department Store.",
  },
  {
    region: "Asia",
    name: "Russia, Saint Basil's Cathedral",
    year: "1555",
    image: Russia,
    title: "The Cathedral of Vasily the Blessed (Russian: Собор Василия Блаженного, romanized: Sobor Vasiliya Blazhennogo), known in English as Saint Basil's Cathedral, is an Orthodox church in Red Square of Moscow, and is one of the most popular cultural symbols of Russia.",
  },
];

function Section3() {
  const [selectedContinent, setSelectedContinent] = useState("All");
  const [selected, setSelected] = useState(1000);
  const filteredCountry = countryData.filter((item) => {
    const matchesContinent = selectedContinent === "All" || item.region === selectedContinent;
    const year = parseInt(item.year);
    const matchesYear = year >= selected && year <= 2000;

    return matchesContinent && matchesYear;
  });

  return (
    <section>
      <div className='w-[1680px] mx-auto'>
        <span className='mt-[120px] block font-exo text-5xl leading-[72px] -tracking-[0.72px] ml-[80px] mb-[60px]'>Duis tincidunt ut ligula vitae mollis.</span>
        <div className="flex gap-5 items-center justify-start ml-[80px]">
          <div className="w-[408px] h-[50px] flex items-center justify-center gap-[5px] border border-black border-opacity-50 px-4 rounded-full">
            {continent.map((cont) => (
              <button
                key={cont}
                onClick={() => setSelectedContinent(cont)}
                className={`px-4 py-3 rounded-full text-base font-exo leading-none -tracking-[0.24px] transition-all duration-500 ease-in-out
              ${selectedContinent === cont ? "bg-black text-white" : "text-black"}`}
              >
                {cont}
              </button>
            ))}
          </div>
          <div className="w-[408px] h-[50px] flex items-center justify-between border border-black border-opacity-50 px-0 py-2 rounded-full relative">
            {yearsvalue.map((val, index) => {
              const isActive = val >= selected;
              const isLast = index === yearsvalue.length - 1;

              return (
                <div
                  key={val}
                  onClick={() => setSelected(val)}
                  className="relative w-[50px] flex flex-col items-center cursor-pointer group transition-all duration-300"
                >
                  <div
                    className={`w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 ease-in-out z-10
                  ${isActive ? "bg-black text-white border-black" : "bg-bordercolor text-white"}`}
                  >
                    <span className="text-sm font-exo -tracking-[0.21px] text-white">{val}</span>
                  </div>

                  {!isLast && (
                    <div
                      className={`absolute top-[40%] left-[7.1%] translate-x-1/2 h-[10px] w-[80.6px] 
              transition-all duration-500 ease-in-out
              ${selected < yearsvalue[index + 1] ? "bg-black" : "bg-bordercolor"}`}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex gap-10 mx-[80px] mt-[69px] mb-[80px]">
        {filteredCountry.length > 0 ? (
          filteredCountry.map((item, index) => (
            <div
              key={index}
              className="w-[400px] h-[415px] bg-bgcolor bg-opacity-50 border rounded-[10px] shadow-md p-5 flex flex-col"
            >
              <div className="flex justify-between items-center mb-[9px]">
                <span className="text-base text-black font-montserrat-bold -tracking-[0.24px]">{item.name}</span>
                <span className="text-base text-black font-montserrat -tracking-[0.24px]">{item.year}</span>
              </div>

              <img
                src={item.image}
                alt={item.name}
                className="w-[360px] h-[227.1px] rounded-[5px] mb-[19.9px]"
              />

              <span className="text-sm leading-none font-montserrat -tracking-[0.21px] text-black line-clamp-6">
                {item.title}
              </span>
            </div>
          ))
        ) : (
          <div className="text-center text-gray-400 text-lg font-montserrat w-full h-[415px] flex items-center justify-center border border-dashed rounded-xl">
            해당 지역/연도에는 건물 데이터가 없습니다.
          </div>
        )}
      </div>

    </section>
  )
}

export default Section3
