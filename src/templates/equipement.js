import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";

const Template = ({ data }) => {
  const { markdownRemark: product } = data;
  const { frontmatter } = product;
  return (
    <Layout>
      <div className="px-4 lg:px-32 mt-8">
        <h1 className="text-blue-darker">{frontmatter.title}</h1>
        <div className="flex flex-col md:flex-row items-center">
          <img src={frontmatter.image.childImageSharp.fluid.src} alt={frontmatter.title} className="w-full max-w-xs"/>
          <p className="text-blue-darkest max-w-xl leading-normal">{frontmatter.excerpt}</p>
        </div>
      </div>

      <div className="w-full flex justify-center mt-16">
        <form className="w-full max-w-4xl px-4">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-blue-darker text-xs font-bold mb-2" for="grid-password">
                Nom de l'entreprise
              </label>
              <input className="appearance-none block w-full bg-grey-lighter text-blue-darker border border-grey-lighter rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-grey" type="text"  />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-blue-darker text-xs font-bold mb-2" for="grid-password">
                Nom / Prénom
              </label>
              <input className="appearance-none block w-full bg-grey-lighter text-blue-darker border border-grey-lighter rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-grey" type="text"  />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-blue-darker text-xs font-bold mb-2" for="grid-city">
                Ville
              </label>
              <input className="appearance-none block w-full bg-grey-lighter text-blue-darker border border-grey-lighter rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-grey" id="grid-city" type="text" placeholder="Paris" />
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-blue-darker text-xs font-bold mb-2" for="grid-state">
                Pays
              </label>
              <div className="relative">
                <select className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-blue-darker py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-grey" id="grid-state">
                  <option>France</option>
                </select>
                <div className="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-blue-darker">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-blue-darker text-xs font-bold mb-2" for="grid-zip">
                Code Postal
              </label>
              <input className="appearance-none block w-full bg-grey-lighter text-blue-darker border border-grey-lighter rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-grey" id="grid-zip" type="text" placeholder="01560" />
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Template;

export const query = graphql`
  query Product($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        client
        excerpt
        path
        image {
          childImageSharp {
            fluid {
              src
            }
          }
        }
      }
    }
  }
`;
