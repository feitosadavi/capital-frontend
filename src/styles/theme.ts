export type Theme = typeof theme

export const theme = {
  breakpoints: {
    md: '1000px',
    sm: '550px'
  },

  font: {
    primary: {
      family: 'Roboto',
      weigths: {
        regular: 400,
        medium: 500,
        semiBold: 600,
        bold: 700,
      },
    },
    secondary: {
      family: 'Roboto',
      weigths: {
        regular: 400,
        medium: 500,
        semiBold: 600,
        bold: 700,
      },
    }
  },
  colors: {
    primary: '#201f22',
    secondary: '#100f11',
    // secondary: '#151412',
    yellow: '#F1AD1C',
    fontPrimary: '#969696',
    white: '#f1f1f1'
  },
}