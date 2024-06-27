import Table from 'react-bootstrap/Table'
import { useAppSelector } from "../hooks/useStore"
import { useActions } from '../hooks/useActions'
import { MdOutlineDeleteForever, MdEditDocument} from "react-icons/md"
import { TbRefresh } from "react-icons/tb"
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
import {Modal} from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import {EditUser} from './EditUser'


export const UsersList = () => {

  const users = useAppSelector((state) => state.users)
  const { removeUser, refresh } = useActions()
  const [seeModal, setSeeModal] = useState(false)
  const [modalUser, setModalUser] = useState({})


  const handleDeleteClick = (user) => {

    removeUser(user)

  }

  const handleEditClick = (user) => {

    setSeeModal(true)
    setModalUser(user)

  }

  const handleClose = () => {

    setSeeModal(false)
  }
  
  const refreshPage = () => {

    refresh()

  }


  return (
    <>
    <div className="table1">
      {users.status === 'loading' && <div>Loading...</div>}
      {users.status === 'failed' && 
        <div className="error-msg" style={{color: 'red'}}>{users.error}
          <Button onClick={refreshPage} variant="warning"><TbRefresh size={25}/></Button>
        </div> 
      }
      {users.status === 'succeeded' && 
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Avatar</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.data.map((user,index) => (
            <tr key={user.id}>         
              <td>{index+1}</td>
              <td className="avatars"><img src={user.avatar} alt={user.name}/></td>
              <td>{user.name}</td>
              <td>{user.lastName}</td>
              <td>{user.username}</td>
              <td>{user.age}</td> 
              <td className="icons">  
                <MdEditDocument size={25} className="icon" onClick={() => handleEditClick(user)}/>
                <MdOutlineDeleteForever size={25} className="icon" onClick={() => handleDeleteClick(user)}/>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>}
    </div>
    <Modal show={seeModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit User</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <EditUser user={modalUser} setSeeModal={setSeeModal}/>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
    </>
  )
}
