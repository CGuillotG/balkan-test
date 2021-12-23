import Row from 'react-bootstrap/Row'
import TextForm from './forms/TextForm'
import BooleanForm from './forms/BooleanForm'
import Button from 'react-bootstrap/Button'


const Filters = ({filters, setFilters}) => {

  const clearAllFilters = () => {setFilters({})}
  
  const filterHandler = ({currentTarget}) => {
    let prevEl = currentTarget.previousElementSibling
    let attr = prevEl.attributes.attr.value
    let value = prevEl.value
    prevEl.value = ""
    addFilter(attr, value)
  }

  const addFilter = (attr, value) => {
    if (value === "") {return}
    if ((attr === "age-gt" || attr === "age-lt") && isNaN(value)) {console.log("Not a number"); return}
    setFilters(prevFilters => {
      prevFilters[attr] = value
      return { ...prevFilters}
    })
    console.log(attr, value)
  }

  return <>
    <Row className="align-items-center justify-content-center">
          {!filters["id"] && <TextForm label="ID" button="ID" attribute="id" filterHandler={filterHandler}></TextForm>}
          {!filters["name"] && <TextForm label="Name" button="Name" attribute="name" filterHandler={filterHandler}></TextForm>}
    </Row>
    <Row className="align-items-center justify-content-center">
          {!filters["age-gt"] && <TextForm label="Older than" button="Age" attribute="age-gt" filterHandler={filterHandler}></TextForm>}
          {!filters["age-lt"] && <TextForm label="Younger than" button="Age" attribute="age-lt" filterHandler={filterHandler}></TextForm>}
    </Row>
    <Row className="align-items-center justify-content-center">
          {!filters["happy"] && <BooleanForm label="Happy" button="Happy" attribute="happy" filterHandler={filterHandler}></BooleanForm>}
          {!filters["healthy"] && <BooleanForm label="Healthy" button="Healthy" attribute="healthy" filterHandler={filterHandler}></BooleanForm>}
          {!filters["busy"] && <BooleanForm label="Busy" button="Busy" attribute="busy" filterHandler={filterHandler}></BooleanForm>}
    </Row>


    {Object.keys(filters).map((key, i)=>{
      const clearFilter = () => {setFilters(prevFilters => {
        delete prevFilters[key]
        return {...prevFilters}
      })}
      return <Button key={"filter-btn-"+key+i} className="filter-button" type="button" onClick={clearFilter} variant="primary" size="sm"><span>{key + " = " + filters[key]}</span> <span className="btn-close btn-close-white" ></span></Button>
    })}
    
    {(Object.keys(filters).length !== 0) && <Button className="filter-button" type="button" onClick={clearAllFilters} variant="danger" size="sm"><span >Clear All Filters</span><span className="btn-close btn-close-white" ></span></Button>}
  </>
}

export default Filters