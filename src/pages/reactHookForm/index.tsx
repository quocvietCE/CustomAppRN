import React, {useState, useEffect} from 'react';
import {StyleSheet, Switch, Text, View} from 'react-native';
import {t, color} from 'react-native-tailwindcss';
import {
  useForm,
  Controller,
  ControllerRenderProps,
  ControllerFieldState,
  UseFormStateReturn,
  FieldError,
  FormProviderProps,
  Validate,
} from 'react-hook-form';

import Input from './Input';
import Button from './Button';

type FormData = {
  name: string;
  email: string;
  isBillingDifferent: boolean;
  billing: {
    billingName: string;
    billingEmail: string;
  };
};

const EMAIL_REGEX =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const ReactHookFrom = () => {
  // const [isBillingDifferent, setIsBillingDifferent] = useState(false);
  const {
    handleSubmit,
    control,
    formState: {errors},
    setValue,
    watch,
  } = useForm<FormData>();

  const isBillingDifferent = watch('isBillingDifferent');

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users/1',
      );
      const {name, email} = await response.json();
      console.log('fetchUser name: ', name);
      console.log('fetchUser email: ', email);
      setValue('name', name);
      setValue('email', email);
    } catch (error) {}
  };

  // const toggleBilling = () => {
  //   setIsBillingDifferent(prev => !prev);
  // };

  // onSubmit method
  const onSubmit = (data: FormData) => {
    console.log('onSubmit data: ', data);
  };

  // const isBillingDifferent = watch('isBillingDifferent');
  console.log('errors: ', errors);

  const validateName = async (value: string) => {
    console.log('validateName: ', value);
    if (value === 'name') {
      return true;
    }
    return false;
  };

  return (
    <View style={styles.container}>
      <Controller
        name="name"
        control={control}
        rules={{
          required: {value: true, message: 'Name is required'},
          // validate: validateName,
        }}
        render={({
          field: {onChange, value},
          fieldState: {},
          formState: {},
        }: {
          field: ControllerRenderProps<FormData, 'name'>;
          fieldState: ControllerFieldState;
          formState: UseFormStateReturn<FormData>;
        }) => (
          <Input
            onChangeText={(text: string) => onChange(text)}
            value={value}
            placeholder="Name"
            error={errors.name}
            errorText={errors?.name?.message}
          />
        )}
      />
      <Controller
        name="email"
        control={control}
        rules={{
          required: {value: true, message: 'Email is required'},
          pattern: {
            value: EMAIL_REGEX,
            message: 'Not a valid email',
          },
        }}
        render={({
          field: {onChange, value, name},
          fieldState: {},
          formState: {},
        }: {
          field: ControllerRenderProps<FormData, 'email'>;
          fieldState: ControllerFieldState;
          formState: UseFormStateReturn<FormData>;
        }) => {
          console.log('name: ', name);
          return (
            <Input
              onChangeText={(text: string) => onChange(text)}
              value={value}
              placeholder="Email"
              error={errors.email}
              errorText={errors?.email?.message}
            />
          );
        }}
      />
      <View style={styles.switch}>
        <Text style={styles.switchText}>Billing different</Text>
        <Controller
          defaultValue={false}
          name="isBillingDifferent"
          control={control}
          render={({
            field: {onChange, value},
            fieldState: {},
            formState: {},
          }: {
            field: ControllerRenderProps<FormData, 'isBillingDifferent'>;
            fieldState: ControllerFieldState;
            formState: UseFormStateReturn<FormData>;
          }) => (
            <Switch
              trackColor={{false: color.gray200, true: color.green600}}
              thumbColor={color.gray100}
              ios_backgroundColor={color.gray800}
              onValueChange={onChange}
              value={!!value}
            />
          )}
        />
      </View>
      {isBillingDifferent && (
        <>
          <Controller
            defaultValue=""
            name="billing.billingName"
            control={control}
            rules={{
              required: {value: true, message: 'Billing name is required'},
            }}
            render={({
              field: {onChange, value},
              fieldState: {},
              formState: {},
            }: {
              field: ControllerRenderProps<FormData, 'billing.billingName'>;
              fieldState: ControllerFieldState;
              formState: UseFormStateReturn<FormData>;
            }) => (
              <Input
                error={errors.billing}
                errorText={errors?.billing?.billingName?.message}
                onChangeText={(text: string) => onChange(text)}
                value={value}
                placeholder="Billing Name"
              />
            )}
          />
          <Controller
            defaultValue=""
            name="billing.billingEmail"
            control={control}
            rules={{
              required: {value: true, message: 'Billing email is required'},
              pattern: {value: EMAIL_REGEX, message: 'Not a valid email'},
            }}
            render={({
              field: {onChange, value},
              fieldState: {},
              formState: {},
            }: {
              field: ControllerRenderProps<FormData, 'billing.billingEmail'>;
              fieldState: ControllerFieldState;
              formState: UseFormStateReturn<FormData>;
            }) => (
              <Input
                error={errors.billing?.billingEmail}
                errorText={errors?.billing?.billingEmail?.message}
                onChangeText={(text: string) => onChange(text)}
                value={value}
                placeholder="Billing email"
              />
            )}
          />
        </>
      )}
      <Button onPress={handleSubmit(onSubmit)} label="Submit" />
    </View>
  );
};

const styles = {
  container: [t.flex1, t.justifyCenter, t.itemsCenter, t.p6, t.bgGray200],
  switch: [t.mB4, t.selfStart, t.flexRow, t.itemsCenter],
  switchText: [t.textBase, t.mR3, t.textGray800],
};

export default ReactHookFrom;
