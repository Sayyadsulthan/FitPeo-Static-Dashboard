import { Box } from '@mui/material';
import Navbar from './components/Navbar';
import SideBar from './components/SideBar';
import theme from './utils/theme.json';
import ProductOverviewCard from './components/ProductOverviewCard';
function App() {
    return (
        <>
            <Navbar />
            <Box display={'flex'} height={'100vh'} gap={'0px'}>
                <SideBar />
                <Box
                    bgcolor={theme.dark.colors.body}
                    width={'100%'} /* height={'100%'}*/
                    sx={{ marginTop: '45px', paddingTop: '30px' }}
                >
                    <ProductOverviewCard />
                </Box>
            </Box>
        </>
    );
}

export default App;
