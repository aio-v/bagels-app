import Image from "next/image";
import { Typography, Box } from '@mui/material';
import styles from './card.module.css';

export function CardIcon({ src, width, height, marginTop, marginLeft }) {
    return (
        <Box className={styles.icon + " " + "icon"} sx={{ ml: marginLeft, mt: marginTop }}>
            <Image src={src} width={width} height={height} alt="" />
        </Box>
    )
}

export function CardLabel({ text, marginTop, marginRight, marginBottom, marginLeft }) {
    return (
        <Box className={styles.label_wrapper} sx={{ pt: marginTop, pr: marginRight, pb: marginBottom, pl: marginLeft }}>
            <Typography component="h1" className={styles.label + " " + "label"}>
                {text}
            </Typography>
        </Box>
    )
}