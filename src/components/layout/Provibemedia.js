import { Box, Container, Grid, List, ListItem, ListItemText, Paper, Typography } from '@mui/material';
import React from 'react';

const ProvibeMedia = () => {
    return (
        <Container sx={{ paddingY: 4 }}>
            <Paper
                sx={{
                    // backgroundImage: 'url(https://mithalo.vn/wp-content/uploads/2022/06/bg_network.jpg)',
                    // backgroundSize: 'cover',
                    // backgroundPosition: 'center',
                    position: 'relative',
                    // overflow: 'hidden',
                }}
            >
                <Box sx={{ padding: 2 }}>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={7}>
                            <Typography variant="h4" color="#1084cb">
                                GIỚI THIỆU VỀ MITHALO MEDIA
                            </Typography>
                            <Typography variant="body1" paragraph>
                                <strong>MITHALO là công ty tư vấn và thực hiện các giải pháp truyền thông tổng thể, trong đó tập trung cung cấp các giải pháp sáng tạo về hình ảnh và video cho doanh nghiệp trên tất cả các nền tảng hiện nay.</strong>
                            </Typography>
                            <Typography variant="body1" paragraph>
                                MITHALO tự hào với các sản phẩm làm hài lòng nhiều khách hàng và đối tác uy tín như: Tập đoàn Vingroup, các công ty thành viên của tập đoàn như Vinmec, Hệ thống giáo dục Vinschool, Vinhomes, Vinfast, Đại học Vinuni, TH group, Trung Nguyên Group, bia Hà Nội, hệ thống trường học của FPT…
                            </Typography>
                            <Typography variant="body1" paragraph>
                                Bên cạnh đó, MITHALO cũng là đơn vị chịu trách nhiệm chính trong việc sản xuất các bộ phim quảng cáo cho khách sạn JW Mariott Hanoi, Dự án của Capital Land, Season Avenue, Vinhomes, Trần Anh group..
                            </Typography>
                            <Typography variant="body1" paragraph>
                                MITHALO được xây dựng, phát triển bởi những chuyên gia hàng đầu cùng những khách hàng – đối tác truyền thông uy tín nhất trong nước và quốc tế, MITHALO cam kết đồng hành cùng khách hàng với các dịch vụ toàn diện, bao gồm:
                            </Typography>
                            <List>
                                <ListItem>
                                    <ListItemText primary="Tổ chức sự kiện" />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Sản xuất TVC/ MV ca nhạc/ phim doanh nghiệp, phim quảng cáo, video clip viral" />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Dịch vụ Livestream chuyên nghiệp" />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Cung cấp người mẫu/ diễn viên cho chiến dịch quảng cáo, truyền thông – Ảnh VR360, Flycam VR360, Video VR360" />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Thiết kế thương hiệu – In ấn quà tặng doanh nghiệp" />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Quảng cáo LCD, Frame VOV giao thông, Street Banner, VIP LED, Transit…" />
                                </ListItem>
                            </List>
                            <Typography variant="body1">
                                Với sứ mệnh đem tới những sản phẩm sáng tạo, hiệu quả, những tư liệu giá trị phù hợp với mục đích sử dụng của doanh nghiệp, MITHALO cùng các cộng sự cam kết không ngừng tìm kiếm các giải pháp tối ưu, đi tắt – đón đầu xu hướng của thị trường, sát cánh đồng hành trên chặng đường chinh phục khách hàng tiềm năng của Quý doanh nghiệp trong nước và quốc tế.
                            </Typography>
                        </Grid>

                        <Grid item xs={12} md={5}>
                            <img
                                src="https://mithalo.vn/wp-content/uploads/2022/05/z3354748690774_c8a8714da58166eeb20465b71e068571-1024x768.jpg"
                                alt="Mithalo Media"
                                style={{ width: '100%', height: 'auto' }}
                            />
                            <img
                                src="https://mithalo.vn/wp-content/uploads/2022/05/z3354749660263_ce14bcefe6ccf3026f7c342f09a8797c-1024x682.jpg"
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
                            <Typography variant="h5" color="#1084CB">
                                Tầm Nhìn
                            </Typography>
                            <List>
                                <ListItem>
                                    <ListItemText primary="Trở thành công ty tư vấn và cung cấp giải pháp truyền thông bằng hình ảnh hàng đầu tại Việt Nam." />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Nắm bắt nhu cầu luôn thay đổi của thị trường, tiếp cận, làm chủ công nghệ mới và gây dựng những sản phẩm chất lượng quốc tế, đón đầu xu thế." />
                                </ListItem>
                            </List>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography variant="h5" color="#1084CB">
                                Sứ Mệnh
                            </Typography>
                            <List>
                                <ListItem>
                                    <ListItemText primary="Mang tới cho khách hàng những sản phẩm sáng tạo, hiệu quả, tư liệu giá trị phù hợp với mục đích sử dụng của doanh nghiệp." />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Mang đến cho nhân viên môi trường làm việc năng động, đầy đam mê, cùng nhau kiến tạo nên những điều kỳ diệu." />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Đề cao tinh thần hợp tác cùng phát triển với các đối tác, hài hòa lợi ích doanh nghiệp với lợi ích xã hội; đóng góp tích cực vào các hoạt động hướng về cộng đồng." />
                                </ListItem>
                            </List>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="body1" sx={{ fontStyle: 'italic' }}>
                                MITHALO phục vụ mọi nhu cầu từ khách hàng đơn lẻ (cửa hàng, nhà hàng, doanh nghiệp nhỏ) tới các tập đoàn, các tổ chức lớn trên toàn quốc.
                            </Typography>
                            <Typography variant="body1" sx={{ fontStyle: 'italic' }}>
                                Cam kết tư vấn và triển khai tất cả yêu cầu mà doanh nghiệp đặt ra ở các khía cạnh: Thông điệp truyền tải – Thời gian sản xuất – Chất lượng hình ảnh – Kinh phí thực hiện.
                            </Typography>
                            <Typography variant="body1" sx={{ fontStyle: 'italic' }}>
                                Những thiết bị hiện đại trong lĩnh vực quay phim, chụp ảnh, sản xuất và dựng phim, MITHALO cam kết cung cấp những sản phẩm chất lượng hàng đầu thị trường nội địa (4K, Full HD, HD).
                            </Typography>
                            <Typography variant="body1" sx={{ fontStyle: 'italic' }}>
                                Đội ngũ đạo diễn, quay phim chuyên nghiệp kết hợp với các biên kịch thấu hiểu insight khách hàng, MITHALO tự tin mang đến những video content/ bộ ảnh sáng tạo với chi phí hợp lý nhất.
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
        </Container>
    );
};

export default ProvibeMedia;
