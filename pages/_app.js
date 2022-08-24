import "../styles/globals.css"
import "../styles/index.css"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fas } from "@fortawesome/free-solid-svg-icons"
import { fab, faTwitter, faFontAwesome } from "@fortawesome/free-brands-svg-icons"

library.add(fas, fab, faTwitter, faFontAwesome)

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
