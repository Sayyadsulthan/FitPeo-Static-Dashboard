import React from 'react';
import { menuImg, goalImg, burgerImg, arrowLeft } from '../assets/index';
import { Box, Typography, useMediaQuery } from '@mui/material';
import theme from '../utils/theme.json';
const images = [
    { src: goalImg, text: 'Goals', bg: 'rgb(170 74 74)' },
    { src: burgerImg, text: 'Popular Dishes', bg: 'rgb(70 78 139)' },
    { src: menuImg, text: 'Menus', bg: 'rgb(53 119 88)' },
];
const MenuOverview = () => {
    const isNonLaptop = useMediaQuery('(min-width:770px)');
    const isNonMobile = useMediaQuery('(min-width:550px)');

    return (
        <Box
            width={isNonLaptop ? '25%' : isNonMobile ? '25%' : '70%'}
            bgcolor={theme.dark.colors.nav.body}
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'space-evenly'}
            padding={1}
            borderRadius={10}
        >
            {images.map((data) => (
                <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                    <Box>
                        {/* image  */}
                        <img
                            src={data.src}
                            alt=''
                            width={'40px'}
                            style={{ background: data.bg, borderRadius: '50%', objectFit: 'cover' }}
                        />
                    </Box>
                    <Box
                        display={'flex'}
                        justifyContent={'space-between'}
                        width={'80%'}
                        alignItems={'center'}
                    >
                        {/* text and icons */}
                        <Typography variant='caption'>{data.text}</Typography>
                        <img src={arrowLeft} alt='' width={'40px'} />
                    </Box>
                </Box>
            ))}
        </Box>
    );
};

export default MenuOverview;
