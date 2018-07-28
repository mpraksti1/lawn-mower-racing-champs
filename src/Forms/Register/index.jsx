import React from 'react';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { withAlert } from 'react-alert';
import { Formik, Field, Form } from 'formik';
import PersonIcon from 'react-icons/lib/md/person';
import EmailIcon from 'react-icons/lib/md/email';
import EyeIcon from 'react-icons/lib/md/remove-red-eye';
import BaseForm from '../BaseForm';
import Button from '../../Elements/Button';
import Text from '../../Elements/Text';

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
    <Text xlg sans spaceAbove block>Welcome to the LMRC</Text>
    <Text sm thin spaceBelow block>
      Fill in the form below for access to a personalized roster of your favorite RCLM athletes!
    </Text>
    <Form>
      <div className="icon-input">
        <PersonIcon />
        <Field type="text" name="first_name" placeholder="First Name" />
      </div>
      {errors.first_name && touched.first_name && (
        <Text sm red className="field-error">{errors.first_name}</Text>
      )}
      <div className="icon-input">
        <PersonIcon />
        <Field type="text" name="last_name" placeholder="Last Name" />
      </div>
      {errors.last_name && touched.last_name && (
        <Text sm red className="field-error">{errors.last_name}</Text>
      )}
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
      <div className="icon-input">
        <EyeIcon />
        <Field type="password" name="confirm_password" placeholder="Confirm Password" />
      </div>
      {errors.confirm_password && touched.confirm_password && (
        <Text sm red className="field-error">{errors.confirm_password}</Text>
      )}
      <Button outline type="submit">Submit</Button>
    </Form>
  </div>
);

const RegistrationForm = props => (
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
      onSubmit={async (user) => {
        const { register } = props;
        try {
          const registerResult = await register(user);
          if (registerResult.success) {
            props.history.push('/');
          } else {
            props.alert.error(registerResult.error.message);
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
  errors: PropTypes.object.isRequired,
  // eslint-disable-next-line
  touched: PropTypes.object.isRequired,
};

RegistrationForm.propTypes = {
  // eslint-disable-next-line
  history: PropTypes.object.isRequired,
  // eslint-disable-next-line
  alert: PropTypes.object.isRequired,
  register: PropTypes.func.isRequired,
};

export default withAlert(RegistrationForm);
