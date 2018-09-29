
import React from "react"

import Layout from "../components/layout"

class NoFound extends React.Component {

    render() {
        return (
            <Layout>
                <div className="px-4 md:px-32 mt-4 md:mt-16">
                    <h1 className="text-5xl text-blue-darkest">404</h1>
                    <h2 className="text-5xl text-blue-darker">Cette page n'existe pas</h2>
                </div>
            </Layout>
        )
    }
}

export default NoFound;
