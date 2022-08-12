import { Container, Grid, Space } from "@mantine/core";
import Blog from "src/component/Blog";
import FooterArea from "src/component/FooterArea";
import Github from "src/component/Github";
import HeaderArea from "src/component/Header";
import Portfolio from "src/component/Portfolio";
import Twitter from "src/component/Twitter";

function Index() {
  return (
    <>
      <HeaderArea />
      <Space h="xl" />
      <Blog />
      <Portfolio />
      <Container my="xl">
        <Grid grow>
          <Grid.Col span={4}>
            <Github />
          </Grid.Col>
          <Grid.Col span={4}>
            <Twitter />
          </Grid.Col>
        </Grid>
      </Container>
      <FooterArea />
    </>
  );
}

export default Index;
