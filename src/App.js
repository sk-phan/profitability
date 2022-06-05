import FormCaculator from './components/FormCaculator';
import styled from 'styled-components'

const Container = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    padding: 4rem;
`

const Logo = styled.img`
    width: 20rem;

    @media (max-width: 650px) {
      margin-top: 4rem;

    }
`

function App() {
  return (
    <Container>
      <Logo src='https://diffosolutions.com/wp-content/uploads/2021/11/diffo-platform-logo.png' alt='Diffo Solution Logo' />
      <FormCaculator />
    </Container>
  );
}

export default App;
