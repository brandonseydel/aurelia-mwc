import { MaterialUI } from './../index';
import { withActions, action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';
import { StoryFn } from '@storybook/addons';
import { StoryFnAureliaReturnType, addRegistries, addContainer } from '@storybook/aurelia';
import { JitHtmlBrowserConfiguration } from 'aurelia';

type StoryType = StoryFn<Partial<StoryFnAureliaReturnType>> & {
    story: { name: string };
};

const container = JitHtmlBrowserConfiguration.createContainer().register(MaterialUI);

export default {
    title: 'Custom|Custom Elements',
    decorators: [withKnobs, withActions, addContainer(container)],
};

export const SimpleCoolButtonStory: StoryType = () => ({
    template: `<mwc-button label.bind="type"></mwc-button>`,
    state: {
        type: text('label', 'outlined'),
        buttonClick: action('Button Click'),
    },
});

SimpleCoolButtonStory.story = {
    name: 'Cool Button Story',
};