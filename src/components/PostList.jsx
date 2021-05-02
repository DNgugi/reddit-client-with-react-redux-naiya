import React from "react";
import { GridList, GridListTile, useTheme } from "@material-ui/core";
import Post from "./Post";

const postsData = [
  {
    id: 1,
    header: "Header One",
    body: "Lorem.",
  },
  {
    id: 2,
    header: "Header Two",
    body: "Lorem ipsum.",
  },
  {
    id: 3,
    header: "Header Three",
    body: "Lorem ipsum dolor.",
  },
  {
    id: 4,
    header: "Header Four",
    body: "Lorem ipsum dolor sit.",
  },
];

const PostList = () => {
  const theme = useTheme();
  return (
    <GridList cellHeight="auto" cols={2} spacing={theme.spacing(5)}>
      {postsData.map((post) => (
        <GridListTile key={post.id}>
          <Post header={post.header} body={post.body} />
        </GridListTile>
      ))}
    </GridList>
  );
};

export default PostList;
