module.exports = {
  pwa: {
    name: 'marvel',
    themeColor: '#212121'
  }
}

new Vue({
  el: '#dist',
  router,
  components: { dist },
  template: '<dist/>',
});