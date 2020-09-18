import React from 'react';

import styles from './Cards.module.css';
import cx from 'classnames'
import {Card, CardContent, Typography, Grid} from '@material-ui/core';
import CountUp from 'react-countup'


const Cards = ({data:{confirmed,recovered,deaths,lastUpdate}}) => {
    if(!confirmed){
        return 'loading....';
    }
    return(
        <div className = {styles.container}>
            <Grid container spacing ={3} justify = "center">
                <Grid item component={Card} xs={12} md={3} className = {cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color = "textSecondary" gutterBottom>
                            <p className = {styles.cardheading}>Infected</p>
                        </Typography>
                        <Typography varaint ="h5">
                            <CountUp 
                                start = {0}
                                end = {confirmed.value}
                                duration = {2}
                                seperator = ","
                            />
                        </Typography>
                        <Typography color = "textSecondary">
                            {new Date(lastUpdate).toDateString()}
                        </Typography>
                        <Typography variant = "body2">
                            Number of confirmed cases of Covid-19
                        </Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3} className = {cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color = "textSecondary" gutterBottom>
                            <p className = {styles.cardheading}> Recovered </p>
                        </Typography>
                        <Typography varaint ="h5">
                        <CountUp 
                                start = {0}
                                end = {recovered.value}
                                duration = {2}
                                seperator = ","
                            />
                        </Typography>
                        <Typography color = "textSecondary">
                            {new Date(lastUpdate).toDateString()}v
                        </Typography>
                        <Typography variant = "body2">
                            Number of recovered from Covid-19
                        </Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3} className = {cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color = "textSecondary" gutterBottom>
                            <p className = {styles.cardheading}>Deaths</p>
                        </Typography>
                        <Typography varaint ="h5">
                        <CountUp 
                                start = {0}
                                end = {deaths.value}
                                duration = {2}
                                seperator = ","
                            />
                        </Typography>
                        <Typography color = "textSecondary">
                            {new Date(lastUpdate).toDateString()}
                        </Typography>
                        <Typography variant = "body2">
                            Number of Deaths caused by Covid-19
                        </Typography>
                    </CardContent>
                </Grid>

            </Grid>

        </div>
    )
}

export default Cards;