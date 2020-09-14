import React, { useState } from 'react';
import styles from './index.less';
import 'antd-mobile/dist/antd-mobile.css';
import {
  List,
  InputItem,
  Picker,
  ImagePicker,
  Button,
  WhiteSpace,
  WingBlank,
  Modal,
} from 'antd-mobile';
import course from './course';

const Item = List.Item;
const Brief = Item.Brief;

export default () => {
  const [time, setTime] = useState(['软件工程', '第一周']);
  const [files, setFiles] = useState([]);

  const onFileChange = (files: any, type: any, index: any) => {
    setFiles(files);
  };

  const onSubmitClick = () => {
    Modal.alert('是否确认提交？', `${time.join(' ')}，共${files.length}张`, [
      {
        text: '取消',
      },
      {
        text: '确认',
        onPress: () => {
          handleSendWork().then();
        },
      },
    ]);
  };

  const handleSendWork = () => {
    return fetch('');
  };

  return (
    <div>
      <List renderHeader={() => '提交作业'}>
        <InputItem placeholder="学号" labelNumber={2}>
          学号
        </InputItem>
        <InputItem placeholder="姓名" labelNumber={2}>
          姓名
        </InputItem>
        <Picker
          data={course}
          cascade={false}
          extra="请选择(可选)"
          value={time}
          onChange={v => {
            // @ts-ignore
            setTime(v);
          }}
        >
          <List.Item arrow="horizontal">选择课时</List.Item>
        </Picker>
        <ImagePicker files={files} onChange={onFileChange} multiple={true} />
        <WhiteSpace />
        <WingBlank>
          <Button type="primary" onClick={onSubmitClick}>
            提交
          </Button>
        </WingBlank>
        <WhiteSpace />
      </List>
    </div>
  );
};
