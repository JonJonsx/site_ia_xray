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
  patient: yup.string().required('O nome é obrigatório')
  .max(100, 'O nome deve ter no máximo 100 caracteres')
  .min(10, 'O nome deve ter no mínimo 10 caracteres'),
  age: yup.string().required('A idade é obrigatória'),
})


// import Dropzone from "./Dropzone"
export default function DrawerExame() {
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
                <RadioGroup name="sex" {...register('sex')} type="radio">
                  <Stack direction='column' textColor="#000000">
                    <Radio value='1'>Masculino</Radio>
                    <Radio value='2'>Feminino</Radio>
                    <Radio value='3'>Outro</Radio>
                  </Stack>
                </RadioGroup>
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
        </DrawerContent>
        </form>
      </Drawer>
      
    </>
  )
}