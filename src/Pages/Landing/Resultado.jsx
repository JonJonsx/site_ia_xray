import {
    Box,
    Center,
    Flex,
    FormControl,
    Grid,
    GridItem,
    HStack,
    Image,
    Text
} from "@chakra-ui/react";


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
                <Text fontSize='4xl'>Resultado</Text>
            </Center>
            <Flex
                align="center"
                justify="center"
                bg="blackAlpha.200"
                h="calc(100vh - 150px)"
            >
                <Center
                    w="100%"
                    maxW={700}
                    bg="white"
                    top={100}
                    position="absolute"
                    borderRadius={5}
                    p="6"
                    boxShadow="0 1px 2px #ccc"
                >
                    <FormControl display="flex" flexDir="column">
                        <HStack spacing="2" justify="center">
                            <Box w="100%"boxSize='sm'>
                                <Text fontSize='2xl' w="100%" color="#000000" align="center" fontWeight="bold" p="5">Imagem usada para analise</Text>
                                <Image src='https://s1.static.brasilescola.uol.com.br/be/conteudo/images/o-choque-dos-raios-x-com-corpo-gera-imagens-que-auxiliam-no-diagnostico-problemas-saude-59a6de7dc3eb0.jpg' alt='Dan Abramov' />
                            </Box>
                        </HStack>
                        <Grid templateColumns='repeat(2, 1fr)' gap={6}>
                            <GridItem rowSpan={2}> 
                                <Text fontSize='1xl' color="#000000"fontWeight="bold" p="1">Nome do paciente: </Text>
                                <Text fontSize='1xl' p="1">Jonata da silva souza</Text>
                            </GridItem>
                            <GridItem rowSpan={2}> 
                                <Text fontSize='1xl' color="#000000"fontWeight="bold" p="1">Idade do paciente: </Text>
                                <Text fontSize='1xl' p="1">18 anos</Text>
                            </GridItem>
                            <GridItem rowSpan={2}> 
                                <Text fontSize='1xl' color="#000000"fontWeight="bold" p="1">Sexo do paciente: </Text>
                                <Text fontSize='1xl' p="1">Masculino</Text>
                            </GridItem>
                            <GridItem rowSpan={2}> 
                                <Text fontSize='1xl' color="#000000"fontWeight="bold" p="1">Resultado: </Text>
                                <Text fontSize='1xl' p="1">Cancer de pulmao</Text>
                            </GridItem>
                            <GridItem rowSpan={2}> 
                                <Text fontSize='1xl' color="#000000"fontWeight="bold" p="1">Possibilidade do resultado estar correto: </Text>
                                <Text fontSize='1xl' p="1">89%</Text>
                            </GridItem>
                        </Grid>
                    </FormControl>
                </Center>
            </Flex>
        </Box>
    );
}

export default Formulario