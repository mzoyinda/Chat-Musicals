import { Card, CardContent, CardMedia, Container, Grid, Typography } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import React,{useState, useEffect} from 'react';

const Test = () => {

    const [data, setData] = useState([]);
    
    useEffect(() => {
      fetch("https://finalspaceapi.com/api/v0/character/?limit=12")
        .then((res) => res.json())
        .then((data) => setData(data));
    }, []);

    const useStyles = makeStyles({
        card: {
          maxWidth: 345,
          boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
          backgroundColor: "#fafafa",
        },
        media: {
          height: 300,
        },
    });
    const classes = useStyles();

    return (
    <div>
        <Container>
            <Typography color="primary" gutterBottom variant="h2" align="center" >
            React Material UI Example
            </Typography>
            <Grid container spacing={3}>
          {data.map((character) => (
            <Grid item xs={12} sm={4} key={character.id}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.media}
                  image={character.img_url}
                />
                <CardContent>
                  <Typography color="primary" variant="h5">
                    {character.name}
                  </Typography>
                  <Typography color="textSecondary" variant="subtitle2">
                    {character.status}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
            
        </Container>
  </div>
  );
};

export default Test;
