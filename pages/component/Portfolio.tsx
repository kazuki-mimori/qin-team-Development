import {
  Text,
  SimpleGrid,
  Container,
  Card,
  Image,
  Space,
  Group,
} from "@mantine/core";

const PORTFOLIO = [
  {
    title: "IT KINGDOM",
    description:
      "当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。",
    image:
      "https://cdn.pixabay.com/photo/2022/07/30/14/07/butterfly-7353884_1280.jpg",
    date: "2020.07.11",
  },
  {
    title: "IT KINGDOM",
    description:
      "当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。",
    image:
      "https://images.unsplash.com/photo-1579227114347-15d08fc37cae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80",
    date: "2020.07.11",
  },
  {
    title: "IT KINGDOM",
    description:
      "当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。",
    image:
      "https://images.unsplash.com/photo-1579227114347-15d08fc37cae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80",
    date: "2020.07.11",
  },
];

interface PORTFOLIO {
  title: string;
  image: any;
  description: string;
  date: string;
}

function Feature({ title, description, image, date }: PORTFOLIO) {
  return (
    <Card shadow="sm" p="xl" component="a" href="" target="_blank">
      <Card.Section>
        <Image src={image} height={160} alt="No way!" />
      </Card.Section>
      <Text className="my-2" weight={500} size="xl" mt="md">
        {title}
      </Text>
      <Text mt="xm" color="dimmed" size="sm">
        {description}
      </Text>
      <Text mt="xs" color="dimmed" size="sm">
        {date}
      </Text>
    </Card>
  );
}
function Portfolio() {
  const items = PORTFOLIO.map((item) => <Feature {...item} key={item.title} />);
  return (
    <>
      <Container my="xl">
        <Text className="text-3xl">Portfolio</Text>
        <Space h="xl" />
        <div className="text-3xl border-b-2 divide-gray-200 ... mb-10" />
        <SimpleGrid
          cols={3}
          breakpoints={[{ maxWidth: "sm", cols: 1 }]}
          spacing={50}
        >
          {items}
        </SimpleGrid>
      </Container>
      <Group position="center">
        <button className="bg-black text-white rounded-full py-2 px-4">
          View All
        </button>
      </Group>
    </>
  );
}

export default Portfolio;
