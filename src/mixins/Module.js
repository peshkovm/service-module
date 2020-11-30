import { mapGetters, mapMutations } from 'vuex';
import { Component } from 'vue-property-decorator';

@Component({
  name: 'module-mixin',
  computed: {
    ...mapGetters({
      getApp: 'app/getApp',
      getPlayer: 'app/getPlayer',

    }),
  },
  methods: {
    ...mapMutations('app', {}),
  },
})
class Module {
  static isNumOfActiveAppsRunning = false;

  static isAppsActAndDeactTimeRunning = false;
}

export default Module;
