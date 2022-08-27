import { Container, Text, Space, Group, Grid } from "@mantine/core";
import Icons from "../../common/Icons";
import Title from "../Title";

const About = () => {
  return (
    <>
      <Container my="xl" id="Blog">
        <Title title="Contact" />
        <Text className="text-2xl my-4">Lightsound mimori</Text>
        <Text className="text-md">警察官からITエンジニアになりました。</Text>
      </Container>
    </>
  );
};

export default About;
