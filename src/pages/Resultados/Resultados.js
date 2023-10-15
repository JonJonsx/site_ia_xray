import {
  Flex,
  Box,
  Button,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

import { requests } from "../../services/api";
import ResultExame from "./ResultExame";
import { RefreshCcw } from "react-feather";

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
      marginTop="1.0vh"
      w="100%"
      overflowY="scroll"
    >

      <Box w="100%" borderRadius={8}>
        <Flex alignItems="flex-end" w="100%" flexDirection="column">
          <Button bg="#2ecc71" color="#ffffff" _hover={{ backgroundColor: "#27ae60",color:"#ecf0f1"  }} leftIcon={<RefreshCcw/>} onClick={async () => {await getExames()}}>Atualizar Lista</Button>
          {/* <a href="http://localhost:8080/imagem/00000003_000.png" download="teste.jpg">Texto bonito</a> */}
        </Flex>
        {
          exames.map((exame, index) => (
            <ResultExame paciente={exame.paciente.nomePaciente} key={index} resultado={exame.resultado} dadosExame={exame}/>
          ))
        }
      </Box>
    </Flex>
  )
}