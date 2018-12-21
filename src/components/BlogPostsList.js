import React from 'react'
import PropTypes from 'prop-types'

const BlogPostsList = props => {
  return (
    <section className="section">
      <h2>{props.sectionTitle}</h2>
      <div className="post" />
    </section>
  )
}

BlogPostsList.propTypes = {
  sectionTitle: PropTypes.string,
}

export default BlogPostsList
