import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { BsMouse } from "react-icons/bs";
import { ImLinkedin } from "react-icons/im";
import { FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineArrowDown } from "react-icons/ai";
import Typewriter from "typewriter-effect";
import Waseem_Resume from "../assets/Waseem_Akram_Fullstack_Developer_7MOE_Resume.pdf";

const Home = () => {
  return (
    <>
      <Box>
        <Flex
          height={{ base: "80vh", lg: "100vh" }}
          maxHeight={"750px"}
          className="background"
          id="home"
          flexDir={{ base: "column-reverse", lg: "row" }}
          align={"center"}
          justify="center"
          gap={{ base: "5", md: "10", lg: "20" }}
          marginTop="2rem"
        >
          <Box
            maxHeight={{ base: "70%", md: "40%", lg: "70%", sm: "75%" }}
            className="profile"
            boxShadow="md"
            rounded="md"
          >
            <Image
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              borderRadius="1.2rem"
              // height="100%"
              // width="100%"
              // object-fit="contain"
            />
          </Box>
          <Flex
            maxWidth={{ base: "100%", lg: "40%" }}
            flexDir="column"
            gap="1rem"
            marginTop={{ base: "1rem", md: "1rem", sm: "5rem" }}
            padding={"5px"}
          >
            <Heading style={{ paddingBottom: 5 }} className="heading">
              <div>
                Hey there <span class="waving-hand">👋</span>
              </div>
            </Heading>
            <Heading id="user-detail-name"> I am Md Waseem Akram</Heading>
            <Typewriter
              options={{
                strings: ["Full Stack Web Developer"],
                autoStart: true,
                loop: true,
                deleteSpeed: 40,
              }}
            />

            <Text fontFamily={"cursive"}>
              Full Stack Developer with expertise in the MERN stack,
              specializing in building scalable, high-performance web
              applications. Proficient in React.js, Node.js, and MongoDB, with
              experience in API integration, authentication, and front-end
              optimization. Passionate about delivering efficient, secure, and
              user-friendly digital solutions.
            </Text>
            <Flex gap={"8"} align="center">
              <Button
                id="resume-button-2"
                as={"a"}
                display={{ base: "none", md: "inline-flex" }}
                width="max-content"
                // color={"white"}
                // backgroundColor={"black"}
                href={"#"}
                // _hover={{
                //   bg: "#0d0443",
                border={"1px solid white"}
                style={{ backgroundColor: "#272828", color: "white" }}
                sx={{
                  ":hover": {
                    boxShadow: "0 0 10px #898C8D",
                    color: "white",
                  },
                }}
              >
                <Link
                  id="resume-link-2"
                  onClick={() =>
                    window.open(
                      "https://drive.google.com/file/d/1pKl60y9LrC4a9VRriAUyqEbWZSAg0Ve9/view?usp=sharing"
                    )
                  }
                  href={Waseem_Resume}
                  target={"_blank"}
                  download="Waseem_Resume.pdf"
                >
                  Resume
                </Link>
              </Button>

              <Flex gap="3">
                <Link
                  id="contact-linkedin"
                  href="https://www.linkedin.com/in/md-waseem-akram-a8344b235/"
                  isExternal
                >
                  <ImLinkedin fontSize={"1.6rem"} />
                </Link>
                <Link
                  id="contact-github"
                  href="https://github.com/Waseem49"
                  isExternal
                >
                  <FaGithub fontSize={"1.6rem"} />
                </Link>
                <Link
                  id="contact-email"
                  href="https://mdwaseem0603@gmail.com"
                  isExternal
                >
                  <HiOutlineMail fontSize={"1.6rem"} />
                </Link>
              </Flex>
            </Flex>
            <Box marginTop={"4rem"} display={{ base: "none", lg: "block" }}>
              <Flex align={"center"} gap="2">
                <span>
                  <BsMouse fontSize={"1.4rem"} />
                </span>
                <span>
                  <AiOutlineArrowDown />
                </span>
              </Flex>
            </Box>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Home;
