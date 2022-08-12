import {
  createStyles,
  Header,
  Container,
  Group,
  Burger,
  Grid,
  Text,
  Space,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Link from "next/link";

const useStyles = createStyles((theme) => ({
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
  },

  burger: {
    [theme.fn.largerThan("xs")]: {
      display: "none",
    },
  },
}));

function HeaderArea() {
  const [opened, { toggle }] = useDisclosure(false);
  const { classes } = useStyles();

  return (
    <>
      <Header height={100} mb={120}>
        <Container className={classes.header}>
          <Text sx={{ color: "brack", fontSize: 18, fontWeight: 700 }}>
            Shimabu IT University
          </Text>
          <Group spacing={20}>
            <Link href="/About">
              <Text sx={{ color: "brack", fontSize: 18, fontWeight: 700 }}>
                About
              </Text>
            </Link>
            <Link href="/Blog">
              <Text sx={{ color: "brack", fontSize: 18, fontWeight: 700 }}>
                Blog
              </Text>
            </Link>
            <Link href="Portfolio">
              <Text sx={{ color: "brack", fontSize: 18, fontWeight: 700 }}>
                Portfolio
              </Text>
            </Link>
            <Link href="Contact">
              <Text sx={{ color: "brack", fontSize: 18, fontWeight: 700 }}>
                Contact
              </Text>
            </Link>
          </Group>
          <Burger
            opened={opened}
            onClick={toggle}
            className={classes.burger}
            size="sm"
          />
        </Container>
        <div className="bg-pink-600">
          <Container my="sm">
            <Grid>
              <Grid.Col xs={8}>
                <Space h="xl" />
                <Text sx={{ color: "white", fontSize: 36, fontWeight: 700 }}>
                  Shimabu IT University
                </Text>
                <Text sx={{ color: "white", fontSize: 16, fontWeight: 700 }}>
                  しまぶーのポートフォリオのためのページです
                </Text>
                <Space h="xl" />
              </Grid.Col>
              <Group spacing={20}>
                <Link href="/About">
                  <svg
                    width="21"
                    height="18"
                    viewBox="0 0 21 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.31 0.80501C19.4833 1.31365 18.5755 1.67658 17.626 1.87801C17.2272 1.44258 16.742 1.09512 16.2013 0.857847C15.6607 0.620572 15.0764 0.498697 14.486 0.500011C13.3479 0.50001 12.2565 0.951895 11.4515 1.75634C10.6464 2.56079 10.1938 3.65196 10.193 4.79001C10.193 5.13001 10.23 5.45901 10.27 5.78701C8.56637 5.69175 6.90167 5.24016 5.38345 4.46142C3.86524 3.68267 2.52727 2.59409 1.456 1.26601C1.08682 1.92182 0.876846 2.65519 0.843 3.40701C0.876 4.92101 1.633 6.23701 2.759 7.00101C2.08671 6.97883 1.43001 6.79277 0.846 6.45901C0.841016 6.48343 0.841016 6.5086 0.846 6.53301C0.841 8.58801 2.322 10.323 4.292 10.743C3.922 10.816 3.546 10.865 3.142 10.89C2.876 10.865 2.607 10.84 2.375 10.816C2.892 12.502 4.476 13.733 6.363 13.806C4.81774 14.9778 2.93622 15.6209 0.997 15.64L0 15.58C1.969 16.8345 4.25531 17.5006 6.59 17.5C14.476 17.5 18.793 10.953 18.775 5.31601C18.7904 5.11097 18.7904 4.90505 18.775 4.70001C19.6278 4.10332 20.3569 3.34705 20.922 2.47301C20.1495 2.83899 19.3209 3.07226 18.471 3.16301C19.3627 2.63266 20.0197 1.78338 20.309 0.787011"
                      fill="white"
                    />
                  </svg>
                </Link>
                <Link href="/Blog">
                  <svg
                    width="18"
                    height="19"
                    viewBox="0 0 18 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 9.1461C18 4.1501 13.97 0.100098 9.00001 0.100098C4.03001 0.100098 9.31527e-06 4.1501 9.31527e-06 9.1461C-0.00307406 11.2933 0.759387 13.3712 2.15048 15.0068C3.54158 16.6424 5.47019 17.7285 7.59001 18.0701V11.6941H5.39501V9.1401H7.58801V7.2601C7.58801 5.0741 8.91601 3.8851 10.855 3.8851C11.785 3.8851 12.583 3.9551 12.815 3.9851V6.2701H11.47C10.415 6.2701 10.21 6.7731 10.21 7.5121V9.1421H12.727L12.397 11.6961H10.21V18.1001C14.608 17.5031 18 13.7271 18 9.1461Z"
                      fill="white"
                    />
                  </svg>
                </Link>
                <Link href="Portfolio">
                  <svg
                    width="19"
                    height="18"
                    viewBox="0 0 19 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.41101 15.5935C5.41101 16.9138 4.34575 17.9845 3.0306 17.9845C1.71662 17.9845 0.650818 16.9138 0.650818 15.5935C0.650818 14.2714 1.71662 13.2009 3.0306 13.2009C4.34575 13.2009 5.41101 14.2713 5.41101 15.5935Z"
                      fill="white"
                    />
                    <path
                      d="M0.5 8.95773C0.5 9.2886 0.757694 9.56055 1.08654 9.57741C3.43948 9.69798 5.02196 10.5586 6.47946 12.0305C7.91171 13.4755 8.82277 15.5489 8.97923 17.4308C9.00599 17.7523 9.27332 18.0001 9.5944 18.0001H11.8063C11.9757 18.0001 12.1378 17.9301 12.2544 17.8066C12.3711 17.6831 12.4321 17.5169 12.4234 17.3469C12.1085 11.1476 7.32615 6.43683 1.1493 6.12724C0.98024 6.11874 0.815232 6.18036 0.692548 6.29752C0.569904 6.41468 0.5 6.57731 0.5 6.74739V8.95773Z"
                      fill="white"
                    />
                    <path
                      d="M0.5 2.83396C0.5 3.16754 0.761867 3.44083 1.09356 3.45404C8.6695 3.75519 14.759 9.79618 15.0626 17.4038C15.0759 17.7366 15.3482 17.9999 15.6797 17.9999H17.882C18.0496 17.9999 18.21 17.9315 18.3264 17.8104C18.4429 17.6893 18.5053 17.5259 18.4997 17.3576C18.1781 7.77294 10.6823 0.319769 1.13897 0.000344912C0.97158 -0.00526039 0.809146 0.0576523 0.688726 0.174658C0.568305 0.291586 0.5 0.452689 0.5 0.620966V2.83396Z"
                      fill="white"
                    />
                  </svg>
                </Link>
              </Group>
            </Grid>
          </Container>
        </div>
      </Header>
    </>
  );
}

export default HeaderArea;