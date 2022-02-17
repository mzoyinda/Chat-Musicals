import './App.css';
import { Container } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Home from './components/Home';


function App() {
  return (
    <>
       <Typography variant='h1' className='header'>
            Chat Musicals
        </Typography>
    <Container className="App" >
   
        <Home />
        
     </Container>
     </>
  );
}

export default App;
