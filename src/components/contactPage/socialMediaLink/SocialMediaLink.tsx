import React, { useRef } from 'react';

type SocialMediaLinkProps = {
  linkHref: string;
  linkName: string;
};
const SocialMediaLink = (props: SocialMediaLinkProps) => {
  const { linkHref, linkName } = props;
  const linkDivRef = useRef();

  const underlineLink = (ref: any) => {
    ref.current.style.width = '100%';
  };

  const removeLinkUnderline = (ref: any) => {
    ref.current.style.width = '0%';
  };
  return (
    <div
      onMouseEnter={() => {
        underlineLink(linkDivRef);
      }}
      onMouseLeave={() => {
        removeLinkUnderline(linkDivRef);
      }}
      className="social-media-link-div"
    >
      <a href={linkHref} className="social-media-link">
        {linkName} <br />
      </a>
      <div
        ref={linkDivRef}
        style={{ width: '0%', backgroundColor: 'black', height: '1px' }}
      />
    </div>
  );
};

export default SocialMediaLink;
