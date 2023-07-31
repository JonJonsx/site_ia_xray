import React from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { requests } from "../../services/api";

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  Input,
  Stack,
  Box,
  Text,
  RadioGroup,
  Radio
} from '@chakra-ui/react'

const validationExam = yup.object().shape({
  patient: yup.string().max(200, 'O nome deve ter no máximo 100 caracteres')
})

export default function DrawerFeedback(props) {
  const { iconButton, textoButton, dadosDrawer } = props
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  const { register, handleSubmit, formState: {errors} } = useForm({
    resolver: yupResolver(validationExam)
  })

  const novoExame = (data) => requests.exames.postNovoExame(data).then((response) => { 


  }).catch((error) => {
    console.log("DEU ERRO")
  })



  return (
    <>
      <Button
          color="#ffffff"
          ref={btnRef}
          leftIcon={iconButton}
          backgroundColor='#0984E3'
          variant='solid'
          _hover={{ backgroundColor: "#3498DB" }}
          onClick={onOpen}
        >{textoButton}</Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
        h="100%"
        size="lg"
      >
        <DrawerOverlay />
        <DrawerContent>
        <form onSubmit={handleSubmit(novoExame)}>
          <DrawerCloseButton />
          <DrawerHeader textColor="#000000">Novo Exame</DrawerHeader>

          <DrawerBody>
            <Stack>
              <Box textColor="#000000">
                <Text>Nome do paciente:</Text>
                <Input
                  name="patient"
                  placeholder='Paciente'
                  {...register('patient')}/>
              </Box>
              <Box textColor="#000000">
                <Text>Idade do paciente:</Text>
                <Input
                  name="age"
                  {...register('age')}
                  type="date"/>
              </Box>
              <Box textColor="#000000">
                <Text>Idade do paciente:</Text>
                <Input
                  name="age"
                  {...register('age')}
                  type="date"/>
              </Box>
              {/* <Box>
                <Text textColor="#000000">Arquivo de Radiografia:</Text>
                <Dropzone />
              </Box> */}
            </Stack>
          </DrawerBody>


          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue' type="submit">Enviar</Button>
          </DrawerFooter>
          </form>
        </DrawerContent>
      </Drawer>
      
    </>
  )
}