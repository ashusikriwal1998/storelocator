
import React, { Component } from 'react'

export class Reportbox extends Component {
  render() {
    return (
      <div > 
          <div className='container mt-5 col-5 shadow-lg p-3 mb-5 bg-body rounded'> 
                  <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
              <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlTextarea1" className="form-label">Report your issue</label>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
              <button className='btn mt-3 bg-warning '>Submit</button>
            </div>
          </div>
      </div>
    )
  }
}

export default Reportbox
