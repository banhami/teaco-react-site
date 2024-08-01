import { Paper, Image, Text, Container, Transition, Overlay, BackgroundImage} from "@mantine/core";
import {useHover} from '@mantine/hooks';
import classes from "./Polaroid.module.css";

interface PolaroidTypes {
  image: string;
  alt: string;
  caption: string;
}

// The props (parameters) for polaroid are stated below, with their types specified by PolaroidTypes - see if you understand types but remind me to explain them to ya too haha
export function Polaroid({ image, alt, caption }: PolaroidTypes) {
const{hovered, ref} = useHover();
  return (
    <Container className={classes.PolaroidBody}>
      <Paper h={400} w={250} shadow="lg" className={classes.polaroid}  style={{backgroundColor: true ? 'white' : 'grey'}} ref={ref}>
        {hovered ? 
          <Text pt="10px" ta="center"> {caption} </Text>
          :<Image radius="md" h={320} src={image} alt={alt}/>}
      </Paper>
    </Container>
  );
}
