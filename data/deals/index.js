import {sortBy} from 'lodash'
import {isFuture} from '../../shared/utils'

const deals = [
  {
    imgSrc: '/data/deals/fluent.png',
    organization: 'Fluent',
    tagline: 'Web Platform Training',
    link: 'http://jsair.io/fluent-discount',
    deal: 'Use code **JSAIR** for 20% off any pass',
    expires: '2016-03-10',
    description: `
      Flunet is a professional web platform training conference
      on March 7th-10th, 2016 with 2-day trainings, tutorials,
      keynotes, and sessions. For practical training in JavaScript,
      HTML5, CSS, and the latest web development technologies and
      frameworks, check out Fluent Conf.
    `,
  },
  {
    imgSrc: '/data/deals/thoughtram.png',
    organization: 'thoughtram',
    tagline: 'Angular 2 Master Class',
    link: 'http://jsair.io/cOG3C',
    deal: 'Use code **JSAIR** for 50,00 € off your ticket!',
    expires: '2016-03-09',
    description: `
      thoughtram helps people to get a deep understanding of
      different technologies through trainings and code reviews.
      Our next public training is the Angular 2 Master Class
      in Düsseldorf, Germany. Join us and learn Angular 2 the right way!
    `,
  },
  {
    imgSrc: '/data/deals/dotjs.png',
    organization: 'dotJS',
    tagline: 'The largest JavaScript conference in Europe',
    link: 'http://jsair.io/dotjs-discount',
    deal: 'Use code JSAIR for 20% off your ticket',
    expires: '2016-12-05',
    description: `
      [dotJS](http://dotjs.io) is the largest JavaScript conference in Europe.
      Its 5th edition will happen on December 5th in Paris at the Théâtre Mogador.
      A lot of amazing speakers will be announced soon. Meanwhile you can check the
      dotJS 2015 talks [here](http://www.thedotpost.com/conference/dotjs-2015).
    `,
  },
  {
    imgSrc: '/data/deals/digitalocean.png',
    organization: 'Digital Ocean',
    tagline: 'Simple Cloud Infrastructure for Developers',
    link: 'http://jsair.io/digitalocean',
    deal: '**JSAIR10** - good for $10 credit on a new DigitalOcean account.',
    expires: '',
    description: `
      DigitalOcean is the best place to get your application off the ground quickly,
      and the easiest to scale when you find success.
      Start with the pre-configured NodeJS one-click to get up and running in 55 seconds,
      or build the exact infrastructure you need, with root access to servers running 100%
      SSD's in state-of-the-art datacenters around the world.
    `,
  },
]

const sortedDeals = sortBy(deals, d => d.organization.toLowerCase())
const filteredDeals = sortedDeals.filter(d => d.expires ? isFuture(d.expires) : true)

export default filteredDeals

