import { Box, Button, Image, Grid, Container, Space } from "@mantine/core";
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
          paddingTop: "40px",
          paddingBottom: "40px",
        }}
      >
        {/* Link these to online ordering sites!*/}
        <Link
          href="https://www.clover.com/online-ordering/teaco-bubble-tea-lynnwood"
          target="blank"
        >
          <Button variant="filled" color="#015b01" fullWidth>
            Order Here!
          </Button>
        </Link>
      </Box>

      <Box
        style={{
          display: "flex",
          gap: "10px",
          justifyContent: "center",
          alignItems: "center",
          paddingBottom: "40px",
          marginBottom: "20px",
          flexDirection: "row",
        }}
      ></Box>

      <Grid>
        <Grid.Col span={{ md: 6 }}>
          <Image src={"/1.png"} alt="Milk Tea Menu"></Image>
        </Grid.Col>
        <Grid.Col span={{ md: 6 }}>
          <Image src={"/fruity.png"} alt="Fruit Tea Menu"></Image>
        </Grid.Col>
        <Grid.Col span={{ md: 6 }}>
          <Image src={"/4.png"} alt="Smoothie Menu"></Image>
        </Grid.Col>
        <Grid.Col span={{ md: 6 }}>
          <Image src={"/6.png"} alt="Streetfood Menu"></Image>
        </Grid.Col>
        <Grid.Col span={{ md: 6 }}>
          <Image src={"/lunch_menu.png"} alt="Lunch Menu"></Image>
        </Grid.Col>
      </Grid>
      <Space h="lg" />
    </Container>
  );
}
