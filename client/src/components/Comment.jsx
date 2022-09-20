import styled from 'styled-components'

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

const Comment = () => {
  return (
    <Container>
      <Avatar src='https://avatars.githubusercontent.com/u/46356794?s=96&v=4' />
      <Details>
        <Name>
          John Doe <Date>3 days ago</Date>
        </Name>
        <Text>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis,
          voluptatum sint eaque quo accusamus distinctio earum, at doloremque
          aut, nostrum tempore. Optio sint qui officia aperiam illo velit
          temporibus exercitationem.
        </Text>
      </Details>
    </Container>
  )
}
export default Comment
