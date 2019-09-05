import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  
  constructor(private meta : Meta) { }

  generateTags(config){
    config = {
      title: 'Petalos y Arte Flower Shop - Same Day Flower Delivery | Palmview',
      description: 'Local flower shop in Palmview Texas offering same day flower delivery to the Mission, Palmview, McAllen, Edinburg, Pharr, La Joya areas of the Rio Grande Valley',
      url: 'https://www.petalosarte.com',
      author: 'AR Web Designs',
      language: 'EN',
      region: 'US-TX',
      placename: 'Palmview',
      position: '26.233251;-98.361366',
      ICBM: '26.233251, -98.361366',
      type: 'website',
      imagePath: 'https://images.pexels.com/photos/428611/bouquet-roses-colorful-floral-428611.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb',
      keywords: 'floral arrangements, '
        + 'flower delivery, '
        + 'floral delivery, '
        + 'flower shop, '
        + 'flower delivery, '
        + 'flower shop in mission tx, '
        + 'flower shop in mission texas, '
        + 'send flowers, '
        + 'from you flowers, '
        + 'local florist, '
        + 'roses deliver, '
        + 'mission, '
        + 'tx, '
        ,
      ...config
    }

    this.meta.updateTag({ name:'title', content: config.title });
    this.meta.updateTag({ name:'description', content: config.description });
    this.meta.updateTag({ name:'url', content: config.url });
    this.meta.updateTag({ name:'author', content: config.author });
    this.meta.updateTag({ name:'keywords', content: config.keywords  });
    this.meta.updateTag({ name:'language', content: config.language });
    this.meta.updateTag({ name:'geo.region', content: config.region });
    this.meta.updateTag({ name:'geo.placename', content: config.placename });
    this.meta.updateTag({ name:'geo.position', content: config.position });
    this.meta.updateTag({ name:'ICBM', content: config.ICBM });
    this.meta.updateTag({ name:'og:title', content: config.title });
    this.meta.updateTag({ name:'og:site_name', content: config.title });
    this.meta.updateTag({ name:'og:description', content: config.description });
    this.meta.updateTag({ name:'og:type', content: config.type });
    this.meta.updateTag({ name:'og:image', content: config.imagePath });
    this.meta.updateTag({ name:'og:url', content: config.url });
  }
}
