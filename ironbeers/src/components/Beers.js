import React, {Component} from 'react'
import Axios from 'axios'
import {NavLink} from 'react-router-dom'
var url = 'https://ironbeer-api.herokuapp.com/beers/all'

class Beers extends Component {
  state = {
    beers: []
  }
  componentWillMount(){
    this.props.history.push('/beers')
    Axios.get(url)
      .then(r=>{
        this.setState({beers:r.data})
        console.log(this.state.beers)
      })
  }

  showBeer = (beer,index) => {
    let ruta = "/beers/"+beer._id
    return <div key={index} style={{margin:"30px", width: "230px"}}>
      
      <img src={beer.image_url} style={{width:'50px'}} alt={beer.name}/>
      <br/>
      <NavLink to={ruta}><h3>{beer.name}</h3></NavLink>  

      </div>

  }

  render(){
    const {beers} = this.state
    return (
      <div >
        {beers.map((b,i)=>this.showBeer(b,i))}
      </div>
    )
  }

}

export default Beers