import React, { useEffect, useState } from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import DeleteOutlined from '@material-ui/icons/DeleteOutlined'
import Avatar from '@material-ui/core/Avatar'



export default function Notes() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8001/notes')
      .then(res => res.json())
      .then(data => setNotes(data))
  }, [])

  const handleDelete = async (id) => {
    await fetch('http://localhost:8001/notes/' + id, {
      method: 'DELETE'
    })
    const newNotes = notes.filter(note => note.id !== id)
    setNotes(newNotes)
  }
  const randomColor = () => {
    let hex = Math.floor(Math.random() * 0xFFFFFF);
    let color = "#" + hex.toString(16);
  
    return color;
  }

  return (
    <Container className='center'>
   
        {notes.map(note => (
          <Grid item xs={6} key={note.id} spacing={2}>
             <Card elevation={1}>
        <CardHeader
          avatar={
                      <Avatar style={{
                        backgroundColor: randomColor()
                      }}>
              {note.username[0].toUpperCase()}
            </Avatar>}
          action={
            <IconButton onClick={() => handleDelete(note.id)}>
              <DeleteOutlined />
            </IconButton>
          }
          title={note.username}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" >
            { note.comment }
          </Typography>
        </CardContent>
      </Card>
          </Grid>
        ))}
    </Container>
  )
}