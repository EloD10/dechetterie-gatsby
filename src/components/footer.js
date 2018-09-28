import React from "react"
import { Link } from "gatsby"

class Footer extends React.Component {
    render() {
        return (
            <footer className="flex flex-col sm:flex-row bg-green shadow mt-8 py-8">
                <div className="px-16 flex-1 flex flex-col">
                    <div className="flex"><h2 className="text-blue-darkest font-slab mr-4">Pages</h2><span className="hidden lg:inline-block border-b-2 border-blue-darker w-full h-4"></span></div>
                    <div className="flex flex-col justify-between sm:flex-row mt-4">
                        <div className="">
                            <Link to="/" className="tracking-wide leading-loose text-blue-darkest block no-underline hover:underline">Accueil</Link>
                            <Link to="/equipements" className="tracking-wide leading-loose text-blue-darkest block no-underline hover:underline">Nos équipements</Link>
                            <Link to="/ids-collect" className="tracking-wide leading-loose text-blue-darkest block no-underline hover:underline">Collectes des déchets</Link>
                        </div>
                        <div>
                            <Link to="/a-propos" className="tracking-wide leading-loose text-blue-darkest block no-underline hover:underline">À propos</Link>
                            <Link to="/" className="tracking-wide leading-loose text-blue-darkest block no-underline hover:underline">Another link</Link>
                            <Link to="/" className="tracking-wide leading-loose text-blue-darkest block no-underline hover:underline">Another link</Link>
                        </div>
                    </div>
                </div>
                <div class="px-16 flex-1 mt-8 sm:mt-0">
                <div className="flex"><h2 className="text-blue-darkest font-slab mr-4">Nous retrouver</h2><span className="hidden lg:inline-block border-b-2 border-blue-darker w-full h-4"></span></div>
                    <p className="bg-green pl-0 mt-4 tracking-wide leading-loose text-blue-darkest">
                        <span className="border-b border-blue-darker">IDS Environnement</span><br/>
                        66 route de Roujus<br/> 
                        01560  Saint-Trivier de Couters<br/>
                        FRANCE
                    </p>
                </div>
            </footer>
        )
    }
}

export default Footer