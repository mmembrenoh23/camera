import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins:[
    VitePWA({
        injectRegister: 'auto' ,
        workbox: {
            globPatterns: ['**/*.{js,css,html,png,svg,jpg,ttf}'],
            navigateFallback: null
            },
        registerType: 'autoUpdate',
        manifest:{
            name: 'Camera Take a snapshot',
            short_name: 'Camera',
            description: 'My first app with camera in laravel and webapp progressive',
            theme_color: '#90AACB',
            background_color: '#F9D5A7',
            icons: [
                {
                src: 'assets/images/icon-48x48.png',
                sizes: '48x48',
                type: 'image/png'
                },
                {
                src: 'assets/images/icon-128x128.png',
                sizes: '128x128',
                type: 'image/png'
                }
            ]
        }
    })
  ]
})