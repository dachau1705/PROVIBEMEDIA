import { Box, Card, CardActionArea, CardMedia, Grid, Link, Paper, Typography } from '@mui/material'; // Import Box and Typography from MUI
import { default as React } from 'react';
import Banner from '../layout/Banner';
import ContactSection from '../layout/ContactSection';
import WhyChooseUsSection from './WhyChooseUsSection';

const services = [
    {
        title: 'SẢN XUẤT PHIM',
        imageUrl: 'https://mithalo.vn/wp-content/uploads/2020/12/icon-quay-film.png',
        links: [
            { text: 'Quay video sự kiện', href: 'https://mithalo.vn/dich-vu/san-xuat-phim/san-xuat-phim-doanh-nghiep/' },
            { text: 'Quay TVC', href: 'https://mithalo.vn/dich-vu/san-xuat-phim/san-xuat-phim-quang-cao/' },
            // { text: 'Phim kỷ niệm thành lập công ty', href: 'https://mithalo.vn/dich-vu/san-xuat-phim/san-xuat-phim-viral/' },
            { text: 'Quay tư liệu bài giảng', href: 'https://mithalo.vn/dich-vu/san-xuat-hinh-anh/chup-anh-san-pham/' },
        ],
    },
    {
        title: 'SẢN XUẤT HÌNH ẢNH',
        imageUrl: 'https://mithalo.vn/wp-content/uploads/2020/12/icon_chupanh.png',
        links: [
            { text: 'Chụp ảnh quảng cáo', href: 'https://mithalo.vn/dich-vu/san-xuat-hinh-anh/chup-anh-su-kien/' },
            { text: 'Chụp ảnh mẫu', href: 'https://mithalo.vn/dich-vu/san-xuat-hinh-anh/chup-anh-profile/' },
        ],
    },
    // {
    //     title: 'VR 360',
    //     imageUrl: 'https://mithalo.vn/wp-content/uploads/2021/03/icon-vr-360.png',
    //     description: 'Dịch vụ chụp ảnh 360 độ mang đến trải nghiệm không gian một cách vượt trội so với các loại hình Video hoặc hình ảnh tĩnh truyền thống.',
    //     link: 'https://mithalo.vn/dich-vu/san-xuat-hinh-anh/vr-360/',
    // },
    {
        title: 'LIVE STREAM',
        imageUrl: 'https://mithalo.vn/wp-content/uploads/2021/03/icon-live-stream.png',
        description: 'Livestream chuyên nghiệp ( Bao gồm setup bối cảnh, điều chỉnh độ sáng, góc camera, xử lý sự cố trong quá trình livestream)',
        link: 'https://livestreamgiare.com/',
    },
    // {
    //     title: 'BOOKING QUẢNG CÁO',
    //     imageUrl: 'https://mithalo.vn/wp-content/uploads/2020/12/icon_truyen-thong.png',
    //     links: [
    //         { text: 'Quảng cáo qua báo chí', href: 'https://mithalo.vn/dich-vu/booking-quang-cao/booking-quang-cao-media/' },
    //         { text: 'Quảng cáo qua kênh truyền hình', href: 'https://mithalo.vn/dich-vu/booking-quang-cao/booking-quang-cao-truyen-hinh/' },
    //     ],
    // },
    // {
    //     title: 'TỔ CHỨC SỰ KIỆN',
    //     imageUrl: 'https://mithalo.vn/wp-content/uploads/2020/12/to-chuc-su-kien.png',
    //     description: 'Hỗ trợ truyền thông, xây dựng và phát triển hình ảnh sản phẩm, dịch vụ và thương hiệu doanh nghiệp, giúp cải thiện và thay đổi nhận thức của công chúng.',
    //     link: 'https://mithalo.vn/dich-vu/to-chuc-su-kien/',
    // },
];
const galleryImages = [
    "https://i.pinimg.com/enabled/564x/47/0f/91/470f91d421f7019cbdf34041b706b78d.jpg",
    "https://i.pinimg.com/564x/6a/e5/6f/6ae56fa0db2b702eec78f2e7fb850ebc.jpg",
    "https://img.freepik.com/premium-photo/glamorous-event-with-celebrities-influencers_1168612-393834.jpg?w=740",
    "https://mithalo.vn/wp-content/uploads/2022/07/chup-anh-mithalo-3-619x1024.jpg",
    // "https://mithalo.vn/wp-content/uploads/2022/07/chup-anh-mithalo-4-683x1024.jpg",
    // "https://mithalo.vn/wp-content/uploads/2022/07/chup-anh-mithalo-5.jpg",
];
const Home = () => {
    return (
        <div>
            {/* Banner Full Width */}
            <Box>
                <Box
                    sx={{
                        width: '100%', // Full width
                        height: '400px', // Set a height for the banner
                        backgroundImage: 'url(/banner2.webp)',
                        backgroundSize: 'cover', // Cover the entire area
                        backgroundPosition: 'center', // Center the image
                        display: 'flex', // Center content
                        alignItems: 'center', // Center vertically
                        justifyContent: 'center', // Center horizontally
                        color: 'white', // Text color
                        fontSize: '2rem', // Font size
                    }}
                >
                    <Typography
                        sx={{
                            fontWeight: 'bold',
                            fontSize: 70,
                            color: "whitesmoke",
                            WebkitTextStroke: "2px black", // Black border around the text
                        }}
                    >
                        Welcome to Our Website
                    </Typography>

                </Box>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}> {/* Center vertically and horizontally */}
                <Box className="section-content" sx={{ padding: 2, width: "75%" }}>
                    <Typography variant="h5" textAlign="center" marginBottom={2} sx={{ color: '#1084cb' }}>
                        PROVIBEMEDIA CUNG CẤP
                    </Typography>
                    <Typography variant="h3" textAlign="center" marginBottom={4} sx={{ fontWeight: "bold" }}>
                        CÁC DỊCH VỤ DÀNH CHO BẠN
                    </Typography>
                    <Grid container spacing={4}>
                        {services.map((service, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <Paper sx={{ display: 'flex', padding: 2, boxShadow: 'none' }}>
                                    <Box sx={{ flex: '0 0 110px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <img src={service.imageUrl} alt={service.title} width="100" height="100" />
                                    </Box>
                                    <Box sx={{ flex: 1, marginLeft: 2 }}>
                                        <Typography variant="h6">
                                            <Link
                                                href={service.link || '#'}
                                                sx={{
                                                    textDecoration: 'none',
                                                    color: 'black',
                                                    '&:hover': {
                                                        color: 'blue' // Change to your desired hover color
                                                    }
                                                }}
                                            >
                                                {service.title}
                                            </Link>
                                        </Typography>
                                        {service.description && (
                                            <Typography variant="body2" marginBottom={1}>
                                                {service.description}
                                            </Typography>
                                        )}
                                        {service.links && service.links.map((link, i) => (
                                            <Typography variant="body2" key={i}>
                                                <Link
                                                    href={link.href}
                                                    sx={{
                                                        textDecoration: 'none',
                                                        color: 'black',
                                                        '&:hover': {
                                                            color: 'blue' // Change to your desired hover color
                                                        }
                                                    }}
                                                >
                                                    {link.text}
                                                </Link>
                                            </Typography>
                                        ))}
                                    </Box>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Box>

            <Box sx={{ backgroundColor: '#0a2443', padding: 4, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Box sx={{ width: "60%" }}>
                    <Typography variant="h4" color="#fff" align="center" gutterBottom>
                        PROVIBEMEDIA
                    </Typography>
                    <Typography variant="h5" color="#fff" align="center" gutterBottom>
                        TRUYỀN THÔNG VÀ QUẢNG CÁO
                    </Typography>
                    <Grid container spacing={2}>
                        {galleryImages.map((image, index) => (
                            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                                <Card>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            image={image}
                                            alt={`Gallery image ${index + 1}`}
                                            loading="lazy"
                                            sx={{ height: 600, objectFit: 'cover' }}
                                        />
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Box>

            <WhyChooseUsSection />

            <Banner />

            <ContactSection />
        </div>
    );
};

export default Home;
