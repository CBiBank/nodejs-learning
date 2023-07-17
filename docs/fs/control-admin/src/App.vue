<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import api from './api/common'
export default {
  name: 'App',
  created() {
  },
  mounted() {
    const init = () => {
      setTimeout(() => {
        api.checkFileChange().then(res => {
          init()
          if (res) {
            console.log(res)
            const changeTimestamp = localStorage.getItem('changeTimestamp')
            if (!changeTimestamp) {
              localStorage.setItem('changeTimestamp', res)
            } else {
              if (changeTimestamp !== String(res)) {
                alert('内容有更新，请刷新重新加载')
                localStorage.setItem('changeTimestamp', res)
              }
            }
          }
        })
      }, 5000)
    }
    init()
  },
  methods: {
  }
}
</script>
