export interface Project {
  title: string
  client: string
  description: string
  longDescription: string
  image: string
  gallery: string[]
  tags: string[]
  link?: string
  github?: string
  type: "Web App" | "WordPress" | "Design"
}