import * as bootstrap3 from 'uniforms-bootstrap3';
import * as bootstrap4 from 'uniforms-bootstrap4';
import * as semantic   from 'uniforms-semantic';
import * as unstyled   from 'uniforms-unstyled';
import * as custom from '../custom_theme';

const themes = {
    bootstrap3,
    bootstrap4,
    semantic,
    unstyled,
    custom
};

export function getTheme (theme) {
    if (!themes[theme]) {
        theme = getThemes()[0];
    }

    return {components: themes[theme], text: theme};
}

export function getThemes () {
    return Object.keys(themes).sort();
}
