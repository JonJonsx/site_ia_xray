import { Flex } from "@chakra-ui/react";
import React from "react";
import DrawerExame from "./DrawerExame";

export default function AddExame() {
    return (
        <Flex
            borderRadius={16}
            // pos="sticky"
            // left="2"
            marginTop="1.0vh"
            mr={5}
            ml={5}
            w="98%"
            justifyContent="flex-end"
            >
            <DrawerExame/>
        </Flex>
    );
}