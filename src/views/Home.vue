<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <a-button type="primary">Primary</a-button>
    <a-button>Default</a-button>
    <a-button type="dashed">Dashed</a-button>
    <a-button type="danger">Danger</a-button>
    <a-config-provider :auto-insert-space-in-button="false">
      <a-button type="primary">按钮</a-button>
    </a-config-provider>
    <a-button type="primary">按钮</a-button>
    <a-button type="link">Link</a-button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { Component, Vue } from 'vue-property-decorator'
import { test } from '@/api/test'
@Component({
  name: 'Home',
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {
  created () {
    test().then(res => {
      console.log(res)
    })
  }
}
</script>
