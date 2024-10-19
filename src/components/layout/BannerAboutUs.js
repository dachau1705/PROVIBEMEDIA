import { Box, Typography } from '@mui/material'; // Import Box and Typography from MUI
import { default as React } from 'react';

const BannerAboutUs = () => {
    return (
        <div>
            <Box>
                <Box
                    sx={{
                        width: '100%', // Full width
                        height: '400px', // Set a height for the banner
                        backgroundImage: 'url(/banner2.jpg)',
                        backgroundSize: 'cover', // Cover the entire area
                        backgroundPosition: 'center', // Center the image
                        display: 'flex', // Center content
                        alignItems: 'center', // Center vertically
                        justifyContent: 'center', // Center horizontally
                        flexDirection: 'column', // Arrange children in a column
                        color: 'white', // Text color
                    }}
                >
                    <Typography
                        sx={{
                            fontWeight: 'bold',
                            fontSize: 70,
                            color: 'whitesmoke',
                            marginBottom: 2, // Add space between text elements
                        }}
                    >
                        GIỚI THIỆU
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: 20,
                            color: 'whitesmoke',
                        }}
                    >
                        TRANG CHỦ / GIỚI THIỆU
                    </Typography>
                </Box>
            </Box>

        </div>
    )
}

export default BannerAboutUs
