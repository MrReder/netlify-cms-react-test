import { PageHeader } from '../components/page-header';
import { Navigation } from '../components/navigation';
import MainImg from '../img/MainImg.jpg';
import '../style.css';

export const Main = () => {
    return (
        <>
            <PageHeader>Homework 21 Home Page</PageHeader>
            <Navigation />
            <h2>Let`s imagine that there is amazing text which describes how our enterprise is wonderfull))</h2>
            <img src={MainImg} className="main-img" alt=" "></img>
        </>
    )
};