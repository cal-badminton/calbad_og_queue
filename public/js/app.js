import React from 'react'
import Select from 'react-select'
import $ from 'jquery'
import _ from 'underscore'

import CreatePersonModal from './create-person-modal'
import CourtComponent from './court-component'


class App extends React.Component {
  constructor() {
    super()

    this.persons_url = "/api/persons"

    this.state = {
      isModalOpen: false,
      name: "Nobody",
      personOptions: this.getPersonOptions(),
      courtNum: null,
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

  formatCourts() {
    let { courtNum } = this.state
    let courts = []
    if (courtNum) {
      for (let i = 0; i < this.state.courtNum; i++) {
        courts.push(
          <CourtComponent key={`court ${i}`} />
        )
      }
    }
    return (
      <div className="courts-container">
        {courts}
      </div>
    )
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
        <Select
          name="form-field-court-num"
          value="How many courts?"
          options={_.range(1, 7).map(num => ({ value: num, label: num }))}
          onChange={courtNum => this.setState({ courtNum: courtNum.label })}
        />
        {this.formatCourts()}
      </div>
    )
  }
}

export default App
