import mount from '../src/cc'

describe('ss', () => {
    test('add 1', () => {
        expect(mount(1, 2)).toBe(3);
    });
    test('add 2', () => {
        expect(mount(1, 2)).toBe(3);
    });
});
