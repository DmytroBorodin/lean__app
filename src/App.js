import React from 'react';
import './App.css';
import Menu from "./MenuComponent/MenuComponent";
import Dashboard from "./DashboardComponent/DashboardComponent";
import Businesses from "./BusinessesComponent/BusinessesComponent";
import Profile from "./ProfileComponent/ProfileComponent";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import CreateBusiness from "./CreateBusinessComponent/CreateBusinessComponent";
import BusinessProfile from "./BusinessProfileComponent/BusinessProfileComponent";
import Members from "./MembersComponent/MembersComponent";
import EditUserInfo from "./EditUserInfoComponent/EditUserInfoComponent";
import EditMemberAccess from "./EditMemberAccessComponent/EditMemberAccessComponent";
import SearchPayees from "./SearchPayeesComponent/SearchPayeesComponent";
import Payees from "./PayeesComponent/PayeesComponent";


function App() {

    const disable = (block) => {
        block.current.classList.remove('active__mobile');
    }
  return (
    <BrowserRouter>
        <div className="wrap">
            <Menu disableFunc={disable}/>
            <div className="wrapper" >
                <Switch>
                    <Route exact path='/dashboard'>
                        <Dashboard/>
                    </Route>
                    <Route path='/businesses'>
                        <Businesses/>
                    </Route>
                    <Route path='/profile/' component={Profile} />
                    <Route path='/create_business/' component={CreateBusiness} />
                    <Route path='/business_profile/' component={BusinessProfile} />
                    <Route path='/business/members' component={Members} />
                    <Route path='/business/edit_user_information' component={EditUserInfo}/>
                    <Route path='/business/edit_member_access' component={EditMemberAccess}/>
                    <Route path='/business/payees/success' component={SearchPayees}/>
                    <Route path='/business/payees' render={() => <Payees exactPath={'business/payees/success'}/>}/>
                </Switch>
            </div>
        </div>
    </BrowserRouter>
  );
}

export default App;
