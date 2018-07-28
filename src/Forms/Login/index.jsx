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
      <div className="icon-input">
        <EmailIcon />
        <Field type="email" name="email" placeholder="E-mail" />
      </div>
      {errors.email && touched.email && (
        <Text sm red className="field-error">{errors.email}</Text>
      )}
      <div className="icon-input">
        <EyeIcon />
        <Field type="password" name="password" placeholder="Password" />
      </div>
      {errors.password && touched.password && (
        <Text sm red className="field-error">{errors.password}</Text>
      )}
      <Button outline type="submit">Submit</Button>
    </Form>
  </div>
);

const LoginForm = props => (
  <BaseForm>
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={SignInSchema}
      onSubmit={
        async (creds) => {
          const { login } = props;
          try {
            const loginResult = await login(creds);
            if (loginResult.success) {
              props.history.push('/roster');
            } else {
              props.alert.error(loginResult.error.message);
            }
          } catch (error) {
            props.alert.error(error.message);
          }
        }}
      component={MyForm}
    />
  </BaseForm>
);

MyForm.propTypes = {
  // eslint-disable-next-line
  history: PropTypes.object.isRequired,
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
