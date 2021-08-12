const type = {
  base: 'Roboto-Regular',
  bold: 'Roboto-Bold',
  emphasis: 'Roboto-Italic',
};

const size = {
  h1: 38,
  h2: 34,
  h3: 30,
  h4: 26,
  h5: 20,
  h6: 19,
  input: 18,
  regular: 17,
  medium: 14,
  small: 12,
  tiny: 8.5,
};

const style = {
  h1: {
    fontFamily: type.base,
    fontSize: size.h1,
  },
  h2: {
    // fontWeight: type.bold,
    fontSize: size.h2,
    fontWeight: 'bold',
  },
  h3: {
    // fontFamily: type.emphasis,
    fontSize: size.h3,
    fontStyle: 'italic',
  },
  h4: {
    // fontFamily: type.base,
    fontSize: size.h4,
    fontWeight: 'bold',
  },
  h5: {
    // fontFamily: type.base,
    fontSize: size.h5,
    fontWeight: 'bold',
  },
  h6: {
    // fontFamily: type.emphasis,
    fontSize: size.h6,
    fontStyle: 'italic',
  },
  normal: {
    // fontFamily: type.base,
    fontSize: size.regular,
    fontWeight: 'bold',
  },
  description: {
    // fontFamily: type.base,
    fontSize: size.medium,
    fontWeight: 'bold',
  },
};

export default {
  type,
  size,
  style,
};
