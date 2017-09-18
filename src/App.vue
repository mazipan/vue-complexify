<template>
  <div id="app" class="app">
    <h1>{{ msg }}</h1>

    <input type="text" 
           v-model="passwordText" 
           class="input"
           placeholder="Type some text to test"
           :class="{'input--error': (!valid)}"/>
    <div>
      <h3>Result</h3>
      Error: <b>{{ error }}</b>
      <br>
      Valid: <b>{{ valid }}</b>
      <br>
      Complexity: <b>{{ complexity }}</b>
    </div>

  </div>
</template>

<script src="./app.js"></script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.input{
  font-size: 100%;
  line-height: 1.15;

  padding: 12px;
  margin: 3px 0;
  width: 70%;
  max-width: 300px;
  outline: none;
  border: 1px solid #CCC;
  border-radius: 0;

  &:focus{
    border-color: #51a7e8;
    outline: none;
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.075), 0 0 5px rgba(81, 167, 232, 0.5);
  }

  &--error{
    border-color: #F8011E !important;
    outline: none;
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.075), 0 0 5px rgba(248, 1, 30, 0.5) !important;
  }
}

</style>
