import React from "react"
import { Link } from "gatsby"


export default (props) => (
<article className="py-8 mx-4 md:mx-24">
    <div className="flex flex-col md:flex-row">
        <div className="md:hidden mb-2 md:mb-0 h-5/6 w-auto max-w-sm">
            <img className="min-w-full shadow-outline" src={props.srcImg} alt={props.altImg} />
        </div>
        <div className="flex flex-col md:px-8 text-left md:text-right relative items-start md:items-end text-blue-darker">
            <h3 className="pb-2 font-slab">{props.title}</h3>
            <p className="leading-normal">{props.body}</p>
            <Link to={props.link} className="no-underline text-green-light font-bold mt-4 flex items-center hover:text-blue-darker">
                <svg className="hidden md:inline-block h-6 w-6 mr-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm8-10a8 8 0 1 0-16 0 8 8 0 0 0 16 0zM7.46 9.3L11 5.75l1.41 1.41L9.6 10l2.82 2.83L11 14.24 6.76 10l.7-.7z"/></svg>
                <span className="">{props.linkBody}</span>
                <svg className="inline-block md:hidden h-6 w-6 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 0a10 10 0 1 1 0 20 10 10 0 0 1 0-20zM2 10a8 8 0 1 0 16 0 8 8 0 0 0-16 0zm10.54.7L9 14.25l-1.41-1.41L10.4 10 7.6 7.17 9 5.76 13.24 10l-.7.7z"/></svg>
            </Link>
        </div>
        <div className="hidden md:inline mb-4 sm:mb-0 w-auto max-w-sm mr-8">
            <img className="shadow-outline" src={props.srcImg} alt={props.altImg} />
        </div>
    </div>
</article>
)