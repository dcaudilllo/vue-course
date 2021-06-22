const app = Vue.createApp({
  data() {
    return {
      inputTask: "",
      tasks: [],
      visible: true,
    };
  },
  methods: {
    addTask() {
      if (this.inputTask.length) {
        this.tasks.push(this.inputTask);
        this.inputTask = "";
      }
    },
    buttonVisibility() {
      this.visible = !this.visible;
    },
  },
});

app.mount("#assignment");
