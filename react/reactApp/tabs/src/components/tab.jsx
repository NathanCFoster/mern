import React, { useState } from "react";
import { bounceIn } from 'react-animations';
import { useSpring, animated } from 'react-spring';



const LeTab = props => {
    // const [jump, setJump] = useState(false);
    const { x } = useSpring({
        from: { x: 0 },
        x: props.isTabbed ? 1 : 0,
        config: { duration: 1000 },
    })
    // const clicking = (e) => {
    //     e.target.style = styles;
    //     console.log(BounceInDiv.toString);
    //     console.log(e.target);
    // }


    return (
        <li className="nav-item">
            {/* <BounceInDiv className="nav-link" href="#"> */}
            {/* {props.content} */}
            <animated.div

                style={{
                    opacity: x.to({ range: [0, 1], output: [0.3, 1] }),
                    scale: x.to({
                        range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                        output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
                    }),
                }}>
                <a onClick={() => {
                    props.newTab(props.thisTab);
                    // if (props.thisTab == props.curTab) {
                    //     setJump(true);
                    // } else {
                    //     setJump(false);
                    // }
                }} className="nav-link">
                    {props.content.title}
                </a>
            </animated.div>

            {/* </BounceInDiv> */}
        </li>
    );
}

export default LeTab;