import {
    Box,
    Center,
    Flex,
    FormControl,
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
                    maxW={840}
                    bg="white"
                    top={100}
                    position="absolute"
                    borderRadius={5}
                    p="6"
                    boxShadow="0 1px 2px #ccc"
                >
                    <FormControl display="flex" flexDir="column" gap="4"></FormControl>
                </Center>
            </Flex>
        </Box>
    );
}

export default Formulario