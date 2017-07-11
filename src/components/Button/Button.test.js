import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { getWrapper } from '../../helpers/test';
import Button from './Button';

const defaultProps = {
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
  });

  it('should render text children', () => {
  });

  it('should render HTML children', () => {
  });

  it('should call onClick when clicked', () => {
  });
});
