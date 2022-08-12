import { Container, useMantineTheme, Text, Space, Button } from "@mantine/core";

function Twitter() {
  const theme = useMantineTheme();

  return (
    <>
      <Container my="xl">
        <div className="mt-px">
          <div>
            <Text className="text-3xl">Twitter</Text>
          </div>
          <div className="my-6">
            <Text className="text-1xl">This is a header</Text>
            <Space h="xs" />
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.{" "}
            </p>
            <p>2022.07.11</p>
          </div>
          <div className="my-6">
            <Text className="text-1xl">This is a header</Text>
            <Space h="xs" />
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.{" "}
            </p>
            <p>2022.07.11</p>
          </div>
          <div className="my-6">
            <Text className="text-1xl">This is a header</Text>
            <Space h="xs" />
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.{" "}
            </p>
            <p>2022.07.11</p>
          </div>
          <div className="my-6">
            <Text className="text-1xl">This is a header</Text>
            <Space h="xs" />
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.{" "}
            </p>
            <p>2022.07.11</p>
          </div>
          <Space h="xs" />
          <Button color="dark" radius="xl" size="md">
            View Al
          </Button>
        </div>
      </Container>
    </>
  );
}

export default Twitter;
