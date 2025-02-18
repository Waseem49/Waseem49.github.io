import { Badge, Box, Button, Image, Link, Text } from "@chakra-ui/react";
import React from "react";
import { AiOutlineDownload } from "react-icons/ai";

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "EBN",
      description:
        "EbN is a comprehensive showcase of my frontend development skills, designed to demonstrate my expertise in creating engaging web experiences. It comprises three main sections: E-commerce, News, and Blog, each featuring CRUD (Create, Read, Update, Delete) operations.",
      image: "https://i.ibb.co/SxFrVw6/ebn1.jpg",
      techStack: ["HTML", "CSS", "JAVASCRIPT", "Mock-Api"],
      github: "https://github.com/Waseem49/ebn",
      demo: "https://ebn-waseem49.vercel.app/",
    },
    {
      id: 2,
      name: "SecureNote",
      description:
        "Developed a feature-rich note-taking web application called 'SecureNote' using a full-stack tech-stack like Next.js, React.js, MongoDB, Json-web-Token, Bcypt. Users can register, log in securely, and create, edit, or delete their notes.",
      image:
        "https://github.com/Waseem49/SecureNote/assets/111652485/396ca5fd-ce42-413f-b5a0-d03a083b1b33",
      techStack: ["Next.js", "Mongoose", "React", "Becrypt"],
      github: "https://github.com/Waseem49/SecureNote",
      demo: "https://secure-note-waseem49.vercel.app/",
    },

    // {
    //   id: 2,
    //   name: "FitQuest",
    //   description:
    //     "FitQuest is an innovative, gamified fitness tracking application designed to provide users with a curated list of daily workouts for optimal health and wellness.",
    //   image: "https://i.ibb.co/jJnnm9b/fitqqq.png",
    //   techStack: ["CSS", "React", "Redux-thunk", "Redux", "MongoDB", "Express"],
    //   github: "https://github.com/izhar100/festive-crayon-1023",
    //   demo: "https://fitquest-beta.vercel.app/",
    // },
    {
      id: 3,
      name: "Gleams",
      description:
        "Gleams (E-commerce platform) is an React.js application designed to provide customers with a personalized easy-to-utilize user experience for purchasing jwellery and watches online. It stores customers' personal data and orders.",
      image: "https://i.postimg.cc/PfSW4FMD/Screenshot-2023-05-13-151034.png",
      techStack: ["Chakra UI", "React", "Redux-thunk", "Redux", "SCSS"],
      github: "https://github.com/santoshsen96/hunky-force-333",
      demo: "https://lucky-maamoul-8919c5.netlify.app/",
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
    {
      id: 5,
      name: "Movie Lee",
      description:
        "This project is built by next.js, Where user can watch list of movies which avilable on platforms. I have built this project to hands on Nextjs",
      image: "https://i.ibb.co/dbzds9N/m1111111111.png",
      techStack: ["Next.Js", "MongoDB", "Module-Css", "React"],
      github: "https://github.com/Waseem49/movielee-napp",
      demo: "https://movielee-waseem49.vercel.app/",
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
        marginTop={{ base: "30px", md: "20px", lg: "60px" }}
      >
        Projects
      </Text>
      <Box
        // border="1px solid yellow"
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
        gap="20px"
      >
        {projects.map((el) => {
          return (
            <Box
              backgroundColor={"var(--purple)"}
              border="0.5px solid grey"
              className="project-card"
              sx={{
                ":hover": {
                  boxShadow: "0 0 10px #898C8D",
                },
              }}
              p="6"
              rounded="md"
              padding="20px"
              transition="transform 0.2s"
              _hover={{ transform: "scale(1.05)" }}
            >
              <Image src={el.image} />
              <Box
                className="project-tech-stack"
                marginTop="10px"
                display="flex"
                justifyContent="center"
                flexWrap="wrap"
              >
                {el.techStack.map((tech) => {
                  return (
                    <Badge
                      borderRadius="full"
                      px="2"
                      color="white"
                      background="black"
                      margin="5px"
                    >
                      {tech}
                    </Badge>
                  );
                })}
              </Box>
              <Text
                className="project-title"
                marginTop="20px"
                fontSize={{ base: "2xl", md: "3xl" }}
              >
                {el.name}
              </Text>
              <Text
                className="project-description"
                marginTop="10px"
                fontFamily={"cursive"}
                fontSize={{ base: "sm", md: "md" }}
              >
                {el.description}
              </Text>
              <Box
                display="flex"
                justifyContent="space-between"
                marginTop="20px"
                marginBottom="0px"
              >
                <Link
                  className="project-deployed-link"
                  href={el.demo}
                  isExternal
                >
                  <Button
                    // backgroundColor={"black"}
                    // _hover={{ bg: "#0d0443" }}
                    size={{ base: "sm", md: "md" }}
                    fontSize={{ base: "sm", md: "md" }}
                    // color="white"
                    border={"1px solid white"}
                    width="max-content"
                    style={{ backgroundColor: "#272828", color: "white" }}
                    sx={{
                      ":hover": {
                        boxShadow: "0 0 10px #898C8D",
                        color: "white",
                      },
                    }}
                  >
                    Demo
                    <Text as="span" ml={"2"}>
                      <AiOutlineDownload fontSize={"1.2rem"} />
                    </Text>
                  </Button>
                </Link>
                <Link
                  className="project-github-link"
                  href={el.github}
                  isExternal
                >
                  <Button
                    // backgroundColor={"black"}
                    // _hover={{ bg: "#0d0443" }}
                    size={{ base: "sm", md: "md" }}
                    fontSize={{ base: "sm", md: "md" }}
                    // color="white"
                    border={"1px solid white"}
                    width="max-content"
                    style={{ backgroundColor: "#272828", color: "white" }}
                    sx={{
                      ":hover": {
                        boxShadow: "0 0 10px #898C8D",
                        color: "white",
                      },
                    }}
                  >
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
