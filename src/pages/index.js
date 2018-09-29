
import React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import ArticleImgLeft from "../components/accueil/article-img-left"
import ArticleImgRight from "../components/accueil/article-img-right"

class Index extends React.Component {

    render() {
        return (
            <Layout>
                <div className="px-4 md:px-32 py-8 text-blue-darker bg-grey-lighter">
                    <h1 className="mb-4 font-slab">Nous réduisons vos déchets</h1>
                    <h3 className="break-words">
                        Notre métier depuis 10 ans est orienté autour des solutions de gestion des déchets.
                    </h3>
                    <p className="leading-none mt-2 w-4/5">
                        Renversant les schémas traditionnels, notre mission est d’aider les entreprises dans le changement d’habitude autour d’un credo constant : «<strong>le tri à la source</strong>».
                    </p>
                </div>
                <ArticleImgLeft 
                title="L'écologie pour vous servir." 
                body="Construire des outils simples d’utilisation et vous accompagner pour les mettre en œuvre, pour gérer le déchet de sa création jusqu’à son évacuation et traitement font partie de notre savoir faire afin que les valeurs d'ÉCOLOGIE riment aussi avec : ÉCONOMIE et PRODUCTIVITÉ." 
                linkBody="a-good-link"
                link="/yeah"
                srcImg={this.props.data.imageOne.childImageSharp.fluid.src}
                altImg="ecologie"
                />
                <ArticleImgRight
                title="Tout le monde y passe, vous verrez s'est cool !" 
                body="TPE, PME, INDUSTRIELS, GRANDE DISTRIBUTION, COMMERÇANTS, RESTAURATION, COLLECTIVITÉS et toutes sociétés qui produisent des déchets banaux comme le carton, le papier, les plastiques, le polystyrène, les déchets organiques, le bois, ou autres, concentrez vous sur votre métier, nous nous occuperons de vos déchets."
                linkBody="a-good-link"
                link="/yeah"
                srcImg={this.props.data.imageZero.childImageSharp.fluid.src}
                altImg="ecologie"
                />
            </Layout>
        )
    }
}

export default Index;

export const query = graphql`
  query {
    imageZero: file(relativePath: {eq: "accueil/img.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
        }
      }
    }
    imageOne: file(relativePath: {eq: "accueil/img1.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
        }
      }
    }
  }
`