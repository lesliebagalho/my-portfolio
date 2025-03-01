import { Button, Container, Grid, Grid2, styled, Typography } from "@mui/material"
import Avatar from "../../../../assets/images/avatar.png"
import DownloadIcon from '@mui/icons-material/Download';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const Hero = () => {

  const StyledHero = styled("div") (() => ({
    backgroundColor: "black",
    height: "100vh",
  }))

  const StyledImg = styled("img") (() => ({
    width: "100%",
    borderRadius: "50%"
  }))

  return (
    <>
      <StyledHero>
        <Container>
          <Grid2 container spacing={2}>
            <Grid2 item xs={12} md={4}>
              <StyledImg src={Avatar} />
            </Grid2>
            <Grid2 item xs={12} md={4}>
              <Typography color="primary" variant="h1" textAlign="center">Leslie Bagalho</Typography>
              <Typography color="primary" variant="h2" textAlign="center">I'm software developer</Typography>

              <Grid container display="flex" justifyContent="center">
                <Grid item xs={12} md={6} display="flex" justifyContent="center">
                  <Button>
                    <DownloadIcon />
                    Download CV
                  </Button>
                </Grid>
                <Grid item  xs={12} md={6} display="flex" justifyContent="center">
                  <Button>
                  <MailOutlineIcon />
                  Contact me
                </Button>
                </Grid>
              </Grid>
            </Grid2>
          </Grid2>
        </Container>
      </StyledHero>
    </>
  )
}

export default Hero
