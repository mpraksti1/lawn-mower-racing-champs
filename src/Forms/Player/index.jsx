import React from 'react';
import * as Yup from 'yup';
import { withAlert } from 'react-alert';
import PersonIcon from 'react-icons/lib/md/person';
import StarIcon from 'react-icons/lib/md/star';
import HandIcon from 'react-icons/lib/md/pan-tool';
import BaseForm from '../BaseForm';
import Button from '../../Elements/Button';
import Text from '../../Elements/Text'
import { Formik, Field, Form } from 'formik';

const PlayerrSchema = Yup.object().shape({
  first_name: Yup.string()
    .min(2, 'Name must be at least 2 characters long')
    .required('Required'),
  last_name: Yup.string()
    .min(2, 'Name must be at least 2 characters long')
    .required('Required'),
  rating: Yup.number()
    .min(1)
    .max(10),
  handedness: Yup.string()
    .oneOf(['right', 'left'], 'Invalid Handedness')
    .required('Required'),
});

const PlayerForm = props => (
  <BaseForm>
  <Formik
    initialValues={{
      first_name: '',
      last_name: '',
      rating: '1',
      handedness: 'right',
    }}
    validationSchema={PlayerrSchema}
      onSubmit={async player => {
        const token = window.localStorage.token;
        try {
          const playerResult = await props.createPlayer(player, token);
          console.log('PlayerResult', playerResult);
          if (playerResult.success) {
            props.history.push('/roster');
          }
          else {
            props.alert.error(playerResult.error.message);
          }
        } catch(error) {
          props.alert.error(error.message);
        }
      }}
      component={MyForm}
    />
  </BaseForm>
);

const MyForm = ({touched, errors, isSubmitting}) => (
  <div>
    <Text xlg thin sans spaceAround block>Add a racer:</Text>
    <Form>
      <div className="icon-input">
        <PersonIcon />
        <Field type="text" name="first_name" placeholder="Fist Name" />
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
        <StarIcon />
        <Field component="select" name="rating">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </Field>
      </div>
      {errors.rating && touched.rating && (
        <Text sm red className="field-error">{errors.rating}</Text>
      )}
      <div className="icon-input">
        <HandIcon />
        <Field component="select" name="handedness">
          <option value="right">Right</option>
          <option value="left">Left</option>
        </Field>
      </div>
      {errors.handedness && touched.handedness && (
        <Text sm red className="field-error">{errors.handedness}</Text>
      )}
      <Button outline type="submit" disabled={isSubmitting}>Submit</Button>
    </Form>
  </div>
);

export default withAlert(PlayerForm);
