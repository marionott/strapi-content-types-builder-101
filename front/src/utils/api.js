import delve from 'dlv'

/**
 * use serializinf functions to model the data as you'd live
 * or to fetch additional data you might need (useful for relational fields)
 */
async function serializeTopFeatures(slice) {
  return slice
}

async function serializeHero(slice) {
  return slice
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
  switch (slice.__component) {
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
  let slices = delve(json, 'slices', [])
  slices = await Promise.all(slices.map(checkRequiredData))
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
export async function fetchPage({ type, slug }) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/${type}${
      slug ? `?slug=${params.slug}` : ''
    }`
  )
  const json = await res.json()
  return await getDataDependencies(delve(json, '0'))
}

/**
 * fetch available pages to be built beforehand
 */
export async function fetchPaths({ type }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${type}`)
  const json = await res.json()
  const filteredJson = json.filter(({ slug }) => slug !== '404')

  return filteredJson.map(({ slug }) => ({
    params: {
      slug,
    },
  }))
}
