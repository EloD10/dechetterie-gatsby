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
    <div className="px-32 flex flex-col">
      <ProductCardImgLeft
        img={props.data.Ecodigester100.childImageSharp.fluid.src}
        title="Ecodigester ® ECD 100Kg"
        body="Cette machine est calibrée pour pouvoir traiter 100 kg de déchets alimentaires en 24 heures maximum. Machine adaptée pour 700 couverts / jour. Fabriqué en inox de haute qualité, l'Ecodigester ® s'intègre parfaitement dans votre cuisine centrale, votre cantine, votre restaurant d'entreprise, ou à l'extérieur sous un auvent, afin d'être protégé des intempéries. L'Ecodigester ® recycle les déchets alimentaires sur le site de production. Le traitement de ces déchets organiques se réalise entre 3 et 24 heures maximum. Pas d'émission de gaz nocifs. Le volume de réduction des déchets organiques peut atteindre 90%. Ces déchets alimentaires sont transformés en amendement organique. L'Ecodigester ® élimine les coûts de la collecte et la pollution produite
            "
      />
      <ProductCardImgLeft
        img={props.data.Ecodigester200.childImageSharp.fluid.src}
        title="Ecodigester ® ECD 100Kg"
        body="Cette machine est calibrée pour pouvoir traiter 200 kg de déchets alimentaires en 24 heures maximum.
              Machine adaptée pour 1300 couverts / jour.
              Fabriqué en inox de haute qualité, l'Ecodigester ® s'intègre parfaitement dans votre cuisine centrale, votre cantine, votre restaurant d'entreprise, ou à l'extérieur sous un auvent, afin d'être protégé des intempéries.
              L'Ecodigester ® recycle les déchets alimentaires sur le site de production.
              Le traitement de ces déchets organiques se réalise entre 3 et 24 heures maximum.
              Pas d'émission de gaz nocifs.
              Le volume de réduction des déchets organiques peu atteindre 90%.
              Ces déchets alimentaires sont transformés en amendement organique servant à favoriser la vie du sol.
              L'Ecodigester ® élimine les coûts de la collecte et la pollution produite.
            "
      />
    </div>
  </Layout>
);

export const query = graphql`
query {
  Ecodigester100: file(relativePath: {eq: "equipements/ecodigester-100kg.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 1000) {
          src
      }
    }
  }
  Ecodigester200: file(relativePath: {eq: "equipements/ecodigester-200kg.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 1000) {
          src
      }
    }
  }
}
`