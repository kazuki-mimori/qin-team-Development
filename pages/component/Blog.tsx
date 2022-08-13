import { Container, Text, Space, Button } from "@mantine/core";

function Blog() {
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
      <Container my="xl">
        <Space h="xl" />
        <div className="mt-p ">
          <Text className="text-3xl">Blog</Text>
          <Space h="xl" />
          <div className=" border-b-2 divide-gray-200 ..." />
          <div className="my-6">
            {BlogContent.map((content: any) => {
              return (
                <>
                  <Space h="xs" />
                  <Text className="text-2xl">{content.title}</Text>
                  <Space h="xs" />
                  <p>{content.content}</p>
                  <p>{content.date}</p>
                </>
              );
            })}
          </div>
          <Button className="" color="dark" radius="xl" size="md">
            View Al
          </Button>
        </div>
      </Container>
    </>
  );
}

export default Blog;
