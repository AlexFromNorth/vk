import React, { FC } from "react";
import { IPost } from "../../../types";
import { Avatar, Box, ImageList, ImageListItem } from "@mui/material";
import { Link } from "react-router-dom";

interface IPosts {
  posts: IPost[];
}

const Posts: FC<IPosts> = ({ posts }) => {
  return (
    <>
      {posts.map((post) => (
        <Box
          sx={{
            border: "1px solid #e2e2e2",
            borderRadius: "10px",
            padding: 2,
          }}
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
              <span style={{ fontSize: 14 }}>{post.author.name}</span>
              <span style={{ fontSize: 14, opacity: "0.6" }}>
                {post.createdAt}
              </span>
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
