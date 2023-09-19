import * as React from 'react'
import Layout from '../components/layout'

const PortfolioPage = () => {
  return (
    <Layout pageTitle="Portfólióm">
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
    </Layout>
  );
};

export const Head = () => (
  <>
    <title>Portfólióm</title>
    <meta name="description" content="Samu Krisztina portfólió oldalának portfólió oldala" />
  </>
);

export default PortfolioPage