import React, { useState } from 'react'
import {Box} from '@mui/material'
import AddPost from './AddPost'
import { IPost } from '../../../types'

const Home = () => {
  const [posts, setPosts] = useState<IPost[]>([])
  return (
    <Box>
      <AddPost setPosts={setPosts}/>
    </Box>
  )
}

export default Home