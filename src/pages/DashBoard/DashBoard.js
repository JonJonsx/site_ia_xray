import React from "react";
import {
  Flex,
  Grid,
  GridItem,
  Box
} from "@chakra-ui/react";
import GraficoExamesFeitos from "./Graficos/GraficoExamesFeitos";
import GraficoPorDoenca from "./Graficos/GraficoPorDoenca";
import GraficoPorGenero from "./Graficos/GraficoPorGenero";
import CardDash from "./CardDash";
import "../../styles/pages/DashBoard/DashBoard.css";
import { useEffect, useState } from 'react'   
import { requests } from '../../services/api'

function DashBoard() {

  const [countExames, setCountExames] = useState(0)
  const [countFeedbacks, setCountFeedbaks] = useState(0)
  const [countRightFeedbacks, setCountRightFeedbaks] = useState(0)

  useEffect(() => {
    const getCountAllExames = async () => {
      await requests.graficos.getCountExames().then((response) => {
        if (response.status === 200) {
          setCountExames(response.data)
        } else {
          console.log("falha na requisicao", response.status)
          setCountExames(0)
        }
      })
    }
    const getCountAllFeedbacks = async () => {
      await requests.graficos.getCountFeedbacks().then((response) => {
        if (response.status === 200) {
          setCountFeedbaks(response.data)
        } else {
          console.log("falha na requisicao", response.status)
          setCountFeedbaks(0)
        }
      })
    }
    const getCountAllRightFeedbacks = async () => {
      await requests.graficos.getCountRightFeedbacks().then((response) => {
        if (response.status === 200) {
          setCountRightFeedbaks(response.data)
        } else {
          console.log("falha na requisicao", response.status)
          setCountRightFeedbaks(0)
        }
      })
    }
    getCountAllExames()
    getCountAllFeedbacks()
    getCountAllRightFeedbacks()
  }, []);

  return (
    <Flex
      w="100%"
      h="100%"
      className="ControlPanel"
      justifyContent="space-between">
        <Grid
          templateRows='repeat(4, 1fr)'
          templateColumns='repeat(4, 1fr)'
          gap={2}
          mt={2}
          mr={2}
          w="100%"
          h="100%">
          <GridItem 
            rowSpan={1}
            colSpan={1}
            className="gridItemDash">
            <CardDash valor={countExames}
                      legenda={"Quantidade De Exames"}/>
          </GridItem>

          <GridItem 
            rowSpan={1}
            colSpan={1}
            className="gridItemDash">
              <CardDash valor={countFeedbacks}
                        legenda={"Quantidade De Feedbacks"}/>
          </GridItem>

          <GridItem 
            rowSpan={1}
            colSpan={1}
            className="gridItemDash">
            <CardDash valor={(countRightFeedbacks/countFeedbacks*100).toFixed(2)+"%"} 
                      legenda={"% de acerto do modelo"}/>
          </GridItem>

          <GridItem 
            rowSpan={4}
            colSpan={1}
            className="gridItemDash">
            <Flex flexDirection="column">
              <Box>
                <GraficoPorDoenca />
              </Box>
              <Box>
                <GraficoPorGenero />
              </Box>
              {/* <Box h="33%">
                <GraficoPorDoenca />
              </Box> */}
            </Flex>
          </GridItem>

          <GridItem 
            rowSpan={3}
            colSpan={3}
            className="gridItemDash">
            <GraficoExamesFeitos />
          </GridItem>

        </Grid>
    </Flex>
  )
}

export default DashBoard;