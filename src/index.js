import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './index.css';
import './assets/css/theme.min.css';
import Home from './components/layout/fashion/main';
import Allpost from './components/Allpost';
import News from './components/News';
import AddNew from './components/AddNew';
import Postview from './components/Postview';
import NotFound from './components/pages/notfound';
import Layout from './components/app'
import { history } from './components/services/history';
class Root extends Component {

  render() {
    return (

      <Router>
        <Layout>
          <Routes history={history}>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/all-post" element={<Allpost />} />
            <Route exact path="/news" element={<News />} />
            <Route exact path="/add-new" element={<AddNew />} />
            <Route exact path={`/view/:id`} element={<Postview />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </Router>
    )
  }
}

ReactDOM.render(<Root />, document.getElementById("root"));