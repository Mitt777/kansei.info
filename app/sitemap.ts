import fs from 'fs'
import path from 'path'
import { MetadataRoute } from 'next'
import { aiSnsVideoChapters } from './books/ai-sns-video/content'
import { seoToGeoChapters } from './books/seo-to-geo/content'
import { tourismMemoryChapters } from './books/tourism-memory-zone/content'
import { enSeoToGeoSections } from './en/books/seo-to-geo/content'
import { chapters as whbChapters, concepts as whbConcepts } from './en/where-humans-breathe/content'

const base = 'https://kansei.info'

type ChangeFrequency = NonNullable<MetadataRoute.Sitemap[number]['changeFrequency']>

type RouteConfig = {
  path: string
  priority?: number
  changeFrequency?: ChangeFrequency
}

function normalizeRoute(routePath: string) {
  if (!routePath || routePath === '/') return '/'
  return `/${routePath.replace(/^\/+|\/+$/g, '')}`
}

function walkStaticPages(dir: string, prefix = ''): string[] {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    if (entry.name.startsWith('_') || entry.name.startsWith('.')) return []

    const fullPath = path.join(dir, entry.name)
    const routePrefix = entry.name === 'page.tsx' ? prefix : path.posix.join(prefix, entry.name)

    if (entry.isDirectory()) {
      if (entry.name.startsWith('[') && entry.name.endsWith(']')) return []
      return walkStaticPages(fullPath, routePrefix)
    }

    if (entry.name !== 'page.tsx') return []
    return [normalizeRoute(prefix)]
  })
}

function priorityFor(routePath: string) {
  if (routePath === '/') return 1
  if (routePath === '/diagnosis') return 0.9
  if (routePath.startsWith('/books/')) return routePath.split('/').length <= 3 ? 0.9 : 0.84
  if (routePath.startsWith('/research/')) return 0.88
  if (routePath.startsWith('/frameworks/')) return 0.86
  if (routePath.startsWith('/labs/')) return 0.84
  if (routePath.startsWith('/fieldwork/')) return 0.82
  if (routePath.startsWith('/en/')) return 0.82
  return 0.8
}

function changeFrequencyFor(routePath: string): ChangeFrequency {
  return routePath === '/' ? 'weekly' : 'monthly'
}

function toUrl(routePath: string) {
  return routePath === '/' ? base : `${base}${routePath}`
}

function uniqueRoutes(routes: RouteConfig[]) {
  const seen = new Map<string, RouteConfig>()
  routes.forEach((route) => {
    const normalized = normalizeRoute(route.path)
    if (!seen.has(normalized)) {
      seen.set(normalized, {
        ...route,
        path: normalized,
      })
    }
  })
  return [...seen.values()].sort((a, b) => {
    if (a.path === '/') return -1
    if (b.path === '/') return 1
    return a.path.localeCompare(b.path)
  })
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const appDir = path.join(process.cwd(), 'app')

  const staticRoutes = walkStaticPages(appDir).map((routePath) => ({ path: routePath }))

  const dynamicRoutes: RouteConfig[] = [
    ...tourismMemoryChapters.map((chapter) => ({ path: `/books/tourism-memory-zone/${chapter.slug}`, priority: 0.88 })),
    ...aiSnsVideoChapters.map((chapter) => ({ path: `/books/ai-sns-video/${chapter.slug}`, priority: 0.86 })),
    ...seoToGeoChapters.map((chapter) => ({ path: `/books/seo-to-geo/${chapter.slug}`, priority: 0.86 })),
    ...enSeoToGeoSections.map((section) => ({ path: `/en/books/seo-to-geo/${section.slug}`, priority: 0.82 })),
    ...whbChapters.map((chapter) => ({ path: `/en/${chapter.slug}`, priority: 0.82 })),
    ...whbConcepts.map((concept) => ({ path: `/en/${concept.slug}`, priority: 0.82 })),
    { path: '/en/glossary-kansei-concepts', priority: 0.86 },
  ]

  return uniqueRoutes([...staticRoutes, ...dynamicRoutes]).map((route) => ({
    url: toUrl(route.path),
    lastModified: now,
    changeFrequency: route.changeFrequency ?? changeFrequencyFor(route.path),
    priority: route.priority ?? priorityFor(route.path),
  }))
}
