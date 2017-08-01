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

  handleSave = e => {
    e.preventDefault()
    let firstName = this.refs.firstName.value
    let lastName = this.refs.lastName.value

    if (!firstName || !lastName) return

    let formData = {
      first_name: firstName,
      last_name: lastName,
    }

    console.log("save")
    $.ajax({
      method: "PUT",
      url: this.url,
      data: JSON.stringify(formData),
      contentType: "application/json",
      success: params => {
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
        <form onSubmit={this.handleSave}>
          First name:
          <input ref="firstName" type="text" name="firstName" /><br/>
          Last name:
          <input ref="lastName" type="text" name="lastName" /><br/>
          <input type="submit" value="Save" />
          <button onClick={this.showPersons}>Show Persons</button>
        </form>
      </ReactModal>
    )
  }
}

export default CreatePersonModal
