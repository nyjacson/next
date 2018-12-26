// @flow

type Size = {
  width: ?number,
  height: ?number
};

export function getMqType(size: Size) {
  return size.width < 744 ? 'SP' : size.width < 1025 ? 'TL' : 'PC';
}
