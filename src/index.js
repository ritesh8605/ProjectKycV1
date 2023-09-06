import { BrowserRouter } from "react-router-dom";
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, Switch } from 'react-router-dom';
import Launch from "./Launch/Launch";
import ProtectedRoutes from "./SignUp/ProtectedRoutes/ProtectedRoutes";
import Login from "./SignUp/Login";
import Demo from "./Demo";
import UserHome from "./UserHome/UserHome";
import CandidateProfile from "./CandidateProfile/CandidateProfile";
import AdminHome from "./Admin/AdminHome/AdminHome";
import CandidateApproval from "./CandidateApproval/CandidateApproval";
import RequestCredentials from "./RequestCredentials.js/RequestCredentials";
import NewAdmin from "./Admin/NewAdmin/NewAdmin";
import ExList from "./Admin/ExList/ExList";
import RemoveCandidate from "./Admin/RemoveCandidate/RemoveCandidate";
import CandidateSignUp from "./SignUp/CandidateSignUp/CandidateSignUp";
import BlockVoter from "./Admin/BlockVoter/BlockVoter";
import SearchComment from "./Admin/Search/SearchComment";
import SearchProblem from "./Admin/Search/SearchProblem";
import ProtectedRoutesForLogin from "./SignUp/ProtectedRoutes/ProtectedRoutesForLogin";
import CommentCard from "./CandidateProfile/CommentCard";
import GiveFeedback from "./Feedback/GiveFeedback";
import SearchCandidate from "./SearchCandidate/SearchCandidate";
import ShowFeedback from "./Admin/ShowFeedback/ShowFeedback";
import ShowPendingCandidate from "./Admin/ShowPendingCandidate/ShowPendingCandidate";
import Profile from "./Profile/Profile";
import ShowApplicationStatus from "./ShowApplicationStatus/ShowApplicationStatus";
import ProblemPage from "./CandidateProfile/ProblemPage";
import CandidateProfileForCandidate from "./CandidateProfile/CandidateProfileForCandidate";
import CommentPage from "./CandidateProfile/CommentPage";
import AboutUs from "./AboutUs/AboutUs";
import AddressDtl from "./SignUp/CandidateSignUp/AddressDtl";
import AssemblyDtl from "./SignUp/CandidateSignUp/AssemblyDtl";
import PieChart from "./Launch/Charts/PieChart";
import VoterSignUp from "./SignUp/VoterSignUp/VoterSignUp";

import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import AddressDtlOfVoter from "./SignUp/VoterSignUp/AddressDtlOfVoter";
import store from './Redux/store';
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>

        <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <ProtectedRoutes exact path="/Login" component={Login} Login={Login}></ProtectedRoutes>
                <ProtectedRoutesForLogin exact path="/LoggedIn"></ProtectedRoutesForLogin>
                <ProtectedRoutes exact path="/UserHome" component={UserHome} UserHome={UserHome}></ProtectedRoutes>
                <ProtectedRoutes exact path="/ApproveCandidate" component={CandidateApproval} CandidateApproval={CandidateApproval}></ProtectedRoutes>
                <ProtectedRoutes exact path="/CWarning" component={SearchComment} SearchComment={SearchComment}></ProtectedRoutes>
                <ProtectedRoutes exact path="/PWarning" component={SearchProblem} SearchProblem={SearchProblem}></ProtectedRoutes>
                <ProtectedRoutes exact path="/RMCandidate" component={RemoveCandidate} RemoveCandidate={RemoveCandidate} ></ProtectedRoutes>
                <ProtectedRoutes exact path="/AddCandidate" component={CandidateSignUp} CandidateSignUp={CandidateSignUp}></ProtectedRoutes>
                <ProtectedRoutes exact path="/Feedback" component={ShowFeedback} ShowFeedback={ShowFeedback}></ProtectedRoutes>

                <ProtectedRoutes exact path="/BlockVoter" component={BlockVoter} BlockVoter={BlockVoter}></ProtectedRoutes>
                <ProtectedRoutes exact path="/Candidates" component={SearchCandidate} SearchCandidate={SearchCandidate}></ProtectedRoutes>

                <ProtectedRoutes exact path="/ExList" component={ExList} ExList={ExList} ></ProtectedRoutes>
                <ProtectedRoutes exact path="/Authorize" component={NewAdmin} NewAdmin={NewAdmin}></ProtectedRoutes>
                <ProtectedRoutes exact path="/GiveFeedback" component={GiveFeedback} GiveFeedback={GiveFeedback}></ProtectedRoutes>
                <ProtectedRoutes exact path="/ShowDetailOfCandidate" component={ShowPendingCandidate} ShowPendingCandidate={ShowPendingCandidate}></ProtectedRoutes>
                <ProtectedRoutes exact path="/AddressDtlOfVoter" component={AddressDtlOfVoter} AddressDtlOfVoter={AddressDtlOfVoter}></ProtectedRoutes>
                <ProtectedRoutes exact path="/Profile" component={Profile} Profile={Profile}></ProtectedRoutes>
                <ProtectedRoutes exact path="/ProblemAnalysis" component={ProblemPage} ProblemPage={ProblemPage}></ProtectedRoutes>
                <ProtectedRoutes exact path="/CommentsAnalysis" component={CommentPage} CommentPage={CommentPage}></ProtectedRoutes>
                <ProtectedRoutes exact path="/CandidateProfile" component={CandidateProfile} CandidateProfile={CandidateProfile}></ProtectedRoutes>
                <Route excat path="/SignUpVoter" component={VoterSignUp} VoterSignUp={VoterSignUp}></Route>
                <Route exact path="/CandidateSignUp2" component={AddressDtl} AddressDtl={AddressDtl}></Route>
                <Route exact path="/CandidateSignUp3" component={AssemblyDtl} AssemblyDtl={AssemblyDtl}></Route>
                <Route exact path="/RequestCred" component={RequestCredentials}></Route>
                <Route exact path="/ApplicationStatus" component={ShowApplicationStatus}></Route>
                <Route exact path="/Logout" component={Launch} Launch={Launch}></Route>
                <Route exact path="/AboutUs" component={AboutUs} AboutUs={AboutUs}></Route>
                <Route exact path="/" component={Launch}></Route>
            </Switch>
        </BrowserRouter>
        </Provider>

    </>



    // candidate profile page linkage remain


    //<Profile></Profile>
    //<ShowPendingCandidate></ShowPendingCandidate>
    // <CandidateApproval></CandidateApproval>

    // {/* <SearchCandidate></SearchCandidate> */}
    // {/* <CandidateProfile></CandidateProfile> */}

    //<GiveFeedback> </GiveFeedback>
    // <CandidateProfile></CandidateProfile>
    //  <UserHome></UserHome> 
    //  <AdminHome></AdminHome>  
    //<ExList></ExList>
    //<CandidateApproval></CandidateApproval>
    //<NewAdmin></NewAdmin>

    //<SearchComment></SearchComment> 
)



