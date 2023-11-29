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
  const [isEmpty, setIsEmpty] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [examesPorPaciente, setExamesPorPaciente] = useState([{
    paciente: {},
    listaExames: [{}],
  }]);

  const getExames = async () => {
    await requests.exames.getExames().then((response) => {
      if (response.status === 200) {
        let exames = response.data
        let listaPaciente = []
        let listaIdPaciente = []
        exames.map((exame) => {
          if(listaIdPaciente.indexOf(exame.paciente.idPaciente) === -1) {
            let examePaciente = {
              paciente: exame.paciente,
              listaExames: [exame]
            }
            listaPaciente.push(examePaciente)
            listaIdPaciente.push(exame.paciente.idPaciente)
          } else {
            listaPaciente[listaIdPaciente.indexOf(exame.paciente.idPaciente)].listaExames.push(exame)
          }
        })
        console.log("AAAAAAAA")
        console.log(listaPaciente)
        console.log(listaIdPaciente)
        setExamesPorPaciente(listaPaciente)
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
          examesPorPaciente.map((content) => (
            <ResultExame content={content} key={content.paciente.idPaciente}/>
          ))
        }
      </Box>
    </Flex>
  )
}