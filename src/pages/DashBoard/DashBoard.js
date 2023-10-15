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

function DashBoard() {
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
            <CardDash valor={"9756"}
                      legenda={"Quantidade De Exames"}/>
          </GridItem>

          <GridItem 
            rowSpan={1}
            colSpan={1}
            className="gridItemDash">
              <CardDash valor={"9756"}
                        legenda={"Quantidade De Feedbacks"}/>
          </GridItem>

          <GridItem 
            rowSpan={1}
            colSpan={1}
            className="gridItemDash">
            <CardDash valor={"9756"} 
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