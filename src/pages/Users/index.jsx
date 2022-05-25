import {
  Flex,
  Heading,
  Input,
  Button,
  useColorModeValue,
  useToast,
  Textarea,
  Select,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";

const initalStateInputs = {
  name: "",
  email: "",
  password: "",
  englishLevel: "",
  technicalKnowledge: "",
  resumeUrl: "",
};

function Users() {
  /**
   * State hooks
   */
  const [form, setForm] = useState(initalStateInputs);

  /**
   * Styles hooks
   */
  const formBackground = useColorModeValue("gray.100", "gray.700");
  const inputBackground = useColorModeValue("gray.300", "gray.600");

  /**
   * chakra ui hooks
   */
  const toast = useToast();

  /**
   * handlers
   */
  const handleSave = async () => {
    const { email, password } = form;
    const data = await login(email, password);

    // se completó la solicitud pero con errores
    if (data.error) {
      toast({
        title: "Error autenticación",
        description: "Usuario/Contraseña incorrecto",
        status: "info",
        duration: 9000,
        isClosable: true,
      });
      return;
    }

    toast({
      title: "Bienvenid@",
      description: "Se ha logueado correctamente",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };

  const handleInput = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  /**
   * Component
   */
  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Flex
        direction="column"
        background={formBackground}
        p={12}
        rounded={6}
        boxShadow="lg"
        w="450px"
        minW="200px"
      >
        <Heading mb={6}>New User</Heading>
        <Text>Name:</Text>
        <Input
          placeholder="Isaí Madueño"
          variant="filled"
          mb={3}
          bg={inputBackground}
          type="text"
          name="name"
          value={form.name}
          onChange={handleInput}
        />
        <Text>Email:</Text>
        <Input
          placeholder="imadueno@arkusnexus.com"
          variant="filled"
          mb={3}
          bg={inputBackground}
          type="email"
          name="email"
          value={form.email}
          onChange={handleInput}
        />
        <Text>Password:</Text>
        <Input
          placeholder="********"
          variant="filled"
          mb={3}
          bg={inputBackground}
          type="password"
          name="password"
          value={form.password}
          onChange={handleInput}
        />

        <Text>English Level:</Text>
        <Select
          placeholder="Select an option"
          variant="filled"
          mb={3}
          bg={inputBackground}
          name="englishLevel"
          value={form.englishLevel}
          onChange={handleInput}
        >
          <option value="A1">A1</option>
          <option value="A2">A2</option>
          <option value="B1">B1</option>
          <option value="B2">B2</option>
          <option value="C1">C1</option>
          <option value="C2">C2</option>
        </Select>

        <Text>Resume Url:</Text>
        <Input
          placeholder="https://your/resume/url"
          variant="filled"
          mb={3}
          bg={inputBackground}
          type="text"
          name="resumeUrl"
          value={form.resumeUrl}
          onChange={handleInput}
        />

        <Text>Technical Knowledge:</Text>
        <Textarea
          placeholder="Describe your skill set and technical knowledge"
          variant="filled"
          mb={6}
          bg={inputBackground}
          name="resumeUrl"
          value={form.technicalKnowledge}
          onChange={handleInput}
        />

        <Button colorScheme="green" mb={3} onClick={handleSave}>
          Register
        </Button>
      </Flex>
    </Flex>
  );
}

export default Users;
