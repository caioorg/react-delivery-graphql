import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import { connect } from 'react-redux'
import { searchAddress } from '../../store/Search/actions'

import { Error } from '../../components'
import { Container, Input, Form, Button, Label } from './styles'

class Home extends Component {
  handleSearchAddress = event => {
    event.preventDefault()
    this.props.searchAddress(event.target.address.value)
  }

  render() {
    if (this.props.status) return <Redirect to='/postos' />

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
  error: state.search.error,
  status: state.search.status
})

export default connect(
  mapStateToProps,
  { searchAddress }
)(Home)
