import './Modal.scss'
import PropTypes from 'prop-types'

const Modal = ({isOpen , children}) => { 

    return (
            <div className={`modal ${isOpen && 'is-active'}`}> 
                <div className="modal-background"></div>
                <div className="modal-card">
                    {children}
                </div>
            </div>
    )
}

Modal.propTypes = {
    isOpen: PropTypes.bool,
    children: PropTypes.element
}

export default Modal