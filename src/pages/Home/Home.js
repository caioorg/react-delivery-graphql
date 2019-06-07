import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import { connect } from 'react-redux'
import { searchAddress } from '../../store/Search/actions'

import { Error } from '../../components'
import { Container, Input, Form, Button, Label } from './styles'

class Home extends Component {
  state = {
    redirect: false
  }

  handleSearchAddress = event => {
    event.preventDefault()
    this.props.searchAddress(
      event.target.address.value,
      process.env.REACT_APP_KEY_API
    )
    if (this.props.error) {
      this.setState({ redirect: true })
    }
  }

  render() {
    if (this.state.redirect) return <Redirect to='/postos' />

    return (
      <Container>
        <Form onSubmit={this.handleSearchAddress}>
          <Label>Informe o endereço:</Label>
          <Input
            autocomplete='off'
            type='text'
            name='address'
            placeholder='Ex: Av Paulista 228'
          />
          {this.props.error && <Error message={this.props.error} />}
          <Button>Procurar</Button>
        </Form>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  lat: state.search.lat,
  error: state.search.error
})

export default connect(
  mapStateToProps,
  { searchAddress }
)(Home)
