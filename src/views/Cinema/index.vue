<template>
  <div id="main">
     <Header />
     <TabBar />
  </div>
</template>

<script>

import Header from '@/components/Header'
import TabBar from '@/components/TabBar'
export default {
    name:'cinema',
    components:{
      Header,
      TabBar
    }
}
</script>

<style scoped>

</style>