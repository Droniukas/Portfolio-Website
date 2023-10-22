import React from 'react';
import starIconBlack from './resources/images/star-christmas-black-2.svg';
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
        {hasIcon !== false && <img src={starIconBlack} className="star-icon" />}
        {name}
      </div>
      <div className="page-line" />
    </>
  );
};

export default SectionSeperator;
