import React, { Component } from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import routes from './config/routes'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducers from './store/reducers.js'
import thunk from 'redux-thunk'

import { ApolloProvider } from 'react-apollo'
import apolloClient from './services/apollo'

import { Container, Header, GlobalStyle, Footer } from './style.js'

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = applyMiddleware(thunk)(createStore)(reducers, devTools)

class App extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <Container>
          <Header>
            <img
              src='https://www.ze.delivery/src/img/white-logo-horizontal.png'
              width='20%'
            />
          </Header>
          <ApolloProvider client={apolloClient}>
            <Provider store={store}>
              <BrowserRouter>
                <Switch>
                  {routes.map(route => (
                    <Route {...route} />
                  ))}
                </Switch>
              </BrowserRouter>
            </Provider>
          </ApolloProvider>

          <Footer>Zé Delivery</Footer>
        </Container>
      </>
    )
  }
}

export default App
