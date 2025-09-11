<template>
  <div>
    <Form :validation-schema="schema" @submit="onSubmit">
      <div class="box">
        <label>
          Login
          <Field name="email" type="email" autocomplete="off" />
          <ErrorMessage name="email" />
        </label>
      </div>
      <div class="box">
        <label>
          Password
          <Field name="password" type="password" autocomplete="off" />
          <ErrorMessage name="password" />
        </label>
      </div>
      <button class="box" @click="onLogin">{{ $t('menu.loginGoogle') }}</button>
      <div class="box_button">
        <button type="submit">{{$t('menu.login')}}</button>
        <button type="button" @click="onCancel">{{$t('menu.cancel')}}</button>
      </div>
    </Form>
  </div>
</template>

<script>
import { Form, Field, ErrorMessage } from 'vee-validate'
import { mapActions } from 'vuex'
import * as yup from 'yup'
export default {
  name: 'LoginView',
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    return {
      schema: yup.object({
        email: yup.string().required().email(),
        password: yup.string().required().min(6),
      }),
    }
  },
  methods: {
    ...mapActions('auth', ['loginWithGoogle']),
    onCancel() {
      this.$router.back()
    },
    async onLogin() {
      try {
        await this.loginWithGoogle()
        this.$router.push({
          name: 'home',
        })
      } catch (error) {
        console.error(error.message)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.box{
    margin-bottom: 10px;
}
.box_button {
  display: flex;
  gap: 10px;
}
</style>
