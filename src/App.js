import { Box, useBreakpointValue, Center, Spinner } from "@chakra-ui/react";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Github from "./components/Github";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer1";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";

function App() {
  const isSmallScreen = useBreakpointValue({ base: true, lg: false });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Wait for 2 seconds and then set isLoading to false
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      <Box maxW="100vw" margin="auto">
        <Navbar />
        <Box maxWidth={isSmallScreen ? "90vw" : "80vw"} margin="auto">
          {isLoading ? (
            <Center
              height={"100vh"}
              flex
              justifyContent="center"
              alignItems={"center"}>
              <Spinner
                thickness="7px"
                speed="0.65s"
                emptyColor="gray.200"
                color="purple.700"
                size="xl"
              />
            </Center>
          ) : (
            <>
              <Home />
              <About />
              <Skills />
              <Projects />
              <Github />
              <Contact />
            </>
          )}
        </Box>
      </Box>
      <Footer />
    </>
  );
}

export default App;
