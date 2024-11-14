import { EventData, Page } from '@nativescript/core';
import { SurveyFormModel } from './survey-form-model';

export function navigatingTo(args: EventData) {
    const page = <Page>args.object;
    page.bindingContext = new SurveyFormModel();
}