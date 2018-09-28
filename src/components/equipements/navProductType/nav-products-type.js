import React from "react";
import { StaticQuery, graphql } from 'gatsby';

// Components

import NavProductsItem from './nav-products-item'

class NavProductsType extends React.Component {
  render () {
    return (
        <StaticQuery 
          query={graphql`
          query {
            ordinaryWaste: file(relativePath: {eq: "equipements/dechets-ordinaires.jpg"}) {
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            organicWaste: file(relativePath: {eq: "equipements/dechets-organiques.jpg"}) {
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            woodWaste: file(relativePath: {eq: "equipements/dechets-bois.jpg"}) {
              childImageSharp {
                fluid(maxWidth: 1000) {
                    ...GatsbyImageSharpFluid
                }
              }
            }
            glassWaste: file(relativePath: {eq: "equipements/dechets-verres.jpg"}) {
              childImageSharp {
                fluid(maxWidth: 1000) {
                    ...GatsbyImageSharpFluid
                }
              }
            }
          }
          `
          }
          render={data => (
            <div className="flex justify-between my-8 mx-4 md:mx-16">
            <NavProductsItem
            linkUrl="/equipements/particulier"
            img={data.ordinaryWaste.childImageSharp.fluid.src}
            text="Ordures ménagères"
            />
            <NavProductsItem
            linkUrl="/equipements/particulier"
            img={data.organicWaste.childImageSharp.fluid.src}
            text="Déchets organiques"
            />
            <NavProductsItem
              linkUrl="/equipements/particulier"
              img={data.woodWaste.childImageSharp.fluid.src}
              text="Déchets de bois"
            />
            <NavProductsItem
              linkUrl="/equipements/particulier"
              img={data.glassWaste.childImageSharp.fluid.src}
              text="Déchets de verres"
            />
            </div>
          )}
        />
    );
  }
}
export default NavProductsType
