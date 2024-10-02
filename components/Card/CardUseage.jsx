import React from "react";
import Useage from '../Useage/Useage';

export default function CardUseage({type = "default"}) {
    return (
        <Useage title={type === "default" ? "Useage - Default" : "Useage - Custom"}>
            <pre>{'import Card from "./components/Card/index";'}</pre>
            {type !== "default" && <pre>{'import { RiDownloadCloud2Line } from "react-icons/ri";'}</pre>}

            {type === "default" ?
            <>
              <pre>{'<Card>'}</pre>
              <pre>{'    <Card.Title>Easy Deployment</Card.Title>'}</pre>
              <pre>{'    <Card.Text>'}</pre>
              <pre>{'        Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.'}</pre>
              <pre>{'    </Card.Text>'}</pre>
              <pre>{'</Card>'}</pre>
            </>

            :

            <>
              <pre>{'<Card icon={<RiDownloadCloud2Line />} iconBackgroundColor="green" iconColor="black">'}</pre>
              <pre>{'    <Card.Title color="green">Easy Deployment</Card.Title>'}</pre>
              <pre>{'    <Card.Text color="black">'}</pre>
              <pre>{'        Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.'}</pre>
              <pre>{'    </Card.Text>'}</pre>
              <pre>{'</Card>'}</pre>
            </>
            }
        </Useage>
    );
};
