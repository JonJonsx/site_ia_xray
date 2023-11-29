import { Flex } from "@chakra-ui/react";
import React from "react";
import DrawerExame from "./DrawerExame";

export default function AddExame(props) {
    const { isPatient = false, paciente, followUp } = props
    return (
        !isPatient ?
            <Flex
                borderRadius={16}
                // pos="sticky"
                // left="2"
                mb={2}
                mt={2}  
                mr={10}
                justifyContent="flex-end"
            >
                <DrawerExame isPatient={isPatient}/>
            </Flex> :
            <Flex
                borderRadius={16}
                // pos="sticky"
                // left="2"
                mb={2}
                mt={2}  
                mr={10}
                justifyContent="flex-end"
            >
                <DrawerExame isPatient={isPatient} paciente={paciente} followUp={followUp}/>
            </Flex>
        
    );
}