import {selectTheme} from '../selectors';

describe('selector', () => {
    it('should return correct selector', () => {
        const mockParameters = {notification: {}, todos:[{title: 'random Text', id: 1, completed: false}], theme: {dark: false}};
        const selected = selectTheme(mockParameters);
        expect(selected).toEqual(mockParameters.theme.dark);
    });
});
