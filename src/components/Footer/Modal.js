import './Modal.css'

const Modal = ({children}) => {

  return (
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">

          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Share This Page</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>

          <div className="modal-body">
            <div className="container">
              {children}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Modal