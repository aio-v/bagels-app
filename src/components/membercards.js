import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Box, Typography } from '@mui/material';
import styles from './membercards.module.css';

export default function MemberCards({ memberStats }) {
    return(
        <Box className={styles.big_wrapper}>
            {/* { JSON.stringify(memberStats) } */}
            <CharacterCard ign={memberStats.IGN} avatar={memberStats.AVATAR} job={memberStats.CLASS} level={memberStats.LEVEL} />
            <Badges />
            {/* ------------------------TO DO------------------------ */}
            <Placements />
            {/* ------------------------TO DO------------------------ */}

        </Box>
    )
}

export function CharacterCard({ ign, avatar, job, level }) {
    return(
        <Box className={styles.character_card}>
            <Box className={styles.char_wrapper}>
                <Image 
                src={avatar} 
                width={201}
                height={201}
                alt="Booper"
                />
                <Box>
                    <Typography className={styles.title}>{ign}</Typography>
                    <Box className={styles.info_wrapper}>
                        <Box className={styles.category + " " + styles.grid_item1}>Level</Box>
                        <Box className={styles.grid_item2}>{level}</Box>
                        <Box className={styles.category}>Class</Box>
                        <Box>{job}</Box>
                        <Box className={styles.category}>Participation</Box>
                        <Box>{job}</Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export function Badges() {
    return(
        <Box className={styles.badges_card}>
            <Typography className={styles.title + " " + styles.header}>BADGES</Typography>
            <Box sx={{ paddingLeft: '29px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5em', maxWidth: '100%'}}>
                <p>Coming Soon™</p>
            </Box>
        </Box>
    )
}

export function Placements() {
    return (
        <Box className={styles.placement_card}>
            <Typography className={styles.title + " " + styles.header}>PLACEMENTS</Typography>
            <Box>
                
            </Box>
        </Box>
    )
}