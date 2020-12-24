import { Component, Vue } from 'vue-property-decorator';

import AppBody from '@/modules/app/vue/AppBody.vue';

import Module from '@/mixins/Module';

@Component({
  name: 'app',
  components: {
    'app-body': AppBody,
  },
  mixins: [
    Module,
  ],
})
class App extends Vue {
}

export default App;
