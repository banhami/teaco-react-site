import { Box, Button, Card, Image, Text, Grid, Container, Space, BackgroundImage} from "@mantine/core";
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
        <Link href="https://www.clover.com/online-ordering/teaco-bubble-tea-lynnwood" target="blank">
          <Button variant="filled" color="#015b01" fullWidth>Order Here!</Button>
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
      >
      <Grid grow gutter="sm">
        <Grid.Col span={2}>
          <Link href="#milk_tea">
            <Button variant="filled" color="#015b01">Milk Teas</Button>
          </Link>
        </Grid.Col>
         
        <Grid.Col span={2}>
          <Link href="#fruit_tea">
            <Button variant="filled" color="#015b01">Fruit Teas</Button>
          </Link> 
        </Grid.Col>

        <Grid.Col span={2}>
          <Link href="#smoothie">
            <Button variant="filled" color="#015b01">Smoothies</Button>
          </Link> 
        </Grid.Col> 

        <Grid.Col span={2}>
          <Link href="#streetfood">
            <Button variant="filled" color="#015b01">Streetfood</Button>
          </Link>
        </Grid.Col>

        <Grid.Col span="auto">
          <Link href="#lunch">
            <Button variant="filled" color="#015b01">Lunch Menu</Button>
          </Link> 
        </Grid.Col>
      </Grid>
        
      </Box>

        <Grid>
          <Grid.Col span={{md:6}} id="milk_tea">
            <Image src={"/1.png"} alt="Milk Tea Menu"></Image>
          </Grid.Col> 
          <Grid.Col span={{md:6}} id="fruit_tea">
            <Image src={"/fruity.png"} alt="Fruit Tea Menu"></Image>
          </Grid.Col> 
          <Grid.Col span={{md:6}} id="smoothie">
            <Image src={"/4.png"} alt="Smoothie Menu"></Image>
          </Grid.Col>  
          <Grid.Col span={{md:6}} id="streetfood">
            <Image src={"/6.png"} alt="Streetfood Menu"></Image>
          </Grid.Col> 
          <Grid.Col span={{md:6}} id="lunch">
            <Image src={"/lunch_menu.png"} alt="Lunch Menu"></Image>
          </Grid.Col> 
        </Grid>
      
      {/* <Text>Milk Teas</Text>
      <Grid id="milk_tea">
        <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
          <Card shadow="sm" padding="lg">
            <Card.Section>
              <Image
                src="https://via.placeholder.com/150"
                height={160}
                alt="O'Honey"
              />
            </Card.Section>
            <Text size="lg" style={{ marginTop: "10px" }}>
              O'Honey
            </Text>
            <Text size="sm" color="dimmed">
              Honeydew milk tea topped with lychee and strawberry popping boba
            </Text>
          </Card>
        </Grid.Col>

        <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
          <Card shadow="sm" padding="lg">
            <Card.Section>
              <Image
                src="https://via.placeholder.com/150"
                height={160}
                alt="Cafe Sua Da"
              />
            </Card.Section>
            <Text size="lg" style={{ marginTop: "10px" }}>
              Cafe Sua Da
            </Text>
            <Text size="sm" color="dimmed">
              Vietnamese iced coffee
            </Text>
          </Card>
        </Grid.Col>

        <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
          <Card shadow="sm" padding="lg">
            <Card.Section>
              <Image
                src="https://via.placeholder.com/150"
                height={160}
                alt="King Kong"
              />
            </Card.Section>
            <Text size="lg" style={{ marginTop: "10px" }}>
              King Kong
            </Text>
            <Text size="sm" color="dimmed">
              Assam black milk tea topped with honey boba, crystal boba, aloe vera, lychee jelly, and egg pudding.
            </Text>
          </Card>
        </Grid.Col>

        <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
          <Card shadow="sm" padding="lg">
            <Card.Section>
              <Image
                src="https://via.placeholder.com/150"
                height={160}
                alt="Thaiger"
              />
            </Card.Section>
            <Text size="lg" style={{ marginTop: "10px" }}>
              Thaiger
            </Text>
            <Text size="sm" color="dimmed">
              Thai milk tea topped with honey boba.
            </Text>
          </Card>
        </Grid.Col>

        <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
          <Card shadow="sm" padding="lg">
            <Card.Section>
              <Image
                src="https://via.placeholder.com/150"
                height={160}
                alt="Lily"
              />
            </Card.Section>
            <Text size="lg" style={{ marginTop: "10px" }}>
              Lily
            </Text>
            <Text size="sm" color="dimmed">
              Taro milk tea topped with crystal boba. Also try with our seasalt creama.
            </Text>
          </Card>
        </Grid.Col>

        <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
          <Card shadow="sm" padding="lg">
            <Card.Section>
              <Image
                src="https://via.placeholder.com/150"
                height={160}
                alt="Peachaboo"
              />
            </Card.Section>
            <Text size="lg" style={{ marginTop: "10px" }}>
              Peachaboo
            </Text>
            <Text size="sm" color="dimmed">
              Peach oolong milk tea topped with crystal boba.
            </Text>
          </Card>
        </Grid.Col>

        <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
          <Card shadow="sm" padding="lg">
            <Card.Section>
              <Image
                src="https://via.placeholder.com/150"
                height={160}
                alt="Jaguar Milk"
              />
            </Card.Section>
            <Text size="lg" style={{ marginTop: "10px" }}>
              Menu Item 4
            </Text>
            <Text size="sm" color="dimmed">
              Brown sugar fresh milk topped with honey boba
]            </Text>
          </Card>
        </Grid.Col>

        <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
          <Card shadow="sm" padding="lg">
            <Card.Section>
              <Image
                src="https://via.placeholder.com/150"
                height={160}
                alt="Pebble Mint"
              />
            </Card.Section>
            <Text size="lg" style={{ marginTop: "10px" }}>
              Menu Item 4
            </Text>
            <Text size="sm" color="dimmed">
              Thai green milk tea topped with honey boba and crystal boba.
]            </Text>
          </Card>
        </Grid.Col>
      </Grid>


      <Grid id="fruit_tea">
        <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
          <Card shadow="sm" padding="lg">
            <Card.Section>
              <Image
                src="https://via.placeholder.com/150"
                height={160}
                alt="Lemonada"
              />
            </Card.Section>
            <Text size="lg" style={{ marginTop: "10px" }}>
              Menu Item 1
            </Text>
            <Text size="sm" color="dimmed">
              Salted plum lemonade green tea topped with salted plum bits.
            </Text>
          </Card>
        </Grid.Col>

        <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
          <Card shadow="sm" padding="lg">
            <Card.Section>
              <Image
                src="https://via.placeholder.com/150"
                height={160}
                alt="Chee Li"
              />
            </Card.Section>
            <Text size="lg" style={{ marginTop: "10px" }}>
              Menu Item 2
            </Text>
            <Text size="sm" color="dimmed">
              Strawberry green tea lemonade topped with muddled strawberry.
            </Text>
          </Card>
        </Grid.Col>

        <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
          <Card shadow="sm" padding="lg">
            <Card.Section>
              <Image
                src="https://via.placeholder.com/150"
                height={160}
                alt="Winter Blossom"
              />
            </Card.Section>
            <Text size="lg" style={{ marginTop: "10px" }}>
              Menu Item 3
            </Text>
            <Text size="sm" color="dimmed">
              Winter-molon green tea topped with grass jelly and house made seasalt creama.
            </Text>
          </Card>
        </Grid.Col>

        <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
          <Card shadow="sm" padding="lg">
            <Card.Section>
              <Image
                src="https://via.placeholder.com/150"
                height={160}
                alt="Starboy"
              />
            </Card.Section>
            <Text size="lg" style={{ marginTop: "10px" }}>
              Menu Item 4
            </Text>
            <Text size="sm" color="dimmed">
              Guava mango and passionfruit tea topped with mango bits, and mango jelly.
=            </Text>
          </Card>
        </Grid.Col>

        <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
          <Card shadow="sm" padding="lg">
            <Card.Section>
              <Image
                src="https://via.placeholder.com/150"
                height={160}
                alt="Lychee Bomb"
              />
            </Card.Section>
            <Text size="lg" style={{ marginTop: "10px" }}>
              Menu Item 4
            </Text>
            <Text size="sm" color="dimmed">
              Lychee green tea topped with basil seeds, lychee jelly, and lychee bits.
            </Text>
          </Card>
        </Grid.Col>
        
        <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
          <Card shadow="sm" padding="lg">
            <Card.Section>
              <Image
                src="https://via.placeholder.com/150"
                height={160}
                alt="King K"
              />
            </Card.Section>
            <Text size="lg" style={{ marginTop: "10px" }}>
              Menu Item 4
            </Text>
            <Text size="sm" color="dimmed">
              Peach premium black tea topped with peach slices
            </Text>
          </Card>
        </Grid.Col>

        <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
          <Card shadow="sm" padding="lg">
            <Card.Section>
              <Image
                src="https://via.placeholder.com/150"
                height={160}
                alt="Jeju"
              />
            </Card.Section>
            <Text size="lg" style={{ marginTop: "10px" }}>
              Menu Item 4
            </Text>
            <Text size="sm" color="dimmed">
              Peach lemongrass orange premium black tea topped with lemon, orange and peach slice.
            </Text>
          </Card>
        </Grid.Col>

        <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
          <Card shadow="sm" padding="lg">
            <Card.Section>
              <Image
                src="https://via.placeholder.com/150"
                height={160}
                alt="Rosey"
              />
            </Card.Section>
            <Text size="lg" style={{ marginTop: "10px" }}>
              Rosey
            </Text>
            <Text size="sm" color="dimmed">
              Watermelon green tea topped with lychee jelly, aloe vera, basil seeds, and watermelon bits.
            </Text>
          </Card>
        </Grid.Col>
      </Grid>


      <Grid id="smoothie">
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

      <Space h="md"/>*/}

      
    </Container>
  );
}
      
