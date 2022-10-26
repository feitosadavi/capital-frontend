export const FB_PIXEL_ID = '1178116999770341'

export const pageview = () => {
  (window as any).fbq('track', 'PageView')
}

// https://developers.facebook.com/docs/facebook-pixel/advanced/
export const event = (name: any, options = {}) => {
  (window as any).fbq('track', name, options)
}