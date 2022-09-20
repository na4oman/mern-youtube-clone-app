import styled from 'styled-components'
import Comment from './Comment'

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const NewComment = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 0 10px;
  margin-bottom: 20px;
`

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`

const Input = styled.input`
  width: 100%;
  border: none;
  border-radius: 3px;
  background-color: ${({ theme }) => theme.bgLighter};
  color: ${({ theme }) => theme.text};
  outline: none;
  padding: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.soft};

  :focus {
    background-color: ${({ theme }) => theme.soft};
  }
`

const Hr = styled.hr`
  margin: 15px 0;
  border: 0.5px solid ${({ theme }) => theme.soft};
`

const Comments = () => {
  return (
    <Container>
      <NewComment>
        <Avatar src='https://avatars.githubusercontent.com/u/46356794?s=96&v=4' />
        <Input placeholder='Add a comment...' />
      </NewComment>
      <Hr />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </Container>
  )
}
export default Comments
