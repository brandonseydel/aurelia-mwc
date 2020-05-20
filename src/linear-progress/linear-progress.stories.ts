import { MaterialUI } from './../index';
import { withActions, action } from '@storybook/addon-actions';
import { withKnobs, select, boolean, number } from '@storybook/addon-knobs';
import { StoryFn } from '@storybook/addons';
import { StoryFnAureliaReturnType, addRegistries, addContainer } from '@storybook/aurelia';
import { JitHtmlBrowserConfiguration } from 'aurelia';

type StoryType = StoryFn<Partial<StoryFnAureliaReturnType>> & {
    story: { name: string };
};

const container = JitHtmlBrowserConfiguration.createContainer().register(MaterialUI);

export default {
    title: 'Linear Progress|Linear Progress',
    decorators: [withKnobs, withActions, addContainer(container)],
};

export const LinearProgressStory: StoryType = () => ({
    template: `<mwc-linear-progress buffer.bind="buffer" progress.bind="progress" indeterminate.bind="indeterminate" reverse.bind="reverse" closed.bind="closed"></mwc-linear-progress>`,
    state: {
        indeterminate: boolean('indeterminate', false),
        reverse: boolean('reverse', false),
        closed: boolean('closed', false),
        progress: number('progress', 0.25),
        buffer: number('buffer', 0.5)
    },
    title: 'f'

});

LinearProgressStory.story = {
    name: 'Linear Progress',
};