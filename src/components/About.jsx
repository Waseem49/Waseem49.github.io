import React, { useEffect, useState } from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import myImage from "../assets/waseempro.jpg";
import { motion } from "framer-motion";

const About = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const [isTouched, setIsTouched] = useState(false);

  const handleTouchStart = () => {
    setIsTouched(true);
  };

  const handleTouchEnd = () => {
    setIsTouched(false);
  };

  const imageVariants = {
    initial: {
      scale: 1,
      rotate: 0,
    },
    touched: {
      scale: 1.1,
      rotate: 360,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    reset: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Box
      id="about"
      className="about section"
      marginTop="3rem"
      padding={{ base: "20px", md: "40px" }}
      marginBottom={{ base: "3rem", md: "8rem", sm: "10rem" }}>
      <Text
        fontSize={{ base: "2xl", md: "4xl" }}
        fontWeight="600"
        margin="auto"
        textAlign="center"
        marginTop="50px">
        About me
      </Text>

      {isSmallScreen ? (
        <Flex
          width="100%"
          margin="auto"
          flexDir={{ base: "column", md: "row" }}
          justifyContent="center"
          alignItems={{ base: "center", md: "flex-start" }}>
          <Box
            width={{ base: "80%", md: "22%", sm: "50%" }}
            marginTop={{ base: "20px", md: "10px", sm: "10px" }}>
            <motion.div
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="image-container">
              <Image
                className="home-img"
                margin="auto"
                src={myImage}
                width={{ base: "80%", md: "100%" }}
                maxWidth="400px"
                marginTop="55px"
                variants={isTouched ? imageVariants : {}}
                initial="initial"
                animate={isTouched ? "touched" : "reset"}
              />
            </motion.div>
          </Box>
          <Box
            padding={{ base: "20px", md: "40px" }}
            marginTop={{ base: "30px", md: "20px" }}
            width={{ base: "100%", md: "80%" }}
            textAlign={{ base: "center", md: "left" }}>
            <Text
              id="user-detail-intro"
              fontSize={{ base: "lg", md: "xl" }}
              textAlign="justify">
              Hey, My name is Md Waseem Akram. I have completed my Bachelor of
              Engineering from R.G.P.V University, Bhopal, MP.
            </Text>
            <br />
            <br />
            <Text
              id="user-detail-intro"
              fontSize={{ base: "lg", md: "xl" }}
              textAlign="justify">
              As a Full-Stack developer, I enjoy tackling new challenges and
              continuously expanding my skillset. I am proficient in Javascript,
              as well as have knowledge in programming languages such as HTML,
              JavaScript, React.js, SCSS, CSS. I have a passion for working with
              Node.js, MongoDB,and modern Javascript libraries and frameworks
              &nbsp; like React.js. I am also interested in building new Web
              Technologies and Products.
            </Text>
            <br />
            <br />
          </Box>
        </Flex>
      ) : (
        <Flex
          width="100%"
          margin="auto"
          flexDir={{ base: "column", md: "row" }}
          justifyContent="center"
          alignItems={{ base: "center", md: "flex-start" }}>
          <Box
            padding={{ base: "20px", md: "40px" }}
            marginTop={{ base: "30px", md: "20px" }}
            width={{ base: "100%", md: "80%" }}
            fontFamily={"cursive"}>
            <Text
              id="user-detail-intro"
              fontSize={{ base: "lg", md: "xl" }}
              textAlign={{ base: "center", md: "left", sm: "justify" }}>
              Hey, My name is Md Waseem Akram. I have completed my Bachelor of
              Engineering from R.G.P.V University, Bhopal, MP.
              <br />
              <br />
              As a Full-Stack developer, I enjoy tackling new challenges and
              continuously expanding my skillset. I am proficient in Javascript,
              as well as have knowledge in programming languages such as HTML,
              JavaScript, React.js, SCSS, CSS. I have a passion for working with
              Node.js, MongoDB,and modern Javascript libraries and frameworks
              &nbsp; like React.js. I am also interested in building new Web
              Technologies and Products.
              <br />
              <br />
            </Text>
          </Box>
          <Box
            width={{ base: "80%", md: "22%" }}
            marginTop={{ base: "20px", md: "10px" }}>
            <motion.div
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="image-container">
              <Image
                className="home-img"
                margin="auto"
                src={myImage}
                width={{ base: "80%", md: "100%" }}
                maxWidth="400px"
                marginTop="55px"
                borderRadius="35px 0px  "
                variants={isTouched ? imageVariants : {}}
                initial="initial"
                animate={isTouched ? "touched" : "reset"}
              />
            </motion.div>
          </Box>
        </Flex>
      )}
    </Box>
  );
};

export default About;
