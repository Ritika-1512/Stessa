import { LightningElement, track } from 'lwc';

export default class QuizApp extends LightningElement {
    value1 = ''
    value2 = ''
    get option1() {
        return [
            { label: 5000, value1: 'option1' },
            { label: 500, value1: 'option2' },
            { label: 50000, value1: 'option3' },
            { label: 'Arrangement records cannot be imported via import wizard', value1: 'option4' }
        ]
    }
    get option2() {
        return [
            { label: 'Opportunity Close Date Only', value1: 'option1' },
            { label: 'Opportunity Close Date, Product Date, Schedule Date', value1: 'option2' },
            { label: 'Submit Date', value1: 'option3' }
        ]
    }
}