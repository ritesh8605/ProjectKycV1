import { Route} from 'react-router-dom';
import { useHistory } from 'react-router-dom';

function ProtectedRoutes(Props) {
    
    const history=useHistory();

    let tempValidityCheck=true;
    if(tempValidityCheck){
     return <Route exact path={Props.path} component={Props.component}></Route>
    }
    else{
        history.push("/");
    }
}

export default ProtectedRoutes;