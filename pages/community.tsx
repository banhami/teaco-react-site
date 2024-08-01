import { Container, Grid,BackgroundImage, Space } from "@mantine/core";
import { Polaroid } from "../components/Polaroid/Polaroid";

export default function CommunityPage() {
  return (
    <BackgroundImage src={"/Background.png"}>
      <Container fluid>
        <Space h="md"/>
      {/* Remember a grid has a total width of 12! So if all the children add up to over 12 they'll overflow */}
        <Grid gutter="md">
          <Grid.Col span={{base:12, md: 3}}>
            <Polaroid 
              image={"./Drew.png"} 
              alt={"Drew"} 
              caption={"Drew"}
            />
          </Grid.Col>

          <Grid.Col span={{base:12, md: 3}}>    
            <Polaroid 
              image={"./AaronTeaCoSite.jpeg"} 
              alt={"Aaron"} 
              caption={"Meet Aaron! His favorite drink is the Pebble Mint. TeaCo has become an example of what community and communal spaces look like. It went from just another store I would pop into from time to time into a space that’s filled with people I care about and love having in my life. "}
            />
          </Grid.Col>

          <Grid.Col span={3}>
          <Polaroid 
              image={"./AaronTeaCoSite.jpeg"} 
              alt={"Imran"} 
              caption={"Meet Imran! His favorite drink is the Rosie. Meeting Trang"}
            />
          </Grid.Col>

          <Grid.Col span={3}>
          <Polaroid 
              image={"./AaronTeaCoSite.jpeg"} 
              alt={"Alex"} 
              caption={"Meet Alex! His favorite drink is the Starboy. I don't have a specific one, but honestly probably just walking in every time and getting to chat with Trang or whoever is there! The space is special to me because I feel like I'm visiting friends more than just visiting a shop (with the added bonus of some yummy drinks)"}
            />
          </Grid.Col>

          <Grid.Col span={3}>
          <Polaroid 
              image={"./AaronTeaCoSite.jpeg"} 
              alt={"Aaron"} 
              caption={"Aaron"}
            />
          </Grid.Col>
        </Grid>
      </Container>
      <Space h="md"/>
    </BackgroundImage>
  );
}
