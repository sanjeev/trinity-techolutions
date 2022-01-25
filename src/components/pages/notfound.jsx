import React, { Component } from 'react'
import { Link } from 'react-router-dom';


export default class PageNotFound extends Component {
    render() {
        return (
            <div>

                <section className="py-10">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="error-section">
                                    <h1>404</h1>
                                    <h2>page not found</h2>
                                    <Link className="btn btn-solid" to={`${process.env.PUBLIC_URL}/`} >back to home</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


            </div>
        )
    }
}
