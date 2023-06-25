<template>
  <main style="min-height: 50vh; margin-top: 2rem">
    <div class="container">
      <div class="row">
        <div class="col-md-10 offset-md-1">
          <!-- Add new Task -->
          <div class="relative">
            <input
              type="text"
              class="form-control form-control-lg padding-right-lg"
              placeholder="+ Add new task. Press enter to save."
            />
          </div>
          <!-- List of uncompleted tasks -->
          <Tasks :tasks="uncompletedTasks" />

          <!-- show toggle btn -->

          <div class="text-center my-3" v-show="showToggleCompleteBtn">
            <button
              class="btn btn-sm btn-secondary"
              @click="showCompleteTasks = !showCompleteTasks"
            >
              <span v-if="!showCompleteTasks">顯示已完成項目</span>
              <span v-else>隱藏已完成項目</span>
            </button>
          </div>
          <!-- List of completed tasks -->

          <Tasks :tasks="completedTasks" 
          :show="completedTasksIsVisible && showCompleteTasks"/>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { onMounted, ref, computed } from "vue";
import { allTasks } from "../http/task-api";
import Tasks from "../components/tasks/Tasks.vue";

const tasks = ref([]);

onMounted(async () => {
  const { data } = await allTasks();
  console.log(data);

  tasks.value = data.data;

  // tasks.value = data.data.filter(task => !task.is_completed)
});

const uncompletedTasks = computed(() =>
  tasks.value.filter((task) => !task.is_completed)
);
const completedTasks = computed(() =>
  tasks.value.filter((task) => task.is_completed)
);

const showToggleCompleteBtn = computed(
  () => uncompletedTasks.value.length > 0 && completedTasks.value.length > 0
);

const completedTasksIsVisible = computed(
  () => uncompletedTasks.value,
  length == 0 || completedTasks.value.length > 0
);

const showCompleteTasks = ref(false);
</script>
