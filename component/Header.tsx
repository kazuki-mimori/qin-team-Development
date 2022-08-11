import { createStyles, Header, Container, Group, Burger, Grid, useMantineTheme, Text, Space } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Link from 'next/link';
const PRIMARY_COL_HEIGHT = 150;


const useStyles = createStyles((theme) => ({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
  },

  links: {
    [theme.fn.smallerThan('xs')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('xs')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
    },
  },
}));

interface HeaderSimpleProps {
  links: { link: string; label: string }[];
}

function HeaderArea({ links }: HeaderSimpleProps) {
  const [opened, { toggle }] = useDisclosure(false);
  const { classes, cx } = useStyles();
  const theme = useMantineTheme();
  const SECONDARY_COL_HEIGHT = PRIMARY_COL_HEIGHT / 2 - theme.spacing.md / 2;

  return (
    <>
    <Header height={60} mb={120}>
      <Container className={classes.header}>
        <h3>Shimabu IT University</h3>
        <Group spacing={5} className={classes.links}>
          <Link href="/About">
            <a className={cx(classes.link, classes.linkActive)}>About</a>
          </Link>
          <Link href="/Blog">
            <a className={cx(classes.link, classes.linkActive)}>Blog</a>
          </Link>
          <Link href="Home">
            <a className={cx(classes.link, classes.linkActive)}>Portfolio</a>
          </Link>
          <Link href="Home">
            <a className={cx(classes.link, classes.linkActive)}>Contact</a>
          </Link>
        </Group>
        <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />
      </Container>
      <div className='bg-pink-600'>
        <Container my="md" >
          <Grid>
            <Grid.Col xs={8}>
             <Space h="xl" />
                <Text sx={{ color: 'white', fontSize: 40, lineHeight: 1.4 }}>Shimabu IT University</Text>
                <Text color="white">しまぶーのポートフォリオのためのページです</Text>
              <Space h="xl" />
            </Grid.Col>
            <Grid.Col xs={2}>
              <p className='p-64'></p> alignItems
            </Grid.Col>  
          </Grid>
        </Container>
        <Container my="md">
    </Container>
      </div>
    </Header>
    <Space h="xl" />
  </>
  );
}

export default HeaderArea;