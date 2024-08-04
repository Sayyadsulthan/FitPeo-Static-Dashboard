import { Box, Typography, useMediaQuery } from '@mui/material';
import React from 'react';
import { arrowUp } from '../assets';
import theme from '../utils/theme.json';

const NetProfitCard = () => {
    const isNonLaptop = useMediaQuery('(min-width:770px)');
    const isNonMobile = useMediaQuery('(min-width:550px)');
    return (
        <Box
            display={'flex'}
            flexDirection={'row'}
            justifyContent={'space-around'}
            bgcolor={theme.dark.colors.nav.body}
            height={'150px'}
            width={isNonLaptop ? '28%' : isNonMobile ? '80%' : '90%'}
            borderRadius={'10px'}
            padding={'10px'}
            marginLeft={isNonLaptop ? '0px' : 'auto'}
            marginRight={isNonLaptop ? '' : 'auto'}
        >
            {/* left div */}
            <Box display={'flex'} flexDirection={'column'} justifyContent={'space-between'}>
                <Typography variant='caption' marginBottom={'5px'}>
                    {' '}
                    Net Profit
                </Typography>
                <Typography variant='h4' fontWeight={'bolder'}>
                    $ 675.75
                </Typography>

                <Box
                    display={'flex'}
                    padding={'5px'}
                    // justifyContent={'center'}
                    alignItems={'center'}
                    height={'20px'}
                    gap={isNonMobile ? '5px' : '0px'}
                >
                    <img src={arrowUp} alt='' width={'10px'} />
                    <Typography
                        variant='body1'
                        color={'white'}
                        fontWeight={isNonMobile ? 'bolder' : 'bold'}
                    >
                        3%
                    </Typography>
                </Box>
            </Box>
            {/* right div */}

            <Box
                display={'flex'}
                flexDirection={'column'}
                // margin={'auto'}
                alignItems={'center'}
                textAlign={'center'}
                minWidth={'120px'}
            >
                <Box
                    sx={{
                        position: 'relative',
                        textAlign: 'center',
                        width: '100px',
                        height: '100px',
                        // marginLeft: '30%',
                        borderRadius: '100%',
                        backgroundColor: ' #E53B3B',
                        background: `linear-gradient(270deg, pink 50%, transparent 50%), linear-gradient(0deg, pink 50%, lightgray 50%) `,
                    }}
                >
                    <Box
                        sx={{
                            position: 'relative',
                            top: '8px',
                            left: '8px',
                            textAlign: 'center',
                            width: '85px',
                            height: '85px',
                            borderRadius: '100%',
                            backgroundColor: theme.dark.colors.nav.body,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <span> 75%</span>
                        <span> some text</span>
                    </Box>
                </Box>
                <Box textAlign={'center'}>
                    <Typography textAlign={'center'}>Lorem ipsum.</Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default NetProfitCard;
