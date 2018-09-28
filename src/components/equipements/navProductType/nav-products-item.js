import React from "react";
import { Link } from 'gatsby';

const buttunBg = {
    overflow: "hidden",
    ":hover": {
        backgroundPosition: '25% 75%',
    },
    transition: "all .5s",
  };

export default (props) => (
<div className="flex justify-center items-center w-full max-w-xs mx-4 h-10 rounded" css={buttunBg} style={{ backgroundImage: `url(${props.img})` }}>
    <Link to={props.linkUrl} className="no-underline font-bold text-blue-lightest tracking-tight">{props.text}</Link>
</div>
);