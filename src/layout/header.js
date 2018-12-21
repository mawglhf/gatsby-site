import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle }) => (
  <nav className="nav">
    <div className="nav-container">
      <div className="brand">
        <Link to="/">{siteTitle}</Link>
      </div>

      <div className="links">
        <Link to="/about">About me</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/projects">Projects</Link>
      </div>
      <div className="extra">Extras</div>
    </div>
  </nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
