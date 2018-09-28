import React from "react"

import { Link } from 'gatsby';

export default () => (
<nav className="list-reset flex mt-8 mx-4 md:mx-16 justify-center">
    <div className="flex-1 md:flex-initial md:w-64 p-2">
        <Link to="/equipements/particulier" activeClassName="hover:no-underline shadow-outline" className="block bg-blue-lighter py-2 px-4 text-blue-dark font-semibold text-center no-underline hover:underline">Particulier</Link>
    </div>
    <div className="flex-1 md:flex-initial md:w-64 p-2">
        <Link to="/equipements/professionnel" activeClassName="hover:no-underline shadow-outline" className="block bg-blue-lighter py-2 px-4 text-blue-dark font-semibold text-center no-underline hover:underline">Professionnel</Link>
    </div>
</nav>
)