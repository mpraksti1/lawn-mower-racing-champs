import React from 'react';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { withAlert } from 'react-alert';
import { Formik, Field, Form } from 'formik';
import EmailIcon from 'react-icons/lib/md/email';
import EyeIcon from 'react-icons/lib/md/remove-red-eye';
import BaseForm from '../BaseForm';
import Button from '../../Elements/Button';
import Text from '../../Elements/Text';
import to from '../../awaitToJs';

const SignInSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Required'),
  password: Yup.string()
    .required('Required'),
});

const MyForm = ({ errors, touched }) => (
  <div>
    <Text xlg sans spaceAbove block>Welcome back!</Text>
    <Text sm thin spaceBelow block>Good to see you again!</Text>
    <Form noValidate>
      <div className="field-wrapper">
        <label htmlFor="email">
          <Text xsm thin sans spaceBelow block>Email</Text>
        </label>
        <div className="icon-input">
          <EmailIcon />
          <Field type="email" name="email" id="email" placeholder="example@test.com" />
        </div>
        {errors.email && touched.email && (
          <Text block spaceAbove sm red className="field-error">{errors.email}</Text>
        )}
      </div>
      <div className="field-wrapper">
        <label htmlFor="password">
          <Text xsm thin sans spaceBelow block>Password</Text>
        </label>
        <div className="icon-input">
          <EyeIcon />
          <Field type="password" name="password" id="password" placeholder="********" />
        </div>
        {errors.password && touched.password && (
          <Text block spaceAbove sm red className="field-error">{errors.password}</Text>
        )}
      </div>
      <Button outline type="submit" id="login">Submit</Button>
    </Form>
  </div>
);

export const LoginForm = props => (
  <BaseForm>
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={SignInSchema}
      onSubmit={
        async (creds) => {
          const { login, alert } = props;
          let err;
          let loginResult;
          // eslint doesn't know the return from this function is an array
          // eslint-disable-next-line prefer-const
          [err, loginResult] = await to(login(creds));

          if (loginResult.success) {
            props.history.push('/roster');
            return;
          }

          if (err) {
            alert.error('There was a problem logging you in, please try again');
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

LoginForm.propTypes = {
  // eslint-disable-next-line
  history: PropTypes.object.isRequired,
  // eslint-disable-next-line
  alert: PropTypes.object.isRequired,
  login: PropTypes.func.isRequired,
};

export default withAlert(LoginForm);
