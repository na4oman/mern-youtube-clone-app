import axios from 'axios'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import Comment from './Comment'

const Container = styled.div`
  display: flex;
  flex-direction: column;
`
const NewComment = styled.div`
  margin-bottom: 20px;
`

const CommentContent = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 0 10px;
  margin-bottom: 5px;
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
const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 5px 15px;
  background-color: transparent;
  color: #3ea6ff;
  border: 1px solid #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  margin-top: 10px;
  cursor: pointer;
`

const ButtonCancel = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 5px 15px;
  background-color: transparent;
  color: ${({ theme }) => theme.text};
  border: 1px solid ${({ theme }) => theme.textSoft};
  border-radius: 3px;
  font-weight: 500;
  margin-top: 10px;
  cursor: pointer;
`

const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  padding-right: 10px;
`

const Comments = ({ videoId }) => {
  const { currentUser } = useSelector(state => state.user)
  const [comments, setComments] = useState([])
  const [showButton, setShowButton] = useState(false)
  const [input, setInput] = useState('')
  const [sending, setSending] = useState(false)

  const addComment = async () => {
    await axios.post('/comments', {
      desc: input,
      videoId,
    })
    console.log('your comment has been sent')
    setInput('')
    setSending(true)
    setShowButton(false)
  }

  useEffect(() => {
    const fetchComments = async () => {
      const res = await axios.get(`/comments/${videoId}`)
      setComments(res.data)
    }
    fetchComments()
  }, [videoId, sending])

  return (
    <Container>
      <NewComment>
        <CommentContent>
          <Avatar src={currentUser?.img} />
          <Input
            value={input}
            placeholder='Add a comment...'
            onFocus={() => setShowButton(true)}
            onChange={e => setInput(e.target.value)}
          />
        </CommentContent>
        <Buttons>
          {showButton && (
            <ButtonCancel onClick={() => setShowButton(false)}>
              CANCEL
            </ButtonCancel>
          )}
          {showButton && <Button onClick={addComment}>COMMENT</Button>}
        </Buttons>
      </NewComment>
      <Hr />
      {comments.map(comment => (
        <Comment key={comment._id} comment={comment} />
      ))}
    </Container>
  )
}
export default Comments
