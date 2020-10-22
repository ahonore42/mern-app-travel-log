import React, { Component } from 'react'
import Card from '../components/Card'
import { __GetPosts } from '../services/PostServices'
import '../styles/Discover.css'

export default class Discover extends Component {
  constructor() {
    super()
    this.state = {
      posts: [],
      currentPage: 1
    }
  }

  componentDidMount() {
    this.getPosts()
  }

  getPosts = async () => {
    try {
      const posts = await __GetPosts(this.state.currentPage)
      this.setState({ posts: [...this.state.posts, ...posts] })
    } catch (error) {
      console.log(error)
    }
  }

  incrementPage = () =>
    this.setState(
      (prevstate) => ({ currentPage: prevstate.currentPage + 1 }),
      () => this.getPosts()
    )

  render() {
    const { posts } = this.state
    return (
      <div className="discover wrapper">
        <h2>Popular Posts</h2>
        <section className="content-wrapper">
          {posts.length ? (
            posts.map((post) => (
              <Card
                key={post._id}
                onClick={() => this.props.history.push(`/posts/${post._id}`)}
              >
                <div className="mask flex-col discover">
                  <div className="flex-col">
                    <div className="card-content">
                      <h3>{post.title}</h3>
                      <p>{post.description.substring(0, 50)}...</p>
                    </div>
                    <div className="card-content-top flex-row">
                      <div className="stats">
                        <p>Comments</p>
                        <p>{post.comments.length}</p>
                      </div>
                      <div className="stats">
                        <p>Likes</p>
                        <p>{post.popularity_rating}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <img src={post.image_url} alt="sf" />
              </Card>
            ))
          ) : (
            <h3>No Posts</h3>
          )}
          <button onClick={this.incrementPage}>Load More</button>
        </section>
      </div>
    )
  }
}
