import { Button, Form, Input } from "antd";
import type { LoginFormType } from "../../@types";
import { useLoginMutation } from "../../hooks/useQuery/useQueryMutation";
import { Loader } from "lucide-react";

const Login = () => {
  const { mutate, isPending } = useLoginMutation();
  const login = (e: LoginFormType) => {
    mutate(e);
  };
  return (
    <div className="w-[400px] m-auto flex items-center justify-center h-screen flex-col">
      <h1 className="mb-5 text-2xl">Welcome to CRM</h1>
      <Form onFinish={login} className="w-full">
        <Form.Item
          name={"email"}
          rules={[{ required: true, message: "Please enter your email!" }]}
        >
          <Input type="email" placeholder="Please enter your email" />
        </Form.Item>
        <Form.Item
          name={"password"}
          rules={[{ required: true, message: "Please enter your password!" }]}
        >
          <Input type="password" placeholder="Please enter your password" />
        </Form.Item>
        <Button type="primary" className="w-full" htmlType="submit">
          {isPending ? (
            <Loader size={16} className="loader animate-spin" />
          ) : (
            "Login"
          )}
        </Button>
      </Form>
    </div>
  );
};

export default Login;
