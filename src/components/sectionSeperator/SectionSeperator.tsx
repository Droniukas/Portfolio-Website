import React from 'react';
import starIconBlack from './resources/images/star-christmas-black.png';
import './SectionSeperator.css';

type SectionSeperatorProps = {
  name: string;
  hasIcon?: boolean;
};

const SectionSeperator = (props: SectionSeperatorProps) => {
  const { name, hasIcon } = props;
  return (
    <>
      <div className="additional-symbols">
        {hasIcon !== false && <img src={starIconBlack} id="star-icon" />}
        {name}
      </div>
      <div className="page-line" />
    </>
  );
};

export default SectionSeperator;
