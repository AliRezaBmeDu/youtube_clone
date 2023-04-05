import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Box } from '@mui/material'

const App = () => {
  return (
    <BrowserRouter>
        <Box sx={{
            backgroundColor: '#000', color:"#fff"
        }}> <h1>Welcome</h1>
            This is a navbar
            <Routes>
                the routes
            </Routes>
        </Box>

        
    </BrowserRouter>
  )
}

export default App