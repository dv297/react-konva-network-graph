import React from 'react';
import { Group, Rect, Text } from 'react-konva';

const SampleNodeRenderer = (props) => {
  return (
    <Group>
      <Rect width={300} height={50} fill="#fff" shadowColor="#636f74" shadowBlur={3} cornerRadius={5} />
      <Text text={props.label} x={20} y={15} />
    </Group>
  );
};

export default SampleNodeRenderer;
