import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { getWrapper } from '../../helpers/test';
import Row from './Row';

const entry = {
  text: 'text1',
  checked: false,
  _id: 1
};

const onCheckClick = jest.fn();

const onDeleteClick = jest.fn();

const setupWrapper = (config = {}) => {
  const { method = shallow, props = {} } = config;
  return getWrapper({
    Component: Row,
    method,
    props: {
      entry,
      onCheckClick,
      onDeleteClick,
      ...props
    }
  });
};

let wrapper;

jest
  .mock('../Button', () => 'Button');

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
    expect(wrapper.exists()).toBe(true);
  });

  it('should render a to-do text', () => {
    expect(wrapper.find('.jt-Row__text').text()).toEqual(entry.text);
  });

  it('should render a button', () => {
    expect(wrapper.find('.jt-Row__check-button').exists()).toBe(true);
  });

  it('should handle a checked entry', () => {
    wrapper = setupWrapper({ props: {
      entry: {
        ...entry,
        checked: true
      }
    } });
    expect(wrapper.find('.jt-Row__check-button').text()).toEqual('Uncheck');
    expect(wrapper.find('.jt-Row__text').prop('style')).toMatchObject({ textDecoration: 'line-through' });
  });

  it('should handle a unchecked entry', () => {
    wrapper = setupWrapper({ props: {
      entry: {
        ...entry,
        checked: false
      }
    } });
    expect(wrapper.find('.jt-Row__check-button').text()).toEqual('Check');
    expect(wrapper.find('.jt-Row__text').prop('style')).not.toMatchObject({ textDecoration: 'line-through' });
  });

  it('should render a `Delete` button', () => {
    expect(wrapper.find('.jt-Row__delete-button').text()).toEqual('Delete');
  });

  it('should call onCheckClick with _id and negation of current checked status when clicked', () => {
    wrapper.find('.jt-Row__check-button').simulate('click');
    expect(onCheckClick).toHaveBeenCalledTimes(1);
    expect(onCheckClick).toHaveBeenCalledWith(entry._id, !entry.checked);
  });

  it('should call onDeleteClick with _id when clicked', () => {
    wrapper.find('.jt-Row__delete-button').simulate('click');
    expect(onDeleteClick).toHaveBeenCalledTimes(1);
    expect(onDeleteClick).toHaveBeenCalledWith(entry._id);
  });
});
