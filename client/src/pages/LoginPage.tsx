import { HomeOutlined } from "@ant-design/icons";
import { Button, Col, Form, Input, Row } from "antd";
import { NavLink } from "react-router-dom";
import {
  AppleLoginButton,
  FacebookLoginButton,
  GoogleLoginButton,
  MicrosoftLoginButton,
} from "react-social-login-buttons";

type InputField = {
  username: string;
  password: string;
};

export const LoginPage = () => {
  // const [submitData, setSubmitData] = useState<InputField>({} as InputField);
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
        <Form.Item<InputField>
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input
            placeholder="Username or email"
            className="border-1 border-solid border-black transition-none rounded-none p-3 hover:border-black focus:border-2 focus:border-black "
          />
        </Form.Item>

        <Form.Item<InputField>
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

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="!transition-none !border-none !rounded-none !bg-red-600 mt-1 p-5 text-lg"
          >
            Sign up
          </Button>
          <NavLink
            to={"/forgot-password"}
            className="px-4 py-6 !transition-none text-lg hover:text-[#454545] hover:underline"
          >
            Forgot password
          </NavLink>
        </Form.Item>
        {/* Order sign up */}
        <div>
          <h4 className="font-semibold my-3">Or sign up with:</h4>
          <div className="flex">
            <HomeOutlined style={{ margin: "0 5px 0 0" }} />
            <p className="text-[#454545]">
              Identity verification process for a school or a company
            </p>
          </div>
          {/* login with google , microsoft face book */}
          <Row className="mt-4" gutter={[4, 4]}>
            <Col span={12}>
              <AppleLoginButton
                className="!text-base !rounded-none !shadow-none"
              />
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

export default LoginPage;
