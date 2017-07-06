import React from 'react';

export const getWrapper = ({ Component, method, props }) => {
  return method(
    <Component
      { ...props }
    >
      { props.children }
    </Component>
  );
};

export const getMockStore = (mockFn, state = {}) => ({
  subscribe: mockFn(),
  dispatch: mockFn(),
  getState: mockFn(() => ({
    ...state,
  })),
});
