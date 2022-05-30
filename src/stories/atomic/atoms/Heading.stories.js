import React from 'react';
import Heading from '../../../components/atomic/atoms/Heading/Heading';

export default {
    component: Heading,
    title: 'Atoms/Heading',
}

const Template = args => <Heading {...args} />;
export const Default = Template.bind({});
Default.args = {
    children: 'Default Heading',
    color: 'default',
    size: 'md'
}

const TemplatePrimary = args => <Heading {...args} />;
export const Primary = TemplatePrimary.bind({});
Primary.args = {
    children: 'Primary Heading',
    color: 'primary',
    size: 'lg'
}