<template>
  <div class="container">
    <div class="loginBox">
      <a-form class="loginForm">
        <a-form-item>
          <a-input></a-input>
        </a-form-item>
        <a-form-item>
          <a-input></a-input>
        </a-form-item>
        <a-button type="ghost">111</a-button>
        <a-button>1111</a-button>
      </a-form>
    </div>
  </div>
</template>

<style scoped>
.container {
  height: 100%;
  background-color: #1e1f22;
}

.loginBox {
  width: 450px;
  height: 300px;
  background-color: #f8f8f8;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 15px;
}

.loginForm {
  width: 100%;
  position: absolute;
  bottom: 5%;
  padding: 0 25px;
  box-sizing: border-box;
}
</style>
