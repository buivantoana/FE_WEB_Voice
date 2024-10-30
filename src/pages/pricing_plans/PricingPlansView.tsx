import { Box, Button, Typography, useTheme } from "@mui/material";
import React from "react";
import { RiCheckFill } from "react-icons/ri";

type Props = {};

const PricingPlansView = (props: Props) => {
  const theme: any = useTheme();
  return (
    <Box p={"30px 10%"}>
      <Box
        my={"40px"}
        textAlign={"center"}
        display={"flex"}
        flexDirection={"column"}
        gap={"30px"}>
        <Typography fontSize={"3rem"} variant='h1'>
          Giá cả gói dịch vụ{" "}
        </Typography>
        <Typography fontSize={"1.2rem"} color='grey_500.main'>
          Kế hoạch của chúng tôi được thiết kế để đáp ứng yêu cầu của cả người
          mới bắt đầu và người chơi. Chọn kế hoạch phù hợp với bạn
        </Typography>
      </Box>
      <Box display={"flex"} justifyContent={"center"}>
        <Box width={"70%"} mt={"40px"}>
          <Box display={"flex"} gap={"40px"} justifyContent={"space-between"}>
            <Box
              borderRadius={"15px"}
              width={"45%"}
              border={`2px solid ${theme.palette.active.main}`}
              sx={{
                background: theme.palette.grey_700.main,
                transition: "transform 0.3s ease", // Smooth scaling transition
                "&:hover": {
                  transform: "scale(1.1)",
                },
              }}
              p={"20px"}>
              <Box
                textAlign={"center"}
                display={"flex"}
                flexDirection={"column"}
                gap={"20px"}>
                <Typography fontSize={"1.6rem"} fontWeight={"500"}>
                  Miễn phí
                </Typography>
                <Typography fontSize={"2.3rem"} fontWeight={"bold"}>
                  $0
                </Typography>
              </Box>
              <Box mt={"20px"}>
                <Box
                  display={"flex"}
                  mt={"15px"}
                  alignItems={"center"}
                  gap={"5px"}>
                  <RiCheckFill size={"25"} color={theme.palette.active.main} />
                  <Typography>Tạo bài phát biểu từ văn bản</Typography>
                </Box>
                <Box
                  display={"flex"}
                  mt={"15px"}
                  alignItems={"center"}
                  gap={"5px"}>
                  <RiCheckFill size={"25"} color={theme.palette.active.main} />
                  <Typography>Có thể tải xuống tệp âm thanh</Typography>
                </Box>
                <Box
                  display={"flex"}
                  mt={"15px"}
                  alignItems={"center"}
                  gap={"5px"}>
                  <RiCheckFill size={"25"} color={theme.palette.active.main} />
                  <Typography>Truy cập vào thư viện giọng nói</Typography>
                </Box>
              </Box>
            </Box>
            <Box
              borderRadius={"15px"}
              width={"45%"}
              border={"2px solid white"}
              sx={{
                background: theme.palette.grey_700.main,
                transition: "transform 0.3s ease", // Smooth scaling transition
                "&:hover": {
                  transform: "scale(1.1)",
                },
              }}
              p={"20px"}>
              <Box
                textAlign={"center"}
                display={"flex"}
                flexDirection={"column"}
                gap={"20px"}>
                <Typography fontSize={"1.6rem"} fontWeight={"500"}>
                  Cao cấp
                </Typography>
                <Typography fontSize={"2.3rem"} fontWeight={"bold"}>
                  $8
                </Typography>
                <Typography fontSize={"1.3rem"} color='grey_500.main'>
                  <b style={{ color: theme.palette.active.main }}>200.000 </b>
                  tín dụng không hết hạn
                </Typography>
              </Box>
              <Box mt={"20px"}>
                <Box
                  display={"flex"}
                  mt={"15px"}
                  alignItems={"center"}
                  gap={"5px"}>
                  <RiCheckFill size={"25"} color={theme.palette.active.main} />
                  <Typography>
                    Tạo bài phát biểu từ văn bản lên đến 10.000 ký tự
                  </Typography>
                </Box>
                <Box
                  display={"flex"}
                  mt={"15px"}
                  alignItems={"center"}
                  gap={"5px"}>
                  <RiCheckFill size={"25"} color={theme.palette.active.main} />
                  <Typography>
                    Thử lại không giới hạn lần với giá giảm một nửa
                  </Typography>
                </Box>
                <Box
                  display={"flex"}
                  mt={"15px"}
                  alignItems={"center"}
                  gap={"5px"}>
                  <RiCheckFill size={"25"} color={theme.palette.active.main} />
                  <Typography>Sử dụng giọng nói HD</Typography>
                </Box>
                <Box
                  display={"flex"}
                  mt={"15px"}
                  alignItems={"center"}
                  gap={"5px"}>
                  <RiCheckFill size={"25"} color={theme.palette.active.main} />
                  <Typography>Tài liệu thành giọng nói</Typography>
                </Box>
                <Box
                  display={"flex"}
                  mt={"15px"}
                  alignItems={"center"}
                  gap={"5px"}>
                  <RiCheckFill size={"25"} color={theme.palette.active.main} />
                  <Typography>Có thể tải xuống tệp âm thanh</Typography>
                </Box>
                <Box
                  display={"flex"}
                  mt={"15px"}
                  alignItems={"center"}
                  gap={"5px"}>
                  <RiCheckFill size={"25"} color={theme.palette.active.main} />
                  <Typography>Tạo giọng nói của tôi</Typography>
                </Box>
                <Box
                  display={"flex"}
                  mt={"15px"}
                  alignItems={"center"}
                  gap={"5px"}>
                  <RiCheckFill size={"25"} color={theme.palette.active.main} />
                  <Typography>Truy cập vào thư viện giọng nói</Typography>
                </Box>
                <Box
                  display={"flex"}
                  mt={"15px"}
                  alignItems={"center"}
                  gap={"5px"}>
                  <RiCheckFill size={"25"} color={theme.palette.active.main} />
                  <Typography>Tạo câu chuyện từ văn bản</Typography>
                </Box>
                <Box
                  display={"flex"}
                  mt={"15px"}
                  alignItems={"center"}
                  gap={"5px"}>
                  <RiCheckFill size={"25"} color={theme.palette.active.main} />
                  <Typography>A few Ads</Typography>
                </Box>
                <Box
                  display={"flex"}
                  mt={"15px"}
                  alignItems={"center"}
                  gap={"5px"}>
                  <RiCheckFill size={"25"} color={theme.palette.active.main} />
                  <Typography>Lên đến 200MB mỗi văn bản</Typography>
                </Box>
                <Box mt={"20px"}>
                  <Button
                    fullWidth
                    variant='contained'
                    sx={{
                      background: theme.palette.active.main,
                      color: "white",
                    }}>
                    Bắt đầu
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
          <Typography mt={"40px"} textAlign={"center"} color='grey_500.main'>
            ※ 1.000 tín dụng = 1.000 ký tự với chất lượng âm thanh cao cấp (500
            ký tự với chất lượng âm thanh HD)
          </Typography>
        </Box>
      </Box>
      <Box
        textAlign={"center"}
        display={"flex"}
        flexDirection={"column"}
        mt={"150px"}
        gap={"30px"}>
        <Typography fontSize={"1.2rem"} fontWeight={"500"} color='active.main'>
          Khám phá các tính năng của ttsopenai.com
        </Typography>
        <Typography variant='h1'>Tính năng</Typography>
        <Typography color='grey_500.main' fontSize={"1.3rem"}>
          Dịch vụ của chúng tôi được thiết kế để mang lại trải nghiệm liền mạch
          và thuận tiện cho người dùng, cung cấp nhiều tính năng đa dạng để đáp
          ứng nhu cầu của bạn.
        </Typography>
      </Box>
      <Box
        display={"flex"}
        mt={"50px"}
        justifyContent={"space-between"}
        gap={"20px"}>
        <Box
          borderRadius={"20px"}
          border={"1px solid #dddddd"}
          padding={"20px"}
          width={"30%"}>
          <Box>
            <svg
              style={{ fontSize: "36px" }}
              data-v-fa4d36aa=''
              data-v-5879fc1d=''
              xmlns='http://www.w3.org/2000/svg'
              xmlnsXlink='http://www.w3.org/1999/xlink'
              aria-hidden='true'
              role='img'
              className='icon w-8 h-8 flex-shrink-0 text-gray-900 dark:text-white'
              width='1em'
              height='1em'
              viewBox='0 0 24 24'>
              <path
                fill='none'
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='1.5'
                d='M12 6v12M9 9v6m9-4v2M6 11v2m9-6v10m-3 5c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10'
              />
            </svg>
          </Box>
          <Typography my={"5px"} fontSize={"1.2rem"} fontWeight={"500"}>
            Chất lượng cao
          </Typography>
          <Typography color='grey_500.main'>
            Chúng tôi cung cấp một loạt các giọng nói chất lượng cao và đa dạng,
            bao gồm cả cả hai giới tính và nhiều tông điệu khác nhau.
          </Typography>
        </Box>
        <Box
          borderRadius={"20px"}
          border={"1px solid #dddddd"}
          padding={"20px"}
          width={"30%"}>
          <Box>
            <svg
              style={{ fontSize: "36px" }}
              data-v-fa4d36aa=''
              data-v-5879fc1d=''
              xmlns='http://www.w3.org/2000/svg'
              xmlnsXlink='http://www.w3.org/1999/xlink'
              aria-hidden='true'
              role='img'
              className='icon w-8 h-8 flex-shrink-0 text-gray-900 dark:text-white'
              width='1em'
              height='1em'
              viewBox='0 0 36 36'>
              <path
                fill='currentColor'
                d='M30 3H14v5h2V5h14c.6 0 1 .4 1 1v11c0 .6-.4 1-1 1H17v7h-5.3L8 27.9V25H5c-.6 0-1-.4-1-1V13c0-.6.4-1 1-1h13v-2H5c-1.7 0-3 1.3-3 3v11c0 1.7 1.3 3 3 3h1v5.1l6.3-5.1H19v-7h11c1.7 0 3-1.3 3-3V6c0-1.7-1.3-3-3-3'
                className='clr-i-outline clr-i-outline-path-1'
              />
              <path
                fill='currentColor'
                d='M6.2 22.9h2.4l.6-1.6h3.1l.6 1.6h2.4L11.9 14H9.5zm4.5-6.4l1 3.1h-2z'
                className='clr-i-outline clr-i-outline-path-2'
              />
              <path
                fill='currentColor'
                d='M20 17c1.1 0 2.6-.3 4-1c1.4.7 3 1 4 1v-2s-1 0-2.1-.4c1.2-1.2 2.1-3 2.1-5.6V8h-3V6h-2v2h-3v2h5.9c-.2 1.8-1 2.9-1.9 3.6c-.6-.5-1.2-1.2-1.6-2.1h-2.1c.4 1.3 1 2.3 1.8 3.1c-1 .4-1.9.4-2.1.4z'
                className='clr-i-outline clr-i-outline-path-3'
              />
              <path fill='none' d='M0 0h36v36H0z' />
            </svg>
          </Box>
          <Typography my={"5px"} fontSize={"1.2rem"} fontWeight={"500"}>
            Nhiều ngôn ngữ
          </Typography>
          <Typography color='grey_500.main'>
            Dịch vụ của chúng tôi hỗ trợ nhiều ngôn ngữ, cho phép bạn chuyển đổi
            tài liệu thành giọng nói bằng nhiều ngôn ngữ khác nhau.
          </Typography>
        </Box>
        <Box
          borderRadius={"20px"}
          border={"1px solid #dddddd"}
          padding={"20px"}
          width={"30%"}>
          <Box>
            <svg
              style={{ fontSize: "36px" }}
              data-v-fa4d36aa=''
              data-v-5879fc1d=''
              xmlns='http://www.w3.org/2000/svg'
              xmlnsXlink='http://www.w3.org/1999/xlink'
              aria-hidden='true'
              role='img'
              className='icon w-8 h-8 flex-shrink-0 text-gray-900 dark:text-white'
              width='1em'
              height='1em'
              viewBox='0 0 24 24'>
              <path
                fill='currentColor'
                d='M4 11h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1m1-6h4v4H5zm15-2h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1m-1 6h-4V5h4zm-9 12a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1zm-5-6h4v4H5zm13-1h-2v2h-2v2h2v2h2v-2h2v-2h-2z'
              />
            </svg>
          </Box>
          <Typography my={"5px"} fontSize={"1.2rem"} fontWeight={"500"}>
            Cài đặt có thể tùy chỉnh
          </Typography>
          <Typography color='grey_500.main'>
            Bạn có thể tùy chỉnh các thiết lập khác nhau như tốc độ đọc và ngữ
            điệu trước khi chuyển đổi tài liệu của bạn thành tiếng nói.
          </Typography>
        </Box>
      </Box>
      <Box
        display={"flex"}
        mt={"50px"}
        justifyContent={"space-between"}
        gap={"20px"}>
        <Box
          borderRadius={"20px"}
          border={"1px solid #dddddd"}
          padding={"20px"}
          width={"30%"}>
          <Box>
            <svg
              style={{ fontSize: "36px" }}
              data-v-fa4d36aa=''
              data-v-5879fc1d=''
              xmlns='http://www.w3.org/2000/svg'
              xmlnsXlink='http://www.w3.org/1999/xlink'
              aria-hidden='true'
              role='img'
              className='icon w-8 h-8 flex-shrink-0 text-gray-900 dark:text-white'
              width='1em'
              height='1em'
              viewBox='0 0 34 32'>
              <g fill='currentColor'>
                <path d='M1.512 28H19.5c.827 0 1.5-.673 1.5-1.5v-19c0-.023-.01-.043-.013-.065a.4.4 0 0 0-.013-.062a.5.5 0 0 0-.122-.227L13.853.147a.5.5 0 0 0-.289-.135C13.543.01 13.523 0 13.5 0H1.506C.676 0 0 .673 0 1.5v25c0 .827.678 1.5 1.512 1.5M14 1.707L19.293 7H14.5a.5.5 0 0 1-.5-.5zM1 1.5c0-.276.227-.5.506-.5H13v5.5c0 .827.673 1.5 1.5 1.5H20v18.5a.5.5 0 0 1-.5.5H1.512A.506.506 0 0 1 1 26.5z' />
                <path d='M4.5 12h12a.5.5 0 0 0 0-1h-12a.5.5 0 0 0 0 1m0 4h12a.5.5 0 0 0 0-1h-12a.5.5 0 0 0 0 1m0-8h5a.5.5 0 0 0 0-1h-5a.5.5 0 0 0 0 1m0 12h12a.5.5 0 0 0 0-1h-12a.5.5 0 0 0 0 1m0 4h12a.5.5 0 0 0 0-1h-12a.5.5 0 0 0 0 1' />
                <path d='M21.5 5H26v5.5c0 .827.673 1.5 1.5 1.5H33v18.5a.5.5 0 0 1-.5.5H14.512a.506.506 0 0 1-.512-.5v-1a.5.5 0 0 0-1 0v1c0 .827.678 1.5 1.512 1.5H32.5c.827 0 1.5-.673 1.5-1.5v-19c0-.023-.01-.043-.013-.065a.4.4 0 0 0-.013-.062a.5.5 0 0 0-.122-.227l-6.999-6.999a.5.5 0 0 0-.289-.134C26.543 4.01 26.523 4 26.5 4h-5a.5.5 0 0 0 0 1m6 6a.5.5 0 0 1-.5-.5V5.707L32.293 11z' />
                <path d='M23.5 16h6a.5.5 0 0 0 0-1h-6a.5.5 0 0 0 0 1m0 4h6a.5.5 0 0 0 0-1h-6a.5.5 0 0 0 0 1m0 4h6a.5.5 0 0 0 0-1h-6a.5.5 0 0 0 0 1m0 4h6a.5.5 0 0 0 0-1h-6a.5.5 0 0 0 0 1' />
              </g>
            </svg>
          </Box>
          <Typography my={"5px"} fontSize={"1.2rem"} fontWeight={"500"}>
            Hỗ trợ cho các định dạng tài liệu đa dạng
          </Typography>
          <Typography color='grey_500.main'>
            Chúng tôi hỗ trợ nhiều định dạng tài liệu, bao gồm văn bản thông
            thường, PDF, DOCX và ebooks.
          </Typography>
        </Box>
        <Box
          borderRadius={"20px"}
          border={"1px solid #dddddd"}
          padding={"20px"}
          width={"30%"}>
          <Box>
            <svg
              style={{ fontSize: "36px" }}
              data-v-fa4d36aa=''
              data-v-5879fc1d=''
              xmlns='http://www.w3.org/2000/svg'
              xmlnsXlink='http://www.w3.org/1999/xlink'
              aria-hidden='true'
              role='img'
              className='icon w-8 h-8 flex-shrink-0 text-gray-900 dark:text-white'
              width='1em'
              height='1em'
              viewBox='0 0 24 24'>
              <g fill='none' fillRule='evenodd'>
                <path d='m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z' />
                <path
                  fill='currentColor'
                  d='M12 12c1.873 0 3.57.62 4.815 1.487c1.183.825 2.185 2.051 2.185 3.37c0 .724-.309 1.324-.796 1.77c-.458.421-1.056.694-1.672.88C15.301 19.88 13.68 20 12 20s-3.301-.12-4.532-.493c-.616-.186-1.214-.459-1.673-.88C5.31 18.182 5 17.582 5 16.858c0-1.319 1.002-2.545 2.185-3.37C8.43 12.62 10.127 12 12 12m0 2c-1.44 0-2.743.48-3.67 1.127c-.989.69-1.33 1.392-1.33 1.73c0 .304.352.494.672.614l.205.07l.17.052c.94.284 2.32.407 3.953.407c1.508 0 2.799-.105 3.728-.344l.304-.087l.19-.06c.343-.117.778-.314.778-.652s-.341-1.04-1.33-1.73C14.744 14.481 13.44 14 12 14m7-1c1.044 0 1.992.345 2.693.833c.64.447 1.307 1.19 1.307 2.096c0 1.335-1.297 1.813-2.463 1.98l-.3.037l-.289.025l-.138.008c.122-.345.19-.72.19-1.122a3.8 3.8 0 0 0-.107-.888c.386-.03.703-.08.939-.151c.104-.032.01-.13-.1-.215l-.107-.078l-.076-.051a2.7 2.7 0 0 0-.995-.418c-.38-.76-.964-1.418-1.586-1.943A4.8 4.8 0 0 1 19 13M5 13q.537.002 1.032.113c-.622.525-1.206 1.183-1.586 1.943a2.7 2.7 0 0 0-.995.418l-.128.088c-.127.092-.276.22-.155.256c.236.071.553.122.94.151a3.7 3.7 0 0 0-.108.888c0 .402.068.777.19 1.122l-.28-.02l-.296-.03c-1.202-.147-2.614-.607-2.614-2c0-.905.666-1.649 1.307-2.096A4.76 4.76 0 0 1 5 13m13.5-6a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5m-13 0a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5M12 3a4 4 0 1 1 0 8a4 4 0 0 1 0-8m6.5 6a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1m-13 0a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1M12 5a2 2 0 1 0 0 4a2 2 0 0 0 0-4'
                />
              </g>
            </svg>
          </Box>
          <Typography my={"5px"} fontSize={"1.2rem"} fontWeight={"500"}>
            Sử dụng thương mại
          </Typography>
          <Typography color='grey_500.main'>
            Dịch vụ của chúng tôi hỗ trợ cả mục đích cá nhân và thương mại, mang
            đến sự linh hoạt cho người dùng.
          </Typography>
        </Box>
        <Box
          borderRadius={"20px"}
          border={"1px solid #dddddd"}
          padding={"20px"}
          width={"30%"}>
          <Box>
            <svg
              style={{ fontSize: "36px" }}
              data-v-fa4d36aa=''
              data-v-5879fc1d=''
              xmlns='http://www.w3.org/2000/svg'
              xmlnsXlink='http://www.w3.org/1999/xlink'
              aria-hidden='true'
              role='img'
              className='icon w-8 h-8 flex-shrink-0 text-gray-900 dark:text-white'
              width='1em'
              height='1em'
              viewBox='0 0 20 20'>
              <path
                fill='currentColor'
                d='M4.5 4A2.5 2.5 0 0 0 2 6.5v7A2.5 2.5 0 0 0 4.5 16h11a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 15.5 4zM3 6.5A1.5 1.5 0 0 1 4.5 5h11A1.5 1.5 0 0 1 17 6.5v7a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 3 13.5zM4.5 6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h8a.5.5 0 0 0 0-1zm.5 3a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1z'
              />
            </svg>
          </Box>
          <Typography my={"5px"} fontSize={"1.2rem"} fontWeight={"500"}>
            Giao diện thân thiện với người dùng
          </Typography>
          <Typography color='grey_500.main'>
            Trang web của chúng tôi được thiết kế để dễ sử dụng, giúp quá trình
            chuyển đổi văn bản thành giọng nói trở nên đơn giản và thuận tiện
            cho mọi người.
          </Typography>
        </Box>
      </Box>
      <Box
        display={"flex"}
        mt={"50px"}
        justifyContent={"space-between"}
        gap={"20px"}>
        <Box
          borderRadius={"20px"}
          border={"1px solid #dddddd"}
          padding={"20px"}
          width={"30%"}>
          <Box>
            <svg
              style={{ fontSize: "36px" }}
              data-v-fa4d36aa=''
              data-v-5879fc1d=''
              xmlns='http://www.w3.org/2000/svg'
              xmlnsXlink='http://www.w3.org/1999/xlink'
              aria-hidden='true'
              role='img'
              className='icon w-8 h-8 flex-shrink-0 text-gray-900 dark:text-white'
              width='1em'
              height='1em'
              viewBox='0 0 24 24'>
              <path
                fill='currentColor'
                d='M11 17h2v-6h-2zm1-8q.425 0 .713-.288T13 8t-.288-.712T12 7t-.712.288T11 8t.288.713T12 9m0 13q-3.475-.875-5.738-3.988T4 11.1V5l8-3l8 3v6.1q0 3.8-2.262 6.913T12 22m0-2.1q2.6-.825 4.3-3.3t1.7-5.5V6.375l-6-2.25l-6 2.25V11.1q0 3.025 1.7 5.5t4.3 3.3m0-7.9'
              />
            </svg>
          </Box>
          <Typography my={"5px"} fontSize={"1.2rem"} fontWeight={"500"}>
            Hỗ trợ cho các định dạng tài liệu đa dạng
          </Typography>
          <Typography color='grey_500.main'>
            Chúng tôi hỗ trợ nhiều định dạng tài liệu, bao gồm văn bản thông
            thường, PDF, DOCX và ebooks.
          </Typography>
        </Box>
        <Box
          borderRadius={"20px"}
          border={"1px solid #dddddd"}
          padding={"20px"}
          width={"30%"}>
          <Box>
            <svg
              style={{ fontSize: "36px" }}
              data-v-fa4d36aa=''
              data-v-5879fc1d=''
              xmlns='http://www.w3.org/2000/svg'
              xmlnsXlink='http://www.w3.org/1999/xlink'
              aria-hidden='true'
              role='img'
              className='icon w-8 h-8 flex-shrink-0 text-gray-900 dark:text-white'
              width='1em'
              height='1em'
              viewBox='0 0 24 24'>
              <g fill='none' fillRule='evenodd'>
                <path d='m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z' />
                <path
                  fill='currentColor'
                  d='M12 12c1.873 0 3.57.62 4.815 1.487c1.183.825 2.185 2.051 2.185 3.37c0 .724-.309 1.324-.796 1.77c-.458.421-1.056.694-1.672.88C15.301 19.88 13.68 20 12 20s-3.301-.12-4.532-.493c-.616-.186-1.214-.459-1.673-.88C5.31 18.182 5 17.582 5 16.858c0-1.319 1.002-2.545 2.185-3.37C8.43 12.62 10.127 12 12 12m0 2c-1.44 0-2.743.48-3.67 1.127c-.989.69-1.33 1.392-1.33 1.73c0 .304.352.494.672.614l.205.07l.17.052c.94.284 2.32.407 3.953.407c1.508 0 2.799-.105 3.728-.344l.304-.087l.19-.06c.343-.117.778-.314.778-.652s-.341-1.04-1.33-1.73C14.744 14.481 13.44 14 12 14m7-1c1.044 0 1.992.345 2.693.833c.64.447 1.307 1.19 1.307 2.096c0 1.335-1.297 1.813-2.463 1.98l-.3.037l-.289.025l-.138.008c.122-.345.19-.72.19-1.122a3.8 3.8 0 0 0-.107-.888c.386-.03.703-.08.939-.151c.104-.032.01-.13-.1-.215l-.107-.078l-.076-.051a2.7 2.7 0 0 0-.995-.418c-.38-.76-.964-1.418-1.586-1.943A4.8 4.8 0 0 1 19 13M5 13q.537.002 1.032.113c-.622.525-1.206 1.183-1.586 1.943a2.7 2.7 0 0 0-.995.418l-.128.088c-.127.092-.276.22-.155.256c.236.071.553.122.94.151a3.7 3.7 0 0 0-.108.888c0 .402.068.777.19 1.122l-.28-.02l-.296-.03c-1.202-.147-2.614-.607-2.614-2c0-.905.666-1.649 1.307-2.096A4.76 4.76 0 0 1 5 13m13.5-6a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5m-13 0a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5M12 3a4 4 0 1 1 0 8a4 4 0 0 1 0-8m6.5 6a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1m-13 0a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1M12 5a2 2 0 1 0 0 4a2 2 0 0 0 0-4'
                />
              </g>
            </svg>
          </Box>
          <Typography my={"5px"} fontSize={"1.2rem"} fontWeight={"500"}>
            Sử dụng thương mại
          </Typography>
          <Typography color='grey_500.main'>
            Dịch vụ của chúng tôi hỗ trợ cả mục đích cá nhân và thương mại, mang
            đến sự linh hoạt cho người dùng.
          </Typography>
        </Box>
        <Box
          borderRadius={"20px"}
          border={"1px solid #dddddd"}
          padding={"20px"}
          width={"30%"}>
          <Box>
            <svg
              style={{ fontSize: "36px" }}
              data-v-fa4d36aa=''
              data-v-5879fc1d=''
              xmlns='http://www.w3.org/2000/svg'
              xmlnsXlink='http://www.w3.org/1999/xlink'
              aria-hidden='true'
              role='img'
              className='icon w-8 h-8 flex-shrink-0 text-gray-900 dark:text-white'
              width='1em'
              height='1em'
              viewBox='0 0 20 20'>
              <path
                fill='currentColor'
                d='M4.5 4A2.5 2.5 0 0 0 2 6.5v7A2.5 2.5 0 0 0 4.5 16h11a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 15.5 4zM3 6.5A1.5 1.5 0 0 1 4.5 5h11A1.5 1.5 0 0 1 17 6.5v7a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 3 13.5zM4.5 6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h8a.5.5 0 0 0 0-1zm.5 3a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1z'
              />
            </svg>
          </Box>
          <Typography my={"5px"} fontSize={"1.2rem"} fontWeight={"500"}>
            Giao diện thân thiện với người dùng
          </Typography>
          <Typography color='grey_500.main'>
            Trang web của chúng tôi được thiết kế để dễ sử dụng, giúp quá trình
            chuyển đổi văn bản thành giọng nói trở nên đơn giản và thuận tiện
            cho mọi người.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default PricingPlansView;
