import { Box, useMediaQuery } from '@mui/material';
import Navbar from './components/Navbar';
import SideBar from './components/SideBar';
import theme from './utils/theme.json';
import ProductOverviewCard from './components/ProductOverviewCard';
import NetProfitCard from './components/NetProfitCard';
import { ActivityChart } from './components/ActivityChart';
import MenuOverview from './components/MenuOverview';
import OrdersTable from './components/OrdersTable';
import CustomerReviewsCard from './components/CustomerReviewsCard';
function App() {
    const isNonLaptop = useMediaQuery('(min-width:770px)');
    const isNonMobile = useMediaQuery('(min-width:550px)');
    return (
        <>
            <Navbar />
            <Box display={'flex'} minHeight={'100vh'} gap={'0px'} color={theme.dark.colors.text}>
                <SideBar />
                <Box
                    display={'flex'}
                    flexDirection={'column'}
                    width={'100%'}
                    bgcolor={theme.dark.colors.body}
                    gap={5}
                >
                    {/* First Row */}
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
                    {/* Second rows */}
                    <Box
                        display={'flex'}
                        width={'100%'}
                        justifyContent={isNonLaptop ? 'center' : 'center'}
                        alignItems={isNonMobile ? '' : 'center'}
                        padding={'5px'}
                        paddingLeft={'0'}
                        gap={2}
                        flexDirection={isNonMobile ? 'row' : 'column'}
                        // alignItems={'center'}
                    >
                        <ActivityChart />
                        <MenuOverview />
                    </Box>
                    {/* Third rows */}
                    <Box
                        display={'flex'}
                        flexDirection={isNonMobile ? 'row' : 'column'}
                        justifyContent={isNonLaptop ? 'center' : 'center'}
                        alignItems={isNonMobile ? '' : 'center'}
                        gap={'10px'}
                        width={'100%'}
                    >
                        <OrdersTable />
                        <CustomerReviewsCard />
                    </Box>
                </Box>
            </Box>
        </>
    );
}

export default App;
