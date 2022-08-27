import { Container, Group, Burger, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import Link from "next/link";
import { useState } from "react";

function HeaderArea() {
  const style = useMediaQuery("(min-width: 768px)", false);
  const [opened, setOpened] = useState(false);
  const title = opened ? "Close navigation" : "Open navigation";

  const link = [
    {
      href: "/About",
      title: "About",
    },
    {
      href: "/Blog",
      title: "Blog",
    },
    {
      href: "/Portfolio",
      title: "Portfolio",
    },
    {
      href: "/Contact",
      title: "Contact",
    },
  ];

  return (
    <>
      <Container>
        <div className="flex items-center h-24">
          {style && (
            <>
              <Text
                className="flex-1"
                sx={{ color: "brack", fontSize: 18, fontWeight: 700 }}
              >
                Shimabu IT University
              </Text>
              <Group spacing="lg">
                {link.map((item, index) => (
                  <Link href={item.href} key={index}>
                    <a className="font-bold">{item.title}</a>
                  </Link>
                ))}
              </Group>
            </>
          )}
          {!style && (
            <>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                title={title}
                size="sm"
              />
              <Text
                className="text-center flex-1"
                sx={{ color: "brack", fontSize: 18, fontWeight: 700 }}
              >
                Shimabu IT University
              </Text>
            </>
          )}
        </div>
      </Container>
    </>
  );
}

export default HeaderArea;
