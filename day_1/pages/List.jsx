import React from "react";
import { ListC } from "../data/data";
import Layout from "../Layout/Layout";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const List = () => {
  return (
    <Layout>
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {ListC.map((list) => (
          <Card sx={{ maxWidth: "390px", display: "flex", m: 2 }}>
            <CardActionArea>
              <CardMedia
                sx={{ minHeight: "400px" }}
                component={"img"}
                src={list.image}
                alt={list.name}
              />
              <CardContent>
                <Typography variant="h5" gutterBottom component={"div"}>
                  {list.name}
                </Typography>
                <Typography variant="body2">{list.description}</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Layout>
  );
};

export default List;