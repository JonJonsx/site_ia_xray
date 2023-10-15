import React from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { requests } from "../../services/api";
import ButtonDownload from "../ButtonDownload/ButtonDownload";

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
  Textarea,
  Image,
  Flex,
  IconButton
} from '@chakra-ui/react'
import { Eye } from "react-feather";

const validationExam = yup.object().shape({
  feedback: yup.string().max(200, 'O nome deve ter no máximo 100 caracteres')
})

export default function DrawerFeedback(props) {
  const { iconButton, textoButton, dadosDrawer } = props
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validationExam)
  })

  const feadbackExame = (data) => requests.exames.putDarFeedback(dadosDrawer.id,data).then((response) => {
    if(response.status === 200){
      console.log("DEU CERTO")
      onClose()
    }
  }).catch((error) => {
    console.log("DEU ERRO", error)
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
        m={2}
      >{textoButton}</Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
        h="100%"
        size="xl"
      >
        <form onSubmit={handleSubmit(feadbackExame)}>
        <DrawerOverlay />
        <DrawerContent>
            <DrawerCloseButton bg="#e74c3c"/>
            <DrawerHeader textColor="#000000">FeedBack</DrawerHeader>

            <DrawerBody>
            
              <Stack>
                <Box>
                  <Text>Nome do paciente:</Text>
                  <Input
                    name="patient"
                    placeholder={dadosDrawer.paciente.nomePaciente}
                    isDisabled />
                </Box>
                <Box>
                  <Text>Idade:</Text>
                  <Input
                    name="age"
                    placeholder={dadosDrawer.paciente.idadePaciente}
                    isDisabled />
                </Box>
                <Box>
                  <Text>Sexo do Paciente:</Text>
                  <Input
                    name="sex"
                    type="text"
                    placeholder={dadosDrawer.paciente.generoPaciente === "F" ? "Feminino" : "Masculino"}
                    isDisabled />
                </Box>
                <Box>
                  <Text>Resultado do Exame:</Text>
                  <Textarea
                    name="result_exam"
                    type="text"
                    placeholder={dadosDrawer.resultado === "No Finding" ? "Nenhum problema encontrado na radiografia" : dadosDrawer.resultado }
                    isDisabled />
                </Box>
                <Box>
                  <Text>Anexos do Exame:</Text>
                  <Flex  justifyContent="space-between" align="center" background="#2ecc71" padding={3} borderRadius={8} mb="10px" mt="10px">
                    <Box>  
                      <Image borderRadius={8} boxSize="50px" src='localhost:8080/imagem/00000003_000.png' alt='Dan Abramov'/>
                    </Box>
                    <Box>
                      <IconButton mr="10px" background="#3498db" color="#ffffff" icon={<Eye/>}></IconButton>
                      <ButtonDownload imageURL="localhost:8080/imagem/00000003_000.png" imageName="imagem.jpg"/>
                    </Box>
                  </Flex>
                </Box>
                <Box>
                  <Text>FeedBack:</Text>
                  <Textarea
                    name="feedback"
                    placeholder={dadosDrawer.feedbacks}
                    {...register('feedback')}/>
                    <Text className="error-message">{errors.feedback?.message}</Text>
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