import * as React from 'react'
import Layout from '../components/layout'

const AboutPage = () => {
  return (
    <Layout pageTitle="Rólam">
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
    </Layout>
  );
};

export const Head = () => (
  <>
    <title>Rólam</title>
    <meta name="description" content="Your description" />
  </>
);

export default AboutPage;
