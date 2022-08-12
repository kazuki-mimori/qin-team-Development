import { Container, Grid, Space } from "@mantine/core";
import Blog from "./component/Blog";
import FooterArea from "./component/FooterArea";
import Github from "./component/Github";
import HeaderArea from "./component/Header";
import Portfolio from "./component/Portfolio";
import Twitter from "./component/Twitter";

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
