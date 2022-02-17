import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'
import { Box, makeStyles } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'


const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: 'block'
  }
})

export default function Create() {
  const classes = useStyles()
  const [username, setusername] = useState('')
  const [comment, setcomment] = useState('')
  const [usernameError, setusernameError] = useState(false)
  const [commentError, setcommentError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setusernameError(false)
    setcommentError(false)

    if (username === '') {
      setusernameError(true)
    }
    if (comment === '') {
      setcommentError(true)
    }
    if (username && comment) {
      
      fetch('http://localhost:8001/notes', {
        method: 'POST',
        headers: {"Content-type": "application/json"},
        body: JSON.stringify({ username, comment })
      }) 
    } 
  }

  return (
    <Box
    sx={{
      mx: 'auto',
      width: "50%",
      p: 1,
      m: 1,
      textAlign: 'center',
    }}
  >
      <Grid sm={12}  >
        <form noValidate autoComplete="off" sm={6} onSubmit={handleSubmit}>
        <TextField className={classes.field}
          onChange={(e) => setusername(e.target.value)}
          label="username" 
          variant="outlined" 
          color="secondary"
          required
          fullWidth
          error={usernameError}
        />
        <TextField className={classes.field}
          onChange={(e) => setcomment(e.target.value)}
          label="What are your thoughts?"
          variant="outlined"
          color="secondary"
          multiline
          rows={4}
          required
          fullWidth
          error={commentError}
        />

        <Button
          type="submit" 
          color="secondary" 
          variant="contained"
          endIcon={<KeyboardArrowRightIcon />}>
          Submit
        </Button>
      </form>
   
      </Grid>
      </Box>

  )
}