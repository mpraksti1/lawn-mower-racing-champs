import React from 'react';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { withAlert } from 'react-alert';
import { Formik, Field, Form } from 'formik';
import PersonIcon from 'react-icons/lib/md/person';
import StarIcon from 'react-icons/lib/md/star';
import HandIcon from 'react-icons/lib/md/pan-tool';
import BaseForm from '../BaseForm';
import Button from '../../Elements/Button';
import Text from '../../Elements/Text';
import to from '../../awaitToJs';

const PlayerrSchema = Yup.object().shape({
  first_name: Yup.string()
    .min(2, 'Name must be at least 2 characters long')
    .required('Required'),
  last_name: Yup.string()
    .min(2, 'Name must be at least 2 characters long')
    .required('Required'),
  rating: Yup.number()
    .min(1)
    .max(10000)
    .required('Required'),
  handedness: Yup.string()
    .oneOf(['right', 'left'], 'Invalid Handedness')
    .required('Required'),
});

const MyForm = ({ touched, errors, isSubmitting }) => (
  <div>
    <Text xlg thin sans spaceAround block>Add a racer:</Text>
    <Form>
      <div className="field-wrapper">
        <label htmlFor="firstName">
          <Text xsm thin sans spaceBelow block>First Name</Text>
        </label>
        <div className={`icon-input ${errors.first_name && touched.first_name ? 'error' : null}`}>
          <PersonIcon />
          <Field type="text" name="first_name" placeholder="Alex" id="firstName" />
        </div>
        {errors.first_name && touched.first_name && (
          <Text block spaceAbove sm red className="field-error">{errors.first_name}</Text>
        )}
      </div>
      <div className="field-wrapper">
        <label htmlFor="lastName">
          <Text xsm thin sans spaceBelow block>Last Name</Text>
        </label>
        <div className={`icon-input ${errors.last_name && touched.last_name ? 'error' : null}`}>
          <PersonIcon />
          <Field type="text" name="last_name" placeholder="Johnson" id="lastName" />
        </div>
        {errors.last_name && touched.last_name && (
          <Text block spaceAbove sm red className="field-error">{errors.last_name}</Text>
        )}
      </div>
      <div className="field-wrapper">
        <label htmlFor="rating">
          <Text xsm thin sans spaceBelow block>Rating</Text>
        </label>
        <div className={`icon-input ${errors.rating && touched.rating ? 'error' : null}`}>
          <StarIcon />
          <Field type="text" name="rating" id="rating" placeholder="8000" />
        </div>
        {errors.rating && touched.rating && (
          <Text block spaceAbove sm red className="field-error">{errors.rating}</Text>
        )}
      </div>
      <div className="field-wrapper">
        <label htmlFor="handedness">
          <Text xsm thin sans spaceBelow block>Handedness</Text>
        </label>
        <div className={`icon-input ${errors.handedness && touched.handedness ? 'error' : null}`}>
          <HandIcon />
          <Field component="select" name="handedness" id="handedness">
            <option value="right">Right</option>
            <option value="left">Left</option>
          </Field>
        </div>
        {errors.handedness && touched.handedness && (
          <Text block spaceAbove sm red className="field-error">{errors.handedness}</Text>
        )}
      </div>
      <Button outline type="submit" disabled={isSubmitting} id="create">Create</Button>
    </Form>
  </div>
);

export const PlayerForm = props => (
  <BaseForm>
    <Formik
      initialValues={{
        first_name: '',
        last_name: '',
        rating: '',
        handedness: 'right',
      }}
      validationSchema={PlayerrSchema}
      onSubmit={
        async (player) => {
          const token = window.localStorage.getItem('token');
          const { createPlayer, alert } = props;
          let err;
          let playerAddResult;

          // eslint doesn't know the return from this function is an array
          // eslint-disable-next-line prefer-const
          [err, playerAddResult] = await to(createPlayer(player, token));

          if (playerAddResult) {
            alert.success('Racer added to your team!');
            props.history.push('/roster');
            return;
          }

          if (err) {
            alert.error('There was a problem creating your player');
            return;
          }

          alert.error('Whoops, something went wrong!');
        }}
      component={MyForm}
    />
  </BaseForm>
);

MyForm.propTypes = {
  // eslint-disable-next-line
  errors: PropTypes.object.isRequired,
  // eslint-disable-next-line
  touched: PropTypes.object.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
};

PlayerForm.propTypes = {
  // eslint-disable-next-line
  history: PropTypes.object.isRequired,
  // eslint-disable-next-line
  alert: PropTypes.object.isRequired,
  createPlayer: PropTypes.func.isRequired,
};

export default withAlert(PlayerForm);
