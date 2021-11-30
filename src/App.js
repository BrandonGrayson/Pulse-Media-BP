import { ChakraProvider, Box, Text } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
    <Box>
      <Text>
        Hello from the App Component
      </Text>
    </Box>
    </ChakraProvider>

  );
}

export default App;
