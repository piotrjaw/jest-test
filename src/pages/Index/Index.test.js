import { mount, shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { getMockStore, getWrapper } from '../../helpers/test';
import Index from './Index';

const setupWrapper = (config = {}) => {
  const { method = shallow, props = {} } = config;
  return getWrapper({
    Component: Index,
    method,
    props: {
      store: getMockStore(jest.fn, {
        index: { todos: [] }
      }),
      ...props
    }
  });
};

let wrapper;

jest
  .mock('./Index.actions', () => ({
    getTodos: jest.fn()
  }));

beforeEach(() => {
  wrapper = setupWrapper();
});

afterEach(() => {
  expect(toJSON(wrapper.render())).toMatchSnapshot();
  wrapper = null;
  jest.resetAllMocks();
});

describe('Index page', () => {
  it('should render', () => {
    expect(wrapper.exists()).toBe(true)
  });

  it('should call getTodos', () => {
    wrapper = setupWrapper({ method: mount });
    expect(require('./Index.actions').getTodos).toHaveBeenCalledTimes(1);
  });
});
