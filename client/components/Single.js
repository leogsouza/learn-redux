import React from 'react';
import Photo from './Photo';
import Comments from './Comments';

class Single extends React.Component {
  // index of the post
  render() {
    const props = this.props;
    const { postId } = this.props.params;
    const i = props.posts.findIndex((post) => post.code === props.params.postId)
    const post = props.posts[i];
    const postComments = props.comments[postId] || [];
    console.log(post);
    return (
      <div className="single-photo">
        <Photo i={i} post={post} {...props} />
        <Comments postComments={postComments} {...props}/>
      </div>
    )
  }
}

export default Single;
