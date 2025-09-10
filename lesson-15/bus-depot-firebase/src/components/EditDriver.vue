<template>
  <h3>Edit Info :</h3>
  <div>
    <Form
      :key="driverId"
      :validation-schema="schema"
      :initial-values="driverData"
      @submit="onSubmit"
    >
      <div class="box">
        <label for="name">Driver's name </label>
        <Field name="name" type="text" id="name" autocomplete="off" />
        <ErrorMessage name="name" />
      </div>
      <div class="box">
        <label for="experience">Driver's experience </label>
        <Field name="experience" type="number" autocomplete="off" />
        <ErrorMessage name="experience" />
      </div>
      <div class="box_button">
        <button type="submit">Save</button>
        <button type="button" @click="onCancel">Cancel</button>
      </div>
    </Form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";

export default {
  name: "EditDriver",
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    return {
      driverData: {
        name: "",
        experience: null,
      },
      schema: yup.object({
        name: yup.string().required(),
        experience: yup.number().required().positive().max(80),
        // .min(0.1)
      }),
    };
  },
  computed: {
    ...mapGetters("drivers", ["getItemById"]),
    driverId() {
      return this.$route.params.id;
    },
  },
  methods: {
    ...mapActions("drivers", ["addItem", "updateItem"]),
    onCancel() {
      this.$router.back();
    },
    async onSubmit(value, { resetForm }) {
      try {
        if (this.driverId) {
          await this.updateItem({
            itemId: this.driverId,
            data: value,
          });
        } else {
          await this.addItem(value);
        }
        resetForm();
        this.$router.push({ name: "drivers" });
      } catch {
        console.error(error);
      }
    },
  },
  created() {
    if (this.driverId) this.driverData = { ...this.getItemById(this.driverId) };
  },
};
</script>
