import React from 'react'

import CreatePersonModal from './create-person-modal'


class App extends React.Component {
  constructor() {
    super()

    this.state = { isModalOpen: false }
  }

  openModal = () => {
    this.setState({ isModalOpen: true })
  }

  closeModal = () => {
    this.setState({ isModalOpen: false })
  }

  isOpen() {
    return this.state.isModalOpen
  }

  render() {
    return (
      <div>
        <CreatePersonModal
          getIsOpen={this.isOpen.bind(this)}
          onRequestClose={this.closeModal.bind(this)}
        />
        <button type="button" onClick={this.openModal.bind(this)}>Create Person</button>
      </div>
    )
  }
}

export default App
