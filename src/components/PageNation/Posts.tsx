import React from 'react';
export interface PostProps {
  loading?: boolean
  posts?: any
}
export const Posts: React.FC<PostProps> = ({
  posts,
  loading,
}) => {
  if (loading) {
    return <h2>Loading...</h2>
  }
  return (
    <ul>
      {posts.map(post => (
        <li key={post}>
          {post}
          <br />
          {post}
        </li>
      ))}
    </ul>
  );
};

export default Posts