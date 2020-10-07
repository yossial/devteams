import { atom } from 'recoil';

const navBgInitial = 'bg-gradient'

const navTheme = {
  header: `header ${navBgInitial} nav w-full px-10 md:px-20 sticky top-0 left-0 z-50 
  ${isOpen ? 'h-screen text-gray-700' : 'text-gray-300'} ${isSolid ? 'py-3' : 'py-4'}`
  navBgColor: navBgInitial,
  anchorClosed: 'hover:bg-white hover:bg-opacity-01',
  anchorOpened: 'hover:bg-black hover:bg-opacity-003',
  liOpened: 'py-3 border-b border-gray-400',
  ctaOpened: 'hover:bg-opacity-05',
  ctaClosed: 'cta bg-red-600 text-white rounded-lg ml-4 hover:bg-red-700',
  navClosed: 'flex items-center justify-between',
  navLinksShow: 'flex mt-12 text-lg',
  navLinksHidden: 'hidden'
}

const defaultNavTheme = {
  header: 'header bg-gradient nav w-full px-10 md:px-20 sticky top-0 left-0 z-50 text-gray-300 py-3',
  navBgColor: 'bg-gradient',
  anchor: 'hover:bg-white hover:bg-opacity-01',
  cta: 'cta bg-red-600 text-white rounded-lg ml-4 hover:bg-red-700',
  nav: 'flex items-center justify-between'
  navLinks: 'flex mt-12 text-lg'
}

export const navTheme = atom({
  key: 'navTheme',
  default: defaultNavTheme,
});

export const isOpen = atom({
  key: 'isOpen',
  default: false,
});

export const isSolid = atom({
  key: 'isSolid',
  default: true,
});
