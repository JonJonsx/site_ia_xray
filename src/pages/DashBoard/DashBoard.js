import React from "react";
import {
    Flex,
    Grid,
    GridItem
} from "@chakra-ui/react";

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
                    <GridItem bg='blue.500' rowSpan={2} colSpan={1} borderRadius={16}/>
                    <GridItem bg='blue.500' rowSpan={2} colSpan={1} borderRadius={16}/>
                    <GridItem bg='blue.500' rowSpan={2} colSpan={1} borderRadius={16}/>
                    <GridItem bg='blue.500' rowSpan={2} colSpan={1} borderRadius={16}/>
                    <GridItem bg='blue.500' rowSpan={4} colSpan={3} borderRadius={16}/>
                    <GridItem bg='blue.500' rowSpan={4} colSpan={1} borderRadius={16}/>
                    <GridItem bg='blue.500' rowSpan={4} colSpan={2} borderRadius={16}/>
                    <GridItem bg='blue.500' rowSpan={4} colSpan={2} borderRadius={16}/>
                </Grid>
            </Flex>
        </Flex>
    )
}

export default DashBoard;