import { ChakraProvider, Box, Text} from '@chakra-ui/react'
import theme from "../src/Theme"

function App() {
  return (
    <ChakraProvider theme={theme}>
    <Box>
      <Text>
        Hello from the App Component
      </Text>
    </Box>
    </ChakraProvider>

  );
}

export default App;
