import { EducationItem } from './EducationItem';

export const defaultEducationItems: EducationItem[] = [
    {
        institution: 'West Valley High School',
        degree: 'Diploma',
        startDate: new Date(2000, 9),
        graduationDate: new Date(2004, 6),
        city: 'Yakima',
        state: 'Washington'
    },
    {
        institution: 'Yakima Valley Community College',
        degree: 'Associate of Arts',
        startDate: new Date(2002, 9),
        graduationDate: new Date(2004, 6),
        city: 'Yakima',
        state: 'Washington'
    },
    {
        institution: 'Northwest Univeristy',
        degree: 'Bachelor of Arts',
        major: ['Music'],
        city: 'Kirkland',
        state: 'Washington',
        startDate: new Date(2004, 9),
        graduationDate: new Date(2007, 5),
    }
];