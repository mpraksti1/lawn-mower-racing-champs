import { MemoryRouter } from 'react-router-dom';
import FormModal from '.';
import theme from '../../theme';

describe('Form modal', () => {
  it('renders without crashing', () => {
    shallow(<FormModal />);
  });

  it('matches snapshot', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/login']} initialIndex={0}>
        <FormModal isRequesting={false} theme={theme} />
      </MemoryRouter>,
    );

    expect(wrapper).toMatchSnapshot();
  });
});
