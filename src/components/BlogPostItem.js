import React from 'react'

export default function BlogPostItem(props) {
  return (
    <div className="post">
      <div className="post-title">{props.title}</div>
      <span className="post-date">
        <time>{props.date}</time>
      </span>
    </div>
  )
}
