<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <tabs></tabs>
    <div class="see">
      <router-view :seller="seller"></router-view>
    </div>
  </div>
</template>

<script>
import {urlParse} from 'common/js/util'
import VHeader from 'components/v-header/v-header.vue'
import Tabs from 'components/tabs/tabs.vue'
import { getSeller } from 'api'
import qs from 'query-string'

export default {
  name: 'app',
  data() {
    return {
      seller: {}
    }
  },
  created() {
    this._getSeller()
    // this.seller.id = urlParse();
  },
  mounted() {
    
  },
  methods: {
    _getSeller() {
      getSeller().then((seller) => {
        this.seller = seller
      })
    }
  },
  components: {
    VHeader,
    Tabs
  }
}
</script>

<style lang="stylus" scoped>
#app
  .tab-wrapper
    position: fixed
    top: 136px
    left: 0
    right: 0
    bottom: 0
</style>
