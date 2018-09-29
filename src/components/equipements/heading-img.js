import React from "react"
import Img from "gatsby-image"

const containerImg = {
    height: '16rem',
    overflow: 'hidden',
}
const styleImg = {
    marginTop: '-300px'
}

const redColor = '#fa5252'
const textImg = {
    background:
        `linear-gradient(
            to right,
            ${redColor} 0%,
            ${redColor} 5px,
            transparent
        )`,
    backgroundRepeat: 'repeat-x',
	backgroundSize: '100%',
}

export default (props) => (
    <div className="hidden md:block relative">
        <div className="" css={containerImg}>
            <Img css={styleImg} fluid={props.img}  className="shadow-inner" alt="randy-laybourne"/>
        </div>
        <h1 className="text-white absolute text-5xl pin-t mt-2 ml-2 md:mt-8 md:ml-8 p-2 font-slab" css={textImg}>{props.title}</h1>
    </div>
)