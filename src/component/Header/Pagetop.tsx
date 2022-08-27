import { Container, Text, Space, Group, Grid } from "@mantine/core";
import Icons from "../../common/Icons";

const PageTop = () => {
  return (
    <>
      <div className="bg-pink-600 h-44 sm:h-36">
        <Container my="sm">
          <Grid>
            <Grid.Col xs={10}>
              <Space h="xl" />
              <Text sx={{ color: "white", fontSize: 36, fontWeight: 700 }}>
                Shimabu IT University
              </Text>
              <Text sx={{ color: "white", fontSize: 16, fontWeight: 700 }}>
                しまぶーのポートフォリオのためのページです
              </Text>
              <Space h="xl" />
            </Grid.Col>
            <Group spacing={20} className="">
              <Icons />
            </Group>
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default PageTop;
