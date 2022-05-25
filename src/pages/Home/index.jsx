import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Container,
  Flex,
  Heading,
  Spacer,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Home = () => {
  const formBackground = useColorModeValue("gray.100", "gray.700");
  const inputBackground = useColorModeValue("gray.300", "gray.600");

  return (
    <Box>
      <Flex
        minWidth="max-content"
        alignItems="center"
        gap="2"
        p={4}
        bg={formBackground}
      >
        <Box p="2">
          <Heading size="md">Mind Challenge</Heading>
        </Box>
        <Spacer />
        <ButtonGroup gap="2">
          {/* <Button colorScheme="teal">Sign Up</Button> */}
          <Button colorScheme="teal">Log out</Button>
        </ButtonGroup>
      </Flex>

      <Container>
        <Box p={4} m={4} shadow="md" borderWidth="1px">
          <Heading fontSize="xl">Usuarios</Heading>
          <Text mt={4}>Gestionar y crear usuarios.</Text>
          <Button mt={4} colorScheme="green">
            Ir
          </Button>
        </Box>
        <Box p={4} m={4} shadow="md" borderWidth="1px">
          <Heading fontSize="xl">Cuentas</Heading>
          <Text mt={4}>Gestionar y crear cuentas.</Text>
          <Button mt={4} colorScheme="green">
            Ir
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
