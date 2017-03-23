export interface EducationItem {
    institution: string;
    degree: string;
    city?: string;
    state?: string;
    major?: string[];
    minor?: string[];
    startDate?: Date;
    graduationDate?: Date;
}
