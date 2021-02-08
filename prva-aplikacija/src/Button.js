import React from 'react'


// STATE {} - SOSTOJBA = vnatresni podatoci vo komponentata
// PROPS {} - PROPERTIES = podatoci koi idat od parent komponentata

class Button extends React.Component {

  // se povikuva pred render
  constructor(props) {
    super(props)

    this.initialState = {
      name: 'Koco'
    }

    this.state = this.initialState
  }

  // componentWillMount = () => {
  //   // ne povikuva render metod
  //   this.setState({})
  // }

  // componentDidMount = () => {
  //   this.props
  //   this.state
  //   this.setState({})
  // }

  // componentDidUpdate = (prevProps, prevState) => {
  //   prevState.name === this.state.name

  //   this.setState({ alert: "" })
  // }

  // componentWillUnmount = () => {

  // }


  alertMe = () => {
    alert(`${this.props.greeting} ${this.state.name}`)
  }

  changeName = (event) => {
    const value = event.target.value

    // istata funkcija kako prethodnata linija
    // const { value } = event.target

    // immutability - the following will not work
    // this.state.name = value


    // OVA E ASINHRONO
    this.setState({ name: value })

    // sekogas ke ja prikazuva prethodnata vrednost
    // bidejki promenata na STATE e asinhrona
    console.log(this.state.name)

    // ako nema vrednost vo poleto, setiraj na inicijalna
    if (!value) {
      this.setState(this.initialState)
    }

  }

  // render metodot se povikuva posle constructorot
  // render metodot se povikuva posle SEKOJA PROMENA na state ili props
  // na toj nacin vo render metodot sekogas gi citame najnovite vrednosti
  render = () => {
    return (
      <div>
        <button
          id='welcome'
          className='test'
          onClick={this.alertMe}
        >
          Greet me!
        </button>

        <input onChange={this.changeName} />

        <div>
          { this.props.greeting }
          { this.state.name }
        </div>
      </div>
    )
  }
}


export default Button