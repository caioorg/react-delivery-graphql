import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import { Loading, Cards, Error } from '../../components/'
import { Container, Footer, Button } from './styles'
import productsQuery from '../../querys/products'

class Products extends Component {
  render() {
    console.log(this.props.id)
    return (
      <Query
        query={gql`
          ${productsQuery}
        `}
        variables={{
          id: this.props.id,
          search: '',
          categoryId: 0
        }}
      >
        {({ data, loading, error }) => {
          if (loading) return <Loading />
          if (error)
            return (
              <Error
                message='Não foi possivel encontrar produtos, por favor busque novamente clicando:'
                url='/'
              />
            )

          return (
            <Container>
              {data.poc.products &&
                data.poc.products.map((value, index) =>
                  value.productVariants.map(item => (
                    <Cards
                      key={index}
                      image={item.imageUrl}
                      title={item.title}
                      description={item.description}
                      price={item.price}
                    >
                      <Footer>
                        <Button primary> + </Button>
                        <Button>-</Button>
                      </Footer>
                    </Cards>
                  ))
                )}
            </Container>
          )
        }}
      </Query>
    )
  }
}

const mapStateToProps = state => ({
  id: state.place.place
})

export default connect(
  mapStateToProps,
  null
)(Products)
