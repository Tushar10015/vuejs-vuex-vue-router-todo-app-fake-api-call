<template>
  <div>
    <h1 class="text-2xl mb-4">Todo List:</h1>

    <!-- Button to Add a New Todo -->
    <a-button type="primary" @click="showAddModal" class="mb-2"
      >Add Todo</a-button
    >

    <!-- Todo List -->
    <a-list :dataSource="todos" bordered>
      <template #renderItem="{ item }">
        <a-list-item>
          <a-list-item-meta :title="item.title" />
          <div>
            <a-button type="link" @click="editTodo(item)">Edit</a-button>
            <a-button type="link" danger @click="handleDelete(item.id)"
              >Delete</a-button
            >
          </div>
        </a-list-item>
      </template>
    </a-list>

    <!-- Add/Edit Modal -->
    <a-modal
      v-model:open="isModalVisible"
      :title="isEditing ? 'Edit Todo' : 'Add Todo'"
      @ok="handleOk"
      @cancel="handleCancel"
    >
      <a-form :form="form">
        <a-form-item label="Title">
          <a-input
            :value="form.title"
            @input="updateTitle"
            placeholder="Enter Todo Title "
          />
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>

<script>
import { message } from "ant-design-vue";
import { mapActions, mapState } from "vuex";

export default {
  data() {
    return {
      isModalVisible: false,
      isEditing: false,
      currentTodoId: null,
      form: {
        title: "",
      },
    };
  },
  computed: {
    ...mapState(["todos"]), // Get todos from Vuex state
  },
  methods: {
    ...mapActions(["fetchTodos", "addTodo", "updateTodo", "deleteTodo"]),

    // Show modal for adding a new todo
    showAddModal() {
      this.isModalVisible = true;
      this.isEditing = false;
      this.form.title = ""; // Clear the form when adding
    },

    // Edit an existing todo
    editTodo(todo) {
      this.isEditing = true;
      this.isModalVisible = true;
      this.currentTodoId = todo.id;
      this.form.title = todo.title;
    },

    updateTitle(event) {
      this.form.title = event.target.value; // Manually update the form value
    },
    // Handle modal OK button click (Add or Edit)
    handleOk() {
      console.log("Title before submission:", this.form.title);

      if (this.form.title.trim() === "") {
        message.error("Please enter a valid title");
        return;
      }

      // Log the title to the console

      if (this.isEditing) {
        this.updateTodo({ id: this.currentTodoId, title: this.form.title });
        message.success("Todo updated successfully");
      } else {
        this.addTodo({ title: this.form.title });
        message.success("Todo added successfully");
      }

      // Log the title before resetting
      console.log("Title after submission:", this.form.title); // Log the title to the console

      this.isModalVisible = false;
      this.form.title = ""; // Reset the form title
    },

    // Handle modal cancel button click
    handleCancel() {
      this.isModalVisible = false;
      this.form.title = "";
    },

    // Delete a todo item
    async handleDelete(id) {
      await this.deleteTodo(id);
      message.success("Todo deleted successfully");
    },
  },
  mounted() {
    // Fetch initial todo list from the API when the component is mounted
    this.fetchTodos();
  },
};
</script>

<style scoped>
/* Use Tailwind CSS for simple spacing and text */
</style>
