let React = require("react")

let CreatePersonModal = require("create-person-modal")


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
        <form onSubmit=this.openModal>
          First name:
          <input type="text" name="first_name"><br>
          Last name:
          <input type="text" name="last_name"><br>
          <input type="submit" value="Create">
        </form>
      <div>
    )
  }
}

module.exports = App
