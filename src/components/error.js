import { useRouter } from 'next/router';
import { Box, Typography, Button } from '@mui/material';
import styles from './error.module.css';

export function ComingSoon() {
    return (
        <Box className={styles.container}>
            <Box className={styles.container}>
                <img className={styles.image} src="/Coming Soon.svg" alt="Feature Coming Soon!"/>
                <Box className={styles.label_wrapper}>
                    <Typography className={styles.label}>
                        COMING SOON™
                    </Typography>
                </Box>
            </Box>
            <GoBack />
        </Box>
    )
}

function GoBack() {
    const router = useRouter();
    const backText = "<< go back to where you came from";

    return (
        <Button disableRipple onClick={() => router.back()} sx={{
            "&.MuiButtonBase-root:hover": {
                bgcolor: "transparent"  
            }
        }}>
            <Typography className={styles.back}>
                {backText}
            </Typography>
        </Button>
    )
}