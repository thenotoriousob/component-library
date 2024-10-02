import React from 'react';
import Card from "./index";
import { RiDownloadCloud2Line } from "react-icons/ri";

export default function CardsExamples() {

    return (
        <>
            <h2 className="component-section-label">Examples</h2>
            <div className="card-container">
                <Card>
                    <Card.Title>Easy Deployment</Card.Title>
                    <Card.Text>Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</Card.Text>
                </Card>

                <Card icon={<RiDownloadCloud2Line />} iconBackgroundColor="green" iconColor="black">
                    <Card.Title color="green">Easy Deployment</Card.Title>
                    <Card.Text color="black">Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</Card.Text>
                </Card>

            </div>
            <Card.Useage />
            <Card.Useage type="custom" />
        </>
    );

};