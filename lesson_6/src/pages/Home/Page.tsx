import React from 'react'
import { Button } from '../../components/ui/button';
import { useGetPosts } from '../../hooks/useGetPosts';
import { PostList } from '../../components/Post/PostList';

export const HomePage = () => {
  const [isEnabled, setIsEnabled] = React.useState(false);
  const query = useGetPosts(isEnabled);
  // TODO: Add comments fetching to post page. Due: 20.03.2024
  return (
    <div>
      <Button onClick={() => {setIsEnabled(true)}}>
        Fetch Posts
      </Button>
      <PostList isEnabled={isEnabled} query={query} />
    </div>
  )
}
