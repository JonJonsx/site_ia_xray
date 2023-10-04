import React from "react";
import {
  Flex,
  Grid,
  GridItem,
  Box,
  Text
} from "@chakra-ui/react";
import GraficoExamesFeitos from "./Graficos/GraficoExamesFeitos";
import GraficoPorDoenca from "./Graficos/GraficoPorDoenca";
import GraficoPorGenero from "./Graficos/GraficoPorGenero";

function DashBoard() {
  return (
    <Flex
      w="100%"
      className="ControlPanel"
      justifyContent="space-between">
      <Flex
        flexDirection="column"
        w="100%"

      >
        <Grid
          templateColumns='repeat(4, 1fr)'
          templateRows='repeat(8, 1fr)'
          gap={2} h="100%"
          mt={2}
          mr={2}>
          <GridItem bg='blue.500' rowSpan={2} colSpan={1} borderRadius={16}>
            <Flex fontSize={50} alignItems="center" justifyContent="center" flexDirection="column" h="100%">
              <Text fontSize="3xl">Quantidade De Exames</Text>
              <Text>9756</Text>
            </Flex>
          </GridItem>
          <GridItem bg='blue.500' rowSpan={2} colSpan={1} borderRadius={16}>
            <Flex fontSize={50} alignItems="center" justifyContent="center" flexDirection="column" h="100%">
              <Text fontSize="3xl">Quantidade De Feedbacks</Text>
              <Text>9756</Text>
            </Flex>
          </GridItem>
          <GridItem bg='blue.500' rowSpan={2} colSpan={1} borderRadius={16}>
            <Flex fontSize={50} alignItems="center" justifyContent="center" flexDirection="column" h="100%">
              <Text fontSize="3xl">% de acerto do modelo</Text>
              <Text>9756</Text>
            </Flex>
          </GridItem>
          <GridItem bg='blue.500' rowSpan={8} colSpan={1} borderRadius={16}>
            <Flex flexDirection="column">
              <Box h="33%">
                <GraficoPorDoenca />
              </Box>
              <Box h="33%">
                <GraficoPorGenero />
              </Box>
              {/* <Box h="33%">
                <GraficoPorDoenca />
              </Box> */}
            </Flex>
          </GridItem>
          <GridItem bg='blue.500' rowSpan={6} colSpan={3} borderRadius={16}>
            <GraficoExamesFeitos />
          </GridItem>

        </Grid>
      </Flex>
    </Flex>
  )
}

export default DashBoard;