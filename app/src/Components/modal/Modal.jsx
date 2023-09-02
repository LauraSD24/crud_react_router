import './modal.css'

export function Modal() {
    return(
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <div className="modal-title">Modal Title</div>
                    <div className="modal-close" onClick={() => closeModal()}>X</div>
                </div>
                <div className="modal-body">
                    <p>Modal Body</p>
                </div>
            </div>
        </div>
    )
}