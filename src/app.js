export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to vue-complexify',
      passwordText: '',
      error: null,
      valid: false,
      complexity: 0,
    }
  },
  watch: {
    passwordText: function (newValue) {
      this.$evalPasswordComplexity(newValue, this.callback)
    }
  },
  methods: {
    callback: function (err, valid, complexity) {
      this.error = err
      this.valid = valid
      this.complexity = complexity
    }
  }
}
