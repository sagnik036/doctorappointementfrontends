import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import MultiActionAreaCard from "./card";
import Doctors from "../actions/getDoctors";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function ResponsiveGrid() {
  const [data, setData] = React.useState([]);
  const x = 1;

  React.useEffect(() => {
    Doctors().then((response) => {
      if (response.data) {
        setData(response.data);
      }
    });
  }, [x]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {data.map((obj, index) => (
          <Grid item xs={2} sm={1} md={3} key={index}>
            <MultiActionAreaCard data={obj} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
