import React from "react";

import Card from "@material-ui/core/Card";

import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";

import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom';


import Grid from "@material-ui/core/Grid";



export default function ImgMediaCard(props) {
    
    const { title, content, id } = props;
    return (




        <Grid item xs={6} >
            <Card>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">

                        {title.length > 50 ? `${title.substring(0, 50)}...` : title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">

                        {content.length > 100 ? `${content.substring(0, 100)}...` : content}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <ThumbUpIcon />
                    </IconButton>

                    <MenuItem component={Link} to={`/view/${id}`}>
                        View
                    </MenuItem >

                </CardActions>
            </Card>
        </Grid>







    );
}
