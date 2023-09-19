import * as React from 'react'
import Layout from '../components/layout'

const Skills_and_toolsPage = () => {
  return (
    <Layout pageTitle="Készségek és eszközök">
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
    </Layout>
  );
};

export const Head = () => (
  <>
    <title>Készségek és eszközök</title>
    <meta name="description" content="Samu Krisztina portfólió oldalának készségek és eszközök oldala" />
  </>
);

export default Skills_and_toolsPage