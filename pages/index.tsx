import { Container, Grid, SimpleGrid, Space } from "@mantine/core";
import Blog from "./component/Blog";
import FooterArea from "./component/FooterArea";
import Github from "./component/Github";
import HeaderArea from "./component/Header";
import { Portfolio } from "./component/Portfolio";
import Twitter from "./component/Twitter";

function Index() {
  return (
    <>
      <HeaderArea />
      <Space h="xl" />
      <Blog />
      <Portfolio />
      <Container my="xl">
        <SimpleGrid
          cols={2}
          breakpoints={[{ maxWidth: "sm", cols: 1 }]}
          spacing={50}
        >
          <Github />
          <Twitter />
        </SimpleGrid>
      </Container>
      <FooterArea />
    </>
  );
}

export default Index;
