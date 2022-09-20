import styled from 'styled-components'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined'
import ThumbDownOffAltOutlinedIcon from '@mui/icons-material/ThumbDownOffAltOutlined'
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined'
import AddTaskOutlinedIcon from '@mui/icons-material/AddTaskOutlined'
// import ThumbDownIcon from '@mui/icons-material/ThumbDown'
// import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import Comments from '../components/Comments'
import Card from '../components/Card'

const Container = styled.div`
  display: flex;
  gap: 24px;
`

const Content = styled.div`
  flex: 5;
`

const VideoWrapper = styled.div``

// const VideoFrame = styled.video`
//   max-height: 720px;
//   width: 100%;
//   object-fit: cover;
// `

const Title = styled.h1`
  font-size: 18px;
  font-weight: 400;
  color: ${({ theme }) => theme.text};
  margin: 20px 0 10px 0;
`

const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Info = styled.span`
  color: ${({ theme }) => theme.textSoft};
  /* font-size: 14px; */
`

const Buttons = styled.div`
  display: flex;
  gap: 20px;
  color: ${({ theme }) => theme.text};
  /* align-items: center; */
  /* font-size: 14px; */
`

const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`

const Hr = styled.hr`
  margin: 15px 0;
  border: 0.5px solid ${({ theme }) => theme.soft};
`

const Channel = styled.div`
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
`

const ChannelInfo = styled.div`
  display: flex;
  gap: 20px;
`

const ChannelImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`

const ChannelDetail = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
`

const ChannelName = styled.span`
  font-weight: 500;
  /* margin-bottom: 5px; */
`

const ChannelCounter = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.textSoft};
  margin-top: 5px;
  margin-bottom: 20px;
  /* font-weight: 600; */
`

const ChannelDescription = styled.p`
  font-size: 14px;
`

const Subscribe = styled.button`
  height: max-content;
  padding: 10px 20px;
  color: #fff;
  background-color: #cc1a00;
  font-weight: 500;
  border-radius: 3px;
  border: none;
  cursor: pointer;
`

const Recommendations = styled.div`
  flex: 2;
`

const Video = () => {
  return (
    <Container>
      <Content>
        <VideoWrapper>
          {/* <VideoFrame controls>
            <source
              // src='https://www.youtube.com/watch?v=AORG9W-41z4'
              src='https://www.youtube.com/embed/k3Vfj-e1Ma4'
              type='video/mp4'
            ></source>
          </VideoFrame> */}
          <iframe
            width='100%'
            height='420'
            src='https://www.youtube.com/embed/k3Vfj-e1Ma4'
            title='YouTube video player'
            frameborder='0'
            allowFullScreen
            allow='accelerometer; autoplay; clipboard-write'
          ></iframe>
          <Title>Create a Full MERN Stack - Youtube clone</Title>
          <Details>
            <Info>2,744,563 views • Jun 22, 2022</Info>
            <Buttons>
              <Button>
                <ThumbUpOutlinedIcon /> 123
              </Button>
              <Button>
                <ThumbDownOffAltOutlinedIcon /> Dislike
              </Button>
              <Button>
                <ReplyOutlinedIcon /> Share
              </Button>
              <Button>
                <AddTaskOutlinedIcon /> Save
              </Button>
            </Buttons>
          </Details>
          <Hr />
          <Channel>
            <ChannelInfo>
              <ChannelImage src='https://avatars.githubusercontent.com/u/46356794?s=96&v=4' />
              <ChannelDetail>
                <ChannelName>Nasko Dev</ChannelName>
                <ChannelCounter>150K subscribers</ChannelCounter>
                <ChannelDescription>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Ratione, itaque doloribus iure explicabo eveniet quidem cumque
                  facilis animi veniam maxime dolore obcaecati nulla ipsam,
                  magni architecto ab possimus pariatur dignissimos.
                </ChannelDescription>
              </ChannelDetail>
            </ChannelInfo>
            <Subscribe>SUBSCRIBE</Subscribe>
          </Channel>
          <Hr />
        </VideoWrapper>
        <Comments />
      </Content>
      <Recommendations>
        <Card type='sm' />
        <Card type='sm' />
        <Card type='sm' />
        <Card type='sm' />
        <Card type='sm' />
        <Card type='sm' />
        <Card type='sm' />
        <Card type='sm' />
        <Card type='sm' />
        <Card type='sm' />
        <Card type='sm' />
        <Card type='sm' />
        <Card type='sm' />
        <Card type='sm' />
        <Card type='sm' />
        <Card type='sm' />
      </Recommendations>
    </Container>
  )
}
export default Video
