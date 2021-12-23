import './App.css';
import { useEffect, useState } from 'react';
import { useAxios } from './hooks/useAxios'
import DynamicTable from './components/DynamicTable';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'
import Spinner from 'react-bootstrap/Spinner'

function App() {
  const [ attributes, setAttributes ] = useState([])
  const [ selectedAttributes, setSelectedAttributes ] = useState({})
  const [ users, setUsers ] = useState([])

  const attributesURL = 'http://localhost:5000/attributes'
  const usersURL = 'http://localhost:5000/users'

  const attributesSetter = data => {setAttributes(data)}
  const usersSetter = data => {setUsers(data)}

  const { apiRequest: attributesRequest, loading: attributesLoading, error: attributesError } = useAxios(attributesSetter) 
  const { apiRequest: usersRequest, loading: usersLoading, error: usersError } = useAxios(usersSetter) 
  
  useEffect(()=>{
    attributesRequest(attributesURL)
    usersRequest(usersURL)
  }, [])

  useEffect(()=>{
    if (attributes.length !== 0) {
      setSelectedAttributes([...attributes])
    }
  },[attributes])

  const handleAttributeToggle = (attr) => setSelectedAttributes(attr);

  return (
    <div className="App">
      <Container>
        <h1>Balkan Users</h1>
        <p>Webdev Test by CGuillot</p>
        <Row>Columns</Row>
        <Row>
          {attributesLoading ? <Spinner animation="border" variant="primary"/> : 
            <ToggleButtonGroup size="sm" type="checkbox" value={selectedAttributes} onChange={handleAttributeToggle}>
              {attributes.map((attr,i)=>{
                return <ToggleButton className="columns-button" key={i+attr} id={"tbg-btn-"+i} value={attr} variant="outline-primary">{attr}</ToggleButton>
              })}
            </ToggleButtonGroup>
          }
        </Row>
        <Row>Filters</Row>
        <Row>
          {(attributesLoading || usersLoading) ? <Spinner animation="border" variant="primary"/> : <></>}
        </Row>
        <Row>Table</Row>
        <Row>
          {(attributesLoading || usersLoading) ? <Spinner animation="border"/> : 
            <DynamicTable attributes={attributes} selectedAttributes={selectedAttributes} users={users}></DynamicTable>
          }
        </Row>
      </Container>
    </div>
  );
}

export default App;
