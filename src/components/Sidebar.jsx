import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Text,
  useColorMode,
  Link,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDisclosure } from "@chakra-ui/react";
import { MoonIcon, SunIcon, HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
// import Waseem_Resume from "../assets/Md-Waseem-Akram-Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";

const Sidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const [_, setTitle] = useState("Home");

  return (
    <div>
      <Button
        backgroundColor={"black"}
        color="white"
        onClick={toggleColorMode}
        marginRight={"10px"}>
        {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
      </Button>
      <Button onClick={onOpen}>
        <HamburgerIcon />
      </Button>
      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          {/* <DrawerHeader borderBottomWidth='1px'>Basic Drawer</DrawerHeader> */}
          <Box
            backgroundColor={"black"}
            borderBottomWidth="1px"
            display={"flex"}
            justifyContent={"space-between"}
            padding={"10px"}>
            <Button
              backgroundColor={"black"}
              border="1px solid white"
              width="max-content"
              color={"white"}
              id="resume-button-1"
              className="nav-link resume"
              onClick={() => {
                window.open(
                  "https://drive.google.com/file/d/17GInRXoR72FrT_5F75ebd4l7mr80bvhF/view?usp=sharing",
                  "_blank"
                );
              }}>
              <a
                id="resume-link-1"
                // href={Waseem_Resume}
                target="_blank"
                download="Waseem_Resume.pdf">
                Resume
              </a>
              <Text as="span" ml={"2"}>
                <AiOutlineDownload fontSize={"1.2rem"} />
              </Text>
            </Button>
            <Button onClick={onClose}>
              <CloseIcon />
            </Button>
          </Box>
          <DrawerBody backgroundColor={" #10144ead"}>
            <Box textAlign="center">
              <Link
                onClick={() => {
                  setTitle("Home");
                  setTimeout(() => {
                    onClose();
                  }, 500);
                }}
                href="#home"
                className="nav-link home"
                display={"block"}
                marginTop={"10px"}
                marginBottom={"15px"}
                fontSize={"20px"}>
                Home
              </Link>
              <Link
                onClick={() => {
                  setTitle("About");
                  setTimeout(() => {
                    onClose();
                  }, 500);
                }}
                href="#about"
                className="nav-link about"
                display={"block"}
                marginBottom={"15px"}
                fontSize={"20px"}>
                About
              </Link>
              <Link
                onClick={() => {
                  setTitle("Skills");
                  setTimeout(() => {
                    onClose();
                  }, 500);
                }}
                href="#skills"
                className="nav-link skills"
                display={"block"}
                marginBottom={"15px"}
                fontSize={"20px"}>
                Skills
              </Link>
              <Link
                onClick={() => {
                  setTitle("Projects");
                  setTimeout(() => {
                    onClose();
                  }, 500);
                }}
                href="#projects"
                className="nav-link projects"
                display={"block"}
                marginBottom={"15px"}
                fontSize={"20px"}>
                Projects
              </Link>
              <Link
                onClick={() => {
                  setTitle("Contact");
                  setTimeout(() => {
                    onClose();
                  }, 500);
                }}
                href="#contact"
                className="nav-link contact"
                display={"block"}
                marginBottom={"15px"}
                fontSize={"20px"}>
                Contact
              </Link>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default Sidebar;
