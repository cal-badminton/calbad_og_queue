let React = require("react")
let ReactModal = require("react-modal")


class CreatePersonModal extends React.Component {
  static propTypes = {
    getIsOpen: React.propTypes.func.isRequired,
    onRequestClose: React.propTypes.func.isRequired,
  }

  render() {
    <ReactModal
      isOpen={this.props.getIsOpen()}
      onRequestClose={this.props.onRequestClose}
      contentLabel="Create Person"
    />
  }
}

module.exports = CreatePersonModal
