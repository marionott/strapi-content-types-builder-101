export interface StrapiImage {
  name: string
  alternativeText: string
  caption: string
  width: number | string
  height: number | string
  formats: any
  hash: string
  ext: string
  mime: string
  size: number
  url: string
  src: string
  previewUrl: any
  provider: string
  provider_metadata: any
  created_at: string
  updated_at: string
}

export interface StrapiLink {
  href: string
  label: string
  target: '_blank' | null
}

export interface StrapiButton {
  theme: 'purple' | 'yellow' | 'white'
  link?: StrapiLink
}
