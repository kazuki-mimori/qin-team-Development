import { Container, SimpleGrid } from "@mantine/core";
import BlogContent from "../component/Blog/BlogContent";
import FooterArea from "../component/Footer/FooterArea";
import Github from "../component/Github/Github";
import HeaderArea from "../component/Header/Header";
import PageTop from "../component/Header/Pagetop";
import Portfolio from "../component/Portfolio/Portfolio";
import Twitter from "../component/Twitter/Twitter";

function Index() {
  return (
    <>
      <HeaderArea />
      <PageTop />
      <BlogContent />
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
