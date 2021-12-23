import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'

const TextForm = ({label, button, attribute, filterHandler}) => {
  return (
    <Col xs="auto">
      <InputGroup className="mb-2">
          <InputGroup.Text>{label}</InputGroup.Text>
          <FormControl placeholder="" size="sm" attr={attribute}/>
          <Button type="button" onClick={filterHandler}>
            Filter {button}
          </Button>
        </InputGroup>
    </Col>
  )
}

export default TextForm