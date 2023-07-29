'use client'

import { useState } from "react"

const projects = [
    {
        id: 'dasschaltwerk',
        name: 'Das Schaltwerk',
        url: 'https://www.dasschaltwerk.at'
    },
    {
        id: 'viennasausagegang',
        name: 'Vienna Sausage Gang',
        url: 'https://www.vienna-sausage-gang.vercel.app'
    },
    {
        id: 'thesigncocktaillounge',
        name: 'The Sign Cocktail Lounge',
        url: 'https://www.thesigncocktail.com'
    },
]

export default function Projects() {

    const [selectedProject, setSelectedProject] = useState(projects[0].id)

    function handleProjectSelection(id: string) {
        setSelectedProject(id)
    }

    return (
        <div className="flex flex-1">
            <ul className="w-2/5 flex flex-col divide-y-2 border-t-2 border-b-2 border-black">
                {projects.map(project => (
                    <a key={project.id} className="h-48 border-black" onClick={handleProjectSelection}>{project.name}</a>))
                    }
            </ul>
            <div className="w-3/5">
                <iframe className="w-full h-screen" src="https://www.dasschaltwerk.at" />
            </div>
        </div>
    )
}