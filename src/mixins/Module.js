import { mapGetters, mapMutations } from 'vuex';
import { Component } from 'vue-property-decorator';

@Component({
  name: 'module-mixin',
  computed: {
    ...mapGetters({
    }),
  },
  methods: {
    ...mapMutations('app', {}),
  },
})

class Module {
  static isNumOfActiveAppsRunning = false;

  static isAppsTimestampsRunning = false;
}

export default Module;
