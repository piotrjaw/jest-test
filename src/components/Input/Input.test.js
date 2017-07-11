import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { getWrapper } from '../../helpers/test';
import Input from './Input';

const defaultProps = {
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
  });

  it('should handle onChange event', () => {
  });

  it('should handle clear call', () => {
  });
});
