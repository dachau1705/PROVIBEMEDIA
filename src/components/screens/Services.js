import { Box, Grid, Link, Paper, Typography } from '@mui/material'; // Import Box and Typography from MUI
import { default as React } from 'react';
import BannerService from '../layout/BannerService';
import ContactSection from '../layout/ContactSection';
import Workflow from '../layout/WorkFlow';

const Services = () => {
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
        {
            title: 'LIVE STREAM CHUYÊN NGHIỆP',
            imageUrl: 'https://mithalo.vn/wp-content/uploads/2021/03/icon-live-stream.png',
            description: 'Bao gồm setup bối cảnh, điều chỉnh độ sáng, góc camera, xử lý sự cố trong quá trình livestream.',
            link: 'https://livestreamgiare.com/',
        },
    ];
    return (
        <>
            <BannerService />

            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}> {/* Center vertically and horizontally */}
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

            <Workflow />

            <ContactSection />
        </>
    )
};

export default Services;
