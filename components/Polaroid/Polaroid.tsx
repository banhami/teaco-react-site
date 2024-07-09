import { Paper, Image } from "@mantine/core";
import classes from "./Polaroid.module.css";

// Try removing the '?' from caption - what happens in community.tsx when you do?
interface PolaroidTypes {
  image: string;
  alt: string;
  caption?: string;
}

// The props (parameters) for polaroid are stated below, with their types specified by PolaroidTypes - see if you understand types but remind me to explain them to ya too haha
export function Polaroid({ image, alt, caption }: PolaroidTypes) {
  return (
    <Paper shadow="md" className={classes.polaroid}>
      {/* Looks like there's a polaroidBody class in our css file - is there something we could wrap the below items in so we can use that class? */}
      <Image radius="md" w="200" src={image} alt={alt} />
      {/* Try adding in something for a polaroid caption here that uses the 'caption' prop */}
    </Paper>
  );
}
