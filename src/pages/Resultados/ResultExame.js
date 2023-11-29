import {
  Flex,
  Text,
  Grid,
  GridItem
} from "@chakra-ui/react";
import React, { useState } from 'react';
import { Book, Eye, ChevronDown, ChevronUp } from "react-feather";
import ModalExame from "../../components/ModalExame/ModalExame";
import DrawerFeedback from "../../components/Feedback/DrawerFeedback";
import AddExame from "../../components/AddExame/AddExame";

export default function ResultExame(props) {
  const { content } = props
  const [isActive, setIsActive] = useState(false);
  // const paciente = "João da Silva"
  return (
    <div>
      <Flex   
        alignItems="left"
        justifyContent="space-between"
        bg="#FFFFFF"
        w="100%"
        mt={2}
        padding={2}
        borderTopRadius={8}
        borderBottomRadius={isActive ? 0 : 8}
        onClick={() => setIsActive(!isActive)}  
        >
        <Flex
          color="#000000"
          w="100%"
          alignItems="center">
          <Grid templateColumns='repeat(2, 1fr)' gap={2}>
            <GridItem colSpan={2} >
              <Text fontSize='1xl' color="#000000">
                Paciente: {content.paciente.nomePaciente}</Text>
            </GridItem>
            <GridItem colSpan={2}>
              <Text fontSize='1xl'  color="#000000">E-mail: {content.paciente.emailPaciente}</Text>
            </GridItem>
          </Grid>
        </Flex>
        <Flex
          w="100%"
          justifyContent="flex-end"
          alignItems="center"
        >
          <AddExame isPatient={true} paciente={content.paciente} followUp={content.listaExames.length}/>
          {isActive ? <Flex mr={8}><ChevronUp size={32} color={"black"}/></Flex> : <Flex mr={8}><ChevronDown size={32} color={"black"}/></Flex> }
        </Flex>
      </Flex>
      {isActive && 
        <Flex   
          flexDirection="column"
          alignItems="left"
          justifyContent="space-between"
          bg="#d3d5d7"
          w="100%"
          padding={2}
          borderTopRadius={0}
          borderBottomRadius={8}
        >
          {
            content.listaExames.sort((a, b) => {
              if (a.followUp < b.followUp) {
                return -1;
              }
              if (a.followUp > b.followUp) {
                return 1;
              }
              return 0;
            }).map((exame) => (
              <Flex
                alignItems="left"
                mt={2}
                padding={2}
                borderRadius={8}
                bg="#FEFEFE"
                w="100%"
                key={exame.idExame}
              >
                <Flex
                  color="#000000"
                  w="100%"
                  alignItems="center"
                >
                  <Grid templateColumns='repeat(2, 1fr)' gap={2}>
                    <GridItem colSpan={2} >
                      <Text fontSize='1xl' color="#000000">
                        Data do exame: {exame.dataRegistro} | Follow-up: {exame.followUp}</Text>
                    </GridItem>
                    <GridItem colSpan={2}>
                      <Text fontSize='1xl'  color="#000000">Possível resultado: {exame.resultado}</Text>
                    </GridItem>
                  </Grid>
                </Flex>
                <Flex
                  w="100%"
                  justifyContent="flex-end"
                  alignItems="center"
                >
                  <DrawerFeedback iconButton={<Book/>} textoButton="Dar Feedback" dadosDrawer={exame}/>
                  <ModalExame iconButton={<Eye/>} textoButton="Ver resultado" dadosModal={exame} />
                </Flex>
              </Flex>
            ))
          }
        </Flex>
      }
    </div>
    
    
  )
}