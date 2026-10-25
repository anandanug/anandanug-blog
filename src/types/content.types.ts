import type { CollectionEntry } from "astro:content"

// Reading time interface
export interface ReadingTime {
  text: string
  minutes: number
  time: number
  words: number
}

// TOC item interface
export interface TOCItem {
  level: number
  text: string
  id: string
  index: number
}

// PostList component props interface
export interface PostListProps {
  posts: CollectionEntry<'posts'>[]
  moreHref?: string // Optional link shown below the list (e.g. to the archive)
  moreLabel?: string // Label for the link above
  emptyText?: string // Text shown when there are no posts
}
