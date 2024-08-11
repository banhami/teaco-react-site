import { Container, Grid, Space, Text } from "@mantine/core";
import { Polaroid } from "../components/Polaroid/Polaroid";
import { Footer } from "../components/Footer/Footer";

export default function CommunityPage() {
  function CenteredGridCol({ children }) {
    return (
      <Grid.Col
        span={{ base: 12, lg: 3, md: 4, sm: 6 }}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {children}
      </Grid.Col>
    );
  }

  return (
    <Container fluid>
      <Space h="md" />
      {/* Remember a grid has a total width of 12! So if all the children add up to over 12 they'll overflow */}
      <Grid>
        <CenteredGridCol>
          <Polaroid
            image={"./Drew.png"}
            alt={"Drew"}
            caption={
              " Meet Drew! I dont think he has a favorite drink but I think his favorite memory is meeting his girlfriend here <3 Maybe you can find your SO here too!!!! "
            }
          />
        </CenteredGridCol>

        <CenteredGridCol>
          {" "}
          <Polaroid
            image={"./AaronTeaCoSite.jpeg"}
            alt={"Aaron"}
            caption={
              "Meet Aaron! His favorite drink is the Pebble Mint. TeaCo has become an example of what community and communal spaces look like. It went from just another store I would pop into from time to time into a space that’s filled with people I care about and love having in my life. "
            }
          />
        </CenteredGridCol>

        <CenteredGridCol>
          <Polaroid
            image={"./Imran.png"}
            alt={"Imran"}
            caption={
              "Meet Imran! His favorite drink at TeaCo is the Rosie. His Favorite memory from TeaCo is Meeting Trang (Boss Lady!)"
            }
          />
        </CenteredGridCol>

        <CenteredGridCol>
          <Polaroid
            image={"./Alex.png"}
            alt={"Alex"}
            caption={
              "Meet Alex! His favorite drink is the Starboy. Alex doesnt have a specific favorite memory, but he says:probably just walking in every time and getting to chat with Trang or whoever is there! The space is special to me because I feel like I'm visiting friends more than just visiting a shop (with the added bonus of some yummy drinks) (He doesnt actually look like that)"
            }
          />
        </CenteredGridCol>

        <CenteredGridCol>
          <Polaroid
            image={"./caitlin.png"}
            alt={"Caitlin"}
            caption={
              "Meet Caitlin! Her favorite drink is the Cafe Sua Da. Her favorte memomry at TeaCo is simply all of the friends that she has made here at the shop"
            }
          />
        </CenteredGridCol>

        <CenteredGridCol>
          <Polaroid image={"./mimi.png"} alt={"Mimi"} caption={"Meet Mimi! "} />
        </CenteredGridCol>

        <CenteredGridCol>
          <Polaroid
            image={"./kathy.png"}
            alt={"Kathy"}
            caption={"Meet Mimi! "}
          />
        </CenteredGridCol>

        <CenteredGridCol>
          <Polaroid
            image={"./trang.png"}
            alt={"Trang"}
            caption={"Meet Trang"}
          />
        </CenteredGridCol>
      </Grid>
      <Space h="lg" />
    </Container>
  );
}
