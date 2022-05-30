import React from 'react';

import Button from '../../../components/atomic/atoms/Button/Button';

export default {
    component: Button,
    title: "Atoms/Button",
}

const Template = args => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: 'Primary',
};