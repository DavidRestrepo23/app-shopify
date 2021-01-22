import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { Grid, Card, CardContent, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "30px",
    display: "flex",
    alignItems: "center",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: "100%",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  marginTop: {
    marginTop: "30px",
  },
}));

const Home = () => {
  const classes = useStyles();

  const [covidInfo, setCovidInfo] = useState([]);

  useEffect(() => {
    handleGetData();
  }, []);

  const handleGetData = () => {
    axios.get("http://localhost:4040/api/v1/covid/totals").then((response) => {
      setCovidInfo(response.data);
    });
  };

  return (
    <Layout>
      {covidInfo.length > 0 && (
        <Grid container spacing={5} className={classes.root}>
          <Grid item xs={6} sm={3}>
            <Card className={classes.root} variant="outlined">
              <CardContent>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                  align="center"
                >
                  Confirmados
                </Typography>

                <Typography
                  className={classes.pos}
                  color="textSecondary"
                  align="center"
                >
                  <strong>{covidInfo[0].confirmed}</strong>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Card className={classes.root} variant="outlined">
              <CardContent>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                  align="center"
                >
                  Estado Critico
                </Typography>

                <Typography
                  className={classes.pos}
                  color="textSecondary"
                  align="center"
                >
                  <strong>{covidInfo[0].critical}</strong>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Card className={classes.root} variant="outlined">
              <CardContent>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                  align="center"
                >
                  Recuperados
                </Typography>

                <Typography
                  className={classes.pos}
                  color="textSecondary"
                  align="center"
                >
                  <strong>{covidInfo[0].recovered}</strong>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Card className={classes.root} variant="outlined">
              <CardContent>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                  align="center"
                >
                  Muertes
                </Typography>

                <Typography
                  className={classes.pos}
                  color="textSecondary"
                  align="center"
                >
                  <strong>{covidInfo[0].deaths}</strong>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      )}
    </Layout>
  );
};

export default Home;
