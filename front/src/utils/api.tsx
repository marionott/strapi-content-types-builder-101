import { StrapiImage } from './types'
import { ImageProps } from '~/components/shared/Image'

interface FetchPathsParams {
  type: string
}

interface FetchPagePropsParams {
  type: FetchPathsParams['type']
  slug: string
}

function serializeImage(image: StrapiImage): ImageProps {
  if (!image) return null

  const path = process.env.NEXT_PUBLIC_API_URL
  const src = image?.url ? `${path}${image.url}` : null

  return {
    alt: image?.alternativeText ?? null,
    width: image?.width ?? null,
    height: image?.height ?? null,
    src,
  }
}

/**
 * use serializinf functions to model the data as you'd live
 * or to fetch additional data you might need (useful for relational fields)
 */
function serializeTopFeatures(slice) {
  return {
    ...slice,
    features: slice?.features?.map((feature) => ({
      ...feature,
      icon: serializeImage(feature?.icon),
    })),
  }
}

function serializeHero(slice) {
  return {
    ...slice,
    image: serializeImage(slice?.image),
  }
}
//

function mergeDataDeps(sliceData, extendedData) {
  return Object.assign({}, sliceData, extendedData)
}

/**
 * basic switch case of all available slices
 * will allow use to structure data as we want
 */
export async function checkRequiredData(slice) {
  switch (slice?.__component) {
    case 'slices.top-features':
      return mergeDataDeps(slice, await serializeTopFeatures(slice))
    case 'slices.hero':
      return mergeDataDeps(slice, await serializeHero(slice))
    default:
      return slice
  }
}

/**
 * retrieve & map over slices to serialize them
 */
async function getDataDependencies(json) {
  const slices = await Promise.all((json?.slices ?? [])?.map(checkRequiredData))

  return {
    ...json,
    slices,
  }
}

/**
 * initial API call to get page data
 * it depends on the type 'universals', 'homepage', 'article', etc.
 * & slug value
 */
export async function fetchPage({ type, slug }: FetchPagePropsParams) {
  const global = await fetchGlobal()
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/${type}${slug ? `?slug=${slug}` : ''}`
  )

  const json = await res.json()
  const data = slug ? json?.[0] : json
  const extendedData = await getDataDependencies(data)

  return {
    ...global,
    ...extendedData,
  }
}

/**
 * fetch available pages to be built beforehand
 */
export async function fetchPaths({ type }: FetchPathsParams) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${type}`)
  const json = await res.json()
  const filteredJson = json?.filter(({ slug }) => slug !== '404')

  return filteredJson?.map(({ slug }) => ({
    params: {
      slug,
    },
  }))
}

/**
 * fetch global type data (eg: navigation)
 */
export async function fetchGlobal() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/global`)
  const data = await res.json()

  return data
}
