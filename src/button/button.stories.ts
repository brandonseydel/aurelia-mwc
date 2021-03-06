import { MaterialUI } from './../index';
import { withActions, action } from '@storybook/addon-actions';
import { withKnobs, text, select, boolean, radios } from '@storybook/addon-knobs';
import { StoryFn } from '@storybook/addons';
import { StoryFnAureliaReturnType, addRegistries, addContainer } from '@storybook/aurelia';
import { JitHtmlBrowserConfiguration } from 'aurelia';

type StoryType = StoryFn<Partial<StoryFnAureliaReturnType>> & {
    story: { name: string };
};

const container = JitHtmlBrowserConfiguration.createContainer().register(MaterialUI);

export default {
    title: 'Buttons|Buttons',
    decorators: [withKnobs, withActions, addContainer(container)],
};

/*
Issue with trailing still
*/
export const SimpleCoolButtonStory: StoryType = () => ({
    template: `<mwc-button trailingIcon="false" icon="\${icons && icon}" disabled.bind="disabled" unelevated.bind="unelevated" raised.bind="raised" standard label.bind="type">\${buttonText}</mwc-button>`,
    state: {
        standard: boolean('standard', true),
        unelevated: boolean('unelevated', false),
        raised: boolean('raised', false),
        disabled: boolean('disabled', false),
        buttonClick: action('Button Click'),
        buttonText: text('Label', 'Material Button'),
        icon: text('Icon', 'code'),
        icons: radios('icons', { 'none': '', 'leading': 'leading', 'trailing': 'trailing' }, '')
    },
    title: 'asdfasfd'

});

SimpleCoolButtonStory.story = {
    name: 'Material Button',
};