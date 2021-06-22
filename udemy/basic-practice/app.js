const app = Vue.createApp({
  data() {
    return {
      name: "Diego",
      age: 23,
      image:
        "https://www.michaelbuble.com/sites/g/files/g2000002856/f/Sample-image10-highres.jpg",
    };
  },
  methods: {
    getRandomNumber() {
      return Math.round(Math.random() * 1);
    },
  },
});

app.mount("#assignment");
