import React, { Component } from 'react'
import { Helmet } from 'react-helmet';
import Slider from '../common/Homeslider'


export default class Fashion extends Component {

    render() {

        return (
            <>
                <Helmet>
                    <title>abc | a to z</title>
                    <meta name="description" content="the is " />
                </Helmet>
                <Slider />


            </>
        )
    }
}
