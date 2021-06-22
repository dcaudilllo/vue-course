const app = Vue.createApp({
  data() {
    return {
      courseGoalA: "Finish the course and Learn Vue!",
      courseGoalB: "Continue the course and Master Vue",
      vueLink: "https://vuejs.org/",
    };
  },
  methods: {
    outputGoal() {
      const num = Math.random();
      if (num < 0.5) return this.courseGoalA;
      else return this.courseGoalB;
    },
  },
});

app.mount("#user-goal");
