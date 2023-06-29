// Write your JS code here
import Loader from 'react-loader-spinner'

import {Component} from 'react'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import BlogItem from '../BlogItem'

import './index.css'

class BlogList extends Component {
  state = {blogList: [], isLoading: true}

  componentDidMount() {
    this.blogData()
  }

  blogData = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    // console.log(data)

    const updatedList = data.map(each => ({
      id: each.id,
      imageUrl: each.image_url,
      avatarUrl: each.avatar_url,
      topic: each.topic,
      title: each.title,
      author: each.author,
    }))
    this.setState({blogList: updatedList, isLoading: false})
  }

  render() {
    const {blogList, isLoading} = this.state
    // console.log(blogList)

    return (
      <div>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" width={50} height={50} />
          </div>
        ) : (
          blogList.map(item => <BlogItem blogItem={item} key={item.id} />)
        )}
      </div>
    )
  }
}

export default BlogList
