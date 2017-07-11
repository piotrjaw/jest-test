import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { getWrapper } from '../../helpers/test';
import Button from './Button';

const defaultProps = {
  onClick: jest.fn(),
};

const setupWrapper = (config = {}) => {
  const { method = shallow, props = {} } = config;
  return getWrapper({
    Component: Button,
    method,
    props: {
      ...defaultProps,
      ...props
    }
  });
};

let wrapper;

beforeEach(() => {
  wrapper = setupWrapper();
});

afterEach(() => {
  expect(toJSON(wrapper.render())).toMatchSnapshot();
  wrapper = null;
  jest.resetAllMocks();
});

describe('Button component', () => {
  it('should render', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('should render text children', () => {
    wrapper = setupWrapper({ props: { children: 'Test' } });
    expect(wrapper.find('button').text()).toEqual('Test');
  });

  it('should render HTML children', () => {
    wrapper = setupWrapper({ props: { children: <span>Test</span> }});
    expect(wrapper.find('button').html()).toEqual('<button type="button"><span>Test</span></button>');
  });

  it('should call onClick when clicked', () => {
    wrapper.find('button').simulate('click');
    expect(defaultProps.onClick).toHaveBeenCalledTimes(1);
  });
});
