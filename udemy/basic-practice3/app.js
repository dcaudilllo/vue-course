const app = Vue.createApp({
  data() {
    return {
      number: 0,
    };
  },
  watch: {
    number() {
      const that = this;
      setTimeout(() => {
        that.number = 0;
      }, 5000);
    },
  },
  computed: {
    result() {
      if (this.number < 37) return this.number;
      else if (this.number === 37) return "Not there yet!";
      else return "Too much!";
    },
  },
  methods: {
    addNumber(num) {
      this.number += num;
    },
  },
});

app.mount("#assignment");
