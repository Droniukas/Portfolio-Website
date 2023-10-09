import React from 'react';
import './RainbowAnimatedText.css';

type RainbowAnimatedTextProps = {
  isAnimationActive: boolean;
  text: string;
};

const RainbowAnimatedText = (props: RainbowAnimatedTextProps) => {
  const { isAnimationActive, text } = props;
  return (
    <>
      {text.split('').map((char, index) => {
        const style = {
          '--index': index,
          '--chars': text.length,
        } as React.CSSProperties;
        return (
          <div
            style={style}
            className={`char-animated ${isAnimationActive && 'char-animated-animation'}`}
            key={index}
          >
            {`${char}`}
          </div>
        );
      })}
    </>
  );
};

export default RainbowAnimatedText;
