import React from 'react'
import send from '../img/paper-plane.png'
import { useEffect, useState } from "react";



function Section2() {
  const accessKey = "RfZSbn_rdvEPrnhslq8HRwmCwyayZg3DBo_LDcXXaTM";
  const [bgimage, setBgimage] = useState("");
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(null);

  useEffect(() => {
    const image = localStorage.getItem("bgImage");

    if (image) {
      setBgimage(image);
    } else {
      fetch(`https://api.unsplash.com/photos/random?client_id=${accessKey}`)
        .then((res) => res.json())
        .then((data) => {
          const imageUrl = data.urls.full;
          localStorage.setItem("bgimage", imageUrl);
          setBgimage(imageUrl);
        })
        .catch((err) => {
          console.error("이미지를 불러오지 못했습니다.", err);
        });
    }
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setIsValid(/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i.test(value));
  };
  return (
    <section
      className="w-[1680px] h-[740px] mx-auto bg-cover bg-center relative flex flex-col justify-center items-center mt-[110px]"
      style={{ backgroundImage: `url(${bgimage})` }}
      >
      <span className='text-white font-montserrat-bold -tracking-[0.36px] text-2xl leading-9 mb-[23px]'>Sed ut perspiciatis unde omnis</span>
      <span className='text-white opacity-80 font-montserrat text-lg -tracking-[0.27px] leading-[30px] mx-[80px] mb-[32px]'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</span>
      <div className='bg-white opacity-50 w-[1520px] h-[1px] mb-8'></div>
      <span className='text-white opacity-60 font-montserrat -tracking-[0.21px] text-sm leading-[22px] mb-[95px]'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.</span>
      <span className="text-white font-Exo2-Bold text-base -tracking-[0.24px] mb-4">Subscribe to our Newsletter</span>
      <div className={`w-[500px] h-[50px] backdrop-blur-[10px] bg-white/20 rounded-xl flex flex-row items-center gap-2 mx-auto border
        ${isValid === null ? "border-green-400" : isValid ? "border-green" : "border-orange"}`
      }>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleChange}
          className="w-[446px] p-3 rounded-[7px] text-white placeholder-white/60 bg-transparent focus:outline-none"
        />
        <img className='w-8 h-8' src={send} alt="send" />
      </div>
      {isValid === false && (
        <p className="w-[480px] text-orange text-sm mt-2">Please enter a vaild email!</p>
      )}
    </section>
  )
}

export default Section2
