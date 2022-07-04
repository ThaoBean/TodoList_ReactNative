import React from 'react';
import ButtonCustom from './components/atoms/Button';
import Input from './components/atoms/Input';

import Typography from './components/atoms/Title';

const App = () => {
  return (
    <>
      <Typography
        title="Hello World"
        fontWeight="700"
        fontSize={24}
        color="black"
      />
      <Input placeholder="Enter email" />
      <ButtonCustom
        labelBtn="GET STARTED"
        fontSize={12}
        backgroundColor="#F96332"
        fontWeight="400"
        color="#fff"
        borderRadius={10}
      />
    </>
  );
};

export default App;
