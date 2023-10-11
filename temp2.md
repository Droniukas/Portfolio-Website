import React, { useEffect, useRef } from 'react';
import './Sidebar.css';
import githubIcon from './github-icon.png';
import linkedinIcon from './linkedin-icon.png';

const Sidebar = () => {
  /*
	This pen cleverly utilizes SVG filters to create a "Morphing Text" effect. Essentially, it layers 2 text elements on top of each other, and blurs them depending on which text element should be more visible. Once the blurring is applied, both texts are fed through a threshold filter together, which produces the "gooey" effect. Check the CSS - Comment the #container rule's filter out to see how the blurring works!
*/

  const text1Ref = useRef<HTMLSpanElement>(null);
  const text2Ref = useRef<HTMLSpanElement>(null);
  const morphingHasStarted = useRef(false);

  // The strings to morph between. You can change these to anything you want!
  const texts = ['domasraila.dev', 'DR'];

  // Controls the speed of morphing.
  const morphLenght = 0.5;

  let textIndex = texts.length - 1; // 1. intially we get the last element from the texts array
  // let time = new Date(); // 1. Initially we get the current date
  let morph = 0;
  let cooldown = 0;
  let time;

  function doMorph(animationRequestId: number) {
    morph -= cooldown; // calculate morph time elapsed
    console.log(cooldown);
    cooldown = 0;

    let morphRatio = morph / morphLenght;

    if (morphRatio > 1) {
      cooldown = 0;
      morphRatio = 1;
      doCooldown();
      stopMorphing(animationRequestId);
    }

    setMorph(morphRatio);
  }

  // A lot of the magic happens here, this is what applies the blur filter to the text.
  function setMorph(morphRatio: number) {
    // fraction = Math.cos(fraction * Math.PI) / -2 + .5;
    text2Ref.current.style.filter = `blur(${Math.min(8 / morphRatio - 8, 100)}px)`;
    text2Ref.current.style.opacity = `${Math.pow(morphRatio, 0.4) * 100}%`;

    morphRatio = 1 - morphRatio;
    text1Ref.current.style.filter = `blur(${Math.min(8 / morphRatio - 8, 100)}px)`;
    text1Ref.current.style.opacity = `${Math.pow(morphRatio, 0.4) * 100}%`;

    text1Ref.current.textContent = texts[textIndex % texts.length];
    text2Ref.current.textContent = texts[(textIndex + 1) % texts.length];
  }

  function doCooldown() {
    morph = 0;
    text2Ref.current.style.filter = '';
    text2Ref.current.style.opacity = '100%';

    text1Ref.current.style.filter = '';
    text1Ref.current.style.opacity = '0%';
  }

  const stopMorphing = (animationRequestId: number) => {
    window.cancelAnimationFrame(animationRequestId);
    morphingHasStarted.current = false;
  };

  const startMorphing = () => {
    text2Ref.current.textContent = texts[(textIndex + 1) % texts.length];
    morphingHasStarted.current = true;
    time = new Date();
    animate();
  };

  useEffect(() => {
    text1Ref.current.textContent = texts[textIndex % texts.length];
    setTimeout(() => {
      startMorphing();
    }, 650);
  }, []);

  // Animation loop, which is called every frame.
  function animate() {
    const animationRequestId = window.requestAnimationFrame(animate);

    const newTime = new Date();
    // calculate how much time has elapsed since the last frame in seconds ↓
    const delta = (newTime.getTime() - time.getTime()) / 1000;
    console.log(delta);
    time = newTime;

    cooldown -= delta; // makes the cooldown count down
    if (text1Ref.current && text2Ref.current) {
      doMorph(animationRequestId);
    }
  }

  // so on trigger we should invoke the doMorph loop and increment textIndex by one
  // figure out when the morphing has ended to invoke the doCooldown function

  return (
    <div id="sidebar-div">
      <div id="logo">
        {/* <!-- The two texts --> */}
        <div id="container">
          <span id="text1" ref={text1Ref}></span>
          <span id="text2" ref={text2Ref}></span>
        </div>

        {/* <!-- The SVG filter used to create the merging effect --> */}
        <svg id="filters">
          <defs>
            <filter id="threshold">
              {/* <!-- Basically just a threshold effect - pixels with a high enough opacity are set to full opacity, and all other pixels are set to completely transparent. --> */}
              <feColorMatrix
                in="SourceGraphic"
                type="matrix"
                values="1 0 0 0 0
									0 1 0 0 0
									0 0 1 0 0
									0 0 0 255 -140"
              />
            </filter>
          </defs>
        </svg>
      </div>
      <div id="sidebar-icons">
        <div className="sidebar-img-div">
          <img src={githubIcon} className="sidebar-img" />
        </div>
        <div className="sidebar-img-div">
          <img src={linkedinIcon} className="sidebar-img" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
