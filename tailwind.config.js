/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      black: '#000000',
      gray: '#AEA8B2',
      placeholder: '#605866',
      accent: '#7775A7',
      red: '#E62875',
      lightRed: '#FF8CBB',
      title: '#080930',
      gradient: '#232323',
      green: '#55DC6B',
      lightGray: '#D9D9D9',
      modalBackground: '#EFEFEF'
    },
    screens: {
      mobile: '410px',
      tablet: '768px',
      laptop: '1024px',
      desktop: '1280px',
      'desktop-lg': '1440px',
      'desktop-xl': '1536px'
    },
    extend: {
      fontFamily: {
        twemoji: ['Twemoji Country Flags', 'sans-serif']
      },
      fontSize: {
        tag: '10px',
        title: '20px'
      },
      borderWidth: {
        1: '1px',
        3: '3px'
      },
      backgroundSize: {
        'size-1': '1rem'
      },
      backgroundPosition: {
        'pos-r-1': 'calc(100% - .5rem)'
      },
      backgroundImage: {
        'img-select-arrow': "url('/src/icons/shared/ic_select_arrow.svg')"
      },
      lineHeight: {
        0: '0',
        1: '4px',
        2: '8px'
      },
      margin: {
        default: '18px',
        4.5: '1.125rem'
      },
      padding: {
        4.5: '1.125rem'
      },
      space: {
        4.5: '1.125rem'
      },
      borderRadius: {
        default: '15px'
      },
      flex: {
        2: '2'
      },
      dropShadow: {
        top: '0 0 10px rgba(0, 0, 0, 0.25)'
      },
      aspectRatio: {
        profile: '1 / 0.78'
      },
      blur: {
        xs: '3px'
      },
      gap: {
        4.5: '1.125rem'
      },
      width: {
        13: '3.25rem',
        '100%+2px': 'calc(100% + 2px)',
        42: '10.5rem',
        card: '160px',
        'card-lg': '168px',
        sidebarInfo: 'calc(80vw - 160px)'
      },
      height: {
        13: '3.25rem',
        38: '9.5rem',
        card: '152px',
        'card-lg': '160px',
        'page-sheet': 'calc(100dvh - 32px)',
        'chat-container': 'calc(100dvh - 24px - 190px)',
        'chat-full-container': 'calc(100dvh - 24px)',
        'attendance-list': 'calc(100dvh - 128px)',
      },
      maxHeight: {
        '1/2': 'calc(50vh)',
        '1/3': 'calc(33vh)',
        '2/3': 'calc(66vh)',
        '1/4': 'calc(25vh)',
        '2/4': 'calc(50vh)',
        '3/4': 'calc(75vh)',
        '1/5': 'calc(20vh)',
        '2/5': 'calc(40vh)',
        '3/5': 'calc(60vh)',
        '4/5': 'calc(80vh)',
        'chat-container': 'calc(100dvh - 24px - 190px)',
        'chat-full-container': 'calc(100dvh - 24px)',
        'attendance-list': 'calc(100dvh - 125px)',
        'attendance-mobile-list': 'calc(100dvh - 150px)',
      },
    },
  },
  plugins: [],
}

