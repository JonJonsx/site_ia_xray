import {
    Box,
    Button,
    Center,
    Flex,
    FormControl,
    FormLabel,
    HStack,
    Input,
    Radio,
    RadioGroup,
    Text
} from "@chakra-ui/react";

import Link from 'react-router-dom/Link'


function Formulario() {
    return (
        <Box h='100vh'>
            <Center
                as="header"
                h={150}
                bg="#0984e3"
                color="#ffffff"
                fontWeight="bold"
                fontSize="5x1">
                <Text fontSize='4xl'>Formulário</Text>
            </Center>
            <Flex
                align="center"
                justify="center"
                bg="blackAlpha.200"
                h="calc(100vh - 150px)"
            >
                <Center
                    w="100%"
                    maxW={840}
                    bg="white"
                    top={100}
                    position="absolute"
                    borderRadius={5}
                    p="6"
                    boxShadow="0 1px 2px #ccc"
                >
                    <FormControl display="flex" flexDir="column" gap="4">
                        <HStack spacing="4">
                            <Box w="100%">
                                <FormLabel htmlFor="nome">Nome Completo</FormLabel>
                                <Input id="nome" />
                            </Box>
                        </HStack>
                        <HStack spacing="4">
                            <Box w="100%">
                                <FormLabel htmlFor="nasc">Data de Nascimento</FormLabel>
                                <Input id="nasc" type="date" />
                            </Box>
                        </HStack>
                        <HStack spacing="4">
                            <Box w="100%">
                                <FormLabel>Sexo</FormLabel>
                                <RadioGroup defaultValue="Masculino">
                                    <HStack spacing="24px">
                                        <Radio value="Masculino">Masculino</Radio>
                                        <Radio value="Feminino">Feminino</Radio>
                                        <Radio value="Outro">Outro</Radio>
                                    </HStack>
                                </RadioGroup>
                            </Box>
                        </HStack>
                        <HStack spacing="4">
                            <Box w="100%">
                                <FormLabel htmlFor="radi">Radiografia</FormLabel>
                                <Input id="radi" type="file" />
                            </Box>
                        </HStack>
                        <HStack justify="center">
                            <Link to="/Resultado">
                                <Button
                                    w={240}
                                    p="6"
                                    type="submit"
                                    bg="teal.600"
                                    color="white"
                                    fontWeight="bold"
                                    fontSize="xl"
                                    mt="2"
                                    _hover={{ bg: "teal.800" }}
                                >
                                    Enviar
                                </Button>
                            </Link >
                        </HStack>
                    </FormControl>
                </Center>
            </Flex>
        </Box>
    );
}

export default Formulario