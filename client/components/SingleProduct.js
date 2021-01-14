import React from 'react'
import {connect} from 'react-redux'
import {fetchPokemon} from '../store/singlePoke'

class SingleProduct extends React.Component {
  constructor() {
    super()
    this.state = {loading: true}
  }
  componentDidMount() {
    console.log('didMount', this.props.match.params)

    if (this.state.loading) {
      this.props.singlePokemon(this.props.match.params.id)

      this.setState({
        loading: false
      })
    }
  }

  render() {
    if (!this.state.loading) {
      return <div>{this.props.pokemon}</div>
    } else {
      return <div>hlekrj</div>
    }
    // return <div>dfkjjer</div>
  }
}

const mapState = state => ({
  pokemon: state.pokemon
})

const mapDispatch = dispatch => ({
  singlePokemon: id => dispatch(fetchPokemon(id))
})

export default connect(mapState, mapDispatch)(SingleProduct)
