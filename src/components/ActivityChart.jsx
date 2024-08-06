import * as React from 'react';

import { axisClasses, BarChart, barElementClasses } from '@mui/x-charts';
import themes from '../utils/theme.json';

import { useMediaQuery } from '@mui/material';
export const ActivityChart = () => {
    const isNonLaptop = useMediaQuery('(min-width:770px)');
    const isNonMobile = useMediaQuery('(min-width:550px)');
    const colors = ['white', 'lightgrey'];
    return (
        <BarChart
            sx={(theme) => ({
                [`.${barElementClasses.root}`]: {
                    fill: theme.palette.background.paper,
                    strokeWidth: 2,
                },
                [`.MuiBarElement-series-l_id`]: {
                    stroke: colors[0],
                },
                [`.MuiBarElement-series-r_id`]: {
                    stroke: colors[0],
                },
                [`.MuiChartsLegend-series text`]: {
                    fill: 'white !important', // Change this to your desired color
                    color: 'white !important',
                },
                [`.${axisClasses.root}`]: {
                    [`.${axisClasses.tick}, .${axisClasses.line}`]: {
                        stroke: colors[0],
                        strokeWidth: 3,
                    },
                    [`.${axisClasses.tickLabel}`]: {
                        fill: colors[0],
                    },
                },
                border: `1px solid rgba(${
                    theme.palette.mode === 'dark' ? '255,255,255' : '0, 0, 0'
                }, 0.1)`,
                backgroundImage: `linear-gradient(rgba(${
                    theme.palette.mode === 'dark' ? '255,255,255' : '0, 0, 0'
                }, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(${
                    theme.palette.mode === 'dark' ? '255,255,255' : '0, 0, 0'
                }, 0.1) 1px, transparent 1px)`,
                backgroundSize: '35px 35px',
                backgroundPosition: '20px 20px, 20px 20px',
                backgroundColor: themes.dark.colors.nav.body,
            })}
            series={[{ data: [3, 4, 1, 6, 5, 7, 2, 8], label: 'Series A1', color: 'white' }]}
            borderRadius={50}
            // width={isNonLaptop ? 800 : isNonMobile ? 600 : 350}

            height={350}
            color={colors}
        />
    );
};
