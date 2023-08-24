const contentful = require('contentful')

export const client = contentful.createClient({
  space: process.env.SPACE_ID,
  accessToken: process.env.DELIVERY_TOKEN
})

export const previewClient = contentful.createClient({
  host: 'preview.contentful.com',
  space: process.env.SPACE_ID,
  accessToken: process.env.PREVIEW_TOKEN
})
