import React, {useState} from 'react';
import slides from './data';

import Slider from './Slider';
import Slide from './Slide';

export const assets = slides.map(({picture}) => picture);

const LiquidSwipe = () => {
  const [index, setIndex] = useState(0);
  const prev = slides[index - 1];
  const next = slides[index + 1];
  return (
    <Slider
      key={index}
      index={index}
      setIndex={setIndex}
      prev={prev && <Slide slide={prev} />}
      next={next && <Slide slide={next} />}>
      <Slide slide={slides[index]!} />
    </Slider>
  );
};

export default LiquidSwipe;
