export interface Money {
  formattedPrice: string
  amount: number
  currencyCode: string
}

export interface Variant {
  id: string
  variantId: string
  ids?: string[]
  title: string
  availableForSale: boolean
  quantityAvailable: number | null
  compareAtPrice: string
  price: string
  priceAmount: string
}
