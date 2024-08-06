import { Box, Rating, Typography, useMediaQuery } from '@mui/material';
import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import { userProfile } from '../assets';
import theme from '../utils/theme.json';
let sample = [1, 2, 3, 4];
const CustomerReviewsCard = () => {
    const isNonLaptop = useMediaQuery('(min-width:770px)');
    const isNonMobile = useMediaQuery('(min-width:550px)');
    return (
        <Box
            display={'flex'}
            flexDirection={'column'}
            gap={'10px'}
            sx={{
                overflowX: 'scroll',

                ['::-webkit-scrollbar']: {
                    width: '5px',
                },
            }}
            height={'400px'}
            width={isNonLaptop ? '25%' : isNonMobile ? '30%' : '80%'}
            bgcolor={theme.dark.colors.nav.body}
            borderRadius={'25px'}
            padding={'10px'}
        >
            {sample.map((val) => (
                <Box>
                    <Box display={'flex'} flexWrap={'wrap'}>
                        <img
                            src={userProfile}
                            alt={''}
                            width={'40px'}
                            style={{ background: 'grey', borderRadius: '50%' }}
                        />
                        <Typography variant='subtitle1'>User Name</Typography>
                    </Box>
                    <Rating
                        name='text-feedback'
                        value={5}
                        readOnly
                        precision={0.5}
                        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize='inherit' />}
                    />
                    <Typography variant='body2' noWrap={false}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quasi
                        voluptatibus, esse maiores ut assumenda necessitatibus voluptatum. In quasi
                        totam nihil at quos laudantium, necessitatibus, ea, dolores quo accusantium
                        facere.
                    </Typography>
                </Box>
            ))}
        </Box>
    );
};

export default CustomerReviewsCard;
