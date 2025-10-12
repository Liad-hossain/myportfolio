import Projects from '../../img/projects.png'
import GitHub from '../../img/github.png'


export const projectData = {
    title: "Projects",
    logo: Projects,
    projects: [
        {
            id: 1,
            logo: GitHub,
            title: {
                type: 'string',
                logo: '',
                value: 'Talk Space',
            },
            description: {
                type: 'string',
                logo: '',
                value: 'A chat application that allows users to communicate in real-time using web sockets. It has features like user authentication, private messaging, and group chats. It also has the support of image sending.',
            },
            technologies: [
                {
                    type: 'box',
                    logo: '',
                    value: 'React'
                },
                {
                    type: 'box',
                    logo: '',
                    value: 'Django'
                },
                {
                    type: 'box',
                    logo: '',
                    value: 'PostgreSQL'
                },
                {
                    type: 'box',
                    logo: '',
                    value: 'Redis'
                },
                {
                    type: 'box',
                    logo: '',
                    value: 'Celery'
                },
                {
                    type: 'box',
                    logo: '',
                    value: 'Pusher'
                },
            ],
            links: [
                    {
                    type: 'url',
                    logo: '',
                    title: 'Repository',
                    value: 'https://github.com/Liad-hossain/talk-space',
                }
            ]
        },
        {
            id: 2,
            logo: GitHub,
            title: {
                type: 'string',
                logo: '',
                value: 'RFID Based Security System',
            },
            description: {
                type: 'string',
                logo: '',
                value: 'A security system that uses RFID technology to control access to a physical space. The system can be programmed to allow or deny access based on the RFID tags presented to the reader. It also has the support of password and fingerprint authentication for added security.',
            },
            technologies: [
                {
                    type: 'box',
                    logo: '',
                    value: 'C++'
                },
                {
                    type: 'box',
                    logo: '',
                    value: 'Arduino'
                },
            ],
            links: [
                    {
                    type: 'url',
                    logo: '',
                    title: 'Repository',
                    value: 'https://github.com/Liad-hossain/rfid-based-security-system',
                }
            ]
        },
        {
            id: 3,
            logo: GitHub,
            title: {
                type: 'string',
                logo: '',
                value: 'Tiles Hop Game',
            },
            description: {
                type: 'string',
                logo: '',
                value: 'A 3D game where the player controls a ball that hops on tiles. The player must navigate through the tiles and collect points.',
            },
            technologies: [
                {
                    type: 'box',
                    logo: '',
                    value: 'Unity'
                },
                {
                    type: 'box',
                    logo: '',
                    value: 'C#'
                },
            ],
            links: [
                    {
                    type: 'url',
                    logo: '',
                    title: 'Repository',
                    value: 'https://github.com/Liad-hossain/Tiles-Hop',
                }
            ]
        },
        {
            id: 3,
            logo: GitHub,
            title: {
                type: 'string',
                logo: '',
                value: 'Protein Secondary Structure Prediction',
            },
            description: {
                type: 'string',
                logo: '',
                value: 'I have used SVM and Random Forest models. I encoded all the amino acids of primary sequence using a feature called "conformation parameter", transformed the sequences in graph form and trained them using the models. Finally, predicted 8-states of secondary sequences.',
            },
            technologies: [
                {
                    type: 'box',
                    logo: '',
                    value: 'Python'
                },
                {
                    type: 'box',
                    logo: '',
                    value: 'Machine Learning'
                },
            ],
            links: [
                    {
                    type: 'url',
                    logo: '',
                    title: 'Repository',
                    value: 'https://github.com/Liad-hossain/My-Thesis',
                }
            ]
        },
    ]
};
