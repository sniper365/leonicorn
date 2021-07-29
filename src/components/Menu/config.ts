import { MenuEntry } from 'toolkit/uikit'
import { ContextApi } from 'contexts/Localization/types'

const config: (t: ContextApi['t']) => MenuEntry[] = (t) => [
  {
    label: t('Jungle'),
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: t('Trade'),
    icon: 'TradeIcon',
    items: [
      {
        label: t('Exchange'),
        href: '/swap',
      },
      {
        label: t('Liquidity'),
        href: '/pool',
      }
    ],
  },
  {
    label: t('Meat'),
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: t('Caves'),
    icon: 'PoolIcon',
    href: '/pools',
  },
  {
    label: t('Prediction'),
    icon: 'PredictionsIcon',
    href: '/prediction',
  },
  {
    label: t('Lotto'),
    icon: 'TicketIcon',
    href: '/lottery',
    status: {
      text: t('Win').toLocaleUpperCase(),
      color: 'success',
    },
  },
  {
    label: t('NFT'),
    icon: 'NftIcon',
    href: '/collectibles',
  },
  {
    label: t('Pride Wars'),
    icon: 'TeamBattleIcon',
    href: '/competition',
  },
  {
    label: t('Prides & Profile'),
    icon: 'GroupsIcon',
    items: [
      {
        label: t('Leaderboard'),
        href: '/teams',
      },
      {
        label: t('Task Center'),
        href: '/profile/tasks',
      },
      {
        label: t('Your Profile'),
        href: '/profile',
      },
    ],
  },
  {
    label: t('Info'),
    icon: 'InfoIcon',
    href: 'https://pancakeswap.info',
  },
  {
    label: t('IJO'),
    icon: 'IfoIcon',
    href: '/ifo',
  },
  {
    label: t('More'),
    icon: 'MoreIcon',
    items: [
      {
        label: 'Contact',
        href: '/_contact',
      },
      {
        label: 'Github',
        href: '/_github',
      },
      {
        label: 'Docs',
        href: '/_docs',
      },
      // {
      //   label: t('Contact'),
      //   href: 'https://docs.pancakeswap.finance/contact-us',
      // },
      // {
      //   label: t('Voting'),
      //   href: '/voting',
      // },
      // {
      //   label: t('Github'),
      //   href: 'https://github.com/pancakeswap',
      // },
      // {
      //   label: t('Docs'),
      //   href: 'https://docs.pancakeswap.finance',
      // },
      // {
      //   label: t('Blog'),
      //   href: 'https://pancakeswap.medium.com',
      // },
      // {
      //   label: t('Merch'),
      //   href: 'https://pancakeswap.creator-spring.com/',
      // },
    ],
  },
]

export default config
