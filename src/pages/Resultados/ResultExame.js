import {
  Button,
  Flex,
  Text,
  Box
} from "@chakra-ui/react";
import React from "react";
import { Book, Eye } from "react-feather";


export default function ResultExame(props) {
  const { paciente, resultado } = props
  // const paciente = "João da Silva"
  return (
    <Flex
      alignItems="left"
      justifyContent="space-between"
      bg="#FFFFFF"
      w="100%"
      mt={2}
      padding={2}
      borderRadius={8}>
      <Flex
        color="#000000"
        w="100%"
        alignItems="center">
        <Box mr={4}>
          <Text fontSize='1xl' color="#000000">
            Paciente:
          </Text>
          <Text fontSize='1xl' color="#000000">
            {paciente}
          </Text>
        </Box>
        <Box>
          <Text fontSize='1xl' color="#000000">Problema Encontrado:</Text>
          <Text fontSize='1xl' color="#000000">{resultado}</Text>
        </Box>
      </Flex>
      <Flex
        w="100%"
        justifyContent="flex-end"
        alignItems="center"
      >
        <Button
          color="#ffffff"
          leftIcon={<Book />}
          backgroundColor='#0984E3'
          variant='solid'
          _hover={{ backgroundColor: "#3498DB" }}
        >Dar Feedback</Button>
        <Button
          ml={3}
          color="#ffffff"
          leftIcon={<Eye />}
          backgroundColor='#0984E3'
          _hover={{ backgroundColor: "#3498DB" }}
          variant='solid'
        >Ver exame</Button>
      </Flex>
    </Flex>
  )
}