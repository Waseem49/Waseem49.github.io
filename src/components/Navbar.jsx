import {
  Box,
  Button,
  Flex,
  Image,
  Text,
  useColorMode,
  Link,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
// import Sidebar from "./Sidebar";
import { AiOutlineDownload } from "react-icons/ai";
import { Helmet } from "react-helmet";
import Waseem_Resume from "../assets/Waseem_Akram_Fullstack_Developer_7MOE_Resume.pdf";
import Sidebar from "./Sidebar";
import "./Navbar.scss";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [title, setTitle] = useState("" || "Home");
  return (
    <>
      <div>
        <Helmet>
          <title>{`Md Waseem Akram | ${title}`}</title>
        </Helmet>
      </div>
      <Box
        id="nav-menu"
        pos={{ base: "sticky", md: "sticky", sm: "fixed" }}
        zIndex="7"
        textTransform={"capitalize"}
        top="0"
        left="0"
        right="0"
        background={colorMode === "light" ? "white" : "#272828"}
      >
        <Flex
          justify={"space-between"}
          height="4rem"
          align={"center"}
          transition={"all 1s"}
        >
          <Box height="4rem" marginLeft={{ base: "2px", lg: "2rem" }}>
            <Link href="#">
              <Image
                src={"https://i.ibb.co/dMwtMnd/w-logo.png"}
                height={"4rem"}
                borderRadius={"1.3rem"}
              />
            </Link>
          </Box>

          <Flex
            display={{ base: "none", lg: "flex" }}
            width={"50%"}
            justify="space-around"
            align={"center"}
            marginRight="2rem"
            fontSize={"18px"}
            fontFamily={"cursive"}
          >
            <Link
              onClick={() => setTitle("Home")}
              href="#home"
              className="nav-link home"
            >
              home
            </Link>
            <Link
              onClick={() => setTitle("About")}
              href="#about"
              className="nav-link about"
            >
              about
            </Link>
            <Link
              onClick={() => setTitle("Skills")}
              href="#skills"
              className="nav-link skills"
            >
              skills
            </Link>
            <Link
              onClick={() => setTitle("Projects")}
              href="#projects"
              className="nav-link projects"
            >
              projects
            </Link>
            <Link
              onClick={() => setTitle("Contact")}
              href="#contact"
              className="nav-link contact"
            >
              contact
            </Link>
            <Button
              border={"1px solid white"}
              width="max-content"
              style={{ backgroundColor: "#272828", color: "white" }}
              sx={{
                ":hover": {
                  boxShadow: "0 0 10px #898C8D",
                  color: "white",
                },
              }}
              id="resume-button-1"
              className="nav-link resume"
              onClick={() => {
                window.open(
                  "https://drive.google.com/file/d/1pKl60y9LrC4a9VRriAUyqEbWZSAg0Ve9/view?usp=sharing",
                  "_blank"
                );
              }}
            >
              <a
                id="resume-link-1"
                href={Waseem_Resume}
                target="_blank"
                rel="noreferrer"
                download="Waseem_Resume.pdf"
              >
                Resume
              </a>
              <Text as="span" ml={"2"}>
                <AiOutlineDownload fontSize={"1.2rem"} />
              </Text>
            </Button>
            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
          </Flex>
          <Box display={{ lg: "none" }} marginRight="10px">
            <Sidebar />
          </Box>
        </Flex>
        <div>
          <div className="navanimate"></div>
        </div>
      </Box>
    </>
  );
};

export default Navbar;
