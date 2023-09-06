function TableRows(props)
{
    return <tr>
                    <td>
                        {props.voter.FirstName}
                    </td>
                    <td>
                    {props.voter.LastName}
                    </td>
                    <td>
                    <td>
                    {props.voter.Occupation}
                    </td>
                    </td>
                    <td>
                    <button className='btn btn-danger'
                    onClick={()=>{
                     props.viewCandidate(props.voter.CandidateId)
                    }}>
                    Block
                    </button>
                    </td>

           </tr>
}
export default TableRows;