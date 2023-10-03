<template>
  <div>
    <AppHeader />
    <MainHome />
    <AppFooter />
  </div>
</template>

<script>
import AppFooter from './components/Footer/AppFooter.vue';
import AppHeader from './components/Header/AppHeader.vue';
import MainHome from './views/MainHome.vue';

export default {
  components: {
    AppHeader,
    AppFooter,
    MainHome
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
