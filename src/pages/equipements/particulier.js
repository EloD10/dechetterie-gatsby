import React from "react";
import { graphql } from 'gatsby'

import Layout from "../../components/layout";
import NavClientsType from "../../components/equipements/nav-clients-type";
import ProductCardImgLeft from "../../components/equipements/product-card-img-left";
import NavProductsType from "../../components/equipements/navProductType/nav-products-type";


export default (props) => (
  <Layout>
    <NavClientsType />
    <NavProductsType />
    <div className="flex flex-col md:flex-row mx-4 md:mx-16 mt-8 justify-center">
      <ProductCardImgLeft
        img={props.data.Ecodigester20.childImageSharp.fluid.src}
        title="Mini Ecodigester ® ECD 20Kg"
        body="Le système  du Mini Digesteur, permet d’éviter les odeurs de déchets alimentaires organiques dans la cuisine.  Ceux-ci sont traités sans odeurs en un composte bénéfique pour vos plantes.
            Propre et pratique, le Mini Digesteur, peut traiter en seulement  24 heures 2 à 3 kg de déchets alimentaires, soit la production journalière d’une famille de 6 personnes.
            le mini digesteur est capable de réduire le poids et le volume des déchets organiques jusqu'à 90%.
            "
      />
    </div>
  </Layout>
);


export const query = graphql`
query {
  Ecodigester20: file(relativePath: {eq: "equipements/ecodigester-20kg.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 1000) {
          src
      }
    }
  }
  ordinaryWaste: file(relativePath: {eq: "equipements/dechets-ordinaires.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`