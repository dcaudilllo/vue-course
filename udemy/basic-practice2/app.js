const app = Vue.createApp({
  data() {
    return {
      user: "",
      userEnter: "",
    };
  },
  methods: {
    inputEnterPressed(e) {
      this.userEnter = e.target.value;
    },
    inputKeydown(e) {
      this.user = e.target.value;
    },
    showDialog() {
      alert("Hello, world!");
    },
  },
});

app.mount("#assignment");
