import React, { Component } from 'react'
import Typography from "@material-ui/core/Typography";
import CardActionsExample from "../../common/CardActions"
import Container from '@material-ui/core/Container';

import Grid from "@material-ui/core/Grid";
import { dataService } from '../../services/data.service';
import Card from "@material-ui/core/Card";

import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom';
export default class Homeslider extends Component {
  constructor() {
    super();
    this.state = { data: [] };
  }

  componentDidMount() {
    this.getAllPostList();
  }
  getAllPostList() {
    dataService.getAllPostList()
      .then(
        res => {
          console.log(res.posts);
          this.setState({ data: res.posts });

        },
        error => {
          error("Something went wrong !!", "Post Store");
        }
      )
  }




  render() {
    const { data } = this.state;

    // var arrays = [];
    //var i = 0;
    // while (data.length > 0 && i < 3) {

    //   arrays.push(data[i]);
    //   i++;
    // }


    return (
      <section className="py10">
        <Container>
          <Typography align="center" gutterBottom variant="h5" component="h1">
            LATEST POSTS
          </Typography>
          <Grid sx={{ flexGrow: 1 }} container spacing={2}>
            {data
              .sort((a, b) => b.createdAt - a.createdAt)
              .map((post, index) => index < 3 && (
                <CardActionsExample key={post._id} title={post.title} content={post.content} id={post._id} />
              ))

            }

            <Grid item xs={6} >
              <Card className="newsbutton">
                <CardActions disableSpacing>



                  <MenuItem style={{ margin: '0px auto', display: "flex", padding: "58px 265px" }} component={Link} to='/news'>
                    Add New
                  </MenuItem >


                </CardActions>
              </Card>
            </Grid>


          </Grid>
        </Container>
      </section>


    );
  }
}
