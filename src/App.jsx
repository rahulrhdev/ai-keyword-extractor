import { Container, Box } from "@chakra-ui/react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import TextInput from "./components/TextInput"

const App = () => {
  const extractKeywords = (text) => {
    console.log(text, 'tetx')
  }
  return (
    <Box bg='blue.600' color='white' height='100vh' padding='130px'>
      <Container maxW='3xl' centerContent>
      <Header />
      <TextInput extractKeywords={extractKeywords} />
      <Footer />
      </Container>
    </Box>
  )
}

export default App