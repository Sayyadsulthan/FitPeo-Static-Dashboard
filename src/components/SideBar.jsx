import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { cartCheck, homeImg, logoutImg, statsImg, taskImg, walletImg } from '../assets/index';
import theme from '../utils/theme.json';

const sideBar = [homeImg, statsImg, taskImg, walletImg, cartCheck];
function SideBar() {
    const [clickIndex, setClickIndex] = useState(0);
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                width: '50px',
                background: theme.dark.colors.nav.body,
                marginTop: '45px',
                paddingTop: '30px',
                paddingLeft: '10px',
                paddingRight: '10px',
                paddingBottom: '10px',
                justifyContent: 'space-between',
                // height: '100%',
            }}
        >
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {sideBar.map((icon, ind) => (
                    <img
                        style={{
                            backgroundColor: ind === clickIndex ? '#4c4cc5' : '',
                            borderRadius: '10px',
                            objectFit: 'cover',
                            padding: '5px',
                        }}
                        src={icon}
                        alt=''
                        key={ind}
                        /* height={'40px'} */ width={'100%'}
                        onClick={() => setClickIndex(ind)}
                    />
                ))}
                ;
            </Box>
            <Box>
                <img
                    style={{
                        borderRadius: '10px',
                        objectFit: 'cover',
                        padding: '5px',
                    }}
                    src={logoutImg}
                    alt=''
                    /* height={'40px'} */ width={'100%'}
                />
            </Box>
        </Box>
    );
}

export default SideBar;
