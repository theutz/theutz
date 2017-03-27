import { PortfolioItem } from './portfolio-item';

export const defaultPortfolioItems: PortfolioItem[] = [
    {
        title: 'Reservationista',
        url: 'http://reservationista.com',
        description: 'Work-in-progress to make selling easier at Loews.',
        thumbnailUrl: '/assets/reservationista.png',
        githubUrl: 'https://github.com/theutz/reservationista.git'
    },
    {
        title: 'Emergency Reporting',
        url: 'http://emergencyreporting.com',
        description: 'Developed site from WordPress, Bootstrap 3, etc.',
        thumbnailUrl: '/assets/emergency-reporting.png'
    },
    {
        title: 'Christ Church',
        url: 'http://christchurchdavenport.org',
        description: 'Designed simple Squarespace site for the church to use.',
        thumbnailUrl: '/assets/christ-church.png'
    }
];