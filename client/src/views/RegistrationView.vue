<template>
  <v-layout>
    <v-flex mr-auto ml-auto mt-auto mb-auto class='registration-block'>
      <v-card>
        <v-card-title>
          <h3>Регистрация</h3>
        </v-card-title>
        <v-flex px-3 py-3 ml-auto mr-auto class='form-container' >
          <v-form @submit.prevent='registrationTry' ref='form' v-model='registrationValid' lazy-validation>
            <v-text-field required v-model='userName' :rules='nameRules' label='Имя:'></v-text-field>
            <v-text-field required v-model='userLogin' :rules='loginRules' label='Логин:'></v-text-field>
            <v-text-field required v-model='userPassword' :rules='passwordRules' type='password' label='Пароль:'></v-text-field>
            <v-text-field required v-model='userPasswordRepeat' :rules='passwordRepeatRules' type='password' label='Повторите пароль:'></v-text-field>
            <v-btn type='submit' :disabled='!registrationValid'>Отправить</v-btn>
          </v-form>
        </v-flex>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>

export default {
  name: 'RegistrationView',
  data: () => ({
    registrationValid: true,
    userName: '',
    userLogin: '',
    userPassword: '',
    userPasswordRepeat: '',
    nameRules: [
      v => !!v || 'Имя является обязательным полем',
      v => (v && v.length >= 5) || `Имя должно содержать минимум 5 символов`
    ],
    loginRules: [
      v => !!v || 'Логин является обязательным полем',
      v => (v && v.length >= 5) || `Логин должно содержать минимум 5 символов`
    ],
    passwordRules: [
      v => !!v || 'Пароль является обязательным полем',
      v => (v && v.length >= 5) || `Пароль должно содержать минимум 5 символов`
    ],
    passwordRepeatRules: [
      v => !!v || 'Повтор пароля является обязательным полем'
    //   v => v !== userPassword || 'Пароль не совпадает'
    ]
  }),
  created () {
    const repeatPassword = v => v === this.userPassword ? true : 'Пароль не совпадает' 
    this.passwordRepeatRules.push(repeatPassword)
  },
  methods: {
    checkFormFIelds() {
      return this.$refs.form.validate()
    },
    registrationTry() {
        if (this.checkFormFIelds()) {
          console.log('Успешная регистрация')
        }

        return false
    }
  }
}

</script>
<style lang="scss">
  .registration-block {
    max-width: 500px;
  }
</style>
