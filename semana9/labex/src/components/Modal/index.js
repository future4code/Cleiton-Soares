import React from 'react'
import { Modal, Button } from 'react-bootstrap'

const ShowModal = (props) => {
  // const [show, setShow] = useState(false)
  // const handleClose = () => setShow(false)
  // const handleShow = () => setShow(true)

  const decisions = () =>{
    props.onClick()
    props.setShow(false)
  }

  return (
    <Modal show={props.show} onHide={()=>props.setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={()=>props.setShow(false)}>
          Close
        </Button>
        <Button variant='primary' onClick={decisions}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ShowModal
