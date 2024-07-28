import {
  Text,
  Center,
  Container,
  Stack,
  Image,
  Grid,
  BackgroundImage,
  Space,
} from "@mantine/core";

export default function IndexPage() {
  return (
    <Container>
      <Space h="md" />
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
                Our story began in Spring of 2011 when our first-generation
                family built a faraway home in the name of the Han River
                restaurant in the neighborhood of Mukilteo. Since then, we
                assimilated to the new culture by sharing our Asian love
                language, through food. Food has always been a center of our
                gatherings, a way to show affection and an invisible thread
                connecting different generations.
              </Text>
              <Text>
                Our story turned a page in Summer of 2022 when we evolved to
                Teaco, with tea stands for bubble tea and co stands for
                community. As our family deepen our roots in this neighborhood,
                we yearn for a space of connections. With Teaco, we hope to
                create a space that connect different generations, one sip at a
                time.
              </Text>
            </Stack>
          </Center>
        </Grid.Col>
      </Grid>
      <Space h="md" />
    </Container>
  );
}
