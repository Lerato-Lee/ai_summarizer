import React from "react";

import { logo } from "../assets";

const Hero = () => {
  return (
    <header className='flex flex-col items-center justify-center w-full'>
      <nav className='flex items-center justify-between w-full pt-3 mb-10'>
        <img src={logo} alt='sumz_logo' className='object-contain w-28' />

        <button
          type='button'
          onClick={() =>
            window.open("https://github.com/Lerato-Lee")
          }
          className='black_btn'
        >
          GitHub
        </button>
      </nav>

      <h1 className='head_text'>
        Summarize Articles with <br className='max-md:hidden' />
        <span className='orange_gradient '>OpenAI GPT-4</span>
      </h1>
      <h2 className='desc'>
        Simplify your reading with Sumz, an open-source article summarizer
        that transforms lengthy articles into crystal clear and concise summaries.
      </h2>
    </header>
  );
};

export default Hero;