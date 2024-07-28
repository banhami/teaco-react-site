import { Box, Button, Card, Image, Text, Grid, Container } from "@mantine/core";
import Link from "next/link";

export default function Sipping() {
  return (
    <Container>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          marginBottom: "20px",
          alignItems: "center",
          paddingTop: "80px",
          paddingBottom: "80px",
        }}
      >
        {/* Link these to online ordering sites!  */}
        <Link href="">
          <Button variant="filled">Order Here!</Button>
        </Link>
        <Link href="">
          <Button variant="filled">Order with UberEats</Button>
        </Link>
      </Box>

      <Grid>
        <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
          <Card shadow="sm" padding="lg">
            <Card.Section>
              <Image
                src="https://via.placeholder.com/150"
                height={160}
                alt="Menu Item 1"
              />
            </Card.Section>
            <Text size="lg" style={{ marginTop: "10px" }}>
              Menu Item 1
            </Text>
            <Text size="sm" color="dimmed">
              This is a description of the first menu item. It includes
              delicious ingredients and is highly recommended!
            </Text>
          </Card>
        </Grid.Col>

        <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
          <Card shadow="sm" padding="lg">
            <Card.Section>
              <Image
                src="https://via.placeholder.com/150"
                height={160}
                alt="Menu Item 2"
              />
            </Card.Section>
            <Text size="lg" style={{ marginTop: "10px" }}>
              Menu Item 2
            </Text>
            <Text size="sm" color="dimmed">
              This is a description of the second menu item. It's a popular
              choice among our customers!
            </Text>
          </Card>
        </Grid.Col>

        <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
          <Card shadow="sm" padding="lg">
            <Card.Section>
              <Image
                src="https://via.placeholder.com/150"
                height={160}
                alt="Menu Item 3"
              />
            </Card.Section>
            <Text size="lg" style={{ marginTop: "10px" }}>
              Menu Item 3
            </Text>
            <Text size="sm" color="dimmed">
              Try our third menu item for a delightful experience. It's packed
              with flavor and freshness.
            </Text>
          </Card>
        </Grid.Col>

        <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
          <Card shadow="sm" padding="lg">
            <Card.Section>
              <Image
                src="https://via.placeholder.com/150"
                height={160}
                alt="Menu Item 4"
              />
            </Card.Section>
            <Text size="lg" style={{ marginTop: "10px" }}>
              Menu Item 4
            </Text>
            <Text size="sm" color="dimmed">
              The fourth menu item is a must-try! It features a unique blend of
              ingredients that will tantalize your taste buds.
            </Text>
          </Card>
        </Grid.Col>

        <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
          <Card shadow="sm" padding="lg">
            <Card.Section>
              <Image
                src="https://via.placeholder.com/150"
                height={160}
                alt="Menu Item 4"
              />
            </Card.Section>
            <Text size="lg" style={{ marginTop: "10px" }}>
              Menu Item 4
            </Text>
            <Text size="sm" color="dimmed">
              The fourth menu item is a must-try! It features a unique blend of
              ingredients that will tantalize your taste buds.
            </Text>
          </Card>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
