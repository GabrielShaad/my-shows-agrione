import { styled } from "@mui/material";

const Wrapper = styled("header")({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  zIndex: 1,
  display: "flex",
  alignItems: "center",
  padding: "1rem",
  borderBottom: "1px solid gray",
  backgroundColor: "rgba(255, 255, 255, 0.3)",
  backdropFilter: "blur(8px)",

  "& svg": {
    fontSize: "2rem",
    marginRight: "1rem",
  },
});

export { Wrapper };
