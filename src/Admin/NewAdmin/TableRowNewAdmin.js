

function TableRowNewAdmin(props)
{
    
    return <tr>
                    <td>
                        <center>{props.admin.FirstName} {"  "}  {props.admin.LastName}</center>
                    </td>

                    <td>
                       <center> {props.admin.Roll}</center>
                    </td>
                    <td>
                    <center>
                    <button className='btn btn-danger'
                    onClick={()=>{
                     props.Approve()
                    }}>
                    Approve
                    </button>
                    </center>
                    </td>
                    <td>
                    <center>
                    <button className='btn btn-danger'
                    onClick={()=>{
                     props.Discard()
                    }}>
                    Discard
                    </button>
                    </center>
                    </td>
           </tr>
}
export default TableRowNewAdmin;