export interface Episode {
  id: number
  title: string
  description: string
  date: string
  duration: string
  category: Category
  coverUrl?: string
  coverColor?: string
  coverLabel?: string
  projectUrl?: string
  showNotes: string
}

export type Category = '项目' | '技术' | '成长' | '当前工作' | '全部'

export const CATEGORIES: Category[] = ['全部', '项目', '技术', '成长', '当前工作']
