<template>
  <div
    class="flex flex-col w-full md:max-w-md md:px-3"
    style="position: absolute"
  >
    <div class="py-6 px-8 bg-white rounded-lg shadow-xs">
      <img
        style="width: 70px; position: absolute; top: -22%; left: 37%"
        width="70"
        height="70"
        src="https://uploads-ssl.webflow.com/62163e8c328ad285342080f0/635a73a24bede070260f8a43_Konecta-Digital-MK-Agency-logo.png"
      />
      <h1 class="mb-5">Inicia Sesión</h1>
      <!-- <div class="mb-3">
        To keep connected with us please login with your personal info.
      </div> -->
      <!-- <div class="p-3 border rounded-lg">
        <p class="opacity-50">Email: demo@demo.com</p>
        <p class="opacity-50">Password: demo@demo.com</p>
      </div> -->
      <div v-show="error !== ''" class="p-3 border">

        <div class="alert alert-danger" role="alert">
          Usuario o contraseña es incorrecto
        </div>
      </div>
      <form @submit="loginUser">
        <div>
          <ui-input-float
            class="mt-4"
            :text.sync="loginData.email"
            v-model="loginData.email"
            :label="'Tu Email'"
            :type="'email'"
            :name="'email'"
            :placeholder="'Your Email'"
            :required="true"
          />
        </div>
        <div class="mt-2" >
          <ui-input-float
            class="mt-4"
            :text.sync="loginData.password"
            v-model="loginData.password"
            :label="'Password'"
            :name="'password'"
            :type="'password'"
            :placeholder="'Password'"
            :required="true"
          />
        </div>
        <div class="mb-2">
          <b-form-group id="input-group-3" label="Rol:" label-for="input-3">
            <b-form-select
              id="input-3"
              v-model="loginData.role"
              :options="roles"
              required
            ></b-form-select>
      </b-form-group>
        </div>
        <!-- <recaptcha @error="onError" @success="onSuccess" @expired="isExpired" /> -->
        <div class="mt-5 mb-5 flex flex-wrap justify-between items-center">
          <!-- <div class="w-1/2 flex items-center">
            <ui-input-checkbox />
            Recuérdame
          </div> -->
          <!-- <div class="text-right w-1/2">
            <nuxt-link
              to="/auth/forgot"
              class="text-green-700 hover:text-green-900"
              >¿Te olvidaste la contraseña?</nuxt-link
            >
          </div> -->
          <button
            style="margin: 0 auto;"
            class="
              primary-background
              text-gray-100
              rounded-lg
              px-6
              py-3
              font-bold
              mt-6
            "
            type="submit"
            @click="loginUser"
            :disabled="loading"
          >
            Inicia sesión
          </button>
          <div class="mt-4" style="width: 100%">
            <p style="text-align:center">
              ¿Aún no tienes cuenta?
              <nuxt-link
                to="/auth/signup"
                class="text-green-700 hover:text-green-900"
                >Regístrate aquí</nuxt-link>
            </p>

          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import {HTTP} from "../../config/HttpBase";
  import { mapMutations, mapGetters } from 'vuex'

export default {
  layout: 'auth',
  data() {
    return {
      identifier: '',
      password: '',
      error: '',
      loading: false,
      loginData: {
        email: null,
        password: null,
        role: ''
      },
      roles: [{text: 'Instructor', value: 'author'}, {text: 'Alumno', value: 'student'}],
      geeTest: ''
    }
  },
  methods: {
    async loginUser() {
      this.loading = true;
      if(this.loginData.email != '' && this.loginData.password != ''){
        this.geeTest.showBox();
      }else{
        this.$bvToast.toast('Rellenar todos los campos', {
          title: `Registro`,
          variant: 'danger',
          solid: true
        })
      }
      // try {
      //   const token = await this.$recaptcha.execute('login')
      //   console.log('ReCaptcha token:', token)
      //   // note: use POST request
      //           const recaptcha = await this.$axios.post('/api/check-token', { token });

      //           console.log('recaptcha', recaptcha.data);

      //   // send token to server alongside your form data

      // } catch (error) {
      //   console.log('Login error:', error)
      // }

      /*LOGUIN CAPTCHA */
      // HTTP.post('/api/auth/login', {user: this.loginData.email, password:this.loginData.password, role: 'user'})
      // .then(response => {
      //   // this.nameSchool = user.name;
      //   this.error = false;
      //   this.welcome = true;
      //   this.loading = false
      //   this.$store.commit('addSession', response.data.data);
      //   this.$router.push({ name: 'exchange'});
      //   console.log(response.data.data)

      // })
      // .catch(e => {
      //   this.error = true
      //   this.loading = false
      //   console.error(e)
      // })
    },
    sentLoguin(){
      /*LOGUIN CAPTCHA */
      console.log('DATA: ', {user: this.loginData.email, password:this.loginData.password, role: 'user'})
      HTTP.post('/api/auth/login', {email: this.loginData.email, password:this.loginData.password, role: this.loginData.role},{})
      .then(response => {
        // this.nameSchool = user.name;
        this.error = false;
        this.welcome = true;
        this.loading = false
        this.$store.commit('addSession', response.data.data);
        // this.$router.push("/exchange");
        window.location.href = "/";

        console.log(response.data.data)

      })
      .catch(e => {
        this.error = true
        this.loading = false
        console.error(e)
      })
    },
    onError() {
      this.$emit('update:is-succeeded', false);
    },
    onSuccess() {
      this.$emit('update:is-succeeded', true);
    },
    isExpired() {
      this.$emit('update:is-succeeded', false);
    },
  },
  mounted() {
    let web = this;
    initGeetest4({
        // Omit required configuration parameters
        product: "bind",
        captchaId: "e47278486f26ef35727cbf8ff38408fc"
      },
      function (captchaObj) {
        web.geeTest = captchaObj;
        captchaObj
          .onReady(function () {
            //You can't call the showbox method to display the captcha until the captcha is ready

          })
          .onSuccess(function () {
            //your code
            web.sentLoguin();
          })
          .onError(function () {
            //your code
          });

        //Button submit event

        button.click = function () {
          // some code

          //Check whether the captcha is ready and whether the onReady of the captcha is executed

          captchaObj.showBox(); //Display captcha

          // some code
        };
      }
    );
  }
}
</script>
<style scoped>
</style>
