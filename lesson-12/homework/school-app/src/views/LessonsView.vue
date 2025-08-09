<template>
  <div>
    <h2>Lessons</h2>
    <fieldset class="box">
      <legend>Chose your lessons :</legend>
      <div class="check-box" v-for="lesson in getLessonsList" :key="lesson.id">
        <input
          type="checkbox"
          :name="lesson.title"
          :id="lesson.id"
          :value="lesson.id"
          v-model="selectedLessonsIdList"
        />
        <label :for="lesson.id">{{ lesson.title }}</label>
      </div>
    </fieldset>
    <div class="button">
      <router-link
        :to="{
          name: 'teachers',
          params: {
            lessons_ids: selectedLessonsIdList,
          },
        }"
        class="button-text"
        >Choose Teachers</router-link
      >
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { lessons } from "@/constants/SchoolData";
export default {
  name: "LessonsView",
  data() {
    return {
      selectedLessonsIdList: [],
    };
  },
  computed: {
    ...mapGetters(["getLessonsList"]),
  },
  methods: {
    ...mapActions(["loadData"]),
  },
  created() {
    this.loadData({ arrayName: "lessonsList", itemData: lessons });
  },
};
</script>

<style lang="scss" scoped>
.box {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
}
.check-box {
  display: flex;
  gap: 10px;
  input[type="checkbox"]:checked + label {
    color: #42b983;
    font-weight: 600;
  }
}
.button {
  border: 2px solid black;
  padding: 10px;
  border-radius: 10px;
  width: 200px;
  margin-top: 20px;
}
.button-text {
  text-decoration: none;
  color: #2c3e50;
  font-weight: 700;
}
</style>
