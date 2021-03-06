import { WorkHistoryItem } from '../work-history/work-history-item';
export const defaultWorkHistoryItems: WorkHistoryItem[] = [
    {
        company: 'Loews Hotels',
        title: 'Travel Planner',
        /* tslint:disable-next-line:max-line-length */
        description: 'Reservations agent at <a href="http://loewshotels.com" target="_blank">Loews Hotels</a> (NYSE: L). Among the top agents in both sales numbers and service measures.',
        startDate: new Date(2015, 11),
        endDate: new Date(),
        city: 'Nashville',
        state: 'Tennessee'
    },
    {
        company: 'Uber & Lyft',
        title: 'Driver',
        /* tslint:disable-next-line:max-line-length */
        description: 'Set out for some advenutre as a self-employed Uber & Lyft driver in one of the nation\'s fastest growing cities.',
        startDate: new Date(2015, 4),
        endDate: new Date(2015, 11),
        city: 'Nashville',
        state: 'Tennessee'
    },
    {
        company: 'Emergency Reporting',
        title: 'Content Writer/Producer',
        /* tslint:disable-next-line:max-line-length */
        description: 'Content marketing and front-end web development. Built <a href="http://emergencyreporting.com" target="_blank">emergencyreporting.com</a> with Wordpress.',
        startDate: new Date(2013, 5),
        endDate: new Date(2015, 4),
        city: 'Bellingham',
        state: 'Washington'
    },
    {
        company: 'Christ Church',
        title: 'Creative Director',
        /* tslint:disable-next-line:max-line-length */
        description: 'Supervised music, media, and web services for the congregation. Built <a href="http://christchurchdavenport.org" target="_blank">christchurchdavenport.org</a> on Squarespace.',
        startDate: new Date(2012, 0),
        endDate: new Date(2013, 4),
        city: 'Davenport',
        state: 'Iowa'
    },
    {
        company: 'SimpleDelta, LLC',
        title: 'Vice-President/Co-Founder',
        description: 'Co-founded a company trying to build a web app to help independent auto mechanics offer services online.',
        startDate: new Date(2010, 10),
        endDate: new Date(2012, 0),
        city: 'Bellingham',
        state: 'Washington'
    },
    {
        company: 'ShareNow, Inc',
        title: 'Project Coordinator',
        description: 'Joined a startup looking to create social media strategies for non-profits, working on multiple projects.',
        startDate: new Date(2009, 11),
        endDate: new Date(2010, 6),
        city: 'Bellingham',
        state: 'Washington'
    },
    {
        company: 'Northwest University',
        title: 'Associate Director of Media Services & Adjunct Faculty',
        /* tslint:disable-next-line:max-line-length */
        description: 'Oversee all recorded media for Northwest University, producing multiple full-length albums. Taught a music technology course.',
        startDate: new Date(2007, 6),
        endDate: new Date(2009, 4),
        city: 'Kirkland',
        state: 'Washington'
    },
    {
        company: 'Courtyard by Marriott',
        title: 'Front Desk Supervisor',
        /* tslint:disable-next-line:max-line-length */
        description: 'Helped with front-office operations, working with other agents to ensure an excellent customer service for the guest.',
        startDate: new Date(2006, 9),
        endDate: new Date(2007, 6),
        city: 'Kirkland',
        state: 'Washington'
    }
];