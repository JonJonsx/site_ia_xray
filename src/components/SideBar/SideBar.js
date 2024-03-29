import {
  Avatar,
  Divider,
  Flex,
  Heading,
  IconButton,
  Text
} from "@chakra-ui/react";
import { React, useState }from "react";
import { Menu, Home, PieChart } from 'react-feather';
import NavItem from "./NavItem";
import "../../styles/components/sidebar.css";
import {Link} from "react-router-dom";


function SideBar() {
  const [navSize, changeNavSize] = useState("large")
  return (
    <Flex
      pos="sticky"
      color="white"
      h="98vh"
      background="#0984E3"
      marginTop="1.0vh"
      marginLeft={2}
      marginRight={2}
      boxShadow="0 4px 12px 0 rgba(0,0,0,0.05)"
      borderRadius={navSize === "small" ? "15px" : "15px"}
      w={navSize === "small" ? "75px" : "200px"}
      maxWidth={200}
      flexDir="column"
      justifyContent="space-between"
      className="sidebar_animation">
      <Flex
        p="5%"
        flexDir="column"
        alignItems={navSize === "small" ? "center" : "flex-start"}
        as="nav"
      >
        <IconButton
          background="none"
          mt={5}
          _hover={{ backgroundColor: "#3498db" }}
          icon={<Menu color="#ffffff" />}
          onClick={() => {
            if (navSize === "small") {
              changeNavSize("large")
            } else {
              changeNavSize("small")
            }
          }}
        />
        <Link to="/controlpanel" className="nav_item_link"><NavItem navSize={navSize} icon={Home} title="Resultados"/></Link>
        <Link to="/" className="nav_item_link"><NavItem navSize={navSize} icon={PieChart} title="DashBoard"/></Link>
      </Flex>
      <Flex
        p="5%"
        flexDir="column"
        w="100%"
        alignItems={navSize === "small" ? "center" : "flex-start"}
        mb="4">
        <Divider display={navSize === "small" ? "none" : "flex"}/>
        <Flex mt="4" align="center">
          <Avatar size="sm" src="avatar-1.jpg"/>
          <Flex flexDir="column" ml="4" display={navSize === "small" ? "none" : "flex"}>
            <Heading as="h3" size="sm">John Doe</Heading>
            <Text>Admin</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default SideBar;