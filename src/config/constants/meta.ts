import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'Leonicorn',
  description:
    'The #1 AMM and yied farm with deflationary token model on Bianace Smart Chain.',
  image: 'https://animalfactguide.com/wp-content/uploads/2013/01/lion.jpg',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  switch (path) {
    // case '/':
    //   return {
    //     title: `${t('Home')} | ${t('LeonicornSwap')}`,
    //   }
    // case '/competition':
    //   return {
    //     title: `${t('Trading Battle')} | ${t('LeonicornSwap')}`,
    //   }
    // case '/prediction':
    //   return {
    //     title: `${t('Prediction')} | ${t('LeonicornSwap')}`,
    //   }
    // case '/farms':
    //   return {
    //     title: `${t('Farms')} | ${t('LeonicornSwap')}`,
    //   }
    // case '/pools':
    //   return {
    //     title: `${t('Pools')} | ${t('LeonicornSwap')}`,
    //   }
    // case '/lottery':
    //   return {
    //     title: `${t('Lottery')} | ${t('LeonicornSwap')}`,
    //   }
    // case '/collectibles':
    //   return {
    //     title: `${t('Collectibles')} | ${t('LeonicornSwap')}`,
    //   }
    // case '/ifo':
    //   return {
    //     title: `${t('Initial Farm Offering')} | ${t('LeonicornSwap')}`,
    //   }
    // case '/teams':
    //   return {
    //     title: `${t('Leaderboard')} | ${t('LeonicornSwap')}`,
    //   }
    // case '/profile/tasks':
    //   return {
    //     title: `${t('Task Center')} | ${t('LeonicornSwap')}`,
    //   }
    // case '/profile':
    //   return {
    //     title: `${t('Your Profile')} | ${t('LeonicornSwap')}`,
    //   }
    default:
      return {
        title: `${t('Leonicorn')}`,
      }
  }
}
