import React, { useState, useEffect } from "react";
import io from 'socket.io-client'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Fab from '@material-ui/core/Fab';
import SendIcon from '@material-ui/icons/Send';

const socket = io('http://localhost:7000')
const userName = 'User ' + parseInt(Math.random() * 10)

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    },
    form: {
        width:"100%",
    },
  headBG: {
      backgroundColor: '#e0e0e0'
  },
  borderRight500: {
      borderRight: '1px solid #e0e0e0'
  },
  messageArea: {
      overflowY: 'scroll',
      height: '70vh',
  }
});

const Chat = () => {
    const classes = useStyles();

    const [message, setMessage] = useState('')
    const [chat, setChat] = useState([])

    useEffect(() => {
        
        socket.on('message', payload => {
        setChat([...chat, payload])
        })

    })

    const sendMessage = (e) => {
        e.preventDefault();
        console.log(message)
        socket.emit('message',{userName,message})
        setMessage('')
    };

  return (
      <div>
        <Grid container component={Paper} >
              <Grid item xs={12} >
                  <List className={classes.messageArea}>
                  {chat.map((payload, index) => {
                  return(
                            <ListItem key={index}>
                                <Grid container>
                                    <Grid item xs={12}>
                                      <ListItemText align="right"> {payload.userName}: <span>{payload.message}</span>
                                      </ListItemText>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <ListItemText align="right" secondary="09:30"></ListItemText>
                                    </Grid>
                                </Grid>
                            </ListItem>
                        )
                  })}
                          </List>
                  <Divider />
                  <form  onSubmit={sendMessage} className={classes.form}>
                <Grid container style={{padding: '20px'}}>
                     
                      <Grid item xs={10}>
                          <TextField
                              id="outlined-basic-email"
                                label="Type Something"
                               type="text" name="message"
                                placeholder='Type message'
                                value={message}
                                  onChange={(e) => { setMessage(e.target.value) }}
                                  fullWidth 
                          />
                    </Grid>
                    <Grid xs={2} align="right">
                        <Fab color="primary" aria-label="add" onClick={sendMessage}><SendIcon /></Fab>
                    </Grid>
                   
                </Grid>
                </form>
            </Grid>
        </Grid>
      </div>
  );
}

export default Chat;
