import { Button, Container, Group, Space, Text } from "@mantine/core";

function FooterArea() {
  return (
    <>
      <div className="border-t-2 border-gray-200 p-4">
        <Group position="center">
          <Text className="my-6" size="sm" color="#868E96">
            © 2022 Shimabu IT University
          </Text>
        </Group>
      </div>
      <Space h="xl" />
    </>
  );
}

export default FooterArea;
