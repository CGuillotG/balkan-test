import './App.css';
import { useEffect, useState } from 'react';
import { useAxios } from './hooks/useAxios'
import DynamicTable from './components/DynamicTable';
import Filters from './components/Filters';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'
import Spinner from 'react-bootstrap/Spinner'

function App() {
  const [ attributes, setAttributes ] = useState([])
  const [ selectedAttributes, setSelectedAttributes ] = useState({})
  const [ users, setUsers ] = useState([])
  const [ filters, setFilters ] = useState({})

  const attributesURL = 'http://localhost:5000/attributes'
  const usersURL = 'http://localhost:5000/users'

  const attributesSetter = data => {setAttributes(data)}
  const usersSetter = data => {setUsers(data)}

  const { apiRequest: attributesRequest, loading: attributesLoading } = useAxios(attributesSetter) 
  const { apiRequest: usersRequest, loading: usersLoading } = useAxios(usersSetter) 
  
  useEffect(()=>{
    attributesRequest(attributesURL)
    usersRequest(usersURL)
  }, [])

  useEffect(()=>{
    if (attributes.length !== 0) {
      setSelectedAttributes([...attributes])
    }
  },[attributes])

  useEffect(()=>{
    if (Object.keys(filters).length !== 0) {
      let filteredUsersURL = usersURL

      Object.keys(filters).forEach((key,i)=>{
        filteredUsersURL = filteredUsersURL + (i===0 ? "?" : "&") + key + "=" + filters[key]
      })
      usersRequest(filteredUsersURL)
    } else {
      usersRequest(usersURL)
    }
  },[filters])
  
  

  const handleAttributeToggle = (attr) => setSelectedAttributes(attr);

  

  return (
    <div className="App">
      <Container>
        <h1>Balkan Users</h1>
        <p>Webdev Test by CGuillot</p>

        <Row className="row-Title">Columns</Row>
        <Row>
          {attributesLoading ? <Spinner animation="border" variant="info"/> : 
            <ToggleButtonGroup size="sm" type="checkbox" value={selectedAttributes} onChange={handleAttributeToggle}>
              {attributes.map((attr,i)=>{
                return <ToggleButton className="columns-button" key={i+attr} id={"tbg-btn-"+i} value={attr} variant="outline-info">{attr}</ToggleButton>
              })}
            </ToggleButtonGroup>
          }
        </Row>

        <Row className="row-Title">Filters</Row>
        {(attributesLoading || usersLoading) ? <Row><Spinner animation="border" variant="primary"/></Row> : 
          <Filters filters={filters} setFilters={setFilters}></Filters>
        }

        <Row className="row-Title">Table</Row>
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
