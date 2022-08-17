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
  interface GithubContent {
    title: string;
    skl: string;
    starIcon: number;
    otherIcon: number;
  }
  const GithubContent = [
    {
      title: "lightsound/nexst-tailwind",
      skl: "Next.js starter template.",
      starIcon: 117,
      otherIcon: 18,
    },
    {
      title: "lightsound/nexst-tailwind",
      skl: "Next.js starter template.",
      starIcon: 117,
      otherIcon: 18,
    },
    {
      title: "lightsound/nexst-tailwind",
      skl: "Next.js starter template.",
      starIcon: 117,
      otherIcon: 18,
    },
    {
      title: "lightsound/nexst-tailwind",
      skl: "Next.js starter template.",
      starIcon: 117,
      otherIcon: 18,
    },
  ];

  return (
    <>
      <div className="mt-px">
        <Container my="xl">
          <Text className="text-3xl ">Github</Text>
          <Space h="xl" />
          <div className="border-b-2 divide-gray-200 ..." />
          <div className="my-6">
            {GithubContent.map((content: any) => {
              return (
                <>
                  <h3 className="text-lg">{content.title}</h3>
                  <p className="text-base font-extralight">{content.skl}</p>
                  <Group spacing="sm">
                    <ActionIcon size="lg">
                      <FaRegStar className="ml-1" />
                    </ActionIcon>
                    <p className="mr-10">{content.starIcon}</p>
                    <ActionIcon size="lg">
                      <TbGitFork className="mr-1" />
                    </ActionIcon>
                    <p>{content.otherIcon}</p>
                  </Group>
                  <Progress
                    sections={[
                      { value: 65.5, color: "#3178C6" },
                      { value: 33.7, color: "#F1E05A" },
                      { value: 0.8, color: "#EDEDED" },
                    ]}
                  />
                  <List className="flex mb-10">
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
                </>
              );
            })}
          </div>

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
