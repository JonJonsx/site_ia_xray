import React from "react"

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


import Dropzone from "./Dropzone"
export default function DrawerExame() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  const [exame, setExame] = React.useState({
    patient: "",
    age: "",
    sex: "",
    result_exam: "",
    anexos: [],
    feedback: "",
  })

  const handleOnChange = (e, field) => {
    const newExame = { ...exame }
    // e => evento que acontecer no elemento que é nosso alvo da interação, no caso, change
    if (field === 'age') {
      const date = new Date(e.target.value);
      const timestamp = date.getTime();
      newExame[field] = timestamp;
    } else {
      newExame[field] = e.target.value;
    }
    console.log(exame)
    setExame(newExame);

  }

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
        size="lg"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader textColor="#000000">Novo Exame</DrawerHeader>

          <DrawerBody>
            <Stack>
              <Box textColor="#000000">
                <Text>Nome do paciente:</Text>
                <Input
                  placeholder='Paciente'
                  onChange={(e) => handleOnChange(e, 'patient')} />
              </Box>
              <Box textColor="#000000">
                <Text>Idade do paciente:</Text>
                <Input
                  type="datetime-local"
                  onChange={(e) => handleOnChange(e, 'age')} />
              </Box>
              <Box textColor="#000000">
                <Text>Sexo do paciente:</Text>
                <RadioGroup onChange={(value) => handleOnChange(value, 'sex')} value={exame.sex}>
                  <Stack direction='column' textColor="#000000">
                    <Radio value='1'>Masculino</Radio>
                    <Radio value='2'>Feminino</Radio>
                    <Radio value='3'>Outro</Radio>
                  </Stack>
                </RadioGroup>
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
            <Button colorScheme='blue'>Enviar</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}