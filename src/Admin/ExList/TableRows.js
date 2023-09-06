function TableRows(props)
{
    return <tr>
                    <td>
                        {props.candidate.FirstName}
                    </td>
                    <td>
                    {props.candidate.LastName}
                    </td>
                    <td>
                    <td>
                    {props.candidate.Occupation}
                    </td>
                    </td>
                    <td>
                    <button className='btn btn-danger'
                    onClick={()=>{
                     props.CandidateProfile();
                    }}>
                    View
                    </button>
                    </td>

           </tr>
}
export default TableRows;