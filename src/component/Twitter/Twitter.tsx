import { Container, Text, Space, Group, Avatar } from "@mantine/core";
import Button from "../Button";
import Title from "../Title";

function Twitter() {
  interface TeitterContent {
    title: string;
    account: string;
    description: string;
    date: Number;
  }

  const TeitterContent = [
    {
      title: "しまぶーのIT大学",
      account: "@shimabu_it・5月25日",
      description:
        " 📣 新サービス「Noway Form」をリリースしました！ NowayFormは、Notionのデータベースをもとにフォームを作成できるサービスです。これまでGoogleFormsでやっていたことがNotionだけで完結します✌✨試しに使っていただけると幸いです😊https://www.noway-form.com/ja",
    },
    {
      title: "しまぶーのIT大学",
      account: "@shimabu_it・5月25日",
      description:
        " 📣 新サービス「Noway Form」をリリースしました！ NowayFormは、Notionのデータベースをもとにフォームを作成できるサービスです。これまでGoogleFormsでやっていたことがNotionだけで完結します✌✨試しに使っていただけると幸いです😊https://www.noway-form.com/ja",
    },
    {
      title: "しまぶーのIT大学",
      account: "@shimabu_it・5月25日",
      description:
        " 📣 新サービス「Noway Form」をリリースしました！ NowayFormは、Notionのデータベースをもとにフォームを作成できるサービスです。これまでGoogleFormsでやっていたことがNotionだけで完結します✌✨試しに使っていただけると幸いです😊https://www.noway-form.com/ja",
    },
  ];

  return (
    <>
      <Container my="xl">
        <div className="mt-px">
          <Title title="Twitter" />
          <div className="my-6">
            {TeitterContent.map((content: any) => {
              return (
                <>
                  <Group className="mb-10">
                    <Avatar className="mb-32" src="" radius="xl" />
                    <div style={{ flex: 1 }}>
                      <Group>
                        <Text size="sm" weight={500}>
                          {content?.title}
                        </Text>
                        <Text color="dimmed" size="xs">
                          {content?.account}
                        </Text>
                      </Group>
                      <p>{content?.description}</p>
                    </div>
                  </Group>
                </>
              );
            })}
          </div>

          <Space h="xl" />
          <Button title="View on Twitter " link="Twitter" />
        </div>
      </Container>
    </>
  );
}

export default Twitter;
