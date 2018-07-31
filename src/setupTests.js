import React from 'react';
import { ThemeProvider } from 'styled-components';
import Enzyme, { shallow, render, mount } from 'enzyme';
import { createSerializer } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import history from './history';
import theme from './theme';

expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }));

Enzyme.configure({ adapter: new Adapter() });

const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn(),
};

const shallowWithTheme = (tree, baseTheme) => {
  // eslint-disable-next-line
  const context = shallow(<ThemeProvider theme={baseTheme} />)
    .instance()
    .getChildContext();
  return shallow(tree, { context });
};

const renderWithTheme = (tree, baseTheme) => {
  // eslint-disable-next-line
  const context = shallow(<ThemeProvider theme={baseTheme} />)
    .instance()
    .getChildContext();

  return render(tree, {
    context,
    childContextTypes: ThemeProvider.childContextTypes,
  });
};

const mountWithTheme = (tree, baseTheme) => {
  // eslint-disable-next-line
  const context = shallow(<ThemeProvider theme={baseTheme} />)
    .instance()
    .getChildContext();

  return mount(tree, {
    context,
    childContextTypes: ThemeProvider.childContextTypes,
  });
};

global.shallowWithTheme = shallowWithTheme;
global.renderWithTheme = renderWithTheme;
global.mountWithTheme = mountWithTheme;
global.fakeHistory = history;
global.theme = theme;
global.localStorage = localStorageMock;
global.React = React;
global.shallow = shallow;
global.render = render;
global.mount = mount;
global.sinon = sinon;
