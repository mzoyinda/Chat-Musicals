import React,{useState, useEffect} from 'react';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import { Card, Grid } from '@material-ui/core';
import axios from 'axios';

export default function MediaControlCard() {

    const [media, setmedia] = useState([]);

    useEffect(() => {
        const getmedia = () => {
            axios.get('http://localhost:3002').then(res => {
                const details = res.data[0];
                console.log(details);
                setmedia(details);
            });
        }

      getmedia();
    }, []);
    

    return (
       
            <Card className='media'>
                <Grid container className='video-container'>
                    <Grid item xs={12} md={6}>
                        <CardContent className='card-content'>
                            <Typography component="div" variant="h5">
                                {media.title}
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary" component="div">
                                Mac Miller
                            </Typography>
                        </CardContent>
                    </Grid>
                    <Grid item xs={6}>
                        <CardMedia
                            component="video"
                            sx={{ width: 151 }}
                            image={media.url}
                            title={media.title}
                            alt="Live from space album cover"
                            controls
                        />
                    </Grid>
                
                </Grid>
            </Card>
  );
};