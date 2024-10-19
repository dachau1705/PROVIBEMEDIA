import DoneAllIcon from '@mui/icons-material/DoneAll';
import GroupIcon from '@mui/icons-material/Group';
import SecurityIcon from '@mui/icons-material/Security';
import TheatersIcon from '@mui/icons-material/Theaters';
import { Box, Button, Grid, Typography } from '@mui/material';
import React from 'react';
const WhyChooseUsSection = () => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
            <Box className="bg section-bg" sx={{ position: 'relative', padding: 2, width: "60%" }}>
                <Box className="section-content relative">
                    <Grid container spacing={4} alignItems="center">
                        <Grid item xs={12} md={8}>
                            <Box>
                                <Box sx={{ mb: 4 }}>
                                    <Typography variant="h5" textAlign="left" sx={{ color: '#1084cb' }}>
                                        TẠI SAO BẠN NÊN CHỌN
                                    </Typography>
                                    <Typography variant="h3" textAlign="left" sx={{ fontWeight: 'bold' }}>
                                        PROVIBEMEDIA
                                    </Typography>
                                </Box>
                                <Grid container spacing={2} sx={{ mx: 2 }}>
                                    <Grid item xs={12}>
                                        <Box display="flex" alignItems="center">
                                            <GroupIcon sx={{ marginRight: 1, fontSize: 60, color: '#1084cb' }} /> {/* Add margin to space icon  from text */}
                                            <Box>
                                                <Typography variant="h5">Đội ngũ nhân viên chuyên nghiệp, sáng tạo</Typography>
                                            </Box>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Box display="flex" alignItems="center">
                                            <TheatersIcon sx={{ marginRight: 1, fontSize: 60, color: '#1084cb' }} />
                                            <Box>
                                                <Typography variant="h5">Trang thiết bị máy móc tiên tiến, hiện đại</Typography>
                                            </Box>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Box display="flex" alignItems="center">
                                            <SecurityIcon sx={{ marginRight: 1, fontSize: 60, color: '#1084cb' }} />
                                            <Box>
                                                <Typography variant="h5">Uy tín, bảo mật thông tin</Typography>
                                            </Box>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Box display="flex" alignItems="center">
                                            <DoneAllIcon sx={{ marginRight: 1, fontSize: 60, color: '#1084cb' }} />
                                            <Box>
                                                <Typography variant="h5">Cam kết chất lượng dịch vụ</Typography>
                                            </Box>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>

                        <Grid item xs={12} md={4}>
                            <Box
                                className="banner has-hover bg-grayscale bg-zoom"
                                sx={{
                                    paddingTop: '500px',
                                    backgroundImage: 'url(/anh1.jpg)',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    position: 'relative',
                                }}
                            >
                                <Box sx={{ width: '90%', position: 'absolute', top: '85%', left: '50%', transform: 'translateX(-50%)' }}>
                                    <Box textAlign="center">
                                        <Button
                                            href="#dang-ky-tu-van"
                                            target="_self"
                                            variant="contained"
                                            color="primary"
                                            size="large"
                                            sx={{ borderRadius: 2, padding: '10px 20px' }}
                                        >
                                            LIÊN HỆ NGAY ĐỂ ĐƯỢC TƯ VẤN
                                            <i className="icon-envelop" />
                                        </Button>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Box>
    );
};

export default WhyChooseUsSection;
