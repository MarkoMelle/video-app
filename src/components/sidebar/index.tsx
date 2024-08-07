import { useLocation } from "react-router-dom";
import BookmarkIcon from "../icons/bookmark-icon";
import HomeIcon from "../icons/home-icon";
import MovieIcon from "../icons/movie-icon";
import TvSeriesIcon from "../icons/series-icon";
import { Box } from "@mui/material";

const navLinks = [
  {
    name: "Home",
    icon: HomeIcon,
    link: "/home",
  },
  {
    name: "Movies",
    icon: MovieIcon,
    link: "/movies",
  },
  {
    name: "Bookmark",
    icon: BookmarkIcon,
    link: "/bookmark",
  },
  {
    name: "Tv series",
    icon: TvSeriesIcon,
    link: "/tv-series",
  },
];

const Sidebar = () => {
  const { pathname } = useLocation();
  return (
    <Box
      sx={{
        backgroundColor: "161d2f",
        padding: 2,
        borderRadius: 2,
        display: "flex",
        flexDirection: {
          xs: "row",
          lg: "column",
        },
        alignItems: "center",
        justifyContent: "space-between",
        width: {
          sm: "100%",
          lg: 200,
        },
      }}
    >
    </Box>
  );
};

export default Sidebar;
