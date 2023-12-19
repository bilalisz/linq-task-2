import logo from './logo.svg';
import './App.css';
import { Box } from '@mui/material';
import Sidebar from './components/sidebar';
import MianContainer from './components/main-cnt';

function App() {
  return (
    <Box component="main" sx={{width:"100%",display:"flex",gap:2, bgcolor:"#f3f3f3"}}>
      <Sidebar/>
      <MianContainer/>
      
    </Box>
  );
}

export default App;
