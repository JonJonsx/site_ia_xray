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
  Select
} from '@chakra-ui/react'

import Dropzone from "./Dropzone"

const validationExam = yup.object().shape({
  patient: yup.string().required('O nome é obrigatório')
  .max(100, 'O nome deve ter no máximo 100 caracteres')
  .min(10, 'O nome deve ter no mínimo 10 caracteres'),
  age: yup.string().required('A idade é obrigatória'),
  sex: yup.string().required('O sexo do paciente é obrigatório'),
})

export default function DrawerExame() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  const { register, handleSubmit, formState: {errors} } = useForm({
    resolver: yupResolver(validationExam)
  })

  const novoExame = (data) => requests.exames.postNovoExame(data).then((response) => { 
    onClose()
  }).catch((error) => {
    console.log("DEU ERRO")
  })



  return (
    <>
      <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
        Adicionar Exame
      </Button>
      
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
        h="100%"
        size="lg"
      >
        <form onSubmit={handleSubmit(novoExame)}>
        <DrawerOverlay />
        <DrawerContent>
        
          <DrawerCloseButton bg="#e74c3c"/>
          <DrawerHeader textColor="#000000">Novo Exame</DrawerHeader>

          <DrawerBody>
          
            <Stack>
              <Box textColor="#000000">
                <Text>Nome do paciente:</Text>
                <Input
                  name="patient"
                  placeholder='Paciente'
                  {...register('patient')}/>
                <Text className="error-message">{errors.patient?.message}</Text>
              </Box>
              <Box textColor="#000000">
                <Text>Idade do paciente:</Text>
                <Input
                  name="age"
                  {...register('age')}
                  type="date"/>
                <Text className="error-message">{errors.age?.message}</Text>
              </Box>
              <Box textColor="#000000">
                <Text>Sexo do paciente:</Text>
                <Select placeholder='Select option' name="sex" {...register('sex')}>
                  <option value='1'>Masculino</option>
                  <option value='2'>Feminino</option>
                  <option value='3'>Outro</option>
                </Select>
                <Text className="error-message">{errors.sex?.message}</Text>
              </Box>
              <Box>
                <Text textColor="#000000">Arquivo de Radiografia:</Text>
                <Dropzone />
              </Box>
            </Stack>
            
          
          </DrawerBody>


          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue' type="submit">Enviar</Button>
          </DrawerFooter>
        </DrawerContent>
        </form>
      </Drawer>
      
    </>
  )
}