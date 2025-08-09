<template>
  <div>CourseView</div>
  <!-- {{ lessonsIdsList }} -->
  {{ teacherIdsList }}
  <!-- <course-view></course-view> -->
</template>

<script>
export default {
  name: "CourseView",
  props: {
    // lessonsIdsList: {
    //   type: Array,
    //   required: true,
    // },
    teacherIdsList: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped></style>
