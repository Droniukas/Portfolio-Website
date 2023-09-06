import React, { MutableRefObject, useRef } from 'react';
import gsap from 'gsap';
import './SocialMediaLink.css';

type SocialMediaLinkProps = {
  linkHref: string;
  linkName: string;
};
const SocialMediaLink = (props: SocialMediaLinkProps) => {
  const { linkHref, linkName } = props;
  const lineRef = useRef();
  const linkRef = useRef();

  const underlineLink = (
    lineRef: MutableRefObject<HTMLDivElement>,
    linkRef: MutableRefObject<HTMLAnchorElement>,
    removeUnderline?: boolean,
  ) => {
    const animationData = {
      width: removeUnderline ? 100 : 0,
    };
    const timeline = gsap.timeline();
    linkRef.current.style.fontWeight = removeUnderline ? 'normal' : 'bold';
    timeline.to(animationData, {
      width: removeUnderline ? 0 : 100,
      duration: 0.5,
      ease: 'power1.out',
      onUpdate: () => {
        lineRef.current.style.width = animationData.width + '%';
      },
    });
  };

  return (
    <div
      onMouseEnter={() => {
        underlineLink(lineRef, linkRef);
      }}
      onMouseLeave={() => {
        underlineLink(lineRef, linkRef, true);
      }}
      className="social-media-link-div"
    >
      <a
        href={linkHref}
        ref={linkRef}
        target="_blank"
        rel="noopener noreferrer"
        className="social-media-link"
      >
        {linkName}
      </a>
      <div
        ref={lineRef}
        style={{
          width: '0%',
          backgroundColor: 'black',
          height: '1px',
        }}
      />
    </div>
  );
};

export default SocialMediaLink;
