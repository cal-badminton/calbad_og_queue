import React from 'react'
import $ from 'jquery'
import PropTypes from 'prop-types'
import ReactModal from 'react-modal'


class CreatePersonModal extends React.Component {
  static propTypes = {
    getIsOpen: PropTypes.func.isRequired,
    onRequestClose: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props)
    this.url = "/api/persons"
  }

  showPersons = () => {
    $.ajax({
      method: "GET",
      url: this.url,
      success: data => {
        let persons = JSON.parse(data)
        persons.map(person => console.log(person))
      },
    })
  }

  handleSave = () => {
    console.log("save")
    $.ajax({
      method: "PUT",
      url: this.url,
      data: JSON.stringify({ name: 'Justin' }),
      contentType: "application/json",
      success: params => {
        console.log(params)
        this.props.onRequestClose()
      },
    })
  }

  render() {
    return (
      <ReactModal
        isOpen={this.props.getIsOpen()}
        onRequestClose={this.props.onRequestClose}
        contentLabel="Create Person"
      >
        First name:
        <input type="text" name="first_name" /><br/>
        Last name:
        <input type="text" name="last_name" /><br/>
        <button onClick={this.handleSave}>Save</button>
        <button onClick={this.showPersons}>Show Persons</button>
      </ReactModal>
    )
  }
}

export default CreatePersonModal
