'use client';

import PageModules from '../CssModules/SignUp_SignIn_Page.module.css';
import { useFormik } from 'formik';
import {
  Button,
  Div,
  Facebook_button,
  Form,
  GoogleButton,
  H2,
  Hr,
  Input,
  Label,
  P,
  Span,
} from '../Components';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const initialValues = {
  name: '',
  email: '',
  password: '',
  lastname: '',
};

const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = "To'ldirishing Shart";
  }

  if (!values.email) {
    errors.email = "To'ldirishing Shart";
  } else if (
    !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email)
  ) {
    errors.email = "Emailga Muvofiq to'g'ri Email Format Kiriting !!!";
  }

  if (!values.password) {
    errors.password = "To'ldirishing Shart";
  }

  if (!values.lastname) {
    errors.lastname = "To'ldirishing Shart";
  }

  return errors;
};

const SignIn = () => {
  const router = useRouter();

  const formik = useFormik({
    initialValues,
    onSubmit: async (values) => {
      console.log(values);
      try {
        const res = await axios.post(
          'https://0001.uz/myself',
          // JSON.stringify(values)
          JSON.stringify(LS_Get_Data('authToken'))
          // Shu Joyida Muammo Bor Ya'ni localStorage dagi Datani Id bilan Qo'shib Jo'natib Sinadim 
        );
        console.log(res, 'bordi keldi');
        // LS_Set_Data('authToken', res?.data);
        console.log(values, "Jo'natilgan Data");
        console.log(LS_Get_Data('authToken'), 'LSga Saqlangan Datalar');
        if (res?.isOk === true && res?.message === 'ok') {
          router.push('/AllBooks');
        } else {
          router.push('/');
        }
      } catch (err) {
        alert(err?.message);
      }
    },
    validate,
  });

  return (
    <Div className={PageModules.SignUpFrame}>
      <H2 className={PageModules.SignUpTitle}>Sign up</H2>
      <Div className={PageModules.ButtonsWrapper}>
        <GoogleButton />
        <Facebook_button />
      </Div>
      <Div className={PageModules.LineWrapper}>
        <Div className={PageModules.SignUpHr}>
          <Hr />
        </Div>
        <P className={PageModules.LineText}>or</P>
        <Div className={PageModules.SignUpHr}>
          <Hr />
        </Div>
      </Div>
      {/* Form */}
      <Form onSubmit={formik.handleSubmit} className={PageModules.SignUpForm}>
        <Div className={PageModules.SignUpFormBox}>
          <Div className={PageModules.SignUpInputWrapper}>
            <Label className={PageModules.SignUpLabel} htmlFor="label">
              Your name
            </Label>
            <Input
              className={PageModules.SignUpInputName}
              required="required"
              autoComplete="name"
              id="name"
              name="name"
              defaultValue={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="text"
              placeholder="Enter your Name"
            />
            {formik.touched.name && formik.errors.name ? (
              <Span className={PageModules.ErrorText}>
                {formik.errors.name}
              </Span>
            ) : null}
          </Div>
          {/* First-Input-Box */}
          <Div className={PageModules.SignUpInputWrapper}>
            <Label htmlFor="label" className={PageModules.SignUpLabel}>
              Your email
            </Label>
            <Input
              className={PageModules.SignUpInputName}
              required="required"
              autoComplete="email"
              id="email"
              name="email"
              defaultValue={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="email"
              placeholder="Enter your email"
            />
            {formik.touched.email && formik.errors.email ? (
              <Span className={PageModules.ErrorText}>
                {formik.errors.email}
              </Span>
            ) : null}
          </Div>
          {/* Second-Input-Box */}
          <Div className={PageModules.SignUpInputWrapper}>
            <Label className={PageModules.SignUpLabel} htmlFor="label">
              Your key word
            </Label>
            <Input
              className={PageModules.SignUpInputName}
              required="required"
              autoComplete="key"
              id="key"
              name="key"
              defaultValue={formik.values.key}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="text"
              placeholder="Enter your keyword"
            />
            {formik.touched.key && formik.errors.key ? (
              <Span className={PageModules.ErrorText}>{formik.errors.key}</Span>
            ) : null}
          </Div>
          {/* third-Input-Box */}
          <Div className={PageModules.SignUpInputWrapper}>
            <Label htmlFor="label" className={PageModules.SignUpLabel}>
              Your Secret Word
            </Label>
            <Input
              className={PageModules.SignUpInputName}
              required="required"
              autoComplete="secret"
              id="secret"
              name="secret"
              defaultValue={formik.values.secret}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="text"
              placeholder="Enter your Secretword"
            />
          </Div>
          {formik.touched.secret && formik.errors.secret ? (
            <Span className={PageModules.ErrorText}>
              {formik.errors.secret}
            </Span>
          ) : null}
        </Div>
        {/* 3-chi qism */}
        <Div className={PageModules.SignUpFormSecondInnexBox}>
          <Button className={PageModules.SignUpSubmitBtn} type="submit">
            <Span className={PageModules.SubmitButtonText}>SIGN UP</Span>
          </Button>
          <P>
            <Span className={PageModules.SignUpEndText}>
              Are you not have Account
            </Span>
            <Link className={PageModules.SignUpEndText} href="/">
              Go to sign up.
            </Link>
          </P>
        </Div>
      </Form>
    </Div>
  );
};

export default SignIn;
