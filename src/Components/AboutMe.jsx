import { Container, Grid, List, ListItem, makeStyles, Typography } from '@material-ui/core'
import { GitHub, Instagram, LinkedIn, Twitter } from '@material-ui/icons'
import React from 'react'


const useStyles = makeStyles((theme)=>({
    body:{
        // paddingTop:'10rem',
        // paddingBottom: '70rem',
        backgroundColor: theme.palette.secondary.main,
        height: 'auto',
    },
    AboutSection:{
        height: "100%",
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: '20rem',
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            flexDirection: 'column',
            paddingTop: '3rem'
        },

    

    },
    h6:{
        backgroundColor: "rgba(123, 74, 226, 0.05)",
        padding: '.5rem 1rem',
        color: theme.palette.secondary.light,
        borderRadius: '1.6rem',
        width: 'fit-content'
    },
    h1:{
        color: theme.palette.primary.main,
        fontWeight: 700,
        maxWidth: '100%',
        lineHeight: '7rem',
        marginRight: 'auto',
        textAlign: 'left',
        [theme.breakpoints.down('sm')]: {
            fontSize: '3rem'
    },
    },
    track:{
        display:'flex',
        alignItems: 'center',
        color:'rgba(255, 255, 255, 0.5)',
        fontSize:'1.5rem',
        fontWeight: 100,
        cursor: 'pointer',
        margin: '2rem 0'
    },
    menuItem:{
        // color: 'white',
        padding: 0,
        '&:hover':{
            color: theme.palette.secondary.light,
            fontWeight: 700, 
            transition: 'all ease-in-out .5s'
        },
    },
   dot:{
        height: '.4rem',
        width: '.2rem',
        backgroundColor: 'yellow',
        margin: '0rem 1rem'
    },
    h2:{
        fontSize:'3rem',
        fontWeight: 700
    },
    p:{
        fontSize:'1.5rem',
        fontWeight: 100,
        cursor: 'pointer'


    },
    image:{
        height: '100%',
        width: '100%'
    },
    ListItem:{
        display:'flex',
        color: theme.palette.primary.main,
        fontSize:'1.5rem',
        fontWeight: 100,
        cursor: 'pointer'
    },
    GridContainer:{


    }

}))
function AboutMe() {
    const classes = useStyles()
  return (
    <body className={classes.body}>
        <Container className={classes.AboutSection} id = 'AboutSection'>
            <Grid container md = {12}>
                <Grid item sm = {10}>
                    <div className={classes.memeoji}>
                        <img src="Images/Memoji2.png" className={classes.image} alt="" srcset="" />

                    </div>

                </Grid>
            </Grid>
            <Grid container className={classes.GridContainer}>
                <Grid item sm = {10}>
                    <div className={classes.brief}>
                        <Typography variant='h6'className={classes.h6} style = {{display:'flex', alignItems:'center'}}> About Me!<span style = {{height:'3rem'}}><img src="Images/memoji2 1.png"  style = {{height:'3rem', paddingLeft:'.5rem'}}alt="" srcset="" /></span></Typography>
                        <Typography variant='h1'className={classes.h1}> Ibrahim Aliyu</Typography>
                        <List>
                            <ListItem className={classes.ListItem}> <span style = {{height:'30px'}}><img src="Images/wave.png" style = {{height:'3rem', paddingRight:'.5rem'}} alt="" srcset="" /></span> My name is Ibrahim Aliyu, but you can call me just Ibrahim. Nice to meet you!</ListItem>
                            <ListItem className={classes.ListItem}> <span style = {{height:'30px'}}><img src="Images/technologist.png" style = {{height:'3rem', paddingRight:'.5rem'}} alt="" srcset="" /></span>I have over 2 Years of experience in developing and programming interfaces with JavaScript, React JS, CSS and Material-Ui</ListItem>
                            <ListItem className={classes.ListItem}><span style = {{height:'30px'}}><img src="Images/graduation-cap.png" style = {{height:'3rem', paddingRight:'.5rem'}} alt="" srcset="" /></span> Studying Information Technology in Bayero University, Kano, Nigeria.</ListItem>
                            <ListItem className={classes.ListItem}><span style = {{height:'30px'}}><img src="Images/interest.png" style = {{height:'3rem', paddingRight:'.5rem'}} alt="" srcset="" /></span>Interested in front-end development with React JS, Material-Ui and UX/UI Design.</ListItem>
                            <ListItem className={classes.ListItem}><span style = {{height:'30px'}}><img src="Images/light-bulb.png" style = {{height:'3rem', paddingRight:'.5rem'}} alt="" srcset="" /></span> Trying to be a little better than yesterday every day.</ListItem>
                        </List>

                    </div>
                    
                </Grid>
            </Grid>
        </Container>
    </body>    
  )
}

export default AboutMe
