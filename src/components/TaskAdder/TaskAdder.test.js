import { mount, shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { getWrapper } from '../../helpers/test';
import TaskAdder from './TaskAdder';

const defaultProps = {
  onButtonClick: jest.fn(() => ({
    then: jest.fn()
  }))
};

const setupWrapper = (config = {}) => {
  const { method = shallow, props = {} } = config;
  return getWrapper({
    Component: TaskAdder,
    method,
    props: {
      ...defaultProps,
      ...props
    }
  });
};

let wrapper;

jest
  .mock('../Button', () => 'Button')
  .mock('../Input', () => 'Input');

beforeEach(() => {
  wrapper = setupWrapper();
});

afterEach(() => {
  expect(toJSON(wrapper.render())).toMatchSnapshot();
  wrapper = null;
  jest.resetAllMocks();
});

describe('TaskAdder component', () => {
  it('should render', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('should handle input change', () => {
    expect(wrapper.state('todo')).toBeUndefined();
    wrapper.instance().handleInputChange({ target: { value: 'test' } });
    expect(wrapper.state().todo).toBe('test');
  });

  it.skip('should handle button click', () => {
    wrapper = setupWrapper({ method: mount });
    wrapper.instance().handleButtonClick();
    expect(defaultProps.onButtonClick).toHaveBeenCalledTimes(1);
  });
});
