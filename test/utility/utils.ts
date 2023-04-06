import * as path from 'path';

export const PREFIX = '_int_test_';

export function pathFromUltraUIRoot(pathRelativeToUltraUIRoot?: string) {
    return path.resolve(__dirname, '../../../../../', pathRelativeToUltraUIRoot || '');
}

