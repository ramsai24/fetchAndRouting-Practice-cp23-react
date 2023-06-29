import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class BlogItemDetails extends Component {
  state = {blogItemDetails: {}, isLoading: true}

  componentDidMount() {
    this.blogItemData()
  }

  blogItemData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)

    const data = await response.json()

    console.log(data)
    const updateData = {
      id: data.id,
      imageUrl: data.image_url,
      avatarUrl: data.avatar_url,
      title: data.title,
      author: data.author,
      content: data.content,
      topic: data.topic,
    }

    this.setState({blogItemDetails: updateData, isLoading: false})
  }

  render() {
    const {blogItemDetails, isLoading} = this.state
    const {title, avatarUrl, imageUrl, author, content} = blogItemDetails

    return (
      <div>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" width={50} height={50} />
          </div>
        ) : (
          <div>
            <h1>{title}</h1>
            <div>
              <img className="avatar" src={avatarUrl} alt={author} />
              <p>{author}</p>
            </div>
            <img className="img" src={imageUrl} alt={title} />
            <p>{content}</p>
          </div>
        )}
      </div>
    )
  }
}

export default BlogItemDetails
