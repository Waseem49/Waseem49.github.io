import { Badge, Box, Button, Image, Link, Text } from "@chakra-ui/react";
import React from "react";
import { AiOutlineDownload } from "react-icons/ai";

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "Gadget Galaxy",
      description:
        "Gadge Galaxy - It is a design-obsessed lifestyle accessories brand committed to making your everyday carry #lessordinary.",
      image:
        "https://narender24681.github.io/Projects-Images/DailyObjects-Clone.png",
      techStack: ["React", "Redux-Thunk", "Mongoose"],
      github: "https://github.com/PoojaRathod5/native-order-609",
      demo: "https://gadgetgalaxy.netlify.app/",
    },
    {
      id: 2,
      name: "TelePharmacy",
      description:
        "TelePharmacy 24x7 is a digital healtcare platform, which provides online doctors consultation, online pharmacy and diagnostic tests at home.",
      image:
        "https://user-images.githubusercontent.com/112754760/238128231-a627ba27-11ad-4921-b86e-a47a7e8c13f4.png",
      techStack: ["Chakra UI", "React", "Redux-thunk", "Redux", "SCSS"],
      github: "https://github.com/Shahid0143/tan-shock-2774",
      demo: "https://grand-conkies-b7c025.netlify.app/",
    },
    {
      id: 3,
      name: "Infinity Jewellers",
      description:
        "This is the clone of caratlane website which offers the best gold & diamond jewellery designs online",
      image: "https://i.ibb.co/J3HBznH/Cartlane.png",
      techStack: ["CSS", "React", "Redux-thunk", "Redux"],
      github: "https://github.com/PoojaRathod5/new-bucket-3441",
      demo: "https://celestial-bubble-1320-cjzn.vercel.app/",
    },
    {
      id: 4,
      name: "DailyObjects Clone",
      description:
        "DaliyObjects is a multi-national retail clothing chain. It specializes in fast fashion and sells clothing, accessories, shoes, beauty products, and perfumes.",
      image:
        "https://narender24681.github.io/Projects-Images/DailyObjects-Clone.png",
      techStack: ["HTML", "CSS", "Javascript"],
      github: "https://github.com/Tarkeshwar18/royal-stew-1115",
      demo: "https://regal-yeot-b37826.netlify.app/",
    },

    {
      id: 5,
      name: "TimeCamp ",
      description:
        "TimeCamp is centralized automated system that makes it easy for teams to work on all aspects of their programs and projects",
      image: "https://i.ibb.co/jgCFshg/Screenshot-528.png",
      techStack: ["HTML", "CSS", "Javascript"],
      github: "https://github.com/MrVivek30/violet-support-6758",
      demo: "https://timecampp.netlify.app/",
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
