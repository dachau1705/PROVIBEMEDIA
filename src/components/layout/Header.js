import SearchIcon from '@mui/icons-material/Search';
import { AppBar, Box, Button, IconButton, InputBase, Toolbar, Typography } from '@mui/material';
import { styled } from '@mui/system';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    border: '1px solid #ccc', // Add border explicitly
    backgroundColor: theme.palette.common.white,
    '&:hover': {
        backgroundColor: theme.palette.action.hover,
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('md')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchInput = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
            '&:focus': {
                width: '30ch',
            },
        },
    },
}));

const Header = () => {
    const [activeButton, setActiveButton] = useState(null);

    const handleButtonClick = (button) => {
        setActiveButton(button);
    };

    return (
        <Box sx={{ width: '100%', margin: 0, padding: 0 }}>
            <AppBar
                position="fixed"
                elevation={0} // Removes shadow/border effect
                sx={{ backgroundColor: 'white', color: 'black', width: '100%' }}
            >
                <Toolbar>
                    {/* Logo */}
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, mx: 4 }}>
                        <a
                            href="https://mithalo.vn/"
                            title="MITHALO MEDIA - Sản xuất phim, hình ảnh, Tổ chức sự kiện, Booking quảng cáo"
                            rel="home"
                        >
                            <img
                                src="/logo.png"
                                alt="PROVIDE MEDIA"
                                style={{ maxWidth: '80px' }}
                            />
                        </a>
                    </Typography>

                    {/* Navigation Buttons */}
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        {['/', '/about', '/services', '/recruitment', '/contact'].map((path, index) => {
                            const labels = ['Trang chủ', 'Giới thiệu', 'Dịch vụ', 'Tuyển dụng', 'Liên hệ'];
                            return (
                                <Button
                                    key={index}
                                    component={Link} // Use Link component
                                    to={path} // Set the path for routing
                                    color="inherit"
                                    sx={{
                                        color: activeButton === labels[index] ? 'blue' : 'black',
                                    }}
                                    onClick={() => handleButtonClick(labels[index])}
                                >
                                    {labels[index]}
                                </Button>
                            );
                        })}
                    </Box>

                    {/* Search Bar */}
                    <Search>
                        <SearchInput placeholder="Tìm kiếm…" inputProps={{ 'aria-label': 'search' }} />
                        <IconButton type="submit" aria-label="search">
                            <SearchIcon />
                        </IconButton>
                    </Search>

                    {/* Register Button */}
                    <Button
                        component={Link} // Use Link component
                        to="/register" // Set the path for registration
                        onClick={() => handleButtonClick('register')}
                        sx={{
                            backgroundColor: '#1084cb',
                            color: 'white',
                            borderRadius: '8px',
                            padding: '8px 16px',
                            marginLeft: 2,
                            '&:hover': {
                                backgroundColor: 'darkblue',
                            },
                        }}
                    >
                        Đăng ký tư vấn
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );

};

export default Header;
