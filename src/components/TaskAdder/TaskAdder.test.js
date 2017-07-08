import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { getWrapper } from '../../helpers/test';
import TaskAdder from './TaskAdder';

const setupWrapper = (config = {}) => {
  const { method = shallow, props = {} } = config;
  return getWrapper({
    Component: TaskAdder,
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
