import { Box, Grid, Link, Paper, Typography } from '@mui/material';

const services = [
    {
        imageUrl: "https://mithalo.vn/wp-content/uploads/2020/12/icon-quay-film.png",
        title: "SẢN XUẤT PHIM",
        description: "Phim doanh nghiệp, Phim quảng cáo, Phim kỷ niệm thành lập công ty",
        links: [
            { href: "https://mithalo.vn/dich-vu/san-xuat-phim/san-xuat-phim-doanh-nghiep/", text: "Phim doanh nghiệp" },
            { href: "https://mithalo.vn/dich-vu/san-xuat-phim/san-xuat-phim-quang-cao/", text: "Phim quảng cáo" },
            { href: "https://mithalo.vn/dich-vu/san-xuat-phim/san-xuat-phim-viral/", text: "Phim kỷ niệm thành lập công ty" }
        ]
    },
    // Add other service objects here...
];

const ServicesSection = () => {
    return (
        <Box className="section-content" sx={{ padding: 4 }}>
            <Typography variant="h4" textAlign="center" marginBottom={4}>
                CÁC DỊCH VỤ DÀNH CHO BẠN
            </Typography>
            <Grid container spacing={4}>
                {services.map((service, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Paper elevation={2} sx={{ display: 'flex', padding: 2 }}>
                            <Box sx={{ flex: '0 0 110px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <img src={service.imageUrl} alt={service.title} width="100" height="100" />
                            </Box>
                            <Box sx={{ flex: 1, marginLeft: 2 }}>
                                <Typography variant="h6">
                                    <Link href={service.links[0].href} sx={{ textDecoration: 'none', color: 'inherit' }}>
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
                                        <Link href={link.href} sx={{ textDecoration: 'none', color: 'inherit' }}>
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
    );
};

export default ServicesSection;
