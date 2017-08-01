import React from 'react'
import Select from 'react-select'
import $ from 'jquery'

import CreatePersonModal from './create-person-modal'


class App extends React.Component {
  constructor() {
    super()

    this.persons_url = "/api/persons"

    this.state = {
      isModalOpen: false,
      name: "Nobody",
      personOptions: this.getPersonOptions(),
    }
  }

  getPersonOptions = () => {
    $.ajax({
      method: "GET",
      url: this.persons_url,
      success: persons => {
        let options = JSON.parse(persons).map(person => {
          return ({ value: person, label: `${person.first_name} ${person.last_name}` })
        })
        this.setState({ personOptions: options })
      },
    })
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
        <div className="whoami">I am {this.state.name}.</div>
        <Select
          name="form-field-name"
          value="Pick yourself"
          options={this.state.personOptions}
          onChange={person => this.setState({ name: person.label })}
        />
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
