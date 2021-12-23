import Col from 'react-bootstrap/Col'
import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const BooleanForm = ({label, button, attribute, filterHandler}) => {
  return (
    <Col xs="auto">
      <InputGroup className="mb-2">
        <InputGroup.Text>{label}</InputGroup.Text>
        <Form.Select attr={attribute} size='sm'>
          <option value=""></option>
          <option value="true">True</option>
          <option value="false">False</option>
        </Form.Select>
        <Button type="button" onClick={filterHandler}>
          Filter {button}
        </Button>
      </InputGroup>
    </Col>
)
}

export default BooleanForm