import React from 'react';
import { mount } from 'enzyme';

import Node from './Node';

let data;
let props;

describe('Node', () => {
  beforeEach(() => {
    data = {
      nodeGraphData: {
        id: 1,
      },
    };

    props = {
      data,
      renderNode: () => null,
    };
  });

  it('specifies a name attribute on the group that can be used to identify the item being dragged', () => {
    const wrapper = mount(<Node {...props} />);
    const groupName = wrapper.find('Group').prop('name');
    expect(groupName).toBe('node-1');
  });
});
