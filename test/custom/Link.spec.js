import React from 'react';
import Link from '../../src/pages/custom/Link';
import renderer from 'react-test-renderer';

// 快照测试
describe('link.js', () => {
    test('Link changes then class when hovered', () => {
        const component = renderer.create(
            <Link page="/b">走你</Link>
        );
        // react 组件渲染
        let tree = component.toJSON();
        // 将渲染结果与快照作匹配
        expect(tree).toMatchSnapshot();

        tree.props.onMouseEnter();
        // re-rendering
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();
        expect(tree.props.className).toBe('hovered');

        tree.props.onMouseLeave();
        // re-rendering
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
    // 覆盖组件33代码
    test('Link changes then class when hovered no href', () => {
        const component = renderer.create(
            <Link>走你</Link>
        );
        // react 组件渲染
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
