import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Box, Button, Grid, IconButton, List, ListItem, ListItemIcon, ListItemText, TextField, Typography } from '@mui/material';
import React from 'react';

const ContactSection = () => {
    return (
        <Box
            id="section_1825561424"
            sx={{
                padding: '50px 0',
                backgroundImage: 'url(https://mithalo.vn/wp-content/uploads/2022/06/bg_contact.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative',
                mt: 5,
                color: "white",
                fontFamily: 'Sans-serif'
            }}
        >
            <Box
                sx={{
                    backgroundColor: 'rgba(1, 12, 36, 0.65)',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                }}
            />
            <Box
                sx={{
                    position: 'relative',
                    maxWidth: '1170px',
                    margin: '0 auto',
                    zIndex: 1,
                }}
            >
                <Grid container spacing={3}>
                    {/* Column 1 */}
                    <Grid item xs={12} sm={6} md={3}>
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <img
                                src="/logo2.png"
                                alt="Mithalo Logo"
                                width="165"
                            />
                        </Box>
                        <Typography variant="body2" mt={2}>
                            PROVIBEMEDIA đặt sự hài lòng của khách hàng lên hàng đầu, coi đó là tiêu chí của thành công. Hiểu rõ mong muốn và kỳ vọng từ các doanh nghiệp và cá nhân trong những sự kiện quan trọng, chúng tôi không ngừng nỗ lực mang đến giải pháp truyền thông và quảng cáo vượt trội.                         </Typography>
                        <Typography variant="body2" mt={1}>
                            Với sự tận tâm và chuyên nghiệp, PROVIBEMEDIA đồng hành để mỗi khoảnh khắc của khách hàng đều tỏa sáng một cách hoàn hảo và đáng nhớ.                        </Typography>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={3}
                        sx={{ color: 'white', }} // Màu trắng cho toàn bộ nội dung trong Grid
                    >
                        <Typography variant="h6" sx={{ color: 'white', marginBottom: 2, fontWeight: 'bold' }}>
                            LIÊN HỆ
                        </Typography>
                        <List>
                            <ListItem>
                                <ListItemIcon sx={{ color: 'white' }}>
                                    <LocationOnIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary="VP Hà Nội"
                                    secondary="Số nhà 54, ngõ 322/22 Mỹ Đình 2, Từ Liêm, Hà Nội"
                                    primaryTypographyProps={{ sx: { color: 'white' } }}
                                    secondaryTypographyProps={{ sx: { color: 'white' } }}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon sx={{ color: 'white' }}>
                                    <PhoneIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Hotline"
                                    secondary="0942050602"
                                    primaryTypographyProps={{ sx: { color: 'white' } }}
                                    secondaryTypographyProps={{ sx: { color: 'white' } }}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon sx={{ color: 'white' }}>
                                    <EmailIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Gửi Email"
                                    secondary="provibemedia@gmail.com"
                                    primaryTypographyProps={{ sx: { color: 'white' } }}
                                    secondaryTypographyProps={{ sx: { color: 'white' } }}
                                />
                            </ListItem>
                        </List>
                    </Grid>

                    {/* Column 3 */}
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>DỊCH VỤ PROVIBEMEDIA</Typography>
                        <List>
                            <ListItem >
                                Setup livestream chuyên nghiệp
                            </ListItem>
                            <ListItem  >
                                Quay video bài giảng
                            </ListItem>
                            <ListItem>
                                Chụp ảnh sản phẩm, chụp ảnh cá nhân
                            </ListItem>
                            <ListItem  >
                                Tổ chức sự kiện và biên tập phim tài liệu, hỗ trợ truyền thông quảng cáo cho các công ty
                            </ListItem>
                            <ListItem  >
                                Quay TVC
                            </ListItem>
                        </List>
                    </Grid>

                    {/* Column 4 */}
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>ĐĂNG KÝ THÔNG TIN</Typography>
                        <Typography variant="body1" mt={2}>
                            Bạn đang có nhu cầu setup livestream, quay TVC quảng cáo, chụp ảnh sản phẩm, quay chụp cá nhân... Hãy để lại số điện thoại chúng tôi sẽ tư vấn và báo giá cho bạn!                        </Typography>
                        <form>
                            <TextField
                                fullWidth
                                margin="normal"
                                placeholder="HỌ VÀ TÊN"
                                variant="outlined"
                                sx={{ backgroundColor: "white" }}
                            />
                            <TextField
                                fullWidth
                                margin="normal"
                                placeholder="SỐ ĐIỆN THOẠI (ZALO)"
                                variant="outlined"
                                sx={{ backgroundColor: "white" }}
                            />
                            <Button
                                variant="contained"
                                color="primary"
                                type="submit"
                                sx={{ mt: 2 }}
                            >
                                ĐĂNG KÝ NGAY
                            </Button>
                        </form>

                        <Box mt={3} display="flex" alignItems="center" gap={1} >
                            <Typography variant="body2">CHIA SẺ:</Typography>
                            <IconButton sx={{ color: 'white' }} component="a" href="https://www.facebook.com/MITHALO.media" target="_blank">
                                <FacebookIcon />
                            </IconButton>
                            <IconButton sx={{ color: 'white' }} component="a" href="https://www.youtube.com/channel/UCM3DTuCPpPBfN5uaOvaL-wQ" target="_blank">
                                <YouTubeIcon />
                            </IconButton>
                            <IconButton sx={{ color: 'white' }} component="a" href="mailto:datnt@mithalo.vn">
                                <EmailIcon />
                            </IconButton>
                            <IconButton sx={{ color: 'white' }} component="a" href="tel:0919.181.189">
                                <PhoneIcon />
                            </IconButton>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default ContactSection;
