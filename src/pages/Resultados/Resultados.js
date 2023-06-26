import {
  Flex,
  Box,
} from "@chakra-ui/react";
import React, { useState } from "react";

import { requests } from "../../services/api";
import ResultExame from "./ResultExame";

export default function Resultados() {
  const [exames, setExames] = useState([])
  

  const getExames = async () => {
    await requests.exames.getExames().then((response) => {
      if (response.status === 200) {
          setExames(response.data)
      }else{
          console.log("falha na requisicao", response.status)
      }
    })
  }
  
  return (
    <Flex
      backgroundColor="#ECF0F1"
      borderRadius={16}
      p={4}
      pos="sticky"
      left="2"
      marginTop="1.0vh"
      mr={5}
      ml={5}
      w="100%"
    >
      <Box w="100%" borderRadius={8}>
          <ResultExame paciente="jonatan" resultado="resultado"/>
          <ResultExame paciente="jonatan" resultado="resultado"/>
          <ResultExame paciente="jonatan" resultado="resultado"/>
      </Box>
    </Flex>
  )
}