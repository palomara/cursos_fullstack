import * as moment from 'moment'

export default class Courses {
    id: Number;
    title: string = ''; 
    subtitle: string = '';
    startedAt:  = new Date();
    description: string = '';
    isActive: boolean = false;
    created: Date;
    updated: Date;

    constructor(title: string,
                subtitle: string,
                startedAt: Date,
                description: string,
                created: Date){
    this.title

    }
}