import React from 'react';
import Button from '../../../components/atomic/atoms/Button/Button';

export default {
    component: Button,
    title: 'Atoms/Button',
}

const Template = args => <Button {...args} type='primary' />;
export const Default = Template.bind({});
Default.args = {
    children: 'Primary',
};

const SecondTemplate = args => <Button {...args} type='secondary' />;
export const Second = SecondTemplate.bind({});
Second.args = {
    children: 'Second',
};