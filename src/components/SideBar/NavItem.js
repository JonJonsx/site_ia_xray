import React from "react";
import {
  Flex,
  Icon,
  Link,
  Menu,
  MenuButton,
  Text
} from "@chakra-ui/react";

export default function NavItem(props) {
  const { navSize, title, icon, active } = props
  return (
    <Flex
      mt={1}
      flexDir="column"
      w="100%"
      alignItems={navSize === "small" ? "center" : "flex-start"}
    >
      <Menu placeholder="right">
        <Link
          backgroundColor={active && "#3498DB"}
          p={3}
          borderRadius={8}
          _hover={{textDecor : 'none', backgroundColor: '#3498DB'}}
          w={navSize === "large" && "100%"}
        >
          <MenuButton>
            <Flex>
              <Icon as={icon} fontSize="xl" color={active ? "#3498DB": "gray.500"}/>
              <Text ml={5} display={navSize === "small" ? "none" : "flex"}>{title}</Text>
            </Flex>
          </MenuButton>
        </Link>
      </Menu>
    </Flex>
  )
}