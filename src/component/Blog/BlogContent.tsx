import { Container, Text, Space, Group } from "@mantine/core";
import Button from "../Button";
import Title from "../Title";

const BlogContent = () => {
  interface BlogContent {
    title: string;
    description: string;
    date: Number;
  }
  const BlogContent = [
    {
      title: "This is a header",
      content:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor doamet sint. Velit officia consequat duis enim velit mollit.",
      date: "2022.07.11",
    },
    {
      title: "This is a heade",
      content:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor doamet sint. Velit officia consequat duis enim velit mollit.",
      date: "2022.07.11",
    },
  ];
  return (
    <>
      <Container my="xl" id="Blog">
        <Title title="Blog" />
        <div className="my-6">
          {BlogContent.map((content: any) => {
            return (
              <>
                <Space h="xs" />
                <Text className="text-2xl">{content.title}</Text>
                <Space h="xs" />
                <p>{content.content}</p>
                <p>{content.date}</p>
                <Space h="xl" />
              </>
            );
          })}
        </div>

        <Button title="View All" link="Blog" />
      </Container>
    </>
  );
};

export default BlogContent;
