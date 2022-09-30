import styled from 'styled-components'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined'
import ThumbDownOffAltOutlinedIcon from '@mui/icons-material/ThumbDownOffAltOutlined'
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined'
import AddTaskOutlinedIcon from '@mui/icons-material/AddTaskOutlined'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import ThumbDownIcon from '@mui/icons-material/ThumbDown'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import Comments from '../components/Comments'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { format } from 'timeago.js'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSuccess, likeVideo, dislikeVideo } from '../redux/videoSlice'
import { subscribe } from '../redux/userSlice'
import Recommendation from '../components/Recommendation'

const Container = styled.div`
  display: flex;
  gap: 24px;
`

const Content = styled.div`
  flex: 5;
`

const VideoWrapper = styled.div``

const VideoFrame = styled.video`
  max-height: 720px;
  width: 100%;
  object-fit: cover;
`

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

const IconBox = styled.div`
  color: ${({ theme }) => theme.text};
  margin-left: auto;
  cursor: pointer;
`

const Video = () => {
  const { videoId } = useParams()
  const [channel, setChannel] = useState({})
  const { currentVideo } = useSelector(state => state.video)
  const { currentUser } = useSelector(state => state.user)
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchData = async () => {
      const videoRes = await axios.get(`/videos/find/${videoId}`)
      const channelRes = await axios.get(`/users/find/${videoRes.data.userId}`)

      dispatch(fetchSuccess(videoRes.data))
      setChannel(channelRes.data)
    }
    fetchData()
  }, [videoId, dispatch])

  const handleLike = async () => {
    await axios.put(`/users/like/${currentVideo._id}`)
    dispatch(likeVideo(currentUser._id))
  }

  const handleDislike = async () => {
    await axios.put(`/users/dislike/${currentVideo._id}`)
    dispatch(dislikeVideo(currentUser._id))
  }

  const handleSubscribe = async () => {
    currentUser.subscribedChannels.includes(channel._id)
      ? await axios.put(`/users/unsub/${channel._id}`)
      : await axios.put(`/users/sub/${channel._id}`)
    dispatch(subscribe(channel._id))
  }

  return (
    <Container>
      <Content>
        <VideoWrapper>
          <VideoFrame src={currentVideo?.videoUrl} controls />
          <Title>{currentVideo?.title}</Title>
          <Details>
            <Info>
              {currentVideo?.views} views • {format(currentVideo?.createdAt)}
            </Info>
            <Buttons>
              <Button onClick={handleLike}>
                {currentVideo?.likes?.includes(currentUser?._id) ? (
                  <ThumbUpIcon />
                ) : (
                  <ThumbUpOutlinedIcon />
                )}{' '}
                {currentVideo?.likes?.length}
              </Button>
              <Button onClick={handleDislike}>
                {currentVideo?.likes?.includes(currentUser?._id) ? (
                  <ThumbDownOffAltOutlinedIcon />
                ) : (
                  <ThumbDownIcon />
                )}{' '}
                Dislike
              </Button>
              <Button>
                <ReplyOutlinedIcon /> Share
              </Button>
              <Button>
                <AddTaskOutlinedIcon /> Save
              </Button>
              <IconBox>
                <MoreHorizIcon />
              </IconBox>
            </Buttons>
          </Details>
          <Hr />
          <Channel>
            <ChannelInfo>
              <ChannelImage src='https://avatars.githubusercontent.com/u/46356794?s=96&v=4' />
              <ChannelDetail>
                <ChannelName>{channel.name}</ChannelName>
                <ChannelCounter>
                  {channel.subscribers} subscribers
                </ChannelCounter>
                <ChannelDescription>{currentVideo?.desc}</ChannelDescription>
              </ChannelDetail>
            </ChannelInfo>
            <Subscribe onClick={handleSubscribe}>
              {currentUser?.subscribedChannels?.includes(channel._id)
                ? 'SUBSCRIBED'
                : 'SUBSCRIBE'}
            </Subscribe>
          </Channel>
          <Hr />
        </VideoWrapper>
        <Comments videoId={currentVideo?._id} />
      </Content>
      <Recommendation tags={currentVideo.tags} />
    </Container>
  )
}
export default Video
