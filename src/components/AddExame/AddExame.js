import { Flex } from "@chakra-ui/react";
import React from "react";
import DrawerExame from "./DrawerExame";

export default function AddExame() {
    return (
        <Flex
            borderRadius={16}
            // pos="sticky"
            // left="2"
            mb={2}
            mt={2}

            justifyContent="flex-end"
            >
            <DrawerExame/>
        </Flex>
    );
}