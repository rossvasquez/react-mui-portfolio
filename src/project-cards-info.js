import React from 'react';
import { css } from '@emotion/react'
import { Link, Avatar, Button, Backdrop, Container } from '@mui/material'
import Masonry from '@mui/lab/Masonry';
import { styleSheet } from './/styles.js'

const myData =[
    {img: require('./static/images/gd/1.jpg')},
    {img: require('./static/images/gd/2.jpg')},
    {img: require('./static/images/gd/3.png')},
    {img: require('./static/images/gd/4.jpg')},
    {img: require('./static/images/gd/5.jpg')},
    {img: require('./static/images/gd/6.jpg')},
    {img: require('./static/images/gd/7.jpg')},
    {img: require('./static/images/gd/8.jpg')},
    {img: require('./static/images/gd/9.jpg')},
    {img: require('./static/images/gd/10.jpg')},
    {img: require('./static/images/gd/11.jpg')},
    {img: require('./static/images/gd/12.jpg')},
    {img: require('./static/images/gd/13.jpg')},
    {img: require('./static/images/gd/14.jpg')},
    {img: require('./static/images/gd/15.jpg')},
    {img: require('./static/images/gd/16.jpg')},
    {img: require('./static/images/gd/17.jpg')},
    {img: require('./static/images/gd/18.jpg')},
]

function ZExpand() {

    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
        document.body.style.overflow = 'unset';
    };
    const handleToggle = () => {
        setOpen(!open);
        document.body.style.overflow = 'hidden';
    };

    return (
        <>
            <Button
                variant="contained"
                sx= {{backgroundColor: '#282828', margin: '10px', width: '47%', "&:hover":{backgroundColor: '#80d8ff', color: '#404040'}}}
                onClick={handleToggle}
                disableElevation 
            >
            Expand
            </Button>
            <Link 
                href="https://www.rossvasquez.me/zSalesforce/zmenu.html" 
                target="_blank" 
                underline="none"
            >
                <Button
                variant="outlined"
                sx={{borderColor: '#282828', color: '#FFFFFF', width: '47%', "&:hover":{borderColor: '#80d8ff', color: '#80d8ff'}}}
                >
                Test
                </Button>
            </Link>

            <Backdrop
              open={open}
              onClick={handleClose}
              css={css`color: #fff;`}
              style={{zIndex: '100'}} 
            >   
                
            </Backdrop>
        </>
    )
}

function GdMasonry() {
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
        document.body.style.overflow = 'unset';
    };
    const handleToggle = () => {
        setOpen(!open);
        document.body.style.overflow = 'hidden';
    };

    return (
        <>
            <Button
                variant="contained"
                sx= {{backgroundColor: '#282828', margin: '10px', width: '96.5%', "&:hover":{backgroundColor: '#80d8ff', color: '#404040'}}}
                onClick={handleToggle}
                disableElevation 
            >
            Expand
            </Button>

            <Backdrop
              open={open}
              onClick={handleClose}
              slotProps={{style:{opacity: 2}}}
              style={{zIndex: '100'}} 
            >   
                <Container maxWidth='lg' style={{position: 'absolute', top: '8px', height: '100vh', overflow: 'auto', paddingLeft: 'clamp(0px, 5vw, 35px)', paddingTop: 'clamp(0px, 2vw, 20px)'}}>
                <Masonry columns={{ xs: 2, sm: 3, md: 3, lg: 3, xl: 3 }} spacing={1}>
                    {myData.map((item) => (
                        <img
                            src={item.img}
                            loading="lazy"
                        />
                    ))}
                </Masonry>
                </Container>
            </Backdrop>
        </>
    )
}

export const projectCardInfo = [
    {
        key: 'zApp',
        name: 'Restauraunt Order System',
        description: 'Created a production web-app to solve in-house restaurant catering order solution.',
        image: require('./static/images/projectPlaceholder/zApp.png'),
        alignment: css`
            height: 220px;
            object-fit: cover;
            object-position: top;

        `,
        chips: [
            {
                avatar: <Avatar alt="HTML" src={require('./static/images/chips/html.png')}/>,
                label: "HTML",
                css: css`margin-right: 5px; background-color: #282828; color: #B3B3B3;`,
                variant: "filled"
            },
            {
                avatar: <Avatar alt="CSS" src={require('./static/images/chips/css.png')}/>,
                label: "CSS",
                css: css`margin: 5px; background-color: #282828; color: #B3B3B3;`,
                variant: "filled"
            },
            {
                avatar: <Avatar alt="Vanilla JS" src={require('./static/images/chips/javascript.png')}/>,
                label: "Vanilla JS",
                css: css`margin: 5px; background-color: #282828; color: #B3B3B3;`,
                variant: "filled"
            },
            {
                avatar: <Avatar alt="Salesforce" src={require('./static/images/chips/salesforce.png')}/>,
                label: "Salesforce",
                css: css`margin: 5px; background-color: #282828; color: #B3B3B3;`,
                variant: "filled"
            }
        ],
        buttonDividerCss: css`border-color: #B3B3B3; margin-bottom: 14px; margin-top: 14px;`,
        africa: [{content: <ZExpand />}]
    },
    {
        key: 'pMrkt',
        name: "Print Marketing",
        description: 'Various graphic design projects created for both personal and professional use.',
        image: require('./static/images/projectPlaceholder/printMarketing.png'),
        alignment: css`
            height: 220px;
            object-fit: cover;
        `,
        chips: [
            {
                avatar: <Avatar alt="Photoshop" src={require('./static/images/chips/photoshop.png')}/>,
                label: "Adobe Photoshop",
                css: css`margin-right: 5px; margin-top: 5px; margin-bottom: 5px; background-color: #282828; color: #B3B3B3;`,
                variant: "filled",
            },
        ],
        buttonDividerCss: css`border-color: #B3B3B3; margin-bottom: 14px; margin-top: 14px;`,
        africa: [{content: <GdMasonry />}]
    },
    {
        key: 'pApp',
        name: 'Python Application',
        description: 'Used the Kivy framework to create a proof of concept for a restauraunt mobile-app.',
        image: require('./dynamic/kivyApp.gif'),
        alignment: css`
            height: 220px;
            object-fit: scale-down;
            background-color: black;
        `,
        chips: [
            {
                avatar: <Avatar alt="Python" src={require('./static/images/chips/python.png')}/>,
                label: "Python",
                css: css`margin-right: 5px; background-color: #282828; color: #B3B3B3;`,
                variant: "filled"
            },
            {
                avatar: <Avatar alt="Kivy" src={require('./static/images/chips/kivy.png')}/>,
                label: "Kivy",
                css: css`margin: 5px; background-color: #282828; color: #B3B3B3;`,
                variant: "filled"
            }
        ],
        buttonDividerCss: css`opacity: 0; margin-bottom: 0px; margin-top: 0px;`,
    },
    {
        key: 'reactP',
        name: 'React Portfolio Page',
        description: 'Utilized the MUI component library and Emotion to create a personal portfolio page in ReactJS.',
        image: 'https://www.computerhardwareinc.com/wp-content/uploads/2019/03/heres-how-to-capture-a-full-screen-screenshot-of-a-web-page.png',
        alignment: css`
            height: 220px;
            object-fit: cover;
            object-position: top;
        `,
        chips: [
            {
                avatar: <Avatar alt="Javascript" src={require('./static/images/chips/javascript.png')}/>,
                label: "JavaScript",
                css: css`margin-right: 5px; background-color: #282828; color: #B3B3B3;`,
                variant: "filled"
            },
            {
                avatar: <Avatar alt="JSX" src={require('./static/images/chips/jsx.png')}/>,
                label: "JSX",
                css: css`margin: 5px; background-color: #282828; color: #B3B3B3;`,
                variant: "filled"
            },
            {
                avatar: <Avatar alt="React" src={require('./static/images/chips/react.png')}/>,
                label: "React",
                css: css`margin: 5px; background-color: #282828; color: #B3B3B3;`,
                variant: "filled"
            },
            {
                avatar: <Avatar alt="MUI" src={require('./static/images/chips/mui.png')}/>,
                label: "MUI",
                css: css`margin: 5px; background-color: #282828; color: #B3B3B3;`,
                variant: "filled"
            }
        ],
        buttonDividerCss: css`opacity: 0; margin-bottom: 0px; margin-top: 0px;`,
    }
]