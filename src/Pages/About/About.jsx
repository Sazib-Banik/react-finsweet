import React from 'react';
import AboutHeroArea from '../../Components/AboutHeroArea/AboutHeroArea';
import AboutMission from '../../Components/AboutMission/AboutMission';
import Author from '../../Components/Author/Author';
import JoinTeam from '../../Components/JoinTeam/JoinTeam';
import Overview from '../../Components/Overview/Overview';
import StartedBlog from '../../Components/StartedBlog/StartedBlog';
import TeamPart from '../../Components/TeamPart/TeamPart';
import './About.css';

const About = () => {
    return (
        <>
            <AboutHeroArea />
            <Overview />
            <AboutMission />
            <TeamPart />
            <StartedBlog />
            <Author/>
            <JoinTeam />
        </>
    );
};

export default About;