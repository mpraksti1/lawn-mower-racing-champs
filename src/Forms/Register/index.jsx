import React from 'react';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { withAlert } from 'react-alert';
import { Formik, Field, Form } from 'formik';
import PersonIcon from 'react-icons/lib/md/person';
import EmailIcon from 'react-icons/lib/md/email';
import LockIcon from 'react-icons/lib/md/lock';
import BaseForm from '../BaseForm';
import Button from '../../Elements/Button';
import Text from '../../Elements/Text';
import to from '../../awaitToJs';

const RegisterSchema = Yup.object().shape({
  first_name: Yup.string()
    .min(2, 'Name must be at least 2 characters long')
    .required('Required'),
  last_name: Yup.string()
    .min(2, 'Name must be at least 2 characters long')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Required'),
  password: Yup.string()
    .required('Password is required')
    .min(7, 'Password must be at least 7 characters'),
  confirm_password: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords do not match')
    .required('Required'),
});

const MyForm = ({ touched, errors }) => (
  <div>
    <Text xlg sans spaceAround block>Welcome to the LMRCFL!</Text>
    <Text sm thin spaceBelow block>
      Fill in the form below for access to a personalized team of your favorite RCLM racers!
    </Text>
    <Form>
      <div className="field-wrapper">
        <label htmlFor="email">
          <Text xsm thin sans spaceBelow block>First Name</Text>
        </label>
        <div className="icon-input">
          <PersonIcon />
          <Field type="text" name="first_name" placeholder="Casey" id="firstName" />
        </div>
        {errors.first_name && touched.first_name && (
          <Text block spaceAbove sm red className="field-error">{errors.first_name}</Text>
        )}
      </div>
      <div className="field-wrapper">
        <label htmlFor="email">
          <Text xsm thin sans spaceBelow block>Last Name</Text>
        </label>
        <div className="icon-input">
          <PersonIcon />
          <Field type="text" name="last_name" placeholder="Doe" id="lastName" />
        </div>
        {errors.last_name && touched.last_name && (
          <Text block spaceAbove sm red className="field-error">{errors.last_name}</Text>
        )}
      </div>
      <div className="field-wrapper">
        <label htmlFor="email">
          <Text xsm thin sans spaceBelow block>Email</Text>
        </label>
        <div className="icon-input">
          <EmailIcon />
          <Field type="email" name="email" placeholder="example@test.com" id="email" />
        </div>
        {errors.email && touched.email && (
          <Text block spaceAbove sm red className="field-error">{errors.email}</Text>
        )}
      </div>
      <div className="field-wrapper">
        <label htmlFor="email">
          <Text xsm thin sans spaceBelow block>Password</Text>
        </label>
        <div className="icon-input">
          <LockIcon />
          <Field type="password" name="password" placeholder="********" id="password" />
        </div>
        {errors.password && touched.password && (
          <Text block spaceAbove sm red className="field-error">{errors.password}</Text>
        )}
      </div>
      <div className="field-wrapper">
        <label htmlFor="email">
          <Text xsm thin sans spaceBelow block>Confirm Password</Text>
        </label>
        <div className="icon-input">
          <LockIcon />
          <Field type="password" name="confirm_password" id="confirmPassword" placeholder="********" />
        </div>
        {errors.confirm_password && touched.confirm_password && (
          <Text block spaceAbove sm red className="field-error">{errors.confirm_password}</Text>
        )}
      </div>
      <Button outline type="submit" id="register">Register</Button>
    </Form>
  </div>
);

export const RegisterForm = props => (
  <BaseForm>
    <Formik
      initialValues={{
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        confirm_password: '',
      }}
      validationSchema={RegisterSchema}
      onSubmit={
        async (user) => {
          const { register, alert } = props;
          let err;
          let loginResult;
          // eslint doesn't know the return from this function is an array
          // eslint-disable-next-line prefer-const
          [err, loginResult] = await to(register(user));

          if (loginResult) {
            props.history.push('/roster');
            return;
          }

          if (err) {
            alert.error('There was a problem creating your account, please try again');
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
};

RegisterForm.propTypes = {
  // eslint-disable-next-line
  history: PropTypes.object.isRequired,
  // eslint-disable-next-line
  alert: PropTypes.object.isRequired,
  register: PropTypes.func.isRequired,
};

export default withAlert(RegisterForm);
