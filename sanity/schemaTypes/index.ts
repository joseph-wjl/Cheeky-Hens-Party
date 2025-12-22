import { type SchemaTypeDefinition } from 'sanity'
import { galleryImage } from './galleryImage' // import the gallery schema

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    galleryImage, // add it here
  ],
}
