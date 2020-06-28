export type Courses {
    id?: Number;
    title: string = ''; 
    subtitle: string = '';
    startedAt: Date;
    description: string = '';
    isActive: boolean = false;
    created: Date;
    updated: Date;
}

export type CoursesViewModel{
    id?: Number;
    title: String;
    subtitle: String;
    startedAt: String;
    description: String;
    isActive: Boolean;
    created: String;
    updated: String;
}