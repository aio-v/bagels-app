import { Container } from "@mui/material";
import HeaderBar from "./headerbar";

export default function Layout({ children }) {
    return (
        <Container disableGutters maxWidth='false' sx={{maxWidth: '85%',}}>
            <HeaderBar />
            <main>{children}</main>
        </Container>
    )
}