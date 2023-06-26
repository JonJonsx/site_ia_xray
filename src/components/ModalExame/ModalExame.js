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
  Text
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
        >{textoButton}</Button>
      <Modal isOpen={isOpen} size="xl" onClose={onClose} >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader color="#000000">Exame</ModalHeader>
          <ModalCloseButton />
          <ModalBody color="#000000">
            <Text>Paciente:</Text>
            <Text>{dadosModal.patient}</Text>
            <Text>Sexo:</Text>
            <Text>{dadosModal.sex}</Text>
            <Text>Idade:</Text>
            <Text>{dadosModal.age}</Text>
            <Text>Resultado:</Text>
            <Text>{dadosModal.result_exam}</Text>
            <Text>Feedback:</Text>
            <Text>{dadosModal.feedback}</Text>
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