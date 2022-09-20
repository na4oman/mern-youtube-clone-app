import { Link } from 'react-router-dom'
import styled from 'styled-components'

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

const Card = ({ type }) => {
  return (
    <Link to='video/test' style={{ textDecoration: 'none' }}>
      <Container type={type}>
        <CardImage
          type={type}
          src='https://i.ytimg.com/vi/_zIkQuqc0EQ/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBaPWk2ema98bfWYkdkKMovAtjdUg'
        />
        <CardContent type={type}>
          <ChannelImage
            type={type}
            src='https://avatars.githubusercontent.com/u/46356794?s=96&v=4'
          />
          <ChannelContent>
            <Title>Create a Full MERN Stack App</Title>
            <Channel>Nasko Dev</Channel>
            <InfoDetails>660,549 views • 2 years ago</InfoDetails>
          </ChannelContent>
        </CardContent>
      </Container>
    </Link>
  )
}
export default Card
