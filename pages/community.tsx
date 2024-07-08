import { Text, Center, Container, Stack, Image, Grid, GridCol, Paper } from "@mantine/core";

export default function CommunityPage(){
    return(
    <Container fluid style={{backgroundColor: "#ffd2c6"}}>
        <Grid gutter="md">
            <Grid.Col span={2}>    
                <Paper shadow="md"> 
                    <Image 
                        radius="md"
                        w="200" 
                        src={"/Drew.png"} 
                        alt="Drew"
                    />
                    
                </Paper>
            </Grid.Col>

            <Grid.Col span={3}> 
                <Paper shadow="xs"> 
                    <text> One person goes here</text>
                </Paper>
            </Grid.Col>

            <Grid.Col span={3}> 
                <Paper shadow="xs"> 
                    <text> One person goes here</text>
                </Paper>
            </Grid.Col>

            <Grid.Col span={3}> 
                <Paper shadow="xs"> 
                    <text> One person goes here</text>
                </Paper>
            </Grid.Col>

            <Grid.Col span={3}> 
                <Paper shadow="xs"> 
                    <text> One person goes here</text>
                </Paper>
            </Grid.Col>
        </Grid>
    </Container>
    );
}

