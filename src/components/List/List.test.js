import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { getWrapper } from '../../helpers/test';
import List from './List';

const setupWrapper = (config = {}) => {
  const { method = shallow, props = {} } = config;
  return getWrapper({
    Component: List,
    method,
    props: {
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
});

describe('List component', () => {
  it('should render', () => {
  });

  it('should have an appropriate class name', () => {
  });

  it('should render an appropriate number of rows', () => {
  });
});
