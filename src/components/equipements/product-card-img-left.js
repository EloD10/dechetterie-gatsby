import React from "react";

import { Link } from "gatsby";
import productImg from "../../images/equipements/dechets-ordinaires.jpg";

const cardImg = {
  position: "relative",
  backgroundImage: `url(${productImg})`,
  backgroundPosition: "center",
  transition: "all .5s",
  overflow: "hidden",
};

export default props => (
  <div className="max-w-3lg w-full lg:flex my-2">
    <div className="h-48 lg:h-auto lg:w-48 flex-none overflow-hidden">
      <div
        className="h-full bg-cover rounded lg:rounded-t-none lg:rounded-l text-center border"
        css={cardImg}
        style={{ backgroundImage: `url(${props.img})` }}
        title="ordinary-waste"
      />
    </div>
    <div className="relative border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
      <div className="w-full"/>
      <div className="mb-8">
        <div className="text-blue-darkest font-bold text-xl mb-2">
          {props.title}
        </div>
        <p className="text-grey-darker text-base overflow-y-auto h-32">
          {props.body}
        </p>
      </div>
      <div class="flex items-center">
            <svg className="fill-current text-blue-darkest w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M4 2h16l-3 9H4a1 1 0 1 0 0 2h13v2H4a3 3 0 0 1 0-6h.33L3 5 2 2H0V0h3a1 1 0 0 1 1 1v1zm1 18a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm10 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/></svg>
            <div class="text-sm">
                <Link to={props.link} class="text-blue-darker bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2 no-underline hover:underline">Commander</Link>
            </div>
        </div>
    </div>
  </div>
);
