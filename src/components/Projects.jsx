import { Badge, Box, Button, Image, Link, Text } from "@chakra-ui/react";
import React from "react";
import { AiOutlineDownload } from "react-icons/ai";

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "Clothingo",
      description:
        "Clothingo - It is a design-obsessed lifestyle accessories brand committed to making your everyday carry #lessordinary.",
      image:
        "https://user-images.githubusercontent.com/104666876/208307949-419a681f-aed5-42ce-9911-f9acd87569b5.png",
      techStack: ["HTML", "CSS", "JAVASCRIPT"],
      github: "https://github.com/hrithikvishwakarma001/clothingo",
      demo: "https://luxury-vacherin-56d222.netlify.app/",
    },
    {
      id: 2,
      name: "Gleams",
      description:
        "Gleams (E-commerce platform) is an React.js application designed to provide customers with a personalized easy-to-utilize user experience for purchasing jwellery and watches online. It stores customers' personal data and orders.",
      image: "https://i.postimg.cc/PfSW4FMD/Screenshot-2023-05-13-151034.png",
      techStack: ["Chakra UI", "React", "Redux-thunk", "Redux", "SCSS"],
      github: "https://github.com/santoshsen96/hunky-force-333",
      demo: "https://lucky-maamoul-8919c5.netlify.app/",
    },
    {
      id: 3,
      name: "FitQuest",
      description:
        "FitQuest is an innovative, gamified fitness tracking application designed to provide users with a curated list of daily workouts for optimal health and wellness.",
      image: "https://i.ibb.co/jJnnm9b/fitqqq.png",
      techStack: ["CSS", "React", "Redux-thunk", "Redux", "MongoDB", "Express"],
      github: "https://github.com/izhar100/festive-crayon-1023",
      demo: "https://fitquests.netlify.app/",
    },
    {
      id: 4,
      name: "Amazon Clone",
      description:
        "Amazon is a multi-national retail. It specializes in fast fashion and sells clothing, accessories, shoes, beauty products, and perfumes.",
      image: "https://i.ibb.co/VWLbqwC/amzon.png",
      techStack: ["HTML", "CSS", "Javascript", "React"],
      github: "https://github.com/Waseem49/amazon-clone",
      demo: "https://gorgeous-moxie-1463ef.netlify.app/",
    },
  ];

  return (
    <div>
      <Text
        id="projects"
        fontSize="4xl"
        fontWeight="600"
        margin="auto"
        textAlign="center"
        marginTop={{ base: "30px", md: "20px", lg: "60px" }}>
        Projects
      </Text>
      <Box
        //border="1px solid yellow"
        display="grid"
        width="100%"
        margin="auto"
        padding={{ base: "10px", md: "20px", sm: "10px" }}
        gridTemplateColumns={{
          base: "1fr",
          sm: "1fr 1fr",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap="20px">
        {projects.map((el) => {
          return (
            <Box
              backgroundColor={"var(--purple)"}
              border="0.5px solid grey"
              //  box-shadow= 0 0 9px #7500fa;

              className="project-card"
              // boxShadow="md"
              sx={{
                ":hover": {
                  boxShadow: "0 0 9px #7500fa",
                },
              }}
              p="6"
              rounded="md"
              padding="20px"
              transition="transform 0.2s"
              _hover={{ transform: "scale(1.05)" }}>
              <Image src={el.image} />
              <Box
                className="project-tech-stack"
                marginTop="10px"
                display="flex"
                justifyContent="center"
                flexWrap="wrap">
                {el.techStack.map((tech) => {
                  return (
                    <Badge
                      borderRadius="full"
                      px="2"
                      color="white"
                      background="black"
                      margin="5px">
                      {tech}
                    </Badge>
                  );
                })}
              </Box>
              <Text
                className="project-title"
                marginTop="20px"
                fontSize={{ base: "2xl", md: "3xl" }}>
                {el.name}
              </Text>
              <Text
                className="project-description"
                marginTop="10px"
                fontSize={{ base: "sm", md: "md" }}>
                {el.description}
              </Text>
              <Box
                display="flex"
                justifyContent="space-between"
                marginTop="20px"
                marginBottom="0px">
                <Link
                  className="project-deployed-link"
                  href={el.demo}
                  isExternal>
                  <Button
                    // backgroundColor={"black"}
                    // _hover={{ bg: "#0d0443" }}
                    size={{ base: "sm", md: "md" }}
                    fontSize={{ base: "sm", md: "md" }}
                    // color="white"
                    style={{ backgroundColor: "black", color: "white" }}
                    sx={{
                      ":hover": {
                        boxShadow: "0 0 9px #7500fa",
                        color: "white",
                      },
                    }}>
                    Demo
                    <Text as="span" ml={"2"}>
                      <AiOutlineDownload fontSize={"1.2rem"} />
                    </Text>
                  </Button>
                </Link>
                <Link
                  className="project-github-link"
                  href={el.github}
                  isExternal>
                  <Button
                    // backgroundColor={"black"}
                    // _hover={{ bg: "#0d0443" }}
                    size={{ base: "sm", md: "md" }}
                    fontSize={{ base: "sm", md: "md" }}
                    // color="white"
                    style={{ backgroundColor: "black", color: "white" }}
                    sx={{
                      ":hover": {
                        boxShadow: "0 0 9px #7500fa",
                        color: "white",
                      },
                    }}>
                    Github
                    <Text as="span" ml={"2"}>
                      <AiOutlineDownload fontSize={"1.2rem"} />
                    </Text>
                  </Button>
                </Link>
              </Box>
            </Box>
          );
        })}
      </Box>
    </div>
  );
};

export default Projects;
