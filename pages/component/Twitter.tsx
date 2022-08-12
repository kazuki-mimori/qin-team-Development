import {
  Container,
  useMantineTheme,
  Text,
  Space,
  Button,
  Group,
} from "@mantine/core";

function Twitter() {
  const theme = useMantineTheme();

  return (
    <>
      <Container my="xl">
        <div className="mt-px">
          <Text className="text-3xl ">Twitter</Text>
          <Space h="xl" />
          <div className="border-b-2 divide-gray-200 ..." />
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
          <Group position="center">
            <button className="bg-black text-white rounded-full py-2 px-4">
              View on Twitter
            </button>
          </Group>
        </div>
      </Container>
    </>
  );
}

export default Twitter;
