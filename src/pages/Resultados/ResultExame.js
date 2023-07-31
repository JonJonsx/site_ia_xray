import {
  Flex,
  Text,
  Grid,
  GridItem
} from "@chakra-ui/react";
import React from "react";
import { Book, Eye } from "react-feather";
import ModalExame from "../../components/ModalExame/ModalExame";
import DrawerFeedback from "../../components/Feedback/DrawerFeedback";

export default function ResultExame(props) {
  const { paciente, resultado, dadosExame } = props
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
        <Grid templateColumns='repeat(2, 1fr)' gap={2}>
          <GridItem colSpan={2} >
            <Text fontSize='1xl' color="#000000">
              Paciente: {paciente}</Text>
          </GridItem>
          <GridItem colSpan={2}>
            <Text fontSize='1xl'  color="#000000">Problema Encontrado: {resultado}</Text>
          </GridItem>
        </Grid>
      </Flex>
      <Flex
        w="100%"
        justifyContent="flex-end"
        alignItems="center"
      >
        <DrawerFeedback iconButton={<Book/>} textoButton="Dar Feedback" dadosDrawer={dadosExame}/>
        <ModalExame iconButton={<Eye/>} textoButton="Ver resultado" dadosModal={dadosExame}/>
      </Flex>
    </Flex>
  )
}