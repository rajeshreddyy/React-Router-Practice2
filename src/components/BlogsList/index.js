import {Component} from 'react'
import Loader from 'react-loader-spinner'

import BlogItem from '../BlogItem'

import './index.css'

const blogsData = [
  {
    id: 1,
    title: 'Blog 1',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/placeholder-1-img.png',
    avatarUrl: 'https://assets.ccbp.in/frontend/react-js/avatar-img.png',
    author: 'Author Name',
    topic: 'React.js',
  },
  {
    id: 2,
    title: 'Blog 2',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/placeholder-2-img.png',
    avatarUrl: 'https://assets.ccbp.in/frontend/react-js/avatar-img.png',
    author: 'Author Name',
    topic: 'React.js',
  },
]

class BlogsList extends Component {
  state = {blogsDataList: [], isLoading: true}

  componentDidMount() {
    this.getBlogsData()
  }

  getBlogsData = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    const updatedData = data.map(eachItem => ({
      author: eachItem.author,
      avatarUrl: eachItem.avatar_url,
      id: eachItem.id,
      imageUrl: eachItem.image_url,
      title: eachItem.title,
      topic: eachItem.topic,
    }))
    this.setState({blogsDataList: updatedData, isLoading: false})
    console.log(updatedData)
  }

  render() {
    const {blogsDataList, isLoading} = this.state

    return (
      <div className="blog-list-container">
        {isLoading
          ? ''
          : blogsDataList.map(item => {
              const blogDataItem = {
                author: item.author,
                avatarUrl: item.avatarUrl,
                id: item.id,
                imageUrl: item.imageUrl,
                title: item.title,
                topic: item.topic,
              }

              return <BlogItem blogData={blogDataItem} key={item.id} />
            })}
      </div>
    )
  }
}

export default BlogsList
