import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import { Table, Badge, Menu, Dropdown, Space, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";

const menu = (
  <Menu>
    <Menu.Item>Action 1</Menu.Item>
    <Menu.Item>Action 2</Menu.Item>
  </Menu>
);

const TalbeButton = ({ props }) => <Button {...props}>{props.value}</Button>;

function NestedTable() {
  const expandedRowRender = () => {
    const columns = [
      { title: "Date", dataIndex: "date", key: "date" },
      { title: "Name", dataIndex: "name", key: "name" },
      {
        title: "Status",
        key: "state",
        render: () => (
          <span>
            <Badge status="success" />
            Finished
          </span>
        )
      },
      { title: "Upgrade Status", dataIndex: "upgradeNum", key: "upgradeNum" },
      {
        title: "Action",
        dataIndex: "operation",
        key: "operation",
        render: () => (
          <Space size="middle">
            <a>Pause</a>
            <a>Stop</a>
            <Dropdown overlay={menu}>
              <a>
                More <DownOutlined />
              </a>
            </Dropdown>
          </Space>
        )
      }
    ];

    const data = [];

    for (let i = 0; i < 3; ++i) {
      data.push({
        key: i,
        date: "2014-12-24 23:12:00",
        name: "This is production name",
        upgradeNum: "Upgraded: 56"
      });
    }
    return <Table columns={columns} dataSource={data} pagination={false} />;
  };
  const editAction = (record) => {
    console.log(record);
  };
  const columns = [
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Platform", dataIndex: "platform", key: "platform" },
    { title: "Server", dataIndex: "server", key: "server" },
    { title: "Scheldue", dataIndex: "scheldue", key: "scheldue" },
    { title: "Upgraded", dataIndex: "upgradeNum", key: "upgradeNum" },
    { title: "Creator", dataIndex: "creator", key: "creator" },
    { title: "Date", dataIndex: "createdAt", key: "createdAt" },
    { title: "Repo", dataIndex: "repository", key: "repository" },
    {
      title: "Action",
      key: "operation",
      render: () => (
        <div>
          <a onClick={(record) => console.log(record)}>Edit</a>
        </div>
      )
    }
  ];

  const data = [];
  for (let i = 0; i < 3; ++i) {
    data.push({
      key: i,
      name: "Backup QNAP",
      server: "192.168.1.1",
      scheldue: {
        days: 0,
        hour: "",
        min: ""
      },
      type: "full",
      creator: "TP",
      createdAt: "2014-12-24 23:12:00",
      status: ""
    });
  }

  return (
    <Table
      className="components-table-demo-nested"
      columns={columns}
      expandable={{ expandedRowRender }}
      dataSource={data}
      // onRow={}
    />
  );
}

ReactDOM.render(<NestedTable />, document.getElementById("container"));
