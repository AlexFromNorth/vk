import React, { useEffect, useState } from 'react'
import {Box} from '@mui/material'
import AddPost from './AddPost'
import { IPost  } from '../../../types'
import Posts from './Posts'
import { initialPosts } from './initialPosts'
import { useAuth } from '../../providers/useAuth'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const [posts, setPosts] = useState<IPost[]>(initialPosts)
  const { user } = useAuth();
  // console.log(user)
  // const navigate = useNavigate()

  // useEffect(() => {
  //   if (!user) {
  //     navigate("/auth");
  //   }
  // }, [user]);
  
  return (
    <>
    <Box>
      <AddPost setPosts={setPosts}/>
      <Posts posts={posts}/>
    </Box>
    </>
  )
}

export default Home