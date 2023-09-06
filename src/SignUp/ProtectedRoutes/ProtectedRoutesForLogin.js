import { Route } from 'react-router-dom';

import AdminHome from '../../Admin/AdminHome/AdminHome';
import UserHome from '../../UserHome/UserHome';
import CandidateProfileForCandidate from '../../CandidateProfile/CandidateProfileForCandidate';
import { useHistory } from 'react-router-dom';

function ProtectedRoutesForLogin(Props) {


    const history = useHistory();

    const UserData = sessionStorage.getItem("LoggedUserData");
    const User = JSON.parse(UserData);

    debugger;


    if (User.userType === "ADMIN") {
        return <Route exact path={Props.path} component={AdminHome}></Route>
    }

    else if (User.userType === "VOTER") {
        return <Route exact path={Props.path} component={UserHome}></Route>
    }

    else if (User.userType === "CANDIDATE") {
        return <Route exact path={Props.path} component={CandidateProfileForCandidate}></Route>
    }
    else {
        history.push("/Login")
    }
}

export default ProtectedRoutesForLogin;