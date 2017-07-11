import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { getWrapper } from '../../helpers/test';
import Input from './Input';

const defaultProps = {
  onChange: jest.fn()
};

const setupWrapper = (config = {}) => {
  const { method = shallow, props = {} } = config;
  return getWrapper({
    Component: Input,
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

describe('Input component', () => {
  it('should render', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('should handle onChange event', () => {
    const event = {
      target: { value: 'test' },
      persist: jest.fn()
    };
    wrapper.find('input').simulate('change', event);
    expect(defaultProps.onChange).toHaveBeenCalledTimes(1);
    expect(wrapper.state()).toEqual({ value: 'test' });
    expect(event.persist).toHaveBeenCalledTimes(1);
  });

  it('should handle clear call', () => {
    const event = {
      target: { value: 'test' },
      persist: jest.fn()
    };
    wrapper.find('input').simulate('change', event);
    expect(wrapper.state()).toEqual({ value: 'test' });
    expect(defaultProps.onChange).toHaveBeenCalledTimes(1);
    wrapper.instance().clear();
    expect(wrapper.state()).toEqual({ value: '' });
    expect(defaultProps.onChange).toHaveBeenCalledTimes(2);
  });
});
