import React from "react"
import { Link } from '@reach/router'


import Layout from "../components/layout"

export default () => (
  <Layout>
    <h1 className="px-6 lg:px-32 text-blue-darker mt-8">Collecte des déchets</h1>
    <div className="leading-normal px-6 lg:px-32 text-blue-darkest py-4 tracking-wide">
      <p  className="my-2">Notre mission est d'évacuer les déchets cartons, plastiques, bois,
      polystyrène ou autres des entreprises de toutes tailles en apportant une
      valeur ajoutée au produit généré. Nos clients sont de toute corporation et
      vont du boulanger a l'industriel en passant par la restauration et la
      grande distribution.</p>
      <p  className="my-2">Présent sur toute la France, grâce a une logistique
      intelligente et respectueuse de l'environnement notre solution IDS Collect
      apporte performance et confort pour l’entreprise.</p> 
      <p className="my-2">Grâce à la qualité de vos déchets, réduisez votre budget.</p>
      <p  className="my-2">Pour mieux vous comprendre, nous nous déplacerons pour intégrer vos contraintes, et réaliserons ensemble un
      audit de vos besoins. Il est nécessaire avant toutes actions un audit de
      vos besoins.</p>
    </div>

    <div className="list-reset flex mt-8 mx-4 md:mx-16 justify-center">
        <div className="flex-1 md:flex-initial md:w-64 p-2 md:mx-16">
            <Link to="/ids-collect/dashboard" className="block bg-blue-lighter py-2 px-4 text-blue-dark font-semibold text-center no-underline hover:underline">Espace Membre</Link>
        </div>
        <div className="flex-1 md:flex-initial md:w-64 p-2 md:mx-16">
            <Link to="/ids-collect/inscription" className="block bg-blue-lighter py-2 px-4 text-blue-dark font-semibold text-center no-underline hover:underline">S'inscrire</Link>
        </div>
    </div>
  </Layout>
);
