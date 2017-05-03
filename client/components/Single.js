import React from 'react';
import Photo from './Photo';
import Comments from './Comments';

class Single extends React.Component {
  // index of the post
  render() {
    const props = this.props;
    const i = props.posts.findIndex((post) => post.code === props.params.postId)
    const post = this.props.posts[i];
    console.log(post);
    return (
      <div className="single-photo">
        <Photo i={i} post={post} {...props} />
        <Comments />
      </div>
    )
  }
}

export default Single;
