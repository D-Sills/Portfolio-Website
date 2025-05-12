import { Project } from '@/data/project';

const WebDevProjects: Project[] = [
    {
        title: "Echoing Depths Website",
        description: "A personal website for my game project, Echoing Depths.",
        tags: ['Unity', 'C#', 'Game Dev', 'Custom Tools'],
        images: [
            { src: '/images/projects/edw1.png', caption: 'Main menu mockup' },
            { src: '/images/projects/edw2.png', caption: 'Inventory system' },
        ],
        repoLink: "",
    },
    {
        title: "Programming Help Forum",
        description: "A forum for programming help, built with raw PHP and Tailwind CSS.",
        tags: ['PHP', 'Tailwind CSS', 'Web Dev'],
        images: [
            { src: '/images/projects/cf1.png', caption: 'Main menu mockup' },
            { src: '/images/projects/cf2.png', caption: 'Inventory system' },
            { src: '/images/projects/cf3.png', caption: 'Dungeon generation' },
        ],
    },
    {
        title: "TMDb API Client",
        description: "A client for the TMDb API, built with React and Bootstrap. Also features firebase authentication.",
        tags: ['React', 'Tailwind CSS', 'Web Dev'],
        images: [
            { src: '/images/projects/tmdb1.png', caption: 'Main menu mockup' },
            { src: '/images/projects/tmdb2.png', caption: 'Inventory system' },
            { src: '/images/projects/tmdb3.png', caption: 'Dungeon generation' },
            { src: '/images/projects/tmdb4.png', caption: 'Dungeon generation' },
        ],
    },
];

export default WebDevProjects;