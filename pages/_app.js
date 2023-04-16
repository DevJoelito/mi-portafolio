import '/public/css/main.css'
import localFont from 'next/font/local'

const pixellari = localFont({ src: '../public/fonts/pixellari/Pixellari.ttf' })

export default function MyApp({ Component, pageProps }) {
    return (
        <div className={pixellari.className + " window"}>
            <Component {...pageProps} />
        </div>
    )
}