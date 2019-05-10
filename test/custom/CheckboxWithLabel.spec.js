import React from 'react';
import {shallow} from 'enzyme';
import CheckboxWithLabel from '../../src/pages/custom/CheckboxWithLabel';

// dom测试
describe('CheckboxWithLabel.js', () => {
    it('CheckboxWithLabel changes the text after click', () => {
        // 渲染一个标签文档
        const checkbox = shallow(
            <CheckboxWithLabel labelOn="On" labelOff="Off" />
        );

        expect(checkbox.text()).toEqual('Off');
        // 找到对应元素，模拟事件
        checkbox.find('input').simulate('change');

        expect(checkbox.text()).toEqual('On');
    });
});
