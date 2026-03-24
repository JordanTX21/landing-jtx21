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
