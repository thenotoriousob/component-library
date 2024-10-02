import React from 'react';
import Useage from '../Useage/Useage';

export default function BannerUseage({type}) {

    return (
        <Useage>
            <pre>{'import Banner from "./components/Banner/index";'}</pre>
            <pre>{`<Banner variant="success" type="${type}">`}</pre>
            <pre>{'    <Banner.Header variant="success">Congratulations</Banner.Header>'}</pre>

            {type === "multi" &&
            <>
                <pre>{'    <Banner.Text>'}</pre>
                <pre>{'        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.'}</pre>
                <pre>{'    </Banner.Text>'}</pre>
            </>
            }
            <pre>{'</Banner>'}</pre>
        </Useage>
    )

}