import logo from './logo.svg';

import Navbar from './Components/Navbar';
import { Box } from '@chakra-ui/react';

function App() {
  return (
    <div className="App" style={{}}>
      <Box  backgroundImage="url('https://images.unsplash.com/photo-1519419166318-4f5c601b8e6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80')">
          
      </Box>
     <Navbar/>
    </div>
  );
}

export default App;
