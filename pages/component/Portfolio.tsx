import { Text, SimpleGrid, Container, Card, Image, Space } from "@mantine/core";
import { TablerIcon } from "@tabler/icons";

const PORTFOLIO = [
  {
    title: "IT KINGDOM",
    description:
      "当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。",
    image: "",
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
  description: string;
  date: string;
}
function Feature({ title, description, date, ...others }: PORTFOLIO) {
  return (
    <Card shadow="sm" p="xl" component="a" href="" target="_blank">
      <Card.Section>
        <Image src={""} height={160} alt="No way!" />
      </Card.Section>
      <Text className="my-2" weight={500} size="xl" mt="md">
        テスト
      </Text>
      <Text mt="xm" color="dimmed" size="sm">
        {/* {content.description} */}
        テスト
      </Text>
      <Text mt="xs" color="dimmed" size="sm">
        2021.10 - 2021.12
      </Text>
    </Card>
  );
}

export function Portfolio() {
  const items = PORTFOLIO.map((item) => <Feature {...item} key={item.title} />);

  return (
    <>
      <Container mt={30} mb={30} size="lg">
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
    </>
  );
}

//   return (
//     <>
//       <Container my="xl">
//         <div className="mt-px">
//
//           <div className="my-6">
//             <Grid>
//               {PORTFOLIO.map((content: any) => {
//                 return (
//                   <Grid.Col span={4}>
//                     <Card
//                       shadow="sm"
//                       p="xl"
//                       component="a"
//                       href=""
//                       target="_blank"
//                     >
//                       <Card.Section>
//                         <Image src={content.image} height={160} alt="No way!" />
//                       </Card.Section>
//                       <Text className="my-2" weight={500} size="xl" mt="md">
//                         {content.title}
//                       </Text>
//                       <Text mt="xm" color="dimmed" size="sm">
//                         {content.description}
//                       </Text>
//                       <Text mt="xs" color="dimmed" size="sm">
//                         2021.10 - 2021.12
//                       </Text>
//                     </Card>
//                   </Grid.Col>
//                 );
//               })}
//             </Grid>
//           </div>
//         </div>
//         <Space h="xl" />
//         <Group position="center">
//           <button className="bg-black text-white rounded-full py-2 px-4">
//             View All
//           </button>
//         </Group>
//       </Container>

//     </>
//   );
// }
