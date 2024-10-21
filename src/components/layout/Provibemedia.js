import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';

const ProvibeMedia = () => {
    return (
        <Box
            sx={{
                backgroundImage: 'url(/background.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backdropFilter: 'blur(8px)', // Adjust blur intensity here
                    backgroundColor: 'rgba(252, 255, 253, 0.3)', // Optional: dark overlay
                    zIndex: 1,
                },
            }}
        >
            <Container sx={{ paddingY: 4, position: 'relative', zIndex: 2 }}>
                <Box sx={{ padding: 2 }}>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={7}>
                            <Typography sx={{ fontWeight: 550, fontSize: '29px', p: 1 }}>
                                GIỚI THIỆU VỀ{' '}
                                <Typography
                                    sx={{
                                        color: '#1084cb',
                                        display: 'inline',
                                        fontWeight: 550,
                                        fontSize: '29px',
                                    }}
                                >
                                    PROVIBEMEDIA
                                </Typography>
                            </Typography>
                            <Typography
                                variant="body1"
                                paragraph
                                sx={{
                                    fontStyle: 'italic',
                                    fontSize: "14px",
                                    lineHeight: "22px",
                                    textAlign: 'justify'
                                }}
                            >
                                <strong>
                                    PROVIBEMEDIA là công ty hoạt động trong lĩnh vực truyền
                                    thông và quảng cáo chuyên cung cấp các giải pháp sáng
                                    tạo về hình ảnh và video cho các doanh nghiệp và cá
                                    nhân trên tất cả các nền tảng hiện nay.
                                </strong>
                            </Typography>
                            <Typography
                                variant="body1"
                                paragraph
                                sx={{
                                    fontSize: "14px",
                                    lineHeight: "22px",
                                    textAlign: 'justify'
                                }}
                            >
                                PROVIBEMEDIA được xây dựng và phát triển bởi những chuyên gia hàng đầu, cam kết mang lại sự hài lòng tối đa cho khách hàng thông qua các dịch vụ bao gồm:
                            </Typography>
                            <Box>
                                <Typography
                                    sx={{
                                        fontSize: "14px",
                                        lineHeight: "22px",
                                        fontWeight: "bold",
                                        my: 2,
                                        mx: 3
                                    }}
                                >
                                    - Dịch vụ setup Livestream chuyên nghiệp
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: "14px",
                                        lineHeight: "22px",
                                        fontWeight: "bold",
                                        my: 2,
                                        mx: 3
                                    }}
                                >
                                    - Quay TVC
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: "14px",
                                        lineHeight: "22px",
                                        fontWeight: "bold",
                                        my: 2,
                                        mx: 3
                                    }}
                                >
                                    - Quay video bài giảng
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: "14px",
                                        lineHeight: "22px",
                                        fontWeight: "bold",
                                        my: 2,
                                        mx: 3
                                    }}
                                >
                                    - Chụp ảnh sản phẩm, chụp ảnh mẫu
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: "14px",
                                        lineHeight: "22px",
                                        fontWeight: "bold",
                                        my: 2,
                                        mx: 3
                                    }}
                                >
                                    - Tổ chức sự kiện và biên tập phim tài liệu, hỗ trợ truyền thông quảng cáo cho các công ty.
                                </Typography>
                            </Box>
                            <Typography
                                variant="body1"
                                sx={{
                                    fontSize: "14px",
                                    lineHeight: "22px",
                                    textAlign: 'justify'
                                }}
                            >
                                Chúng tôi tin rằng chúng tôi sẽ là người bạn đồng hành đáng
                                tin cậy, giúp bạn tỏa sáng và phát triển vượt trội trong
                                lĩnh vực của mình.
                            </Typography>
                        </Grid>

                        <Grid item xs={12} md={5}>
                            <img
                                src="/anh3.jpg"
                                alt="Mithalo Media"
                                style={{ width: '100%', height: 'auto' }}
                            />
                            <img
                                src="/anh4.jpg"
                                alt="Mithalo Media"
                                style={{ width: '100%', height: 'auto', marginTop: '16px' }}
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={4} sx={{ marginTop: 4 }}>
                        <Grid item xs={12}>
                            <img
                                src="https://mithalo.vn/wp-content/uploads/2022/06/vision-mission.jpg"
                                alt="Vision and Mission"
                                style={{ width: '100%', height: 'auto' }}
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={4} sx={{ marginTop: 4 }}>
                        <Grid item xs={12} md={6}>
                            <Typography
                                variant="h5"
                                color="#1084CB"
                                sx={{ fontWeight: '580' }}
                            >
                                Tầm Nhìn
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: "14px",
                                    lineHeight: "22px",
                                    textAlign: 'justify'
                                }}
                            >
                                Tầm nhìn của PROVIBEMEDIA là trở thành công ty hàng đầu Việt Nam trong lĩnh vực truyền thông và quảng cáo trong vòng 5 năm tới. Mục tiêu chung của PROVIBEMEDIA là trở thành một thương hiệu truyền thông và quảng cáo uy tín, được biết đến với các dịch vụ hỗ trợ bán hàng cá nhân thông qua phát trực tiếp, quảng cáo TVC, chụp ảnh sản phẩm và quay phim sự kiện với trải nghiệm tương tác cao, chất lượng hình ảnh vượt trội và các giải pháp sáng tạo.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography
                                variant="h5"
                                color="#1084CB"
                                sx={{ fontWeight: '580' }}
                            >
                                Sứ Mệnh
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: "14px",
                                    lineHeight: "22px",
                                    textAlign: 'justify'
                                }}
                            >
                                Sứ mệnh của PROVIBEMEDIA là trở thành đối tác tin cậy, đồng hành cùng khách hàng xây dựng những câu chuyện truyền cảm hứng, góp phần xây dựng thương hiệu mạnh và phát triển bền vững lâu dài. Với tinh thần không ngừng sáng tạo và tận tâm đến từng chi tiết, chúng tôi mang đến những giải pháp truyền thông, quảng cáo hiệu quả, giúp khách hàng không chỉ đạt được mà còn vượt qua mục tiêu kinh doanh của mình. Sự hài lòng và tin tưởng của khách hàng là nguồn cảm hứng để đội ngũ PROVIBEMEDIA không ngừng chinh phục những tầm cao mới.
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
                {/* <Box sx={{ padding: 2 }}>
                    <Typography
                        variant="body1"
                        paragraph
                        sx={{
                            fontStyle: 'italic',
                            fontSize: "14px",
                            lineHeight: "22px",
                            textAlign: 'justify'
                        }}
                    >
                        <strong>
                            PROVIBEMEDIA là công ty hoạt động trong lĩnh vực truyền
                            thông và quảng cáo chuyên cung cấp các giải pháp sáng
                            tạo về hình ảnh và video cho các doanh nghiệp và cá
                            nhân trên tất cả các nền tảng hiện nay.
                        </strong>
                    </Typography>
                </Box> */}
            </Container >
        </Box >
    );
};

export default ProvibeMedia;
