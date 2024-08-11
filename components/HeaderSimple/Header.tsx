import { useState } from "react";
import { Container, Group, Burger, Button, Drawer, Stack } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./Header.module.css";
import { useRouter } from "next/router";

const navLinks = [
  { link: "/", label: "The Tea" },
  { link: "/community", label: "The Co" },
  { link: "/sipping", label: "Sipping" },
  //{ link: "/loving", label: "Loving" },
];

export function Header() {
  const router = useRouter();
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(router.pathname);

  const items = navLinks.map((link) => (
    <Button
      key={link.label}
      className={classes.navLink}
      data-active={active === link.link || undefined}
      size="lg"
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
        router.push(link.link);
        opened && toggle();
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
      <Drawer
        position="top"
        opened={opened}
        onClose={toggle}
        padding="md"
        size="md"
        hiddenFrom="xs"
        overlayProps={{
          backgroundOpacity: 0.5,
          blur: 4,
        }}
      >
        {/* Render nav link items inside the Drawer */}
        <Stack>{items}</Stack>
      </Drawer>
    </header>
  );
}
