import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { getMockStore, getWrapper } from '../../helpers/test';
import Index from './Index';

const setupWrapper = (config = {}) => {
  const { method = shallow, props = {} } = config;
  return getWrapper({
    Component: Index,
    method,
    props: {
      store: getMockStore(jest.fn),
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
