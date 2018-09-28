import React from "react";

const cardImg = {
  position: "relative",
  backgroundPosition: "center",
  transition: "all .5s",
  overflow: "hidden",
  ":hover": {
    transform: "scale(1.2)"
  }
};

const gradientOverflow = {
  position: "absolute",
  bottom: "0px",
  left: "0px",
  height: "30%",
  background: `linear-gradient(
        to top,
        white 0%,
        white 50%,
        transparent
    )`
};

export default props => (
  <div className="max-w-3lg w-full lg:flex my-2">
    <div className="h-48 lg:h-auto lg:w-48 flex-none overflow-hidden">
      <div
        className="h-full bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center"
        css={cardImg}
        style={{ backgroundImage: `url(${props.img})` }}
        title="ordinary-waste"
      />
    </div>
    <div className="relative border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
      <div className="w-full" css={gradientOverflow} />
      <div className="mb-8">
        {/* <p className="text-sm text-blue items-center">
          <svg
            className="fill-current text-blue-light w-3 h-3 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zM9 5v6h2V5H9zm0 8v2h2v-2H9z" />
          </svg>
          Découvrez nos solutions pour
          <span className="mx-1 font-semibold underline text-blue">
            professionnel
          </span>
          ou
          <span className="mx-1 font-semibold underline text-green">
            particulier
          </span>
        </p> */}
        <div className="text-blue-darkest font-bold text-xl mb-2">
          {props.title}
        </div>
        <p className="text-grey-darker text-base overflow-y-auto h-32">
          {props.body}
        </p>
      </div>
    </div>
  </div>
);
