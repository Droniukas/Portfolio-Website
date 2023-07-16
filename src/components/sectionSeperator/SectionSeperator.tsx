import React from 'react';
import starIconBlack from './star-christmas-black.png';

type SectionSeperatorProps = {
  name: string;
};

const SectionSeperator = (props: SectionSeperatorProps) => {
  const { name } = props;
  return (
    <>
      <div className="additional-symbols">
        <img src={starIconBlack} id="star-icon" />
        01. -- {name}
      </div>
      <div className="page-line" />
    </>
  );
};

export default SectionSeperator;
