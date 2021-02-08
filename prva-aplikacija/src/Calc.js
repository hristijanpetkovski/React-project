import React from 'react'

class Calc extends React.Component {

  render = () => {
    return (
      <div>
        <div>
          <input placeholder='First number' />
        </div>

        <div>
          <input placeholder='Operation' />
        </div>

        <div>
          <input placeholder='Second number' />
        </div>

        <div>
          <button>Calculate!</button>
        </div>

        <div>
          Result=<span></span>
        </div>
      </div>
    )
  }
}
export default Calc