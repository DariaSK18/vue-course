<template>
  <h2>CourseView</h2>

  <div v-for="([lesson, teacher], index) in courseValue" :key="index">
    Lesson: {{ lesson.title }} <br />
    Teacher: {{ teacher.name }}
    <hr />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "CourseView",
  props: {
    lessonTeacherPairs: {
      type: Array,
      required: true,
    },
  },
  computed: {
    ...mapGetters(["getLessonById", "getTeacherById"]),
    courseValue() {
      return this.lessonTeacherPairs.map(([lessonId, teacherId]) => {
        const lesson = this.getLessonById(lessonId);
        const teacher = this.getTeacherById(teacherId);
        return [lesson, teacher];
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
