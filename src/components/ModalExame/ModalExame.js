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
      <Modal isOpen={isOpen} size="xl" onClose={onClose} >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader color="#000000">Resultados</ModalHeader>
          <ModalCloseButton bg="#e74c3c" />
          <ModalBody color="#000000">
            <Stack>
              <Text fontSize='3xl' textAlign="center">Informações do Paciente</Text>
              <Box>
                <Text>Paciente:</Text>
                <Input 
                isDisabled
                placeholder={dadosModal.patient}/>
              </Box>
              <Box>
                <Text>Sexo:</Text>
                <Input isDisabled placeholder={dadosModal.sex}/>
              </Box>
              <Box>
                <Text>Data de nascimento:</Text>
                <Input isDisabled placeholder={dadosModal.age}/>
              </Box>
            </Stack>
            <Stack>
              <Text fontSize='3xl' textAlign="center">Resultado</Text>
              <Box>
                <Text>Resultado:</Text>
                <Input isDisabled placeholder={dadosModal.result_exam}/>
                <Flex justifyContent="center" alignItems="center" mt="5px">
                  <Image src='https://www.msdmanuals.com/-/media/manual/professional/images/m/2/7/m2700245-tuberculosis-chest-x-ray-science-photo-library-high_pt.jpg?mw=704&amp;thn=0&amp;sc_lang=pt-br' boxSize='sm' alt='Dan Abramov'/>
                </Flex>
              </Box>
              <Box>
                <Text>Feedback:</Text>
                <Input isDisabled placeholder={dadosModal.feedback}/>
              </Box>
            </Stack>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}