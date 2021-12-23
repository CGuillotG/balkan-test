import Table from 'react-bootstrap/Table'

const DynamicTable = ({attributes, selectedAttributes, users}) => {
  return (
    <Table striped bordered hover size="sm">
    <thead>
      <tr>
        <th key="table-title-id">Id</th>
        { attributes.filter(attr=> selectedAttributes.includes(attr)).map(attr=>{
            return <th key={"table-title-"+attr} className='table-title'>{attr}</th>
          })
        }
      </tr>
    </thead>
    <tbody>
        {users.map(user=>{
          return <tr key={"table-row-"+user.id}>
            <td key={"table-cell-id"+user.id}>{user.id}</td>
            { attributes.filter(attr=> selectedAttributes.includes(attr)).map(attr=>{
                return <td key={"table-cell"+attr+user.id}>{user[attr].toString()}</td>
              })
            }
          </tr>
        })}
    </tbody>
  </Table>
  )
}

export default DynamicTable