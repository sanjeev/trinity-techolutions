import React, { Component } from 'react'
import Header from './common/header/header';
import Footer from './common/footer/footer';
export default class App extends Component {
    render() {
        return (
            <>
                <Header />
                <main className="main" id="top">
                    {this.props.children}
                </main>
                <Footer />
            </>
        )
    }
}
