import axios from 'axios'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { format } from 'timeago.js'

const Container = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  color: ${({ theme }) => theme.text};
`

const Name = styled.span`
  font-size: 14px;
  font-weight: 600;
`

const Date = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.textSoft};
  margin-left: 5px;
`

const Text = styled.p`
  font-size: 14px;
`

const Comment = ({ comment }) => {
  const [channel, setChannel] = useState({})

  useEffect(() => {
    const fetchChannel = async () => {
      const res = await axios.get(`/users/find/${comment?.userId}`)
      setChannel(res.data)
    }
    fetchChannel()
  }, [comment.userId])

  return (
    <Container>
      <Avatar src={channel.img} />
      <Details>
        <Name>
          {channel.name} <Date>{format(comment.createdAt)}</Date>
        </Name>
        <Text>{comment.desc}</Text>
      </Details>
    </Container>
  )
}
export default Comment
