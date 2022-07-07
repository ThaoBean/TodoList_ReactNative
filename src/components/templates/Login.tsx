import React from 'react';
import {StyleSheet, View} from 'react-native';
import Fb from '../../images/Fb';
import Google from '../../images/Google';
import Twitter from '../../images/Twitter';
import Input from '../atoms/Input';
import ItemIcon from '../atoms/ItemIcon';
import Typography from '../atoms/Title';
import {Formik} from 'formik';
import * as yup from 'yup';
import ButtonCustom from '../atoms/Button';

interface ILogin {}

const validateLogin = yup.object().shape({
  email: yup
    .string()
    .email('Please enter valid email')
    .required('Email address is required'),
  password: yup
    .string()
    .min(8, ({min}) => `Password must be at least ${min} characters`)
    .required('Password is required'),
});

const Login: React.FC<ILogin> = () => {
  const data = [<Twitter />, <Google />, <Fb />];

  const initialValues = {
    email: '',
    password: '',
  };

  const handleSubmitLogin = () => {};

  return (
    <View style={styles.container}>
      <Typography
        title="Login"
        color="#2C2C2C"
        fontWeight="400"
        fontSize={24}
        textAlign="center"
      />
      <View style={styles.wrapIcon}>
        {data.map((item, index) => {
          return <ItemIcon id={index} key={index} icon={item} />;
        })}
      </View>
      <View style={styles.wrapTitle}>
        <Typography
          title="or be classical"
          color="#9A9A9A"
          fontWeight="400"
          fontSize={16}
          textAlign="center"
        />
      </View>
      <View style={styles.formRegister}>
        <Formik
          initialValues={initialValues}
          validationSchema={validateLogin}
          onSubmit={handleSubmitLogin}>
          {({handleChange, handleSubmit, values, errors}) => (
            <>
              <View style={styles.input}>
                <Input
                  placeholder="Enter email"
                  onChangeText={handleChange('email')}
                  value={values.email}
                  err={errors.email}
                />
              </View>
              <View style={styles.input}>
                <Input
                  placeholder="Enter password"
                  onChangeText={handleChange('password')}
                  value={values.password}
                  err={errors.password}
                  secureTextEntry
                />
              </View>
              <View style={styles.wrapBtn}>
                <View style={styles.btn}>
                  <ButtonCustom
                    labelBtn="Login"
                    fontSize={14}
                    backgroundColor="#5956E9"
                    borderRadius={20}
                    fontWeight="700"
                    color="white"
                    onPress={handleSubmit}
                  />
                </View>
              </View>
            </>
          )}
        </Formik>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingTop: 32,
    paddingBottom: 32,
    paddingLeft: 16,
    paddingRight: 16,
  },
  wrapIcon: {
    marginTop: 30,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapTitle: {
    marginTop: 18,
    marginBottom: 22,
  },
  formRegister: {
    width: '100%',
  },
  input: {
    marginBottom: 16,
  },
  checkboxContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  wrapBtn: {
    marginTop: 20,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  btn: {
    width: '50%',
  },
  styleErr: {
    fontFamily: 'Montserrat',
    color: 'red',
    fontWeight: '400',
    fontSize: 13,
    marginBottom: 10,
    textAlign: 'center',
  },
});

export default Login;
