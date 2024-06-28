import config from '../../../config/website.js'

export const logoData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  url: config.siteUrl,
  logo: `${config.siteUrl}${config.siteLogo}`
}

export const eventData = {
  '@context': 'https://schema.org',
  '@type': 'Event',
  title: config.siteTitle,
  name: `${config.siteTitle}`,
  description: config.siteDescription,
  image: `${config.siteUrl}${config.siteLogo}`,
  url: config.siteUrl,
  startDate: '2024-08-09T17:00+05:30',
  endDate: '2024-08-11T17:00+05:30',
  eventStatus: 'https://schema.org/EventScheduled',
  eventAttendanceMode: 'https://schema.org/OnlineEventAttendanceMode',
  location: {
    '@type': 'VirtualLocation',
    url: config.siteUrl
  },

  organization: {
    '@type': 'Organization',
    title: config.siteTitle,
    url: config.siteUrl,
    logo: {
      src: `${config.siteUrl}${config.siteLogo}`,
      alt: config.siteTitle
    }
  },
  social: {
    '@type': 'Social',
    // fbAppID: config.siteFBAppID,
    twitter: config.twitter
  }
}

export const breadcrumbsData = [
  { name: 'Register', item: config.register },
  { name: 'Join', item: config.join }
].map(({ name, item }) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: '1',
      name: 'Home',
      item: config.siteUrl
    },
    {
      '@type': 'ListItem',
      position: '2',
      name,
      item
    }
  ]
}))
