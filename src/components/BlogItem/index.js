// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {blogItem} = props
  // console.log(blogItem)
  const {imageUrl, id, title, topic, avatarUrl, author} = blogItem

  return (
    <Link to={`/blogs/${id}`}>
      <div className="blog-item-container">
        <img className="img" src={imageUrl} alt={title} />
        <div>
          <p>{topic}</p>
          <h1>{title}</h1>
          <div>
            <img className="avatar" src={avatarUrl} alt={author} />
            <p>{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
