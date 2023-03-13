import React from 'react';
import AboutMission from '../../Components/AboutMission/AboutMission';
import Author from '../../Components/Author/Author';
import Category from '../../Components/Category/Category';
import ClientPart from '../../Components/ClientPart/ClientPart';
import FeaturePart from '../../Components/FeaturePart/FeaturePart';
import HeroPart from '../../Components/HeroPart/HeroPart';
import JoinTeam from '../../Components/JoinTeam/JoinTeam';
import SpecialPost from '../../Components/SpecialPost/SpecialPost';

const Home = () => {
    return (
        <>
         <HeroPart />
         <FeaturePart />
         <AboutMission />
         <Category />
         <SpecialPost />
         <Author />
         <ClientPart />
         <JoinTeam />   
        </>
    );
};

export default Home;