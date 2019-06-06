import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import { Loading, Error } from '../../components'
import searchQuery from '../../querys/places'
import { selectedPlace } from '../../store/Places/actions'

import { Container, Button, Form, Label, Select, Option } from './styles'

class Places extends Component {
  state = {
    selected: '',
    redirect: false
  }

  handleSubmitPlace = event => {
    event.preventDefault()
    this.props.selectedPlace(this.state.selected)
    this.setState({ redirect: true })
  }

  handleChangeSelected = event => {
    this.setState({ selected: event.target.value })
  }

  render() {
    if (this.state.redirect) return <Redirect to='/produtos' />

    return (
      <Query
        query={gql`
          ${searchQuery}
        `}
        variables={{
          algorithm: 'NEAREST',
          lat: this.props.lat,
          long: this.props.lng,
          now: '2017-08-01T20:00:00.000'
        }}
      >
        {({ data, loading, error }) => {
          if (loading) return <Loading />
          if (error)
            return (
              <Error
                message='Não foi possivel encontrar um posto, por favor busque novamente clicando:'
                url='/'
              />
            )

          return (
            <Container>
              <Form onSubmit={this.handleSubmitPlace}>
                <Label>Selecione um Posto:</Label>
                <Select
                  ref='selectPlace'
                  id='place'
                  onChange={this.handleChangeSelected}
                >
                  <Option>Qual posto você deseja</Option>
                  {data.pocSearch &&
                    data.pocSearch.map(value => (
                      <Option key={value.id} value={value.id}>
                        {value.tradingName}
                      </Option>
                    ))}
                </Select>
                <Button>Selecionar Posto</Button>
              </Form>
            </Container>
          )
        }}
      </Query>
    )
  }
}

const mapStateToProps = state => ({
  lat: state.search.lat,
  lng: state.search.lng
})

export default connect(
  mapStateToProps,
  { selectedPlace }
)(Places)
