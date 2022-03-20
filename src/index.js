import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import { Table, Badge, Menu, Dropdown, Space, Button, Tag } from "antd";
import { DownOutlined, SearchOutlined } from "@ant-design/icons";

const menu = (
  <Menu>
    <Menu.Item>Action 1</Menu.Item>
    <Menu.Item>Action 2</Menu.Item>
  </Menu>
);

const backups = (
  <Menu>
    <Menu.Item>Jobs</Menu.Item>
    <Menu.Item>Scheldue</Menu.Item>
  </Menu>
);

const getTags = (tags) => {
  let { tag, color } = tags;
  if (tag) {
  } else {
  }

  return (
    <>
      {tags.map((tag) => (
        <Tag color="blue" key={tag}>
          {tag}
        </Tag>
      ))}
    </>
  );
};

const TalbeButton = ({ props }) => <Button {...props}>{props.value}</Button>;
let actions = {
  edit: (record) => {},
  save: (record) => {}
};
function NestedTable() {
  const expandedRowRender = () => {
    const columns = [
      { title: "Date", dataIndex: "date", key: "date" },
      { title: "Name", dataIndex: "name", key: "name" },
      {
        title: "Status",
        key: "status",
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
        render: (text, record) => (
          <Space size="middle">
            <SearchOutlined onClick={() => console.log(text)} />
            <a>
              <DownOutlined />
            </a>
            {/* <a>Pause</a>
            <a>Stop</a> */}
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
        status: "success",
        date: "Сегодня",
        name: "Виртуальная машина",
        upgradeNum: "VM1"
      });
    }

    return <Table columns={columns} dataSource={data} pagination={false} />;
  };

  const editAction = (record) => {
    console.log(record);
  };
  const columns = [
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Server", dataIndex: "server", key: "server" },
    { title: "Target", dataIndex: "target", key: "target" },

    { title: "Upgraded", dataIndex: "upgradeNum", key: "upgradeNum" },
    { title: "Creator", dataIndex: "creator", key: "creator" },
    { title: "Date", dataIndex: "createdAt", key: "createdAt" },
    { title: "Repo", dataIndex: "repository", key: "repository" },
    {
      title: "Tags",
      dataIndex: "tags",
      key: "tags",
      render: (tags) => {
        return (
          <span>
            {tags.map((i) => (
              <Tag>{i}</Tag>
            ))}
          </span>
        );
      }
    },

    {
      title: "Action",
      key: "operation",
      render: (record) => {
        let { key } = record;

        return (
          <div onClick={() => console.log(key)} key={record.key}>
            {record.key}
          </div>
        );
      }
    }
  ];

  const data = [];

  for (let i = 0; i < 3; ++i) {
    data.push({
      key: i,
      name: "Backup QNAP",
      server: "192.168.1.1",
      target: "VM1",
      actions: ["backup", "sync"],
      tags: ["success", "full"]
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
