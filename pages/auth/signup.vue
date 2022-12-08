<template>
  <div class="flex flex-col  md:max-w-md md:px-3" style="position: absolute">
    <div class="py-6 px-8 bg-white rounded-lg shadow-xs">
      <img
        style="width: 70px; position: absolute; top: 3%; left: 37%"
        width="70"
        height="70"
        src="https://uploads-ssl.webflow.com/62163e8c328ad285342080f0/635a73a24bede070260f8a43_Konecta-Digital-MK-Agency-logo.png"
      />
      <h1 class="mb-2 mt-28">Regístrate</h1>
      <div class="mb-4"><p style="font-weight:bold">Registrate y crece con nuestros cursos online</p>
      </div>
      <div v-show="error !== ''" class="p-3 border">
        <p>{{ error }}</p>
      </div>
        <div class="mb-2">
          <ui-input-float class=""
                          :text.sync="userDataModel.email"
                          v-model="userDataModel.email"
                          :label="'Email'"
                          :name="'email'"
                          :type="'email'"
                          :placeholder="'Email'"
                          :required="true"
          />
        </div>
        <div class="mb-2">
          <ui-input-float class=""
                          :text.sync="userDataModel.name"
                          v-model="userDataModel.name"
                          :label="'Nombre'"
                          :name="'Nombre'"
                          :type="'text'"
                          :placeholder="'Nombre del usuario'"
                          :required="true"
          />
        </div>
        <div class="mb-2">
          <ui-input-float class=""
                          :text.sync="userDataModel.surnameFather"
                          v-model="userDataModel.surnameFather"
                          :label="'Apellido Paterno'"
                          :name="'Apellido Paterno'"
                          :type="'text'"
                          :placeholder="'Apellido del usuario'"
                          :required="true"
          />
        </div>

        <div class="mb-2">
          <ui-input-float class=""
                          :text.sync="userDataModel.surnameMother"
                          v-model="userDataModel.surnameMother"
                          :label="'Apellido Materno'"
                          :name="'Apellido Materno'"
                          :type="'text'"
                          :placeholder="'Apellido del usuario'"
                          :required="true"
          />
        </div>

        <div class="mb-2">
          <ui-input-float class=""
                          :text.sync="userDataModel.password"
                          v-model="userDataModel.password"
                          :label="'Password'"
                          :name="'password'"
                          :type="'password'"
                          :placeholder="'Password'"
                          :required="true"
          />
        </div>
        <div class="mb-2">
            <ui-input-float class=""
                            :text.sync="userDataModel.password"
                            v-model="userDataModel.password"
                            :label="'Repita el Password'"
                            :name="'repeat-password'"
                            :type="'password'"
                            :placeholder="'Repeat Password'"
                            :required="true"
            />
        </div>
        <div class="mb-2">
          <b-form-group id="input-group-3" label="Food:" label-for="input-3">
            <b-form-select
              id="input-3"
              v-model="userDataModel.role"
              :options="roles"
              required
            ></b-form-select>
      </b-form-group>
        </div>
        <!-- <div class="mt-10">
          <ui-input-float class=""
                          :text.sync="userDataModel.registerCode"
                          v-model="userDataModel.registerCode"
                          :label="'Código de registro'"
                          :name="'code'"
                          :type="'text'"
                          :placeholder="'Código de inscripción'"
                          :required="true"
          />
        </div> -->
        <div class="mt-5 mb-5 flex flex-wrap justify-between items-center">
          <div class="w-full flex items-center">
            <ui-input-checkbox />
            <p>Estoy de acuerdo con los <a href="#">términos de política de privacidad</a> y <a href="#">términos de uso</a>.</p>
          </div>

          <button
            style="margin: 0 auto;"
            class="primary-background  text-gray-100 rounded-lg px-6 py-3 font-bold mt-2"
            :disabled="loading"
            @click="showRecaptcha()"
          >
            Registrarme
          </button>
          <div class="mt-6" style="width:100%"><p style="text-align: center">¿Ya tienes una cuenta?
            <nuxt-link to="/auth/signin" class="text-green-700 hover:text-green-900">Inicia sesión</nuxt-link></p>
          </div>
        </div>
    </div>
  </div>
</template>
<script>
  import {HTTP} from "../../config/HttpBase";
export default {
  layout: "auth",
  components: {
  },
  data() {
    return {
      email: "",
      username: "",
      password: "",
      error: "",
      loading: false,
      userDataModel: {
        email: '',
        password: '',
        role: '',
        // userName: '',
        name: '',
        surnameFather: '',
        surnameMother: ''
      },
      roles: [{text: 'Instructor', value: 'author'}, {text: 'Alumno', value: 'student'}],
      geeTest: ''
    };
  },
  methods: {
    async showRecaptcha(){
      console.log(this.userDataModel)
      if(this.userDataModel.user != '' && this.userDataModel.password != ''  && this.userDataModel.name != '' && this.userDataModel.surnameFather != '' && this.userDataModel.surnameMother != ''){
        this.registerUser();
      }else{
        this.$bvToast.toast('Rellenar todos los campos', {
          title: `Registro`,
          variant: 'danger',
          solid: true
        })
      }
    },
    registerUser(){
      this.loading = true
      console.log(this.loginData);
      const dataToSend = {
        email: this.userDataModel.email,
        name: this.userDataModel.name,
        surnameFather: this.userDataModel.surnameFather,
        surnameMother: this.userDataModel.surnameMother,
        password:this.userDataModel.password,
        role: this.userDataModel.role,
      };
      HTTP.post('/api/auth/register', dataToSend)
      .then( response=> {
        // this.nameSchool = user.name;
        console.log('registro exitoso')
        console.log('registro exitoso: ', response)
        this.error = false;
        this.welcome = true;
        /* HTTP.post('/api/auth/login', {user: this.userDataModel.user, password:this.userDataModel.password, role: 'user'},{})
          .then(responseLogin => {
            // this.nameSchool = user.name;
            this.error = false;
            this.welcome = true;
            this.loading = false
            this.$store.commit('addSession', responseLogin.data.data);
            // this.$router.push("/exchange");
            window.location.href = "/exchange";

            console.log(responseLogin.data.data)

          })
          .catch(e => {
            this.error = true
            this.loading = false
            console.error(e)
          }) */
        // this.$router.push('/auth/signkin');


      })
      .catch(e => {
        this.error = true
        this.loading = false
        console.error(e)
      })
    },
    async createUser(e) {
      e.preventDefault();
      try {
        const newUser = await this.$strapi.register({
          email: this.email,
          username: this.username,
          password: this.password
        });
        console.log(newUser);
        if (newUser !== null) {
          this.error = "";
          this.$nuxt.$router.push("/");
        }
      } catch (error) {
        this.error = error.message;
      }
    }
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
            web.registerUser();
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
};
</script>
<style scoped></style>
