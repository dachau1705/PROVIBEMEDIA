import { Box, Typography } from '@mui/material'; // Import Box and Typography from MUI
import { default as React } from 'react';

const BannerService = () => {
    return (
        <Box
            sx={{
                width: '100%',
                height: '600px',
                backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url(/banner4.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                color: 'white',
            }}
        >
            <Typography
                sx={{
                    fontWeight: 'bold',
                    fontSize: 70,
                    color: 'whitesmoke',
                    marginBottom: 2,
                }}
            >
                GIỚI THIỆU
            </Typography>
            <Typography
                sx={{
                    fontSize: 20,
                }}
            >
                TRANG CHỦ / <span style={{ fontWeight: 'bold' }}>GIỚI THIỆU</span>
            </Typography>
        </Box>

    )
}

export default BannerService
