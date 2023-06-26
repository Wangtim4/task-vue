<template>
  <main style="min-height: 50vh; margin-top: 2rem">
    <div class="container">
      <div class="row">
        <div class="col-md-10 offset-md-1">
          <!-- Add new Task -->
          <NewTask />
          <!-- List of uncompleted tasks -->
          <Tasks :tasks="uncompletedTasks"/>

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
          :show="completedTasksIsVisible && showCompleteTasks"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { onMounted, ref, computed } from "vue";
import { storeToRefs } from 'pinia'
import { useTaskStore } from "../stores/task"
// import { allTasks , createTask , updateTask ,completeTask , removeTask} from "../http/task-api";
import Tasks from "../components/tasks/Tasks.vue";
import NewTask from "../components/tasks/NewTask.vue";

const store = useTaskStore();
const { completedTasks, uncompletedTasks} = storeToRefs(store);
const { fetchAllTasks } = store;


onMounted(async () => {
  
  await fetchAllTasks()

});


const showToggleCompleteBtn = computed(
  () => uncompletedTasks.value.length > 0 && completedTasks.value.length > 0
);

const completedTasksIsVisible = computed(
  () => uncompletedTasks.value,
  length == 0 || completedTasks.value.length > 0
);

const showCompleteTasks = ref(false);


</script>
