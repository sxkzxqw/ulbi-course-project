import { classNames } from "./classNames";

describe('classNames', () => {
    test('test with only first parametr', () => {
        expect(classNames('something')).toBe('something');
    });

    test('test with 1 and 3 parameters', () => {
        const expected = 'something class1 class2';
        expect(classNames('something', {}, ['class1', 'class2'])).toBe(expected);
    })

    //mods test (second parameter)
    test('test with 1 2 3 parameters mods true', () => {
        const expected = 'something class1 class2 hovered scrollable';
        expect(classNames('something', { hovered: true, scrollable: true }, ['class1', 'class2'])).toBe(expected);
    })

    test('test with 1 2 3 parameters mods false', () => {
        const expected = 'something class1 class2';
        expect(classNames('something', { hovered: false, scrollable: false }, ['class1', 'class2'])).toBe(expected);
    })

    test('test with 1 2 3 parameters 1 mod false', () => {
        const expected = 'something class1 class2 scrollable';
        expect(classNames('something', { hovered: false, scrollable: true }, ['class1', 'class2'])).toBe(expected);
    })

    test('test with 1 2 3 parameters mods are undefined', () => {
        const expected = 'something class1 class2';
        expect(classNames('something', { hovered: undefined, scrollable: undefined }, ['class1', 'class2'])).toBe(expected);
    })
});
