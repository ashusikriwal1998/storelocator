import React, { Component } from 'react'

export class Map extends Component {
  render() {
    return (
      <div > 
        <iframe src="https://my.atlistmaps.com/map/62ce56d3-9b67-491f-92c3-1d6b4b0fbf71?share=true" allow="geolocation" width="100%" height="700px" frameborder="0" scrolling="no" allowfullscreen></iframe>
      </div>
    )
  }
}

export default Map
