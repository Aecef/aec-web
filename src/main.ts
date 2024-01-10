import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './components/router/router.ts'

// Vuetify
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives,
});


/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* add some free styles */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faVuejs } from '@fortawesome/free-brands-svg-icons'
import { faFly } from '@fortawesome/free-brands-svg-icons'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faUserSecret, faFly, faReact, faVuejs, faGithub, faLinkedin )

const app = createApp(App);


app.use(vuetify);
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(router);

app.mount('#app');
