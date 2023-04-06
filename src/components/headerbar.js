import Image from 'next/image';
import Link from 'next/link';
import { Box, Typography, IconButton } from '@mui/material';
import styles from './headerbar.module.css';


function Logo() {
    return (
        <Link href="/home">
            <Box className={styles.logo_wrapper}>
                <img src="/Logo@2x.png" alt="Bagels"/>
            </Box>
        </Link>
    )
}

function NavBar() {
    return (
        <Box className={styles.nav_wrapper}>
            <Link href="/stats">
                <Typography className={styles.nav_text} component="h2">STATS</Typography>
            </Link>
            <Link href="/gallery">
                <Typography className={styles.nav_text} component="h2">GALLERY</Typography>
            </Link>
            <Link href="/badges">
                <Typography className={styles.nav_text} component="h2">BADGES</Typography>
            </Link>
            <a href="https://discord.com/invite/bagels">
                <Typography className={styles.nav_text} component="h2">DISCORD</Typography>
            </a>
            <a href="https://open.spotify.com/playlist/0gTsWoS7tITUg1sLBSO54C?si=5b6754888df24782">
                <Typography className={styles.nav_text} component="h2">PLAYLIST</Typography>
            </a>
            <Link href="/tba">
                <IconButton aria-label="switch mode">
                    <Image src="/Switch Modes@2x.png" width={20} height={20} alt="" />
                </IconButton>
            </Link>
        </Box>
    )
}

export default function HeaderBar() {
    return (
        <Box className={styles.header_wrapper}>
            <Logo />
            <Box className={styles.spacer}></Box>
            <NavBar />
        </Box>
    )
}