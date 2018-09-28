import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

export default ({data}) => (
  <Layout>
    <div className="px-6 lg:px-32 mt-8">
      <h1 className="text-4xl text-blue-darker font-slab">A propos</h1>
      <p className="text-blue-darker py-4 leading-normal"> 
        Chez <strong>{data.site.siteMetadata.title}</strong>, notre métier depuis 10 ans est orienté autour des solutions de gestion des déchets.<br/>
        Renversant les schémas traditionnels, notre mission est d’aider les entreprises dans le changement d’habitude autour d’un credo constant : « <strong>LE TRI A LA SOURCE</strong> ».
      </p>

      <h2 className="text-2xl text-blue-darker mt-12 mb-4 font-slab">Nos valeurs reines</h2>
      <ul className="list-reset text-blue-darker mt-8">
        <li class="flex justify-between my-2">
          <p class="font-bold border-l-2 border-r-2 border-green text-blue-darker text-center px-4 py-4 m-2 w-32 bg-blue-lightest rounded">RESPECT</p>
          <div class="text-blue-darker px-4 pb-2 pt-4 m-2 flex-1 bg-blue-lightest rounded">Respectueux de la planète et de votre bien-être, nous sommes engagés à vos côtés pour un traitement optimal de vos déchets.</div>
        </li>
        <li class="flex justify-between my-2">
          <p class="font-bold border-l-2 border-r-2 border-green text-blue-darker text-center px-4 py-4 m-2 w-32 bg-blue-lightest rounded">INNOVATION</p>
          <div class="text-blue-darker px-4 pb-2 pt-4 m-2 flex-1 bg-blue-lightest rounded items-center bg-green">Mise en place de hautes technologies afin de simplifier le traitement des déchets.</div>
        </li>
        <li class="flex justify-between my-2">
          <p class="font-bold border-l-2 border-r-2 border-green text-blue-darker text-center px-4 py-4 m-2 w-32 bg-blue-lightest rounded">NOVATEUR</p>
          <div class="text-blue-darker px-4 pb-2 pt-4 m-2 flex-1 bg-blue-lightest rounded">Nouvelles pratiques d'accompagnement au changement de comportement.</div>
        </li>
        <li class="flex justify-between my-2">
          <p class="font-bold border-l-2 border-r-2 border-green text-blue-darker text-center px-4 py-4 m-2 w-32 bg-blue-lightest rounded">ÉCONOMIE</p>
          <div class="text-blue-darker px-4 pb-2 pt-4 m-2 flex-1 bg-blue-lightest rounded">La réduction significative des dépenses financières et aussi énergétiques au travers du recyclage mais également de la revalorisation des déchets.</div>
        </li>
      </ul>

      <h2 className="text-2xl text-blue-darker mt-20 mb-4 font-slab">Nous contacter</h2>
      <form className="w-full mt-12 px-4">
          <div className="mb-4 relative">
            <select className="block appearance-none w-full text-grey-darker bg-blue-lightest border border-blue-lightest hover:border-green px-4 py-2 pr-8 rounded leading-tight focus:outline-none">
              <option>Choisissez l'objet de contact</option>
              <option>Message et question générale, demande de renseignement grand public</option>
              <option>Demande d'estimation et/ou devis, demande de renseignement professionnel</option>
              <option>Dépôt de candidature, demande de renseignements complémentaires.</option>
            </select>
            <div className="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>

          <label className="block uppercase tracking-wide text-blue-darker text-xs font-bold mb-2" for="grid-last-name">
            Nom
          </label>
          <input className="appearance-none block w-full bg-blue-lightest text-blue-darker border border-blue-lightest rounded py-3 px-4 leading-tight focus:outline-none focus:border-green" id="grid-last-name" type="text" placeholder="A qui avons nous l'honneur ?" />

          
          <label className="block uppercase tracking-wide text-blue-darker text-xs font-bold mt-4 mb-2" for="grid-last-name">
            Votre message
          </label>
          <textarea rows="8" className="appearance-none block w-full bg-blue-lightest text-blue-darkest border border-blue-lightest rounded py-3 px-4 leading-tight focus:outline-none focus:border-green" id="grid-last-name" type="text" placeholder="Sans faute ?" />
      </form>
      <small className="block p-4 text-xs text-grey-dark text-center">
        Les données personnelles vous concernant sont nécessaires au traitement de votre demande et de ses suites. Elles sont destinées exclusivement à IDS ENVIRONNEMENT, responsable du traitement de ces données. Elles ne seront donc pas transmises à des tiers.
        Conformément à la loi « Informatique et libertés » du 6 janvier 1978 modifiée en 2004, vous bénéficiez d’un droit d’accès, de rectification et d’opposition aux données qui vous concernent.
        Vous pouvez exercer ce droit en vous adressant à : IDS ENVIRONNEMENT – 66 route de Roujus – 01560 ST TRIVIER DE COURTES.
      </small>

      <h2 className="text-2xl text-blue-darker mt-12 mb-4 font-slab">Où nous trouver ?</h2>
      <iframe className="w-full h-64 mt-8" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7196.971705291845!2d5.0768788135726535!3d46.46401684512115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f3394b3844650b%3A0x772b29284d472539!2sRoute+de+Roujus%2C+01560+Saint-Trivier-de-Courtes!5e0!3m2!1sfr!2sfr!4v1537569343159" title="nous-trouver" frameborder="0" style={{border: '0'}} allowfullscreen></iframe>
    </div>
  </Layout>
)

export const query = graphql`
query {
  site {
    siteMetadata {
      title
    }
  }
}
`