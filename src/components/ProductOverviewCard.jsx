import { Box, Paper, Typography, useMediaQuery } from '@mui/material';
import React from 'react';

import {
    orderCartImg,
    cartCancelImg,
    shoppingBasketImg,
    stockImg,
    arrowUp,
    arrowDown,
} from '../assets/index';
import theme from '../utils/theme.json';

const products = [
    {
        img: orderCartImg,
        text: 'Total Orders',
        total: 75,
        percent: 3,
        arrow: arrowUp,
        bg: '#37851cc4',
    },
    {
        img: cartCancelImg,
        text: 'Total Devlivered',
        total: 70,
        percent: 3,
        arrow: arrowDown,
        bg: '#aa3535c7',
    },
    {
        img: shoppingBasketImg,
        text: 'Total Cancelled',
        total: 5,
        percent: 3,
        arrow: arrowUp,
        bg: '#13286fbd',
    },
    {
        img: stockImg,
        text: 'Total Revenue',
        total: '$12K',
        percent: 3,
        arrow: arrowDown,
        bg: '#a05050',
    },
];
const ProductOverviewCard = () => {
    const isNonLaptop = useMediaQuery('(min-width:770px)');
    const isNonMobile = useMediaQuery('(min-width:550px)');

    return (
        <Box
            display={'flex'}
            gap={isNonLaptop ? '10px' : '5px'}
            width={isNonLaptop ? '70%' : '100%'}
            paddingLeft={'5px'}
        >
            {products.map((prod, ind) => (
                <Paper
                    elevation={6}
                    sx={{
                        width: '23%',
                        // marginLeft: isNonLaptop ? '10px' : '5px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        backgroundColor: theme.dark.colors.nav.body,
                        color: theme.dark.colors.text,
                        padding: isNonLaptop ? '10px' : '5px',
                    }}
                >
                    <Box display={'flex'} flexDirection={'column'}>
                        <img
                            src={prod.img}
                            alt=''
                            key={ind}
                            width={'40px'}
                            style={{
                                backgroundColor: prod.bg,
                                borderRadius: '10px',
                                padding: '5px',
                            }}
                        />
                        <Typography variant='caption'>{prod.text}</Typography>
                    </Box>

                    <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                        <Typography
                            variant={isNonLaptop ? 'h5' : isNonMobile ? 'h6' : 'subtitle1'}
                            color={'white'}
                            fontWeight={isNonLaptop ? 'bolder' : 'bold'}
                        >
                            {prod.total}
                        </Typography>

                        <Box
                            display={'flex'}
                            padding={'5px'}
                            justifyContent={'center'}
                            alignItems={'center'}
                            height={'20px'}
                            gap={isNonMobile ? '5px' : '0px'}
                        >
                            <img src={prod.arrow} key={`${ind}${ind}`} alt='' width={'10px'} />
                            <Typography
                                variant='body1'
                                color={'white'}
                                fontWeight={isNonMobile ? 'bolder' : 'bold'}
                            >
                                {prod.percent}%
                            </Typography>
                        </Box>
                    </Box>
                </Paper>
            ))}
        </Box>
    );
};

export default ProductOverviewCard;
