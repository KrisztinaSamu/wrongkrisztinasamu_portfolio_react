import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'


const IndexPage = () => {
  return (
    <Layout pageTitle="Samu Krisztina">
      
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="My photo"
        src="../images/my.png"
      />
    </Layout>
  );
};

export const Head = () => (
  <>
    <title>Samu Krisztina</title>
    <meta name="description" content="Samu Krisztina portfólió oldalának főoldala" />
    <link
      href="https://fonts.googleapis.com/css2?family=Raleway:wght@500&display=swap"
      rel="stylesheet"
    />
  </>
)

export default IndexPage
