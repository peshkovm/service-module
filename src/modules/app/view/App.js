import { Component, Vue } from 'vue-property-decorator';

import AppHeader from '@/modules/app/vue/AppHeader.vue';
import AppBody from '@/modules/app/vue/AppBody.vue';
import AppFooter from '@/modules/app/vue/AppFooter.vue';
import AppNavigation from '@/modules/app/vue/AppNavigation.vue';

import Module from '@/mixins/Module';

@Component({
  name: 'app',
  components: {
    'app-header': AppHeader,
    'app-body': AppBody,
    'app-footer': AppFooter,
    'app-navigation': AppNavigation,
  },
  mixins: [
    Module,
  ],
})
class App extends Vue {
  get isDashboard() {
    return this.$route.path === '/dashboard';
  }

  showNavigation = null;

  onClickMenu() {
    this.showNavigation = true;
  }
}

export default App;
