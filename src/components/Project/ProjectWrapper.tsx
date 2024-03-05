interface ProjectWrapper {
    children: React.ReactNode
}

export default function ProjectWrapper({children}: ProjectWrapper) {
    return (
        <div className="relative cursor-pointer after:content[''] after:h-full after:bg-black-banner after:w-full after:absolute after:left-0 after:bottom-0">
            {children}
        </div>
    )
}