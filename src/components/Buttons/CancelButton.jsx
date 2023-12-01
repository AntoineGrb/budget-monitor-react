import PropTypes from 'prop-types'

const CancelButton = ({closeModal}) => {
    return (
        <button type='button' onClick={closeModal} className="button"> Annuler </button>
    )
}

CancelButton.propTypes = {
    closeModal : PropTypes.func
}



export default CancelButton