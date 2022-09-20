import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: calc(100vh - 56px);
  /* background-color: ${({ theme }) => theme.bg}; */
  color: ${({ theme }) => theme.text};
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.bgLighter};
  border: 1px solid ${({ theme }) => theme.soft};
  padding: 20px 50px;
  gap: 10px;
`

const Title = styled.h1`
  font-style: 24px;
`

const Subtitle = styled.h2`
  font-style: 20px;
  font-weight: 300;
`

const Input = styled.input`
  padding: 5px 10px;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.soft};
  border-radius: 3px;
  outline: none;
  font-size: 16px;
  background-color: transparent;
  color: ${({ theme }) => theme.text};
`

const Button = styled.button`
  background-color: ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.textSoft};
  font-size: 16px;
  font-weight: 500;
  padding: 10px 20px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
`

const More = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  font-size: 12px;
  color: ${({ theme }) => theme.textSoft};
`
const Links = styled.div`
  margin-left: 50px;
`

const Link = styled.span`
  margin-left: 30px;
`

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Sign in</Title>
        <Subtitle>to continue to NaskoTube</Subtitle>
        <Input placeholder='username' />
        <Input type='password' placeholder='password' />
        <Button>Sign in</Button>
        <Title>or</Title>
        <Input placeholder='username' />
        <Input type='email' placeholder='email' />
        <Input type='password' placeholder='password' />
        <Button>Sign up</Button>
      </Wrapper>
      <More>
        English(USA)
        <Links>
          <Link>Help</Link>
          <Link>Privacy</Link>
          <Link>Terms</Link>
        </Links>
      </More>
    </Container>
  )
}
export default Login
