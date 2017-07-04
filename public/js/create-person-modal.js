import React from "react"
import PropTypes from "prop-types"
import ReactModal from 'react-modal'


class CreatePersonModal extends React.Component {
  render() {
    return (
      <ReactModal
        isOpen={this.props.getIsOpen()}
        onRequestClose={this.props.onRequestClose}
        contentLabel="Create Person"
      >
        <button onClick={this.props.onRequestClose}>close</button>
        <div>I am a modal</div>
      </ReactModal>
    )
  }
}

CreatePersonModal.propTypes = {
  getIsOpen: PropTypes.func.isRequired,
  onRequestClose: PropTypes.func.isRequired,
}

export default CreatePersonModal
