module.exports = {
  pwa: {
    name: 'marvel',
    themeColor: '#212121'
  }
}

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<dist/>',
});