import { Button } from "react-bootstrap"
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useActions } from "../hooks/useActions"
import { useState } from 'react'
/* eslint-disable react/prop-types */

export const EditUser = ({user,setSeeModal}) => {

    const [result, setResult] = useState(null)
    const {edit} = useActions()

    const handleSubmit = (event) => {
        event.preventDefault()
        
        const form = event.currentTarget
        const formData = new FormData(form)
    
        const name = formData.get("formName")
        const lastName = formData.get("formLastName")
        const username = formData.get("formUsername")
        const avatar = formData.get("formAvatar")
        const age = formData.get("formAge")
    
        if(!name || !lastName || !username || !avatar || !age) {
          return setResult("error")
        }
    
        setResult("ok")
    
        form.reset()

        const editedUser = {
          id: user.id,
          name,
          lastName,
          username,
          age,
          avatar
        }
        
        edit(editedUser)
        setSeeModal(undefined)
    
      }

  return (
    <div>
        <div className="formContainer"> 
          <Form onSubmit={handleSubmit}>
            <h4>Enter new user info</h4>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control name="formName" type="text" defaultValue={user.name} />
            </Form.Group>
            
            <Form.Group as={Col} controlId="formLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control name="formLastName" type="text" defaultValue={user.lastName} />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formUsername">
              <Form.Label>UserName</Form.Label>
              <Form.Control name="formUsername" type="text" defaultValue={user.username} />
            </Form.Group>

            <Form.Group as={Col} controlId="formAge">
              <Form.Label>Age</Form.Label>
              <Form.Control name="formAge" type="number" defaultValue={user.age} />
            </Form.Group>
          </Row>
          <Form.Group className="mb-3" controlId="formAvatar">
            <Form.Label>Avatar</Form.Label>
            <Form.Control name="formAvatar" type="url" defaultValue={user.avatar} />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
          {result === 'error' && <p style={{color: 'red'}}>Fill all the fields before submitting</p>}
        </Form>
      </div>
    </div>
  );
}
