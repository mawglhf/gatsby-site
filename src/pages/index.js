import React from 'react'
import IntroSection from '../components/IntroSection'
import Layout from '../layout/layout'
import SEO from '../layout/seo'
import BlogPostsList from '../components/BlogPostsList'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
    <IntroSection />
    <BlogPostsList sectionTitle={'Blog Posts'} />
  </Layout>
)

export default IndexPage
