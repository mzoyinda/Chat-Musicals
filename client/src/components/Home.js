import { Grid, Typography } from '@material-ui/core';
import React from 'react'
import Chat from './Chat';
import { makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    header: {
        textAlign: " center",
        margin: "1rem 0",
    },
    bg: {
        backgroundColor: "#f2f2f2",
        margin: 'auto auto',
      // height: "100vh",
    },
    content: {
      // padding: "10px",
      margin: "0",
    },
    video: {
        width:"100%",
    },
    classCard: {
        width:"fitContent",
    }

    }));

const Home = () => {
    const classes = useStyles();

  return (
    <Grid container xs={10} className={classes.bg}>
    
    <Grid item  xs={8} className={classes.content}>
        <Grid item container className={classes.classCard}>
        <video src="../pitch.mp4" autoplay className={classes.video} controls>
        Your browser does not support the HTML5 Video element.
                  </video> 
                  <Grid container>
            <Grid item xs={12} >
                <Typography variant="h5"  className={classes.header}> Sing on Pitch Exercise With Matt </Typography>
            </Grid>
        </Grid>          
        </Grid>
          </Grid>
          <Grid item  xs={4} className={classes.content}>
              <Chat />
              </Grid>
    </Grid>
  )
}

export default Home