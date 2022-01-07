import React from 'react';
import "./Qs.css";
import ReplaceText from "../../components/ReplaceText/ReplaceText";
import Header1 from "../../components/Header1/Header1";
import Text1 from "../../components/Text1/Text1";

export default function Qs() {
    return (
        <div>
            <Header1 className="Header1-NoRadius HeaderQs">
                <Text1>
                    <ReplaceText text="NOSOTROS" />
                    <div className="title start">Quienes somos</div>
                    <div className="HeadText-description start description">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Optio, dolores voluptas? Animi dignissimos amet non nulla laborum officiis nisi ipsum velit fugiat reprehenderit,
                        quisquam voluptatum rem, ea necessitatibus eaque vero!
                    </div>
                </Text1>
                <div className="box-violet"></div>
            </Header1>
        </div>
    )
}
