
import React from "react";
import { 
  Flex,
  Text } from "@chakra-ui/react";


export default function CardDash({valor, legenda}) {
  return (
    <Flex 
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      h="100%">
      <Text>{legenda}</Text>
      <Text>{valor}</Text>
    </Flex>
  );
}