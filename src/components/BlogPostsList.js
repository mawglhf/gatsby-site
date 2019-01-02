import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'

const BlogPostsList = props => {
  return (
    <section className="section">
      <h2>{props.sectionTitle}</h2>
    </section>
  )
}

BlogPostsList.propTypes = {
  sectionTitle: PropTypes.string,
}

export default BlogPostsList
