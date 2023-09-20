import React from 'react';
import './style.css';
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import './AboutPage.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function App() {
const aboutRef = useRef(null);
const horizontalBorderBottomRef = useRef(null);
const verticalBorderRightRef = useRef(null);

useLayoutEffect(() => {
const horizontalBorderToAnimate = horizontalBorderBottomRef.current;
const verticalBorderToAnimate = verticalBorderRightRef.current;

    if (horizontalBorderToAnimate && verticalBorderToAnimate) {
      const customToggleActions = 'restart reverse restart reverse';
      const context = gsap.context(() => {
        gsap.from(horizontalBorderToAnimate, {
          duration: 0.55,
          ease: 'power.out',
          width: '100%',
          scrollTrigger: {
            markers: true,
            trigger: horizontalBorderToAnimate,
            toggleActions: customToggleActions,
          },
        });

        gsap.from(verticalBorderToAnimate, {
          duration: 0.55,
          ease: 'power.out',
          height: '100%',
          scrollTrigger: {
            trigger: horizontalBorderToAnimate,
            toggleActions: customToggleActions,
          },
        });
      });
      return () => context.revert();
    }

}, []);

// const elementToAnimate = aboutRef.current;
// useLayoutEffect(() => {
// if (elementToAnimate) {
// const context = gsap.context(() => {
// gsap.from(elementToAnimate, {
// duration: 0.55,
// translateY: 70,
// opacity: 0,
// ease: 'power.out',
// scrollTrigger: {
// trigger: elementToAnimate,
// toggleActions: toogleActions
// ? toogleActions
// : 'restart reverse restart reverse',
// start: 'top 90%',
// end: 'bottom 10%',
// },
// });
// });
// return () => context.revert();
// }
// }, [elementToAnimate]);

return (
<>
{/_ <div style={{ height: '110vh' }}> </div> _/}
<div id="about-div" ref={aboutRef}>
<div id="about-div-photo">
<div className="about-top-div" />
<div className="about-middle-div" id="about-image-div"></div>
<div className="about-bottom-div" />
</div>
<div id="about-div-text">
<div
            className="about-vertical-border"
            id="about-vertical-border-left"
          />
<div className="about-top-div">
<div id="about-image-top-div"></div>
</div>
<div className="about-middle-div">
<div id="about-middle-div-left-side">
<div id="about-page-big-text-div">Something</div>
<div id="about-page-smaller-text-div">
In publishing and graphic design, Lorem ipsum is a placeholder
text commonly used to demonstrate the visual form of a document
or a typeface without relying on meaningful content. Lorem ipsum
may be used as a placeholder before final copy is available.
</div>
</div>
</div>
</div>
<div id="about-div-end">
<div
            className="about-vertical-border"
            id="about-vertical-border-right"
            ref={verticalBorderRightRef}
          />
<div className="about-top-div" />
<div className="about-middle-div" />
</div>
<div
          id="about-horizontal-border-top"
          className="about-horizontal-border"
        />
<div
          id="about-horizontal-border-bottom"
          className="about-horizontal-border"
          ref={horizontalBorderBottomRef}
        />
</div>
</>
);
}
