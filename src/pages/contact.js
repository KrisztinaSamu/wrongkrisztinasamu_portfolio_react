import * as React from 'react'
import Layout from '../components/layout'

const ContactPage = () => {
  return (
    <Layout pageTitle="Kapcsolat">
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
    </Layout>
  );
};

export const Head = () => (
  <>
    <title>Kapcsolat</title>
    <meta name="description" content="Samu Krisztina portfólió oldalának kapcsolat oldala" />
  </>
);

export default ContactPage;