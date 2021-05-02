import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";
import React from "react";

const Post = (props) => {
  return (
    <Card variant="outlined">
      <CardMedia
        component="img"
        src="https://source.unsplash.com/random"
        height="200"
      />
      <CardContent>
        <Typography variant="h5">{props.header}</Typography>
        <Typography variant="body1">{props.body}</Typography>
      </CardContent>
    </Card>
  );
};

export default Post;
