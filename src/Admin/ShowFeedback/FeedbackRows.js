function FeedbackRows(props) {
    return <tr>
        <td>
            {props.feedback.UserId}
        </td>
        <td>
            {props.feedback.FirstName}
        </td>
        <td>
            {props.feedback.LastName}
        </td>
        <td>
            {props.feedback.Feedback}
        </td>
        <td>
           <center>
             <button className='btn btn-danger'
                onClick={() => {
                    
                }}>
                OK
            </button>
           </center>
        </td>
       

    </tr>
}
export default FeedbackRows;