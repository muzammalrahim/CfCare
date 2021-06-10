import React from 'react'
import Head from "next/head"
import GoTop from './GoTop'

const Layout = ({ children }) => {
    return(
        <React.Fragment>
            <Head>
                <title>Disin - React Next Healthcare Clinic & Doctor Template</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="description" content="Disin - React Next Healthcare Clinic & Doctor Template" />
                <meta name="og:title" property="og:title" content="Disin - React Next Healthcare Clinic & Doctor Template"></meta>
                <meta name="twitter:card" content="Disin - React Next Healthcare Clinic & Doctor Template"></meta>
                <link rel="canonical" href="https://disin-react.envytheme.com/"></link>
            </Head>

            {children}
  
            <GoTop scrollStepInPx="100" delayInMs="10.50" />
        </React.Fragment>
    );
}

export default Layout;