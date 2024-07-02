import { Text, Center, Container, Stack, Image, Grid } from "@mantine/core";

export default function IndexPage() {
  return (
    <Container fluid style={{ backgroundColor: "#ffd2c6" }}>
      {/* A grid allows you to lay out elements horizontally - elements take out a portion of the width based out of 12 */}
      <Grid>
        {/* This span property sets how much the element takes - the base value is 12 (whole width) and then at medium (md) and above sizes it takes up a width of 4 (out of 12) */}
        <Grid.Col span={{ base: 12, md: 4 }}>
          <Image src={"/TeaCo_Logo.png"} alt="TeaCo Logo" />
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 8 }}>
          <Center style={{ height: "100%" }}>
            {/* The stack lays out its children vertically inside - that's why the about us is above the text content!  */}
            <Stack
              style={{
                backgroundColor: "#ff7520",
                color: "#015b01",
                padding: "50px",
                borderRadius: "10px",
                maxWidth: "700px",
                fontSize: "24px",
              }}
            >
              <Text fw={800}>About us:</Text>
              <Text>
                At Bubblicious Tea House, we believe that bubble tea is more
                than just a drink—it's a moment of joy, a burst of flavor, and a
                chance to indulge in a little happiness. Our skilled baristas
                craft each drink with love and precision, ensuring that every
                sip is as perfect as the last. From classic milk teas to
                innovative fruit infusions, our diverse menu offers something
                for every palate.
              </Text>
            </Stack>
          </Center>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
