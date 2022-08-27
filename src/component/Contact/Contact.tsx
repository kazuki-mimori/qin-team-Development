import { Container } from "@mantine/core";
import Button from "../Button";
import Title from "../Title";
import InputItem from "./input";

function Contact() {
  return (
    <>
      <Container my="xl" id="Blog">
        <Title title="Contact" />
        <div className="my-6">
          <InputItem label="Email" massage="your@email.com" size="md" />
        </div>
        <div className="my-6">
          <InputItem label="Name" massage="Taro Yamada" size="md" />
        </div>
        <div className="my-6">
          <InputItem
            label="Your message"
            massage="I want to order your goods"
            size="xl"
          />
        </div>
        <Button title="Send massage" link="#" />
      </Container>
    </>
  );
}

export default Contact;
