import { mount, shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { getWrapper } from '../../helpers/test';
import TaskAdder from './TaskAdder';

const defaultProps = {
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
  });

  it('should handle input change', () => {
  });

  it.skip('should handle button click', () => {
  });
});
