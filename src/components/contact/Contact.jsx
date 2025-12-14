import React, { useRef } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding-bottom: 80px;
  gap: 12px;
  align-items: center;
`;

const Title = styled.div`
  font-size: 52px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
`;

const ContactForm = styled.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: rgba(17, 25, 40, 0.83);
  border: 1px solid rgba(255, 255, 255, 0.125);
  padding: 32px;
  border-radius: 12px;
  box-shadow: rgba(23, 92, 230, 0.1) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
`;

const ContactTitle = styled.div`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;

const ContactInput = styled.input`
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary + "50"};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;

  &:focus {
    border-color: ${({ theme }) => theme.primary};
  }
`;

const ContactTextArea = styled.textarea`
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary + "50"};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  resize: none;

  &:focus {
    border-color: ${({ theme }) => theme.primary};
  }
`;

const ContactButton = styled.button`
  padding: 13px 16px;
  border-radius: 12px;
  border: none;
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  cursor: pointer;
  background: linear-gradient(225deg, #8f00ff 0%, #d400ff 100%);
`;

const isValidEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const Contact = () => {
  const form = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    const email = form.current.name.value;

    if (!isValidEmail(email)) {
      alert("Please enter a valid email address");
      return;
    }

    emailjs
      .sendForm("service_avhv5hz", "template_dfbu9lj", form.current, {
        publicKey: "pff6I9uxTeijJM9bS",
      })
      .then(() => {
        alert("Message sent successfully 🚀");
        form.current.reset();
      })
      .catch((error) => {
        console.error(error);
        alert("Failed to send message. Please try again.");
      });
  };

  return (
    <Container>
      <Wrapper>
        <Title>Contact</Title>
        <Desc>
          Feel free to reach out to me for any questions or opportunities!
        </Desc>

        <ContactForm ref={form} onSubmit={sendEmail}>
          <ContactTitle>Email Me 🚀</ContactTitle>

          <ContactInput
            type="email"
            placeholder="Your Email"
            name="name"
            required
          />

          <ContactInput
            type="text"
            placeholder="Your Name"
            name="user_name"
            required
          />

          <ContactTextArea
            placeholder="Message"
            name="message"
            rows={4}
            required
          />

          <ContactButton type="submit">Send</ContactButton>
        </ContactForm>
      </Wrapper>
    </Container>
  );
};

export default Contact;
