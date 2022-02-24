import React from 'react'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import DeleteOutlined from '@material-ui/icons/DeleteOutlined'
import Avatar from '@material-ui/core/Avatar'


export default function NoteCard({ note, handleDelete }) {
    const randomColor = () => {
        let hex = Math.floor(Math.random() * 0xFFFFFF);
        let color = "#" + hex.toString(16);
      
        return color;
      }
  return (
    <div>
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
          <Typography variant="body2" color="textSecondary">
            { note.comment }
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}