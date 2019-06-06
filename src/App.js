import React, { Component } from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import routes from './config/routes'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducers from './store/reducers.js'
import thunk from 'redux-thunk'

import { ApolloProvider } from 'react-apollo'
import apolloClient from './services/apollo'

import { Header, Footer } from './components/'
import { Container, GlobalStyle } from './style.js'

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = applyMiddleware(thunk)(createStore)(reducers, devTools)

class App extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <Container>
          <Header />
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
          <Footer />
        </Container>
      </>
    )
  }
}

export default App
