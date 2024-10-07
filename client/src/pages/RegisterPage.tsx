import { Button, Checkbox, Col, Form, Input, Row, Select } from "antd";
import "./register.css";
import {
  AppleLoginButton,
  FacebookLoginButton,
  GoogleLoginButton,
  MicrosoftLoginButton,
} from "react-social-login-buttons";

type RegisterType = {
  fullName: string;
  username: string;
  email: string;
  password: string;
  country: string;
};

const RegisterPage = () => {
  return (
    <div className="flex justify-center ">
      <Form
        name="basic"
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        style={{ maxWidth: 500, width: "100%" }}
        autoComplete="off"
        className="bg-white px-3 py-3 md:px-0 "
      >
        {/* full name */}
        <Form.Item<RegisterType>
          label="Full Name"
          name="fullName"
          rules={[{ required: true, message: "Please input your full name!" }]}
        >
          <Input
            placeholder="First name and last name"
            className="border-1 border-solid border-black transition-none rounded-none p-3 hover:border-black focus:border-2 focus:border-black "
          />
        </Form.Item>

        {/* email */}

        <Form.Item<RegisterType>
          label="E-mail"
          name="email"
          rules={[
            { required: true, message: "Please input your email!" },
            { type: "email", message: "Email format is not correct" },
          ]}
        >
          <Input
            type="email"
            placeholder="E-mail"
            className="border-1 border-solid border-black transition-none rounded-none p-3 hover:border-black focus:border-2 focus:border-black"
          />
        </Form.Item>

        {/* username */}
        <Form.Item<RegisterType>
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input
            placeholder="Username"
            className="border-1 border-solid border-black transition-none rounded-none p-3 hover:border-black focus:border-2 focus:border-black"
          />
        </Form.Item>
        {/* password */}

        <Form.Item<RegisterType>
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input
            type="password"
            placeholder="Password"
            className="border-1 border-solid border-black transition-none rounded-none p-3 hover:border-black focus:border-2 focus:border-black"
          />
        </Form.Item>

        {/* Country */}
        <Form.Item<RegisterType>
          label="Country"
          name="country"
          rules={[{ required: true, message: "Please select your country!" }]}
        >
          <Select
            placeholder="Country/Area"
            options={[
              {
                label: "Viet Nam",
                value: "Viet Nam",
              },
              {
                label: "Thailand",
                value: "Thailand",
              },
              {
                label: "China",
                value: "China",
              },
            ]}
          />
        </Form.Item>
        <Form.Item
          name="agreement"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value
                  ? Promise.resolve()
                  : Promise.reject(new Error("Should accept agreement")),
            },
          ]}
        >
          <Checkbox>
            I have read the <a href="">agreement</a>
          </Checkbox>
        </Form.Item>

        <p className="text-[11px] text-[#707070] mb-8 ">
          Bằng cách tạo tài khoản, bạn đồng ý với Điều khoản dịch vụ và Mã danh
          dự và bạn thừa nhận rằng edX và mỗi Thành viên xử lý dữ liệu cá nhân
          của bạn theo Chính sách bảo mật
        </p>

        {/* Register account */}
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="!transition-none !border-none !rounded-none !bg-red-600 mt-1 p-5 text-lg"
          >
            Create a free account
          </Button>
        </Form.Item>
        {/* Check */}

        {/* Order sign up */}
        <div>
          <h4 className="font-semibold my-3">Or register with:</h4>
          {/* login with google , microsoft face book */}
          <Row className="mt-4" gutter={[4, 4]}>
            <Col span={12}>
              <AppleLoginButton className="!text-base !rounded-none !shadow-none" />
            </Col>
            <Col span={12}>
              <FacebookLoginButton className="!text-base !rounded-none  !shadow-none" />
            </Col>
            <Col span={12}>
              <GoogleLoginButton className="!text-base !text-white  !rounded-none !shadow-none !bg-[#4285f4]" />
            </Col>
            <Col span={12}>
              <MicrosoftLoginButton className="!text-base  !rounded-none  !shadow-none" />
            </Col>
          </Row>
        </div>
      </Form>
    </div>
  );
};

export default RegisterPage;
