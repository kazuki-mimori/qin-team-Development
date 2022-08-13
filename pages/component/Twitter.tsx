import {
  Container,
  useMantineTheme,
  Text,
  Space,
  Button,
  Group,
  Avatar,
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
            <Group>
              <Avatar className="mb-32" src="" radius="xl" />
              <div style={{ flex: 1 }}>
                <Group>
                  <Text size="sm" weight={500}>
                    しまぶーのIT大学
                  </Text>
                  <Text color="dimmed" size="xs">
                    @shimabu_it・5月25日
                  </Text>
                </Group>
                <p>
                  📣 新サービス「Noway Form」をリリースしました！ Noway
                  Formは、Notionのデータベースをもとにフォームを作成できるサービスです。これまでGoogle
                  FormsでやっていたことがNotionだけで完結します✌✨
                  試しに使っていただけると幸いです😊
                  https://www.noway-form.com/ja
                </p>
              </div>
            </Group>
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
