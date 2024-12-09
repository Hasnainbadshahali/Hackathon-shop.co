import React from "react";



const hero = () => {
  return (
    <section>
      <div className="flex flex-col border-b mx-auto md:flex-row items-center w-[1440px] height-663px top-134px">
        {/* left div */}
        <div className="flex-1">
          <h1 className="text-4xl sm:text-5xl font-bold mt-4">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>
          <p className="mt-6 text-lg text-slate-600 max-w-x1">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>{" "}
          <br />
          

        </div>

        {/* right div */}
        <div className="flex-1">
          <img src="../Rectangle.png" alt="Hero poster" />
        </div>
      </div>
      <div className=" bg-black shadow-2xl text-yellow-50  border-b mx-auto flex flex-col w-[1440px] height-[122px] ">
      <nav className=" md-flex space-x-12 text-center">
          <a className="text-slate-300  ">
          VERSACE{" "}
          </a>
          <a className="text-slate-300  ">
            ZARA
          </a>
          <a className="text-slate-300  ">
            GUCCI
          </a>
          <a className="text-slate-300 ">
            PRADA
          </a>
          <a className="text-slate-300 ">
            CALVIN KLEIN
          </a>
        </nav>
      </div>
    </section>
  );
};

export default hero;


