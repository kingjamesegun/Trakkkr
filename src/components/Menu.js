import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

export default class MenuExampleBasic extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu>
        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        >
          Home
        </Menu.Item>

        <Menu.Item
          name='tracker'
          active={activeItem === 'tracker'}
          onClick={this.handleItemClick}
        >
          Tracker
        </Menu.Item>

        <Menu.Item
          name='product'
          active={activeItem === 'product'}
          onClick={this.handleItemClick}
        >
          My Products
        </Menu.Item>
      </Menu>
    )
  }
}