import {useEffect} from 'react';
// import EditNFT 'from './EditNFT';

const Modal = (props) => {

    if (!props.show) {
        return null
    }

    // const closeOnEscapeKeyDown = (e) => {
    //     if ((e.charCode || e.keyCode) === 27) {
    //         props.onClose()
    //     }
    // }

    // useEffect(() => {
    //     document.body.addEventListener('keydown', closeOnEscapeKeyDown)
    //     return function cleanup() {
    //         document.body.removeEventListener('keydown', closeOnEscapeKeyDown)
    //     }
    // }, [])

    return (
    <div className="modal" onClick={props.OnClose}>
        <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
                <h4 className="modal-title">{props.title}</h4>
            </div>
            <div className="modal-body">
                {props.children}
            </div>
            <div className="modal-footer">
                <button onClick={props.onClose} className="modal-button">Close</button>
            </div>
        </div>
    </div>
    )
    }
     
    export default Modal;