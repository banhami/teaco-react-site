import { Container, Grid, Paper } from "@mantine/core";
import { Polaroid } from "../components/Polaroid/Polaroid";

export default function CommunityPage() {
  return (
    <Container fluid style={{ backgroundColor: "#ffd2c6" }}>
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
            caption={"Aaron"}
          />
        </Grid.Col>

        <Grid.Col span={3}></Grid.Col>

        <Grid.Col span={3}></Grid.Col>

      </Grid>
    </Container>
  );
}
