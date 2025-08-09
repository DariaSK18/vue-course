<template>
  <div>
    <h2>Teachers</h2>
    <fieldset class="box">
      <legend>Chose your teachers :</legend>
      <div v-for="lesson in makeLessonsList" :key="lesson.id">
        {{ lesson.title }}
        <select
          name="teacher"
          id="teacher"
          v-model="teachersIdsList[lesson.id]"
        >
          <option
            :value="teacher.id"
            v-for="teacher in makeTeachersList(lesson.id)"
            :key="teacher.id"
          >
            {{ teacher.name }}
          </option>
        </select>
      </div>
    </fieldset>
    <div class="button">
      <router-link
        :to="{
          name: 'course',
          params: {
            pairs: Object.entries(teachersIdsList).map(
              ([lessonId, teacherId]) => `${lessonId}-${teacherId}`
            ),
            // lessonsIdsList: Object.entries(lessonsIdsList),
            // teachers_ids: Object.values(teachersIdsList),
          },
        }"
        class="button-text"
        >Start Course</router-link
      >
    </div>
    <!-- {{ makeLessonsList }} -->
    <!-- {{ makeTeachersList(2) }} -->
  </div>
  <!-- <router-view></router-view> -->
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { teachers } from "@/constants/SchoolData";
export default {
  name: "TeachersView",
  props: {
    lessonsIdsList: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      teachersIdsList: {},
    };
  },
  computed: {
    ...mapGetters(["getLessonsList", "getTeachersList"]),
    makeLessonsList() {
      if (!this.lessonsIdsList || !Array.isArray(this.lessonsIdsList))
        return [];
      return this.getLessonsList.filter((lesson) =>
        this.lessonsIdsList.includes(lesson.id)
      );
    },
  },
  methods: {
    ...mapActions(["loadData"]),
    makeTeachersList(lessonId) {
      // console.log("lessonsIdsList:", this.lessonsIdsList);
      // console.log("getLessonsList:", this.getLessonsList);
      return this.getTeachersList.filter((teacher) => {
        // console.log("teacher", teacher);
        // console.log("teacher.lessons[0]", teacher.lessons[0]);
        // console.log(teacher.lessons[0] == lessonId);
        return teacher.lessons.some((lesson) => lesson.id === lessonId);
      });
    },
  },
  created() {
    this.loadData({ arrayName: "teachersList", itemData: teachers });
  },
};
</script>

<style lang="scss" scoped>
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
