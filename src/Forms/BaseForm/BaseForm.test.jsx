import BaseForm from '.';

describe('Base form component', () => {
  it('renders without crashing', () => {
    shallow(
      <BaseForm>
        <form>
          <p>A form goes here</p>
        </form>
      </BaseForm>,
    );
  });

  it('matches snapshot', () => {
    const wrapper = shallow(
      <BaseForm>
        <form>
          <p>A form goes here</p>
        </form>
      </BaseForm>,
    );

    expect(wrapper).toMatchSnapshot();
  });
});
