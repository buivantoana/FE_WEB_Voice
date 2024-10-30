import {
  Box,
  Button,
  Drawer,
  IconButton,
  Stack,
  styled,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import { RiMenuFill, RiNotification2Line } from "react-icons/ri";
import logo from "../images/loading-lines-6747317-5601928.webp";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useState } from "react";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import user from "../images/user.png";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import StarOutlineOutlinedIcon from "@mui/icons-material/StarOutlineOutlined";
import LockClockOutlinedIcon from "@mui/icons-material/LockClockOutlined";
import HelpIcon from "@mui/icons-material/Help";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import DescriptionIcon from "@mui/icons-material/Description";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import LogoutIcon from "@mui/icons-material/Logout";
const Header = () => {
  const theme: any = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = (open: any) => () => {
    setIsOpen(open);
  };
  return (
    <Box
      sx={{
        position: "sticky",
        top: 0,
        left: 0,
        width: "100%",
        height: "65px",
        background: "rgb(252 253 254)",
        zIndex: "100",
      }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "80%",
          px: "10%",
          py: "5px",
        }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Box>
            <img src={logo} width={50} />
          </Box>
          <Box>
            <Typography fontSize={"1.25rem"}>Text To Speech OpenAI</Typography>
          </Box>
        </Box>
        <Box
          border={"1px solid grey"}
          padding={"0 20px"}
          borderRadius={"30px"}
          sx={{ cursor: "pointer" }}>
          <Stack direction={"row"} gap={"20px"}>
            <Box
              padding={"9px 0"}
              sx={{ borderBottom: `2px solid ${theme.palette.active.main}` }}>
              <Typography
                fontSize={".9rem"}
                fontWeight={"500"}
                color={"active.main"}>
                Vocalize
              </Typography>
            </Box>
            <Box padding={"9px 0"}>
              <Typography
                fontSize={".9rem"}
                fontWeight={"500"}
                color={"grey_500.main"}>
                History
              </Typography>
            </Box>
            <Box padding={"9px 0"}>
              <Typography
                fontSize={".9rem"}
                fontWeight={"500"}
                color={"grey_500.main"}>
                Pricing Plans
              </Typography>
            </Box>
            <Box padding={"9px 0"}>
              <Typography
                fontSize={".9rem"}
                fontWeight={"500"}
                color={"grey_500.main"}>
                Privacy Policy
              </Typography>
            </Box>
            <Box padding={"9px 0"}>
              <Typography
                fontSize={".9rem"}
                fontWeight={"500"}
                color={"grey_500.main"}>
                Terms of Service
              </Typography>
            </Box>
          </Stack>
        </Box>
        <Box display={"flex"} gap={"20px"} alignItems={"center"}>
          <RiNotification2Line size={20} />
          <Button
            variant='contained'
            sx={{ background: theme.palette.active.main }}
            endIcon={<ArrowForwardIcon />}>
            Sign in
          </Button>
        </Box>
        <Box onClick={toggleDrawer(true)}>
          <img src={user} style={{ borderRadius: "50%" }} width={50} alt='' />
        </Box>
        <Drawer
          anchor='right' // Đảm bảo anchor là "right"
          open={isOpen}
          onClose={toggleDrawer(false)}>
          <Box sx={{ width: 450, p: 2, cursor: "pointer" }} role='presentation'>
            <Box display='flex' justifyContent='end' alignItems='center'>
              <IconButton onClick={toggleDrawer(false)}>
                <HighlightOffIcon sx={{ fontSize: "35px" }} />
              </IconButton>
            </Box>
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              gap={"8px"}
              flexDirection={"column"}>
              <img
                src={user}
                style={{ borderRadius: "50%" }}
                width={100}
                alt=''
              />
              <Typography variant='h4' fontWeight={"500"}>
                Bui Toan
              </Typography>
              <Typography color='grey_500.main'>
                toanbui219@gmail.com
              </Typography>
            </Box>
            <Box
              mt={"20px"}
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}>
              <Box
                gap={"10px"}
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}>
                <CheckCircleOutlineIcon />
                <Typography>Kế hoạch hiện tại</Typography>
              </Box>
              <Box
                padding={"2px 8px"}
                borderRadius={"25px"}
                bgcolor={"#fdf6b2"}>
                <Typography fontWeight={"500"}>Miễn phí</Typography>
              </Box>
            </Box>
            <Box
              mt={"10px"}
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}>
              <Box
                gap={"10px"}
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}>
                <StarOutlineOutlinedIcon />

                <Typography>Tín dụng có sẵn</Typography>
              </Box>
              <Box
                padding={"3px 10px"}
                borderRadius={"50%"}
                bgcolor={"rgb(225 239 254)"}>
                <Typography fontWeight={"500"}>0</Typography>
              </Box>
            </Box>
            <Box
              mt={"10px"}
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}>
              <Box
                gap={"10px"}
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}>
                <LockClockOutlinedIcon />

                <Typography>Tín dụng bị khóa</Typography>
                <WhiteTooltip
                  title='Chúng tôi khóa tín dụng của bạn để thực hiện công việc bạn yêu cầu. Nếu công việc thất bại hoặc bị hủy, số tín dụng sẽ được trả lại vào tài khoản của bạn.'
                  placement='top'>
                  <HelpIcon fontSize='small' />
                </WhiteTooltip>
              </Box>
              <Box
                padding={"3px 10px"}
                borderRadius={"50%"}
                bgcolor={"rgb(252 232 243)"}>
                <Typography fontWeight={"500"}>0</Typography>
              </Box>
            </Box>
            <Box
              mt={"40px"}
              border={"1px solid #dddddd"}
              borderRadius={"10px"}
              p={"10px 15px"}
              sx={{
                cursor: "pointer",
                transition: "background-color 0.3s, color 0.3s", // Smooth transition for hover
                "&:hover": {
                  backgroundColor: "grey_700.main", // Background on hover
                  color: "active.main", // Text and icon color on hover
                },
                "&:hover .MuiSvgIcon-root": {
                  color: "active.main", // Icon color on hover
                },
              }}
              width={"calc(100%-30px)"}>
              <Box display={"flex"} alignItems={"center"} gap={"10px"}>
                <AddShoppingCartIcon />
                <Typography> Mua tín dụng</Typography>
              </Box>
            </Box>
            <Box
              mt={"20px"}
              border={"1px solid #dddddd"}
              borderRadius={"10px"}
              p={"10px 15px"}
              sx={{
                cursor: "pointer",
                transition: "background-color 0.3s, color 0.3s", // Smooth transition for hover
                "&:hover": {
                  backgroundColor: "grey_700.main", // Background on hover
                  color: "active.main", // Text and icon color on hover
                },
                "&:hover .MuiSvgIcon-root": {
                  color: "active.main", // Icon color on hover
                },
              }}
              width={"calc(100%-30px)"}>
              <Box display={"flex"} alignItems={"center"} gap={"10px"}>
                <DescriptionIcon />
                <Typography> Lịch sử thanh toán</Typography>
              </Box>
            </Box>
            <Box
              mt={"20px"}
              border={"1px solid #dddddd"}
              borderRadius={"10px"}
              p={"10px 15px"}
              sx={{
                cursor: "pointer",
                transition: "background-color 0.3s, color 0.3s", // Smooth transition for hover
                "&:hover": {
                  backgroundColor: "grey_700.main", // Background on hover
                  color: "active.main", // Text and icon color on hover
                },
                "&:hover .MuiSvgIcon-root": {
                  color: "active.main", // Icon color on hover
                },
              }}
              width={"calc(100%-30px)"}>
              <Box display={"flex"} alignItems={"center"} gap={"10px"}>
                <ContactMailIcon />
                <Typography> Thông tin tài khoản</Typography>
              </Box>
            </Box>
            <Box
              mt={"20px"}
              border={"1px solid #dddddd"}
              borderRadius={"10px"}
              p={"10px 15px"}
              sx={{
                cursor: "pointer",
                transition: "background-color 0.3s, color 0.3s", // Smooth transition for hover
                "&:hover": {
                  backgroundColor: "grey_700.main", // Background on hover
                  color: "active.main", // Text and icon color on hover
                },
                "&:hover .MuiSvgIcon-root": {
                  color: "active.main", // Icon color on hover
                },
              }}
              width={"calc(100%-30px)"}>
              <Box display={"flex"} alignItems={"center"} gap={"10px"}>
                <LogoutIcon />
                <Typography>Đăng xuất </Typography>
              </Box>
            </Box>
          </Box>
        </Drawer>
      </Box>
    </Box>
  );
};

export default Header;
const WhiteTooltip = styled(({ className, ...props }: any) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({
  [`& .MuiTooltip-tooltip`]: {
    backgroundColor: "white", // Set background to white
    color: "black", // Set text color to black for contrast
    border: "1px solid #ddd", // Optional border
    fontSize: "0.875rem", // Adjust font size if needed
  },
});
