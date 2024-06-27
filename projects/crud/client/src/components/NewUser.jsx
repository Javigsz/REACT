import { Button } from "react-bootstrap"
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {useState} from 'react'
import { useActions } from "../hooks/useActions"
import { useAppSelector } from "../hooks/useStore";

export const NewUser = () => {

  const [showForm, setShowForm] = useState(false)
  const [result, setResult] = useState(null)

  const {addUser} = useActions()
  const status = useAppSelector((state) => state.users.status)

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

    setShowForm(false)

    addUser({name, lastName, username, avatar, age})

  }

  return (
    <>  
      <div>
        {status === 'succeeded' && !showForm && <Button onClick={() => setShowForm(true)}>New User</Button>}
      </div>

      <div className="formContainer">
        {showForm && (   
          <Form onSubmit={handleSubmit}>
            <h4>Enter new user info</h4>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control name="formName" type="text" placeholder="Enter name" />
            </Form.Group>
            
            <Form.Group as={Col} controlId="formLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control name="formLastName" type="text" placeholder="Enter last name" />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formUsername">
              <Form.Label>UserName</Form.Label>
              <Form.Control name="formUsername" type="text" placeholder="Enter username" />
            </Form.Group>

            <Form.Group as={Col} controlId="formAge">
              <Form.Label>Age</Form.Label>
              <Form.Control name="formAge" type="number" placeholder="Enter age" />
            </Form.Group>
          </Row>
          <Form.Group className="mb-3" controlId="formAvatar">
            <Form.Label>Avatar</Form.Label>
            <Form.Control name="formAvatar" type="url" placeholder="Enter avatar" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
          <Button variant="secondary" onClick={() => setShowForm(false)}>
            Cancel
          </Button>
          {result === 'error' && <p style={{color: 'red'}}>Fill all the fields before submitting</p>}
        </Form>
        )}
      </div>  
    </>
  )
}
