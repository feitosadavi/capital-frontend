export type Theme = typeof theme

export const theme = {
  font: {
    primary: {
      family: 'Nunito',
      weigths: {
        bold: 700,
      },
    },
    secondary: {
      family: 'Inter',
      weigths: {
        regular: 400,
        medium: 500,
        semiBold: 600,
        bold: 700,
      },
    }
  },
  colors: {
    primary: '#302F32',
    secondary: '#1C1B1E',
    // secondary: '#151412',
    yellow: '#F1AD1C',
    fontPrimary: '#969696',
    white: '#f1f1f1'
  },
}