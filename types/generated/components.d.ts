import type { Schema, Struct } from '@strapi/strapi';

export interface ProductImageProductImage extends Struct.ComponentSchema {
  collectionName: 'components_product_image_product_images';
  info: {
    displayName: 'Product image';
    icon: 'landscape';
  };
  attributes: {
    alternativeText: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'product-image.product-image': ProductImageProductImage;
    }
  }
}
