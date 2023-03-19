import { css } from '@emotion/react'
import { Link, Avatar, Button } from '@mui/material'
import { styleSheet } from './/styles.js'

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
        buttons: [
            {
                variant: "contained",
                sX: {backgroundColor: '#282828', margin: '10px', width: '47%', "&:hover":{backgroundColor: '#80d8ff', color: '#404040'}},
                message: "expand"
            },
            {
                link: "https://www.rossvasquez.me/zSalesforce/zmenu.html",
                variant: "outlined",
                sX: {borderColor: '#282828', color: '#FFFFFF', width: '47%', "&:hover":{borderColor: '#80d8ff', color: '#80d8ff'}},
                message: "test"
            }
        ]
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
                variant: "filled"
            },
        ],
        buttons: [
            {
                variant: "contained",
                sX: {backgroundColor: '#282828', margin: '10px', width: '96.5%', "&:hover":{backgroundColor: '#80d8ff', color: '#404040'}},
                message: "expand"
            }
        ]
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
            },
        ]
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
        ]
    }
]