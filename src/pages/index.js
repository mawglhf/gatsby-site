import React from 'react'
import IntroSection from '../components/IntroSection'
import Layout from '../layout/layout'
import SEO from '../layout/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
    <IntroSection />
  </Layout>
)

export default IndexPage
