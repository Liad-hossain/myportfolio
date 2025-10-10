import WorkExperience from '../../img/work_experience.png'
import Myalice from '../../img/myalice.png'
import Location from '../../img/location.png'
import Calendar from '../../img/calendar.png'
import Browser from '../../img/browser.png'
import Linkedin from '../../img/linkedin.png'
import Obby from '../../img/meetobby_logo.jpeg'


function getDurationString(startDate, endDate = new Date()) {
  const start = new Date(startDate);
  const end = new Date(endDate);

  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();

  if (months < 0) {
    years--;
    months += 12;
  }

  return `${years > 0 ? `${years} yr${years > 1 ? 's' : ''} ` : ''}${months} mo${months !== 1 ? 's' : ''}`;
}


export const workData = {
    title: "Work Experience",
    logo: WorkExperience,
    experiences: [
        {
            id: 1,
            logo: Myalice,
            position: {
                type: 'string',
                logo: '',
                value: "Software Engineer"
            },
            company: {
                type: 'string',
                logo: '',
                value: "Alice Labs Pte. Ltd."
            },
            description: {
                type: 'string',
                logo: '',
                value: "Software Development"
            },
            duration: {
                type: 'string',
                logo: Calendar,
                value: `March 2024 - Present . ${getDurationString('2024-03-10')}`
            },
            location: {
                type: 'string',
                logo: Location,
                value: 'Banani, Dhaka, Bangladesh'
            },
            links: [
                {
                    type: 'url',
                    title: 'Website',
                    logo: Browser,
                    value: 'https://www.myalice.ai/'
                },
                {
                    type: 'url',
                    title: 'LinkedIn',
                    logo: Linkedin,
                    value: 'https://www.linkedin.com/company/myaliceai/posts/?feedView=all'
                }
            ],
            responsibilities: [
                {
                    id: 1,
                    title: 'Core Product',
                    description: '',
                    workedItems: [
                        {
                            id: 1,
                            value: 'Integrated Office365 Graph API and implemented all the features of the email sending and receiving in our platform'
                        },
                        {
                            id: 2,
                            value: 'Integrated Clevertap to send whatsapp templates campigns through our platform'
                        },
                        {
                            id: 3,
                            value: 'Optimized many PostgreSQL queries to reduce the response time'
                        },
                        {
                            id: 4,
                            value: 'Refactored several exports by implementing batch fetching and batch processing.'
                        },
                        {
                            id: 5,
                            value: 'Handled many Gmail functionalities (Gmail body, all types of attachments, email signature etc.)'
                        },
                        {
                            id: 6,
                            value: 'Integrated Whatsapp Flow and implemented all necessary steps needed to send flow in whatsapp and also done flow sending with Whatsapp template'
                        },
                        {
                            id: 7,
                            value: 'Implemented the features of connecting Whatsapp Flow sending with Chatbot, Inbox and Datalab.'
                        }
                    ]
                },
                {
                    id: 2,
                    title: 'Workflow Automation',
                    description: '',
                    workedItems: [
                        {
                            id: 1,
                            value: 'Developed backend systems using Python language and FastAPI framework.'
                        },
                        {
                            id: 2,
                            value: 'Used Domain-Specific Language (DSL) to automate workflows.',
                        },
                        {
                            id: 3,
                            value: 'Developed many REST APIs and also implemented APIs for platforms Shopify, Salla, Zid, and WooCommerce, where Shopify uses Graphql and others use RestAPI.',
                        },
                        {
                            id: 4,
                            value: 'Worked extensively with PostgreSQL and wrote many SQL queries for migrations and other feature needs.'
                        },
                        {
                            id: 5,
                            value: 'Implemented Redis caching mechanisms to optimize API responses and improve application performance.'
                        },
                        {
                            id: 6,
                            value: 'Handled Redis stream responses from another service to efficiently process some events.'
                        },
                        {
                            id: 7,
                            value: 'Designed and implemented a Data Access Layer (DAL) for MongoDB in an object-oriented manner, enabling easy and reusable database interactions.',
                        },
                        {
                            id: 8,
                            value: 'Refactored large codebase using the combination of state design pattern and command design pattern.',
                        },
                        {
                            id: 9,
                            value: 'Implemented unit tests using Pytest library by mocking PostgreSQL, Redis and MongoDB.',
                        },
                    ]
                }
            ]
        },
        {
            id: 2,
            logo: Obby,
            position: {
                type: 'string',
                logo: '',
                value: "Technical Engineer (part-time)"
            },
            company: {
                type: 'string',
                logo: '',
                value: "Obby Team"
            },
            description: {
                type: 'string',
                logo: '',
                value: "Marketing Services",
            },
            duration: {
                type: 'string',
                logo: Calendar,
                value: `October 2025 - Present . ${getDurationString('2025-10-01')}`
            },
            location: {
                type: 'string',
                logo: Location,
                value: 'Los Angeles, CA, USA (Remote)'
            },
            links: [
                {
                    type: 'url',
                    title: 'LinkedIn',
                    logo: Linkedin,
                    value: 'https://www.linkedin.com/company/meetobby/posts/?feedView=all'
                }
            ],
            responsibilities: [
                {
                    id: 1,
                    title: 'Automation',
                    description: '',
                    workedItems: [
                        {
                            id: 1,
                            value: 'Connected Assistable AI with GHL and Twilio.'
                        },
                        {
                            id: 2,
                            value: 'Created a voice AI Appointment setter automation through GHL. '
                        },
                        {
                            id: 3,
                            value: 'Monitored Facebook ads performance.'
                        }
                    ]
                },
            ]
        }
    ]
};