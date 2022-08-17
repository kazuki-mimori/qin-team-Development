import {
  Container,
  Text,
  Button,
  Space,
  Group,
  Avatar,
  ActionIcon,
  List,
  Progress,
} from "@mantine/core";
import { FaRegStar } from "react-icons/fa";
import { TbGitFork } from "react-icons/tb";
function Github() {
  return (
    <>
      <Container my="xl">
        <div className="mt-px">
          <Text className="text-3xl">Github</Text>
          <Space h="xl" />
          <div className="border-b-2 divide-gray-200 ..." />
          <div className="my-6">
            <Group>
              <ActionIcon size="lg">
                <FaRegStar className="mr-1" />
              </ActionIcon>
              <p>117</p>
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

          <Space h="xs" />
          <Group position="center">
            <button className="bg-black text-white rounded-full py-2 px-4">
              View on Github
            </button>
          </Group>
        </div>
      </Container>
    </>
  );
}

export default Github;
