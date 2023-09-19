import * as React from 'react'
import Layout from '../components/layout'

const FeedbackPage = () => {
  return (
    <Layout pageTitle="Visszacsatolás">
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
    </Layout>
  );
};

export const Head = () => (
  <>
    <title>Visszacsatolás</title>
    <meta name="description" content="Samu Krisztina portfólió oldalának visszacsatolás oldala" />
  </>
);

export default FeedbackPage