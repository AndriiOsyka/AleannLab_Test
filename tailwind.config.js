/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        'n12': '-12px',
        'n77': '-77px',
      },
      colors: {
        'grey-title': '#3A4562',
        'grey-circle': '#202336',
        'grey-location': '#878D9D',
        'grey-star': '#38415D',
        'btn-grey-star': '#38415d38',
        'bg-grey-location': '#2A3047',
        'bg-grey-location-transparent': '#2a304783',
        'bookmark-icon': '#70778B',
        'bg-pill-employment': 'rgba(161, 177, 219, 0.317343)',
        'border-employment': 'rgba(0, 0, 0, 0.12)',
        'border-benefits': '#FFCF00',
        'bg-pill-benefits': 'rgba(255, 207, 0, 0.15)',
        'pill-employment': '#55699E',
        'pill-benefits': '#988B49'
      },
      padding: {
        '104': '104px'
      }
    },
    listStyleType: {
      'square': 'square'
    },
    minWidth: {
      '20': '80px',
      '200': '200px'
    },
    maxWidth: {
      '200': '200px',
      '220': '220px'
    },
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'display': ['Oswald'],
      'body': ['"Open Sans"'],
      'proxi': ['Lato', 'sans-serif']
    }
  },
  plugins: [],
}
