import {
  Container,
  Group,
  Anchor,
  Text,
  ActionIcon,
  Stack,
  Table,
} from "@mantine/core";
import classes from "./Footer.module.css";
import Link from "next/link";
import {
  IconBrandInstagram,
  IconBrandFacebook,
  IconBrandTiktok,
} from "@tabler/icons-react";

export function Footer() {
  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <Stack>
          <Text>
            <strong>Come say hi! ヾ(＾-＾)ノ</strong>
          </Text>
          <Table>
            <Table.Tbody>
              <Table.Tr style={{ borderBottom: "none" }}>
                <Table.Td>Sunday-Thursday</Table.Td>
                <Table.Td>10am-8pm</Table.Td>
              </Table.Tr>
              <Table.Tr style={{ borderBottom: "none" }}>
                <Table.Td>Tuesday</Table.Td>
                <Table.Td>CLOSED ╥﹏╥</Table.Td>
              </Table.Tr>
              <Table.Tr style={{ borderBottom: "none" }}>
                <Table.Td>Friday-Saturday</Table.Td>
                <Table.Td>10am-9pm</Table.Td>
              </Table.Tr>
            </Table.Tbody>
          </Table>
        </Stack>
        <Stack>
          <Text>
            Ring our line! <a href="tel:4253552084"> (425) 355-2084</a>
          </Text>
          <Text> Peep the socials! ◝(^⌣^)◜</Text>
          <Group>
            <Link href="https://www.instagram.com/teacopnw?igsh=MW02dWptbnpsbWFiNw==">
              <ActionIcon size="lg" color="#ffd2c6" variant="subtle">
                <IconBrandInstagram style={{ width: "42px", height: "42px" }} />
              </ActionIcon>
            </Link>
            <Link href="https://www.facebook.com/share/aHdCcd2Mp1DgS2Lc/?mibextid=LQQJ4d">
              <ActionIcon size="lg" color="#ffd2c6" variant="subtle">
                <IconBrandFacebook style={{ width: "42px", height: "42px" }} />
              </ActionIcon>
            </Link>
            <Link href="https://www.tiktok.com/@teacopnw?_t=8nXC3Nn1qA7&_r=1">
              <ActionIcon size="lg" color="#ffd2c6" variant="subtle">
                <IconBrandTiktok style={{ width: "42px", height: "42px" }} />
              </ActionIcon>
            </Link>
          </Group>
        </Stack>
      </Container>
    </footer>
  );
}
