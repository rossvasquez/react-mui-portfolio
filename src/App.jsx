import React, { useRef } from 'react';
import Carousel from 'react-material-ui-carousel'
import { Timeline } from 'react-twitter-widgets'
import { Button, Backdrop, Box, SpeedDial, Stack, SpeedDialAction, CssBaseline, Grid, Container, Card, Chip, CardMedia, CardContent, Typography, Avatar, CardActions, Link } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import Divider from '@mui/material/Divider';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import FileOpenIcon from '@mui/icons-material/FileOpen';

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { styleSheet } from './/styles.js'
import { projectCardInfo } from './/project-cards-info.js'

const actions = [
  { icon: <AccessibilityIcon css={css`color: #404040;`} />, name: 'About', onClick: 1 },
  { icon: <FolderOpenIcon css={css`color: #404040;`} />, name: 'Projects', onClick: 2 },
  { icon: <ConnectWithoutContactIcon css={css`color: #404040;`} />, name: 'Connect', onClick: 3 }
];



const App = () => {

  const aboutRef = useRef();
  const projectsRef = useRef();
  const connectRef = useRef();

  const scrollTo = (id) => {
    console.log("iter");
    if (id === 1) {
      aboutRef.current.scrollIntoView();
    } else if (id === 2) {
      projectsRef.current.scrollIntoView();
    } else if (id === 3) {
      connectRef.current.scrollIntoView();
    }
  }
  
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };
  
  
  return (
    <>
      <CssBaseline />
      <div css={styleSheet.dynamic}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div css={styleSheet.gdBack}>
        <Backdrop
          open={open}
          onClick={handleClose}
        >

        </Backdrop>
      </div>

      {/* Landing Section */}


      <div css={styleSheet.landingDiv}>
        <Typography css={styleSheet.name} color="white">
          Ross Vasquez
        </Typography>
        <Avatar
          alt="Ross Vasquez"
          src={require('./static/images/avatar/1.jpg')}
          css={styleSheet.mainPic}
        />
        <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
          <SpeedDial
            ariaLabel="Portfolio Menu Dial"
            css={styleSheet.menuIcon}
            FabProps={{
              sx: {
                bgcolor: '#404040',
                '&:hover': {
                  bgcolor: '#80d8ff',
                }
              }
            }}
            icon={<MenuIcon css={css`height: 60%; width: 60%; color: #FFFFFF;`} />}
            direction="down"
          >
            {actions.map((action) => (
              <SpeedDialAction
                key={action.name}
                icon={action.icon}
                tooltipTitle={action.name}
                onClick={() => scrollTo(action.onClick)}
                FabProps={{
                  sx: {
                    bgcolor: '#B3B3B3',
                    '&:hover': {
                      bgcolor: '#80d8ff',
                    }
                  },
                  size: "large"
                }}
              />
            ))}
          </SpeedDial>
        </Box>
        <div>
          <Typography variant="h2" align="center" css={styleSheet.welcomeMessage}>
            welcome to my <span css={styleSheet.welcomeEmphasis}>portfolio.</span>
          </Typography>
        </div>
      </div>

      {/* About Section */}

      <div css={styleSheet.aboutDiv}>
        <Container maxWidth="lg" >
          <Divider textAlign="left" css={styleSheet.sectionDivider}>
            <Typography css={styleSheet.sectionHeader} color="white">
              About
            </Typography>
          </Divider>
          <div css={styleSheet.aboutBack} ref={aboutRef}>
            <Carousel
              height={400}
              autoPlay={false}
              indicators={false}
              duration={200}
              animation="slide"
              cycleNavigation={false}
              fullHeightHover={false}     // We want the nav buttons wrapper to only be as big as the button element is
              navButtonsProps={{          // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
                style: {
                  backgroundColor: '#404040',
                  borderRadius: '5px',
                  color: '#B3B3B3',
                  fontSize: 'clamp(14px, 2.5vw, 20px)'
                }
              }}
              navButtonsWrapperProps={{   // Move the buttons to the bottom. Unsetting top here to override default style.
                style: {
                  top: '80%',
                  position: 'absolute',
                }
              }}
              NextIcon='NEXT'             // Change the "inside" of the next button to "next"
              PrevIcon='PREV'             // Change the "inside of the prev button to "prev"
              navButtonsAlwaysVisible={true}
            >
              <Typography css={styleSheet.about} variant="subtitle1" color="white">
                As a Tippie College of Business student I realized I wanted more.
                Being a marketing analytics student, we were fed small pieces of
                what programming is capable of. From there I determined that I would use
                my life-long knowledge of the internet to <span css={styleSheet.aboutEmphasis}>fulfill my curiosity</span>.
              </Typography>
              <Typography css={styleSheet.about} variant="subtitle1" color="white">
                In the Spring of 2022 I used the Kivy framework (Python) to
                create a semblance of an application, an accomplishment that made
                me realize the <span css={styleSheet.aboutEmphasis}>power to create</span>. Over the summer of 2022 I pondered coding
                bootcamps. I was concerned in commiting
                to something that may not end up holding credibility.
              </Typography>
              <Typography css={styleSheet.about} variant="subtitle1" color="white">
                I pivoted and discovered
                Salesforce certifications, becomming a <span css={styleSheet.aboutEmphasis}>Certified Salesforce Administrator</span> in December of 2022.
                The ability to create Salesforce Orgs and configure various pieces of the
                software was extremly interesting to me.
              </Typography>
              <Typography css={styleSheet.about} variant="subtitle1" color="white">
                A conversation with a senior web-developer in November of 2022
                made me rethink my pursuits. It was sort of an <span css={styleSheet.aboutEmphasis}>aha moment</span>, I loved to create,
                why bind myself to the constraints of Salesforce.
              </Typography>
              <Typography css={styleSheet.about} variant="subtitle1" color="white">
                Immediately following the acquisition
                of my Saleforce certification I furiously dove into <span css={styleSheet.aboutEmphasis}>learning web-technology</span>. I learned by creating
                an initial portfolio page. From there I was thinking big. I searched for issues to solve
                and found one at my place of work.
              </Typography>
              <Typography css={styleSheet.about} variant="subtitle1" color="white">
                This resulted in me building a full fledged web-app
                in <span css={styleSheet.aboutEmphasis}>Vanilla JS</span> that allows customers to place catering orders on an in-house platform. From there it was clear I needed to learn a JS framework.
                I began learning <span css={styleSheet.aboutEmphasis}>React</span> and utilized <span css={styleSheet.aboutEmphasis}>MUI</span> to create this portfolio page.
              </Typography>
            </Carousel>
          </div>
        </Container>
      </div>

      {/* Projects Section */}

      {/* backdrop/masonry for graphic design project card expanded */}

      <div css={styleSheet.projectsDiv} ref={projectsRef}>
        <Container maxWidth="lg">
          <Divider textAlign="left" css={styleSheet.sectionDivider}>
            <Typography color="white" css={styleSheet.projectHeader}>
              Projects
            </Typography>
          </Divider>
          <Grid container spacing={3} css={css`margin-top: 10px;`}>
            {projectCardInfo.map((cardi) => (
              <Grid item key={cardi.name} xs={12} sm={12} md={6} lg={6} xl={6}>
                <Card css={styleSheet.card}>
                  <CardMedia
                    component="img"
                    image={cardi.image}
                    css={cardi.alignment}
                  />
                  <CardContent css={css`flex-grow: 1;`}>
                    <div css={styleSheet.infoContainer}>
                      <Typography gutterBottom variant="h5" color="white">
                        {cardi.name}
                      </Typography>
                      <Typography gutterBottom css={css`color: #B3B3B3;`}>
                        {cardi.description}
                      </Typography>
                    </div>
                    {cardi.chips.map((chip) => (
                      <Chip
                        avatar={chip.avatar}
                        label={chip.label}
                        css={chip.css}
                        variant={chip.variant}
                      />
                    ))}
                  <Divider css={css`background-color: #B3B3B3; margin-bottom: 14px; margin-top: 14px;`} />
                  </CardContent>
                  <CardActions disableSpacing>
                      <div css={styleSheet.buttonContainer}>
                          {cardi.buttons.map((button) => (
                            <Link
                            href={button.link}
                            underline="none"
                            >
                            <Button
                              variant={button.variant}
                              sx={button.sX}
                              disableElevation 
                            >
                              {button.message}
                            </Button>
                            </Link>
                          ))}
                        {/* {cardi.moreInfo} make this a button here and map the props so onclick can do it's thang */}
                        {cardi.test}
                      </div>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>

      {/* Connect Section */}

      <div css={styleSheet.connectDiv} ref={connectRef}>
        <Container maxWidth='lg'>
          <Divider textAlign="left" css={styleSheet.sectionDivider}>
            <Typography css={styleSheet.sectionHeader} color="white">
              Connect
            </Typography>
          </Divider>
          <Card css={styleSheet.card1}>
            <CardContent>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={5} lg={5} xl={5} >
                  <div css={css`width: fit-content; position: relative; transform: translate(-50%, -50%); left: 50%; top: 50%; padding-top: 20px; padding-bottom: 20px;`}>
                    <Stack spacing={3} >
                      <div>
                        <ContactPhoneIcon css={css`color: #B3B3B3; float: left; font-size: 40px;`} />
                        <Typography css={css`color: #FFFFFF; margin-left: 55px; margin-top: 7.5px;`}>
                          +1 (515) 707 6811
                        </Typography>
                      </div>
                      <div>
                        <ContactMailIcon css={css`color: #B3B3B3; float: left; font-size: 40px;`} />
                        <Typography css={css`color: #FFFFFF; margin-left: 55px; margin-top: 7.5px;`}>
                          ross.vasquez.17@gmail.com
                        </Typography>
                      </div>
                      <div>
                        <FileOpenIcon css={css`color: #B3B3B3; float: left; font-size: 40px;`} />
                        <Typography css={css`color: #FFFFFF; margin-left: 55px; margin-top: 7.5px;`}>
                          Resume
                        </Typography>
                      </div>
                    </Stack>
                  </div>
                </Grid>
                <Grid item md={1} lg={1} xl={1} sx={{ display: { sm: 'none', md: 'block' } }}>
                  <Divider orientation='vertical' css={styleSheet.connectDivider} />
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                  <div css={css`width: fit-content; position: relative; transform: translate(-50%, -50%); left: 50%; top: 50%; padding-bottom: 20px; padding-top: 20px;`} >
                    <Stack direction="row" spacing={{ xs: 5, sm: 3, md: 8, lg: 12 }} >
                      <Avatar
                        alt="GitHub"
                        src={require("./static/images/chips/github.png")}
                        sx={{ width: 110, height: 110 }}
                      />
                      <Avatar
                        alt="LinkedIn"
                        src={require("./static/images/chips/linkedin.png")}
                        sx={{ width: 110, height: 110 }}
                      />
                    </Stack>
                  </div>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <Card css={styleSheet.tweetCard}>
            <Timeline
              dataSource={{
                sourceType: 'profile',
                screenName: 'quezdevelops'
              }}
              options={{
                height: '600',
                width: 'auto',
                theme: "dark",
                chrome: 'noscrollbar nofooter transparent noborders',
                showReplies: false
              }}

            />
          </Card>
        </Container>
      </div>

    </>
  );
}

export default App;