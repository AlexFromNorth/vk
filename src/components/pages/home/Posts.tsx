import React, { FC, useEffect, useState } from "react";
import { IPost } from "../../../types";
import { Avatar, Box, ImageList, ImageListItem } from "@mui/material";
import { Link } from "react-router-dom";
import { collection, doc, onSnapshot, orderBy, query } from "firebase/firestore";
import { useAuth } from "../../providers/useAuth";
import { initialPosts } from "./initialPosts";

// interface IPosts {
//   posts: IPost[];
// }

// const Posts: FC<IPosts> = () => {
const Posts: FC = () => {
  const {db} = useAuth()
  // initialPosts
  const [posts, setPosts] = useState<IPost[]>([])

  useEffect(()=>{
    const q = query(collection(db, "posts"), orderBy('createdAt', "desc"));

      const unsub = onSnapshot(q, doc=>{
        const array:IPost[]=[]
        doc.forEach((d:any) =>{
          array.push(d.data())
        })
        setPosts(array)
      })
      return () => {
        unsub()
      }
  }, [])

  return (
    <>
      {posts.map((post, idx) => (
        <Box
          sx={{
            border: "1px solid #e2e2e2",
            borderRadius: "10px",
            padding: 2,
            marginTop: 4,
          }}
          key={`Post ${idx}`}
        >
          <Link
            key={post.author.id}
            to={`/profile/${post.author.id}`}
            style={{
              display: "flex",
              alignItems: "center",
              color: "#111",
              marginBottom: 12,
            }}
          >
            <Box
              sx={{
                position: "relative",
                marginRight: 2,
                width: 50,
                height: 50,
              }}
            >
              <Avatar
                alt="avatar"
                src={post.author.avatar}
                sx={{ width: 50, height: 50, borderRadius: "50%" }}
              />
            </Box>
            <Box>
              <div style={{ fontSize: 14 }}>{post.author.name}</div>
              <div style={{ fontSize: 14, opacity: "0.6" }}>
                {post.createdAt}
              </div>
            </Box>
          </Link>
          <p>{post.content}</p>
          {post?.images?.length && (
            <ImageList variant="masonry" cols={3} gap={8}>
              {post.images.map((image) => (
                <ImageListItem key={image}>
                  <img src={image} alt="image" loading="lazy" />
                </ImageListItem>
              ))}
            </ImageList>
          )}
        </Box>
      ))}
    </>
  );
};

export default Posts;
