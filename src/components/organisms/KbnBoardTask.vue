<template>
  <ul class="board-tasks">
    <li v-for="task in tasks" :key="task.id">
      <KbnTaskList v-bind="task" />
    </li>
  </ul>
</template>

<script>
import KbnTaskList from "@/components/organisms/KbnTaskList.vue";

export default {
  name: "KbBoardTask",

  components: {
    KbnTaskList
  },

  props: {
    tasks: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped>
ul {
  display: flex;
  min-height: 100vh;
  list-style-type: none;
  margin: 16px;
  padding: 0;
}
ul li {
  width: 192px;
  margin-right: 8px;
  border: thin solid black;
  border-radius: 0.5em;
}
</style>
