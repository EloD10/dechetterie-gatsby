import React from "react"
import { Link } from "gatsby"


const linksAnimation = {
    transition: `all .2s`,
    ':hover': {
        backgroundSize: `4px 50px`,
        borderSize: '20px',
    }
}

class Header extends React.Component { 

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(e) {
        e.preventDefault();
        const menu = document.querySelector('#hamburger-menu')
        if (menu.classList.contains("hidden")) {
            menu.classList.remove('hidden')
        } else {
            menu.classList.add('hidden')
        }
    }

    render() {
        return (
            <header className="flex flex-col md:flex-row bg-green shadow">
                    <Link to="/" className="flex text-green-lighter text-center m-2 flex-col p-4 no-underline outline-none">
                        <div className="flex justify-between">
                            <div className="flex flex-col">
                                <h3 className="font-semibold">IDS ENVIRONNEMENT</h3>
                                <h4 className="uppercase text-green-lightest font-light text-xs tracking-tight">Les idées vertes</h4>
                            </div>
                            <div className="md:hidden hover:text-blue-lightest" onClick={this.handleClick}>
                                <svg className="fill-current h-8 w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                            </div>    
                        </div>
                    </Link>
                    <nav id="hamburger-menu" className="hidden md:block flex-1 text-blue-darker text-center px-4 py-2 m-2 align-center">
                        <div className="flex space-between mx-4 flex-col md:flex-row uppercase justify-center">
                            <Link to="/" activeClassName="text-blue-lightest" css={linksAnimation} className="p-4 lg:mx-16 text-blue-darker font-semibold hover:text-blue-lightest no-underline hover:border-blue-lightest rounded-full border-b-4 border-transparent">Accueil</Link>
                            <Link to="/equipements" activeClassName="text-blue-lightest" css={linksAnimation} className="p-4 lg:mx-16 text-blue-darker font-semibold hover:text-blue-lightest no-underline hover:border-blue-lightest rounded-full border-b-4 border-transparent">Nos équipements</Link>
                            <Link to="/ids-collect" activeClassName="text-blue-lightest" css={linksAnimation} className="p-4 lg:mx-16 text-blue-darker font-semibold hover:text-blue-lightest no-underline hover:border-blue-lightest rounded-full border-b-4 border-transparent">Collectes des déchets</Link>
                            <Link to="/a-propos" activeClassName="text-blue-lightest" css={linksAnimation} className="p-4 lg:mx-16 text-blue-darker font-semibold hover:text-blue-lightest no-underline hover:border-blue-lightest rounded-full border-b-4 border-transparent">À propos</Link>
                        </div>
                    </nav>
            </header>
        )
    }
}

export default Header

// export default () => (
//     <header className="flex flex-col md:flex-row bg-green shadow">
//             <Link to="/" className="flex text-green-lighter text-center m-2 flex-col p-4 no-underline">
//                 <h3 className="font-semibold">IDS ENVIRONNEMENT</h3>
//                 <h4 className="uppercase font-thin text-xs tracking-tight">Les idées vertes</h4>
//             </Link>
//             <nav className="flex-1 text-blue-darker text-center px-4 py-2 m-2 align-center">
//                 <div className="flex space-between mx-4 flex-col md:flex-row uppercase justify-center">
//                     <Link to="/" activeClassName="text-blue-lighter" css={linksAnimation} className="p-4 lg:mx-16 text-blue-darker font-semibold hover:text-blue-lighter no-underline hover:border-blue-lighter rounded-full border-b-4 border-transparent">Accueil</Link>
//                     <Link to="/equipements" activeClassName="text-blue-lighter" css={linksAnimation} className="p-4 lg:mx-16 text-blue-darker font-semibold hover:text-blue-lighter no-underline hover:border-blue-lighter rounded-full border-b-4 border-transparent">Nos équipements</Link>
//                     <Link to="/ids-collect" activeClassName="text-blue-lighter" css={linksAnimation} className="p-4 lg:mx-16 text-blue-darker font-semibold hover:text-blue-lighter no-underline hover:border-blue-lighter rounded-full border-b-4 border-transparent">Collectes des déchets</Link>
//                     <Link to="/a-propos" activeClassName="text-blue-lighter" css={linksAnimation} className="p-4 lg:mx-16 text-blue-darker font-semibold hover:text-blue-lighter no-underline hover:border-blue-lighter rounded-full border-b-4 border-transparent">À propos</Link>
//                 </div>
//             </nav>
//     </header>
// )