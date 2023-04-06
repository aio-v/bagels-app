import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Box, Typography } from '@mui/material';
import styles from './maincards.module.css';
import {CardLabel, CardIcon } from "./card";
import Timer from './timer';

export default function MainCards({ bestOfData, flagGangData, guildData }) {
    return (
        <Box sx={{
            display: 'flex', flexDirection: 'row', marginBottom: '30px', rowGap: '30px', columnGap: '16px', flexWrap: 'wrap'
        }}>
            <Badges />
            <BestOf data={bestOfData} />
            <Reminders />
            <FlagGang data={flagGangData} />
            <Placements data={guildData} />
        </Box>
    )
}

function Badges() {
    return (
        <Box className={styles.card + " " + styles.small_card + " " + "card"}>
            <CardIcon src="/Badges Icon.svg" width="55" height="80" marginLeft="20.15px" marginTop="6.43px"/>
            <CardLabel text="BADGES" marginLeft="48px" marginTop="26px" marginRight="0px" marginBottom="28px" />
            {/* ---------------------------------------
            WIP
            --------------------------------------- */}
            <Box sx={{ paddingLeft: '29px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5em', maxWidth: '100%'}}>
                <p>Coming Soon™</p>
            </Box>
            {/* ---------------------------------------
            WIP
            --------------------------------------- */}
        </Box>
    )
}

function BestOf({ data }) {
    return (
        <Box className={styles.card + " " + styles.small_card + " " + "card"}>
            <CardIcon src="/Best Of Icon.svg" width="79" height="80" marginLeft="7.92px" marginTop="6.43px"/>
            <CardLabel text="BEST OF BAGELS" marginLeft="48px" marginTop="26px" marginRight="0px" marginBottom="28px" />
            <Box className={styles.bestof_wrapper + " " + styles.text_wrapper}>
                <BestOfWrapper title="CULVERT" src="/Mob_Arcanus@2x.png" data={data.best_culvert} />
                <BestOfWrapper title="FLAG" src="/Programmer Simon@2x.png" data={data.best_flag} />
            </Box>
        </Box>
    )
}

function Reminders() {
    return (
        <Box className={styles.card + " " + styles.small_card + " " + "card"}>
            <CardIcon src="/Reminders Icon.svg" width="82" height="80" marginLeft="7.23px" marginTop="6.43px"/>
            <CardLabel text="REMINDERS" marginLeft="48px" marginTop="26px" marginRight="0px" marginBottom="28px" />
            <Box className={styles.text_wrapper + " " + styles.text}>
                <Box className={styles.category}>Flag</Box>
                Current Map:
                <Timer cutoff={{day: 0, hour: 23, minute: 0}} color="#D2BC74" />
            </Box>
            <Box className={styles.text_wrapper + " " + styles.text}>
                <Box className={styles.category}>Culvert</Box>
                <Timer cutoff={{day: 0, hour: 23, minute: 0}} color="#D2BC74" />
            </Box>
        </Box>
    )
}

function FlagGang({ data }) {
    const [flaggers, setFlaggers] = useState(data);

    useEffect(() => {
        const flaggers_filled = [...data];
        if(data.length < 5) {
            for(let i = 0; i < 5 - data.length; i++) {
                flaggers_filled.push({ign: "You're Next", avatar: "/Placeholder Dummy.png" })
            }
            setFlaggers(flaggers_filled);
        }
    }, [data]);

    return (
        <Box className={styles.card + " " + styles.big_card + " " + "card"}>
            <CardIcon src="/Flag Icon.svg" width="82" height="80" marginLeft="7.23px" marginTop="6.43px"/>
            <CardLabel text="1K GANG" marginLeft="48px" marginTop="26px" marginRight="0px" marginBottom="28px" />
            <Box className={styles.bestof_wrapper}>
                {
                    flaggers[0].ign != "You're Next" ? flaggers.slice(0,5).map((row, index) => 
                        <Box key={index} className={styles.item_wrapper}>
                            {
                                row.ign != "You're Next" ? <>
                                    <Link href={"/m/"+encodeURIComponent(row.ign)}>
                                        <Image 
                                        src={row.avatar ? row.avatar : "https://i.imgur.com/SXtkcXd.png"} 
                                        width={96} 
                                        height={96} 
                                        alt="Booper"/>
                                    </Link>
                                    <Typography className={styles.ign}>
                                        <Link href={"/m/"+encodeURIComponent(row.ign)} className={styles.link_hover}>{row.ign}</Link>
                                    </Typography>
                                    </>: <>
                                        <Box><Image 
                                        src={row.avatar ? row.avatar : "https://i.imgur.com/SXtkcXd.png"} 
                                        width={96} 
                                        height={96} 
                                        alt="Booper"
                                        /></Box>
                                        <Typography className={styles.ign}>{row.ign}</Typography>
                                    </>
                            } 
                        </Box>) : <Box className={styles.announcement}>
                            <p>{"NONE :("}</p>
                        </Box>
                }
            </Box>
        </Box>
    )
}

function Placements({ data }) {
    return (
        <Box className={styles.card + " " + styles.big_card + " " + "card"}>
            <CardIcon src="/Placements Icon.svg" width="82" height="80" marginLeft="7.23px" marginTop="6.43px"/>
            <CardLabel text="PLACEMENTS" marginLeft="48px" marginTop="26px" marginRight="0px" marginBottom="28px" />
            <Box className={styles.placement_wrapper}>
                <PlacementsWrapper title="CULVERT PARTICIPATION"
                    data={(((data.culvert_participation/data.member_count)*100) | 0) + "%"} 
                    subdata={data.culvert_participation + "/" + data.member_count} 
                    src="/Placements C. Participation Icon.svg"
                    color={styles.c_participation} />
                <PlacementsWrapper title="FLAG PARTICIPATION"
                    data={(((data.flag_participation/data.member_count)*100) | 0) + "%"} 
                    subdata={data.flag_participation + "/" + data.member_count} 
                    src="/Placements F. Participation Icon.svg"
                    color={styles.f_participation} />
                <PlacementsWrapper title="CULVERT" 
                    data={data.culvert_rank} 
                    subdata={data.culvert} 
                    src="/Placements Culvert Icon.svg"
                    color={styles.culvert} />
                <PlacementsWrapper title="FLAG RACE"
                    data={data.flag_rank} 
                    subdata={data.flag} 
                    src="/Placements Flag Race Icon.svg"
                    color={styles.flag} />
            </Box>
        </Box>
    )
}

function PlacementsWrapper({ title, data, subdata, src, color }) {
    return (
        <Box className={styles.placement_position}>
            <Box className={styles.placement_bg + " " + color}>
            </Box>
            <Box className={styles.placement_bg_img}>
                <img src={src} alt="" className={ title == "FLAG RACE" ? styles.flag_img : title == "CULVERT" ? styles.culvert_img : "" } />
            </Box>
            <Box className={styles.placement_text_wrapper}>  
                <Box>
                    <Typography className={styles.placement_text}>
                        {data}<span style={{
                            fontSize: '20px',
                            verticalAlign: 'super',
                            lineHeight: '20px'
                        }}>{
                            data && (title == "CULVERT" || title == "FLAG RACE") ? (data > "1" ? "th" : "st") : ""        
                            }</span>
                    </Typography>
                </Box>
                <Box>
                    <Box className={styles.placement_title}>
                        <Typography className={styles.placement_subtext}>{title}</Typography>
                        <Box className={styles.placement_subdata}>
                            <Typography className={styles.placement_subtext}>{subdata}</Typography>
                        </Box>
                    </Box>    
                </Box>          
            </Box>
        </Box>

    )
}

function BestOfWrapper({ title, src, data }) {
    return(
        <Box className={styles.item_wrapper}>
            <img src={src} alt="" className={styles.item_img} />
            <div className={styles.item_category}>{title}</div>
            <div className={styles.text}>{data}</div> 
        </Box>
    )
}