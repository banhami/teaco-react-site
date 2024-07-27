import { AspectRatio } from "@mantine/core";

export default function Sipping(){
    return(
        <AspectRatio ratio={16/9}>
            <iframe
                src="https://www.ubereats.com/store/teaco-tea-house/fGiQeDo8WgucbG-s3-pEyQ?diningMode=PICKUP&utm_campaign=place-action-link&utm_medium=organic&utm_source=google"
                title= "Order Online!"
                style={{border:0}}
            />
        </AspectRatio>
    );
}