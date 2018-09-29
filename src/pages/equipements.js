import React from "react";
import { graphql, Link } from 'gatsby'


// Components
import HeadingImg from "../components/equipements/heading-img";
import WasteTypeCardImgLeft from "../components/equipements/waste-type-card-img-left";
import Layout from "../components/layout";


export default (props) => (
<Layout>
    <HeadingImg 
        img={props.data.headerImg.childImageSharp.fluid}
        title="Nos outils qui vous rendent efficace"
    />
    <div className="list-reset flex mt-8 mx-4 md:mx-16 justify-center">
        <div className="flex-1 md:flex-initial md:w-full hover:shadow-outline">
            <Link to="/equipements/produits" activeClassName="hover:no-underline shadow-outline" className="block bg-blue-lighter py-4 px-4 text-blue-dark font-semibold text-center no-underline hover:underline">Découvrez nos produits pour professionnels et particuliers</Link>
        </div>
    </div>
    <p className="mx-8 md:mx-16 lg:mx-32 my-8 text-blue-darkest text-xl leading-normal">
        En France, après des décennies de hausse, les politiques publiques mises en œuvre ont permis une stabilisation de la quantité de déchets produits. L’objectif de la politique nationale de gestion des déchets est d’amplifier le découplage entre croissance et production de déchets.
        Pour y contribuer, IDS environnement vous propose son expertise portant sur la prévention de la production de déchets, leur recyclage, leur collecte ainsi que leur traitement.  
    </p>
    <div className="mx-6 lg:px-32 flex flex-col">
        <WasteTypeCardImgLeft
            img={props.data.ordinaryWaste.childImageSharp.fluid.src}
            title="Déchets ménagers"
            body="Composées des volumineux cartons, plastiques, polystyrène et bois. Les déchets sont dans entreprise une vrai problématique de traitement de place de production de sécurité et d'image de marque. Accompagnées des valeurs de notre éducation IDS environnement dans le cadre de son credo prône des solutions de traitement à la source.
            Mais avant de faire accepter de l'écologie il est nécessaire que les options proposées soit dans des budgets cohérents.
            "
        />
        <WasteTypeCardImgLeft
            img={props.data.organicWaste.childImageSharp.fluid.src}
            title="Déchets organiques"
            body="
            Derrière les préoccupations environnementales qui émergent aujourd'hui, notre approche vise à intégrer une démarche avec des solutions autour des déchets organiques : la protection de l'environnement doit être prise en compte par tous, à la demande des pouvoirs publics et des citoyens.
            En accord avec le Grenelle de l'environnement, notre solution s'inscrit dans une démarche de prévention des bio déchets (alimentaires et verts), par une action de compostage autonome et une réduction à la source de vos déchets.
            Notre gamme de produits permet de vous apporter la solution directement chez vous.
            "
        />
        <WasteTypeCardImgLeft
            img={props.data.woodWaste.childImageSharp.fluid.src}
            title="Déchets de bois"
            body="Le gisement des déchets de bois est estimé à 14 millions de tonnes en France. Selon l'ADEME, 90% de ces déchets sont valorisés et 49% font l'objet d'une valorisation matière."
        />
        <WasteTypeCardImgLeft
            img={props.data.glassWaste.childImageSharp.fluid.src}
            title="Déchets de verres"
            body="Le taux de recyclage du verre en France en 2014 était de 74,6 %, soit plus de 3 bouteilles sur 4(4), contre 58,7 % fin 2010 : 2 millions de tonnes de verre ont été collectées puis recyclées. 80 % de la collecte du verre provient de l’apport volontaire, 20 %  du tri sélectif ou en porte à porte.
            Des progrès ont été réalisés – depuis 1974 , date depuis laquelle on recycle le verre en France – mais il demeure encore une importante marche à franchir afin de ne plus voir de déperdition énergétique, même s’il présente plus d’avantages que le plastique."
        />
    </div>
</Layout>
)

export const query = graphql`
  query {
    headerImg: file(relativePath: {eq: "equipements/randy-laybourne.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
        }
      }
    }
    ordinaryWaste: file(relativePath: {eq: "equipements/dechets-ordinaires.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
        }
      }
    }
    organicWaste: file(relativePath: {eq: "equipements/dechets-organiques.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
        }
      }
    }
    woodWaste: file(relativePath: {eq: "equipements/dechets-bois.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
        }
      }
    }
    glassWaste: file(relativePath: {eq: "equipements/dechets-verres.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

// TODO: Find how we can use this properly
// export const query = graphql`
// query {
//     allFile(filter: {extension: {regex: "/jpg/"}, relativeDirectory: {eq: "equipements"}}) {
//       edges {
//         node {
//           childImageSharp {
//             fluid(maxWidth: 1000) {
//             	...GatsbyImageSharpFluid
//             }
//           }
//         }
//       }
//     }   
//   }
// `