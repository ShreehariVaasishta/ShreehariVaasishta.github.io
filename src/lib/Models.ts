export interface IDirectMessageItem {
    name: string
    link: string
}

export interface IListItem {
    title: string,
    desc?: string,
    logo?: string,
    link?: string,
    date?: string,
    subtitle?: string,
    techStack?: string[],
}

export interface ITitledListItem {
    text: string,
    arr: Array<IListItem>
    shouldNotSort?: boolean
}

export interface IInitialInformation {
    name: string
    intro: string
    email: string
}

export interface IOpenSourceContribution {
    title: string
    link: string
    role: string
    description: string
    techStack: string[]
}

export interface IEducation {
    institution: string
    degree: string
    description: string
    isAccent?: boolean
}

export interface ISkillCategory {
    title: string
    skills: string[]
}

export interface ICombinedInformation {
    initialInformation: IInitialInformation,
    directMessageItems: IDirectMessageItem[],
    experience: IListItem[],
    openSource: IOpenSourceContribution[],
    operatingPrinciples: string[],
    competencies: ISkillCategory[],
    education: IEducation[],
}