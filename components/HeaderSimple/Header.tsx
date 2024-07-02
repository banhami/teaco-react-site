import { useState } from "react";
import { Container, Group, Burger, Button } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./Header.module.css";
import { useRouter } from "next/router";

const navLinks = [
  { link: "/", label: "The Tea" },
  { link: "/community", label: "The Co" },
  { link: "/sipping", label: "Sipping" },
  { link: "/loving", label: "Loving" },
];

export function Header() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(navLinks[0].link);
  const router = useRouter();

  const items = navLinks.map((link) => (
    <Button
      key={link.label}
      className={classes.navLink}
      data-active={active === link.link || undefined}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
        router.push(link.link);
      }}
    >
      {link.label}
    </Button>
  ));

  return (
    <header className={classes.header}>
      <Container size="md">
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>

        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
}
