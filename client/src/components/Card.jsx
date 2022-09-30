import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { format } from 'timeago.js'
import MoreVertIcon from '@mui/icons-material/MoreVert'

const Container = styled.div`
  width: ${props => props.type !== 'sm' && '360px'};
  cursor: pointer;
  margin-bottom: ${props => (props.type === 'sm' ? '5px' : '20px')};
  display: ${props => props.type === 'sm' && 'flex'};
  gap: 5px;
`

const CardImage = styled.img`
  width: 100%;
  height: ${props => (props.type === 'sm' ? '90px' : '202px')};
  background-color: #999;
  flex: 1;
`
const CardContent = styled.div`
  display: flex;
  gap: 10px;
  margin-top: ${props => props.type !== 'sm' && '16px'};
  padding-left: 5px;
  padding-bottom: 10px;
  flex: 1;
`

const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: ${props => props.type === 'sm' && 'none'};
`
const ChannelContent = styled.div`
  display: flex;
  flex-direction: column;
`

const Title = styled.h5`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 5px;
  color: ${({ theme }) => theme.text};
`

const Channel = styled.p`
  font-size: 12px;
  font-weight: 600;
  color: ${({ theme }) => theme.textSoft};
  margin-bottom: 5px;
`

const InfoDetails = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.textSoft};
`

const IconBox = styled.div`
  color: ${({ theme }) => theme.text};
  margin-left: auto;
`

const Card = ({ type, video }) => {
  const [channel, setChannel] = useState({})

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(
        `http://localhost:8800/api/users/find/${video.userId}`
      )
      // console.log(res.data)
      setChannel(res.data)
    }

    fetchUser()
  }, [video.userId])

  return (
    <Link to={`../../video/${video?._id}`} style={{ textDecoration: 'none' }}>
      <Container type={type}>
        <CardImage type={type} src={video.imgUrl} />
        <CardContent type={type}>
          <ChannelImage type={type} src={channel.img} />
          <ChannelContent>
            <Title>{video.title}</Title>
            <Channel>{channel.name}</Channel>
            <InfoDetails>
              {video.views} views • {format(video.createdAt)}
            </InfoDetails>
          </ChannelContent>
          <IconBox>
            <MoreVertIcon fontSize='small' />
          </IconBox>
        </CardContent>
      </Container>
    </Link>
  )
}
export default Card
