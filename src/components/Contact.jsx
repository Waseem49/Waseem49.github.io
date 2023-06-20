import React from "react";
import { useState, useRef } from "react";
import { BsFillTelephoneFill, BsGithub } from "react-icons/bs";
import { MdAttachEmail } from "react-icons/md";
import { ImLinkedin } from "react-icons/im";
import { FaHome } from "react-icons/fa";
import { Box, SimpleGrid, Text, Button } from "@chakra-ui/react";
// import { RiMailSendFill } from "react-icons/ri";
// import { Input } from "@chakra-ui/react";
// import { FormControl } from "@chakra-ui/react";
import "../Styles/Contact.css";
import emailjs from "@emailjs/browser";
import { Container, Row, Col } from "react-bootstrap";

import "./Contact.css";

const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState(false);
  const [notDone, setNotDone] = useState(false);
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setDone(false);
    setNotDone(false);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!formData.from_name || !formData.reply_to || !formData.message) {
      setNotDone(true);
    } else {
      //  Please use your own credentials from emailjs or i will recive your email

      emailjs
        .sendForm(
          "service_9w1m667",
          "template_wqr709f",
          form.current,
          "FbMwQoqo3zC_6iVqR"
        )
        .then(
          (result) => {
            console.log(result.text);
            setDone(true);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };
  return (
    <Box
      id="contact"
      w="90%"
      margin="auto"
      mt={{ base: "30px", md: "20px", lg: "60px" }}
      mb={{ base: "20px", md: "30px", lg: "60px" }}>
      <Box
        padding={{ base: "20px", md: "30px" }}
        height={{ base: "auto", md: "450px" }}
        mb={{ base: "50px", md: "150px" }}>
        <Box
          w="max-content"
          align="center"
          className="heading-hover"
          margin="auto">
          <Text
            className="about-H"
            fontSize={{ base: "xl", md: "4xl" }}
            fontWeight="600"
            margin={"auto"}
            marginTop="60px">
            Contact Me
          </Text>
        </Box>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 5, md: 10 }}>
          <Box
            margin="auto"
            fontSize="large"
            fontWeight="500"
            display="grid"
            justifyContent="center"
            alignItems="center"
            className="contact"
            fontFamily={"cursive"}>
            <Box
              as="b"
              fontSize="20px"
              display="flex"
              justifyContent="left"
              alignItems="center"
              gap="3px">
              <FaHome />
              <Text as="b">Muzaffarpur,Bihar</Text>
            </Box>
            <a href="mailto:mdwaseem0603@gmail.com?subject=Hello&body=This%20is%20a%20test%20email">
              <Box
                id="contact-email"
                as="b"
                fontSize="20px"
                display="flex"
                justifyContent="left"
                alignItems="center"
                gap="6px">
                {" "}
                <MdAttachEmail />
                <Text as="b">mdwaseem0603@gmail.com</Text>
              </Box>
            </a>
            <Box
              id="contact-github"
              as="b"
              fontSize="20px"
              display="flex"
              justifyContent="left"
              alignItems="center"
              gap="6px">
              <BsGithub />{" "}
              <a
                href="https://github.com/Waseem49"
                target="_blank"
                rel="noreferrer">
                <Text as="b">Github</Text>
              </a>
            </Box>
            <Box
              id="contact-phone"
              as="b"
              fontSize="20px"
              display="flex"
              justifyContent="left"
              alignItems="center"
              gap="6px">
              <BsFillTelephoneFill />{" "}
              <a href="tel:8109608048">
                <Text as="b">8109608048</Text>
              </a>
            </Box>
            <a
              href="https://www.linkedin.com/in/md-waseem-akram-a8344b235/"
              target="_blank"
              rel="noreferrer">
              <Box
                id="contact-linkedin"
                as="b"
                fontSize="20px"
                display="flex"
                justifyContent="left"
                alignItems="center"
                gap="6px">
                <ImLinkedin />
                <Text as="b">Md Waseem Akram</Text>
              </Box>
            </a>
          </Box>
          <Box alignItems="center">
            <Box
              className="contact-form"
              padding="10px"
              width={{ base: "100%", md: "400px" }}
              height="auto">
              <Container style={{ paddingTop: "50px" }}>
                <Row>
                  <Col md={6} className="c-left">
                    <h1>Get in Touch</h1>
                  </Col>
                  <Col md={6} className="c-right">
                    <form ref={form} onSubmit={sendEmail}>
                      <input
                        type="text"
                        name="from_name"
                        className="user"
                        placeholder="Name"
                        onChange={handleChange}
                      />
                      <input
                        id="contact-email"
                        type="email"
                        name="reply_to"
                        className="user"
                        placeholder="Email"
                        onChange={handleChange}
                      />
                      <textarea
                        name="message"
                        className="user"
                        placeholder="Message"
                        onChange={handleChange}
                      />
                      <span className="not-done">
                        {notDone && "Please, fill all the input field"}
                      </span>
                      <Button
                        border={"1px solid white"}
                        style={{ backgroundColor: "#272828", color: "white" }}
                        sx={{
                          ":hover": {
                            boxShadow: "0 0 10px #898C8D",
                            color: "white",
                          },
                        }}
                        type="submit"
                        className="button1"
                        disabled={done}>
                        Send
                      </Button>
                      <span className="done">
                        {done && "Thanks for Contacting me"}
                      </span>
                    </form>
                  </Col>
                </Row>
              </Container>
            </Box>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Contact;
