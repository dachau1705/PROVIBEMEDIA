import { Box, List, ListItem, Typography } from '@mui/material';
import React from 'react';
import { FaFilm, FaFolderOpen, FaHandshake, FaUserPlus, FaVideo } from 'react-icons/fa';

const steps = [
    {
        icon: <FaUserPlus />,
        title: 'Tiếp nhận yêu cầu',
        description: 'Hỏi ý kiến của khách hàng về thông tin mà khách hàng cần quay rồi sau đó tư vấn khách hàng về các gói dịch vụ tốt nhất.',
        stepNumber: 1,
    },
    {
        icon: <FaHandshake />,
        title: 'Ký kết hợp đồng',
        description: 'Thống nhất timeline tiến độ sản xuất và các hạng mục triển khai theo nội dung hợp đồng.',
        stepNumber: 2,
    },
    {
        icon: <FaVideo />,
        title: 'Sản xuất',
        description: 'Lên kịch bản video, sản xuất tiền kỳ và hậu kỳ.',
        stepNumber: 3,
    },
    {
        icon: <FaFilm />,
        title: 'Bàn giao Demo',
        description: ' Bàn giao sản phẩm demo đúng hạn, tiếp nhận yêu cầu chỉnh sửa từ khách hàng.',
        stepNumber: 4,
    },
    {
        icon: <FaFolderOpen />,
        title: 'Hoàn thiện',
        description: 'Gửi cho khách hàng thành phẩm của video theo đúng số lượng và chất lượng 2 bên đã thống nhất.',
        stepNumber: 5,
    },
];

const Workflow = () => {
    return (
        <Box className="quytrinhlamviec" sx={{ width: '100%' }}>
            <List
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 3,
                    listStyle: 'none',
                }}
            >
                {steps.map((step, index) => (
                    <ListItem
                        key={index}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            // gap: 2,
                            border: '1px solid #ddd',
                            borderRadius: '8px',
                            paddingX: 2,
                            backgroundColor: '#0670b7',
                            position: 'relative',
                            color: 'white',
                            minHeight: 250,
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.8)', // Static shadow at the bottom
                        }}
                    >
                        <Box sx={{ pl: 5 }}>
                            <Box sx={{ fontSize: 35 }}>{step.icon}</Box>
                            <Box>
                                <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 1 }}>
                                    {step.title}
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: "14px",
                                        lineHeight: "22px",
                                        textAlign: 'justify'
                                    }}
                                >{step.description}</Typography>
                            </Box>
                        </Box>
                        <Box
                            className="step"
                            sx={{
                                position: 'absolute',
                                left: 0,
                                top: '50%',
                                transform: 'translateY(-50%)',
                                fontSize: 24,
                                fontWeight: 'bold',
                                color: 'white',
                                '&::before': {
                                    content: '""',
                                    width: 0,
                                    height: 0,
                                    borderTop: '35px solid transparent',
                                    borderBottom: '35px solid transparent',
                                    borderLeft: '35px solid #f98f0b',
                                    position: 'absolute',
                                    top: '50%',
                                    left: 0,
                                    transform: 'translate(0, -50%)',
                                    WebkitTransform: 'translate(0, -50%)',
                                },
                            }}
                        >
                        </Box>
                        <Box
                            className="step"
                            sx={{
                                position: 'absolute',
                                left: 9,
                                top: '50%',
                                transform: 'translateY(-50%)',
                                fontSize: 24,
                                fontWeight: 'bold',
                                color: 'white',
                            }}
                        >
                            {step.stepNumber}
                        </Box>
                    </ListItem>

                ))}
            </List>
        </Box>
    );
};

export default Workflow;
