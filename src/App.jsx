import { Box } from '@mui/material';
import Navbar from './components/Navbar';
import SideBar from './components/SideBar';
import theme from './utils/theme.json';
function App() {
    return (
        <>
            {/* <Box display={'flex'} flexDirection={'column'}> */}
            <Navbar />
            <Box display={'flex'} height={'100vh'}>
                <SideBar />
                <Box bgcolor={theme.dark.colors.nav.body} /* height={'100%'}*/></Box>
            </Box>
            {/* </Box> */}
        </>
    );
}

export default App;
