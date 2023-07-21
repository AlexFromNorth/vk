import React, { useState } from 'react'
import {Box} from '@mui/material'
import AddPost from './AddPost'
import { IPost } from '../../../types'
import Posts from './Posts'

const Home = () => {
  const [posts, setPosts] = useState<IPost[]>([])
  return (
    <Box>
      <AddPost setPosts={setPosts}/>
      <Posts posts={posts}/>
    </Box>
  )
}

export default Home