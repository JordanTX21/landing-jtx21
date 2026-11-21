export interface Experience {
  title: string
  company: string
  date: string
  description: string
  highlights: string[]
  tags: string[]
}

export interface SkillItem {
  name: string
  desc?: string
}

export interface SkillCategory {
  name: string
  icon: any // Vue component representation
  items: SkillItem[]
}

export interface Education {
  title: string
  institution: string
  date: string
  description: string
}

export interface Project {
  name: string
  url: string
  description: string
  highlights: string[]
  tags: string[]
}

export interface ArchitecturePractice {
  title: string
  description: string
  icon: any
  color: string
  snippet: string
}
