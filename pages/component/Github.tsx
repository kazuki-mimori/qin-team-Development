import {
  Container,
  Text,
  Space,
  Group,
  ActionIcon,
  List,
  Progress,
} from "@mantine/core";
import { FaRegStar } from "react-icons/fa";
import { TbGitFork } from "react-icons/tb";
function Github() {
  return (
    <>
      <div className="mt-px">
        <Container my="xl">
          <Text className="text-3xl ">Github</Text>
          <Space h="xl" />
          <div className="border-b-2 divide-gray-200 ..." />
          <div className="my-6">
            <h3 className="text-lg">lightsound/nexst-tailwind</h3>
            <p className="text-base font-extralight">
              Next.js starter template.
            </p>

            <Group spacing="sm">
              <ActionIcon size="lg">
                <FaRegStar className="ml-1" />
              </ActionIcon>
              <p className="mr-10">117</p>
              <ActionIcon size="lg">
                <TbGitFork className="mr-1" />
              </ActionIcon>
              <p>18</p>
            </Group>
          </div>
          <Progress
            sections={[
              { value: 65.5, color: "#3178C6" },
              { value: 33.7, color: "#F1E05A" },
              { value: 0.8, color: "#EDEDED" },
            ]}
          />
          <List className="flex mb-2">
            <Text size="sm" weight={700}>
              <List.Item>TypeScript</List.Item>
            </Text>
            <Text size="sm" weight={700}>
              <List.Item>JavaScript</List.Item>
            </Text>
            <Text size="sm" weight={700}>
              <List.Item>Other</List.Item>
            </Text>
          </List>

          <Space h="xl" />
          <Group position="center">
            <button className="bg-black text-white rounded-full py-2 px-4">
              View on Github
            </button>
          </Group>
        </Container>
      </div>
    </>
  );
}

export default Github;
