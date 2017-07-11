import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { getWrapper } from '../../helpers/test';
import Row from './Row';

const setupWrapper = (config = {}) => {
  const { method = shallow, props = {} } = config;
  return getWrapper({
    Component: Row,
    method,
    props: {
      ...props
    }
  });
};

let wrapper;

beforeEach(() => {
  wrapper = setupWrapper();
  jest.resetAllMocks();
});

afterEach(() => {
  expect(toJSON(wrapper.render())).toMatchSnapshot();
  wrapper = null;
});

describe('Row', () => {
  it('should render', () => {
  });

  it('should render a to-do text', () => {
  });

  it('should render a button', () => {
  });

  it('should handle a checked entry', () => {
  });

  it('should handle a unchecked entry', () => {
  });

  it('should render a `Delete` button', () => {
  });

  it('should call onCheckClick with _id and negation of current checked status when clicked', () => {
  });

  it('should call onDeleteClick with _id when clicked', () => {
  });
});
