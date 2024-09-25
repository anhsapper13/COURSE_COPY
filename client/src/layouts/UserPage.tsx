import React from "react";
import Header from "../components/header/Header";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import Footer from "../components/footer/Footer";

// const {Header,Footer,Content} = Layout

const UserPage: React.FC = () => {
  return (
    <Layout>
      <Layout.Header className="bg-white px-2  h-[76px]">
        <Header />
      </Layout.Header>

      <Layout.Content>
        <Outlet />
      </Layout.Content>
      <Layout.Footer>
        <Footer />
      </Layout.Footer>
    </Layout>
  );
};

export default UserPage;
