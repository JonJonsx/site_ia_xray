import React, {useState} from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { v4 as uuidv4 } from 'uuid';
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
  nomePaciente: yup.string().required('O nome é obrigatório'),
  idadePaciente: yup.string().required('A idade é obrigatória'),
  generoPaciente: yup.string().required('O sexo do paciente é obrigatório'),
  emailPaciente: yup.string().required('O e-mail do paciente é obrigatório'),
})

export default function DrawerExame(props) {
  const { isPatient, paciente, followUp } = props
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  function calcularIdade(dataNascimento) {
    const dataNasc = new Date(dataNascimento);
    const dataAtual = new Date();
  
    let idade = dataAtual.getFullYear() - dataNasc.getFullYear();
  
    const mesAtual = dataAtual.getMonth();
    const mesNasc = dataNasc.getMonth();
  
    // Verifica se ainda não fez aniversário este ano
    if (mesAtual < mesNasc || (mesAtual === mesNasc && dataAtual.getDate() < dataNasc.getDate())) {
      idade--;
    }
  
    return idade;
  }

  const [arquivo, setArquivo] = useState(null);

  const handleDrop = (files) => {
    const primeiroArquivo = files[0];
    console.log(files)
    setArquivo(primeiroArquivo);
  };

  const { register, handleSubmit, formState: {errors} } = useForm({
    resolver: yupResolver(validationExam)
  })

   const novoExame = async (data) => {
    let formData = new FormData();
    const novoUUID = uuidv4();
    data.idPaciente = isPatient ? paciente.idPaciente : novoUUID;
    data.idadePaciente = isPatient ? paciente.idadePaciente : calcularIdade(data.idadePaciente)

    console.log(data)

    formData.append('detalhesPaciente', JSON.stringify(data))
    formData.append('xray', arquivo)
    formData.append('followUp', isPatient ? followUp : 0)

    await requests.exames.postNovoExame(formData).then(resposta => {
      console.log(resposta)
    }).catch((err) => {
      console.log(err)
    })
  }


  return (
    <>
      <Button ref={btnRef} colorScheme='teal' onClick={() => {
        if (isPatient)
          console.log(paciente)
        onOpen()
      }}>
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
          
            { isPatient ?
              <Stack>
                <Box textColor="#000000">
                  <Text>Nome do paciente:</Text>
                  <Input
                    name="nomePaciente"
                    placeholder='Paciente'
                    value={isPatient ? paciente.nomePaciente : ""}
                    {...register('nomePaciente')}/>
                  <Text className="error-message">{errors.nomePaciente?.message}</Text>
                </Box>
                <Box textColor="#000000">
                  <Text>Idade do paciente:</Text>
                  <Input
                    name="idadePaciente"
                    {...register('idadePaciente')}
                    value={isPatient ? paciente.idadePaciente : ""}
                    type={isPatient ? "text" : "date"}/>
                  <Text className="error-message">{errors.idadePaciente?.message}</Text>
                </Box>
                <Box textColor="#000000">
                  <Text>E-mail:</Text>
                  <Input
                    name="emailPaciente"
                    {...register('emailPaciente')}
                    value={isPatient ? paciente.emailPaciente : ""}
                    type="email"/>
                  <Text className="error-message">{errors.emailPaciente?.message}</Text>
                </Box>
                <Box textColor="#000000">
                  <Text>Sexo do paciente:</Text>
                  <Select placeholder='Select option' value={isPatient ? paciente.generoPaciente : ""} name="generoPaciente" {...register('generoPaciente')}>
                    <option value='M'>Masculino</option>
                    <option value='F'>Feminino</option>
                  </Select>
                  <Text className="error-message">{errors.generoPaciente?.message}</Text>
                </Box>
                <Box>
                  <Text textColor="#000000">Arquivo de Radiografia:</Text>
                  <Dropzone onDrop={handleDrop}/>
                </Box>
              </Stack>
              :
              <Stack>
                <Box textColor="#000000">
                  <Text>Nome do paciente:</Text>
                  <Input
                    name="nomePaciente"
                    placeholder='Paciente'
                    {...register('nomePaciente')}/>
                  <Text className="error-message">{errors.nomePaciente?.message}</Text>
                </Box>
                <Box textColor="#000000">
                  <Text>Idade do paciente:</Text>
                  <Input
                    name="idadePaciente"
                    {...register('idadePaciente')}
                    type={isPatient ? "text" : "date"}/>
                  <Text className="error-message">{errors.idadePaciente?.message}</Text>
                </Box>
                <Box textColor="#000000">
                  <Text>E-mail:</Text>
                  <Input
                    name="emailPaciente"
                    {...register('emailPaciente')}
                    type="email"/>
                  <Text className="error-message">{errors.emailPaciente?.message}</Text>
                </Box>
                <Box textColor="#000000">
                  <Text>Sexo do paciente:</Text>
                  <Select placeholder='Select option' name="generoPaciente" {...register('generoPaciente')}>
                    <option value='M'>Masculino</option>
                    <option value='F'>Feminino</option>
                  </Select>
                  <Text className="error-message">{errors.generoPaciente?.message}</Text>
                </Box>
                <Box>
                  <Text textColor="#000000">Arquivo de Radiografia:</Text>
                  <Dropzone onDrop={handleDrop}/>
                </Box>
              </Stack>
            }
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