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
      entries: [
        {
          text: 'text1',
          checked: false,
          id: 1
        },
        {
          text: 'text2',
          checked: true,
          id: 2
        }
      ],
      ...props
    }
  });
};

let wrapper;

jest
  .mock('../Row', () => 'Row');

beforeEach(() => {
  wrapper = setupWrapper();
});

afterEach(() => {
  expect(toJSON(wrapper.render())).toMatchSnapshot();
  wrapper = null;
});

describe('List component', () => {
  it('should render', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('should have an appropriate class name', () => {
    expect(wrapper.find('.jt-List').exists()).toBe(true);
  });

  it('should render an appropriate number of rows', () => {
    expect(wrapper.find('Row').length).toEqual(2);
  });
});
