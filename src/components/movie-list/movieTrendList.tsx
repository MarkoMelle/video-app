import { Box, Grid, Paper } from "@mui/material";
import React from "react";
import { MovieDataType } from "../../assets/data";
import MovieTrendCard from "../movie-card/movieTrend";
import { scrollbarStyles } from "../../scrollbarStyles";

interface MovieTrendListProps {
  trendingList: MovieDataType[];
}

const MovieTrendList = ({ trendingList }: MovieTrendListProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        overflowX: "scroll",
        ...scrollbarStyles,
      }}
    >
      {trendingList.map((movie) => (
        <Grid item key={movie.id}>
          <Paper elevation={0} sx={{ backgroundColor: "transparent" }}>
            <MovieTrendCard movie={movie} />
          </Paper>
        </Grid>
      ))}
    </Box>
  );
};

export default MovieTrendList;
