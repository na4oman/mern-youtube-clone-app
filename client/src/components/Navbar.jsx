import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined'
import LogoutIcon from '@mui/icons-material/Logout'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import Upload from './Upload'
import { logout } from '../redux/userSlice'

const Container = styled.div`
  height: 56px;
  background-color: ${({ theme }) => theme.bgLighter};
  color: ${({ theme }) => theme.text};
  position: sticky;
  top: 0;
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0px 20px;
  height: 100%;
  position: relative;
`

const Search = styled.div`
  width: 40%;
  position: absolute;
  left: 0px;
  right: 0px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
  background-color: ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.text};
`

const Input = styled.input`
  width: 100%;
  padding: 5px;
  border: none;
  background-color: inherit;
  outline: none;
  color: ${({ theme }) => theme.text};
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

const User = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
  position: relative;
`
const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #999;
`

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [q, setQ] = useState('')
  const { currentUser } = useSelector(state => state.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  return (
    <>
      <Container>
        <Wrapper>
          <Search>
            <Input
              placeholder='Search...'
              onChange={e => setQ(e.target.value)}
            />
            <SearchIcon onClick={() => navigate(`/search?q=${q}`)} />
          </Search>
          {currentUser ? (
            <User>
              <VideoCallOutlinedIcon onClick={() => setOpen(true)} />
              <Avatar src={currentUser.img} referrerpolicy='no-referrer' />
              {currentUser.name}
              {currentUser && (
                <LogoutIcon fontSize='small' onClick={() => dispatch(logout())}>
                  Logout
                </LogoutIcon>
              )}
            </User>
          ) : (
            <Link to='signin' style={{ textDecoration: 'none' }}>
              <Button>
                <AccountCircleOutlinedIcon />
                SIGN IN
              </Button>
            </Link>
          )}
        </Wrapper>
      </Container>
      {open && <Upload setOpen={setOpen} />}
    </>
  )
}
export default Navbar
