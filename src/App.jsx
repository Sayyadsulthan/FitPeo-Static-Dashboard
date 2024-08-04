import { Box, useMediaQuery } from '@mui/material';
import Navbar from './components/Navbar';
import SideBar from './components/SideBar';
import theme from './utils/theme.json';
import ProductOverviewCard from './components/ProductOverviewCard';
import NetProfitCard from './components/NetProfitCard';
function App() {
    const isNonLaptop = useMediaQuery('(min-width:770px)');
    return (
        <>
            <Navbar />
            <Box display={'flex'} height={'100vh'} gap={'0px'} color={theme.dark.colors.text}>
                <SideBar />
                <Box
                    bgcolor={theme.dark.colors.body}
                    width={'100%'} /* height={'100%'}*/
                    sx={{ marginTop: '45px', paddingTop: '30px' }}
                    display={'flex'}
                    flexDirection={isNonLaptop ? 'row' : 'column'}
                    // justifyContent={'space-around'}
                    gap={'10px'}
                >
                    <ProductOverviewCard />
                    <NetProfitCard />
                </Box>
            </Box>
        </>
    );
}

export default App;
