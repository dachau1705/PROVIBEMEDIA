import { Box, Button, Typography } from '@mui/material';
import React from 'react';

const Banner = () => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Box
                sx={{
                    position: 'relative',
                    width: '60%',
                    padding: '50px 0',
                    textAlign: 'center',
                    backgroundImage: 'url(/anh3png.png)', // Add your background image here
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    overflow: 'hidden',
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(52, 80, 125, 0.7)', // Black overlay with 50% transparency
                        zIndex: 1,
                    },
                }}
            >
                <Box
                    sx={{
                        maxWidth: '90%',
                        margin: '0 auto',
                        color: 'white',
                        position: 'relative', // Ensure content stays on top of the overlay
                        zIndex: 2,
                    }}
                >
                    <Typography variant="body1" sx={{ mb: 2 }}>
                        BẠN ĐANG CẦN TƯ VẤN
                    </Typography>
                    <Typography variant="h3" sx={{ fontWeight: 'bold', textTransform: 'uppercase', mb: 2 }}>
                        SẢN XUẤT VIDEO CHẤT LƯỢNG CAO ?
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 3 }}>
                        Hãy cho chúng tôi biết yêu cầu và thông tin liên hệ của bạn, bộ phận tư vấn sẽ liên hệ ngay.
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Button
                            variant="contained"
                            color="primary"
                            href="#dang-ky-tu-van"
                            sx={{
                                maxWidth: '230px',
                                padding: '8px 16px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <span>Liên hệ tư vấn ngay</span>
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Banner;
