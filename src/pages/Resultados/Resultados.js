import {
  Flex,
  Box,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

import { requests } from "../../services/api";
import ResultExame from "./ResultExame";

export default function Resultados() {
  const [exames, setExames] = useState([])
  const [isEmpty, setIsEmpty] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const getExames = async () => {
    await requests.exames.getExames().then((response) => {
      if (response.status === 200) {
        setExames(response.data)
      } else {
        console.log("falha na requisicao", response.status)
      }
    })
  }

  useEffect(() => {
    const getTodosExames = async () => {
      try {
        await getExames()
      } catch (e) {
        setIsLoading(false)
        setIsEmpty(true)
        console.info("Erro na requisição dos Exames, Error", e)
      }
    }
    setIsLoading(false)
    getTodosExames()
  }, [isLoading, isEmpty]);

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
      w="98%"
      overflowY="scroll"
    >
      <Box w="100%" borderRadius={8}>
        {
          exames.map((exame, index) => (
            <ResultExame paciente={exame.patient} key={index} resultado={exame.result_exam} dadosExame={exame}/>
          ))
        }
      </Box>
    </Flex>
  )
}