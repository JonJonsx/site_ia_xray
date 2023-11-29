import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Text,
  Box,
  Stack,
  Image,
  Flex,
  Input
} from '@chakra-ui/react'
import { ArrowRight } from "react-feather";
import { requests } from "../../services/api";


export default function ModalExame(props) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { iconButton, textoButton, dadosModal } = props
  // const [dateus] = React.useState()

  return (
    <>
      <Button
        color="#ffffff"
        leftIcon={iconButton}
        backgroundColor='#0984E3'
        variant='solid'
        _hover={{ backgroundColor: "#3498DB" }}
        onClick={onOpen}
        m={2}
      >{textoButton}</Button>
      <Modal isOpen={isOpen} size={"full"} onClose={onClose} >
        <ModalOverlay />
        <ModalContent maxW="80%" maxH="50%">
          <ModalHeader color="#000000">Resultados</ModalHeader>
          <ModalCloseButton bg="#e74c3c" />
          <Flex flexDirection={"row"} color="#000000">
            <Stack padding={8}>
              <Text fontSize='3xl' textAlign="center">Radiografia Enviada:</Text>
              <Box>
                <Flex justifyContent="center" alignItems="center" mt="5px" marginY={25} marginX={10}>
                  {/* <Image src={requests.exames.getImagem(dadosModal.imagem.pathImagem)} boxSize='sm' alt='Dan Abramov'/> */}
                  <img style={{maxHeight: "500px"}} src={"http://localhost:8080/imagem/"+dadosModal.imagem.pathImagem} alt='Imagem de envio da radiografia'/>
                </Flex>
              </Box>
            </Stack>
            <Flex marginX={24} alignItems={"center"}>
              <ArrowRight color={"black"} size={64} />  
            </Flex>
            <Stack padding={8} style={{maxHeight: "400px"}}>
              <Text fontSize='3xl' textAlign="center">Resultado</Text>
              <Box>
                <Flex justifyContent="center" alignItems="center" mt="5px">
                  {/* <Image src={requests.exames.getImagem(dadosModal.imagem.pathImagem)} boxSize='sm' alt='Dan Abramov'/> */}
                  <img style={{minHeight: "350px", width:"auto", objectPosition: "0px -30px"}} src={"http://localhost:8080/imagem/resultado/"+dadosModal.imagem.pathImagem} alt='Imagem de retorno da radiografia'/>
                </Flex>
              </Box>
            </Stack>
          </Flex>

          <ModalFooter alignI={"left"}>
            <Flex w={"100%"} flexDirection={"column"}>
              <Text fontSize='xl'>Possíveis Doenças:</Text>
              <Input value={dadosModal.resultado === "No Finding" ? "Nenhum problema encontrado na radiografia" : dadosModal.resultado }/>
            </Flex>

          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}