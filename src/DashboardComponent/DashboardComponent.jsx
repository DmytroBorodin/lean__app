import React from "react";
import './Dashboard.css';
import Step from "./StepComponent/StepComponent";
import BusinessCard from "./BusinessCardComponent/BusinessCard";
import AddBusinessCard from "./AddBusinessCardComponent/AddBusinessCardComponent";

const Dashboard = (props) => {
    return (
        <div className="dashboard__wrapper">
            <div className='dashboard__wrap'>
                <div className="dashboard__header">
                    <h1 className="dashboard__title">
                        Hi Vishal!
                    </h1>
                    <p className="dashboard__title__text">
                        Welcome to your Personal Dashboard.
                    </p>
                </div>
                <div className="dashboard__steps__block">
                    <Step className={'active'} stepTitle={'Step 1: Update Basic Details'}/>
                    <Step className={''} stepTitle={'Step 2: Identification'}/>
                </div>
                <div className="businesses__block">
                    <div className="businesses__block__header">
                        <h2 className="dashboard__title">
                            Your Businesses
                        </h2>
                        <p className="dashboard__title__text">
                            These are the list of the businesses you have created thus far.
                        </p>
                    </div>
                    <div className="business__container">
                        <BusinessCard/>
                        <AddBusinessCard/>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Dashboard;