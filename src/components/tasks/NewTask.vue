<template>
  <div class="relative">
    <input
      type="text"
      class="form-control form-control-lg padding-right-lg"
      placeholder="+ 新增項目 "
      @keydown.enter="addNewTask"
    />
  </div>
</template>

<script setup>
import { reactive } from 'vue';

const newTask = reactive({
    name: '',
    is_completed: false
})

const emit = defineEmits(['added'])

const addNewTask = event => {
    if(event.target.value.trim()){
        newTask.name = event.target.value
        event.target.value = ""
        emit('added', newTask)
    }
}
</script>
