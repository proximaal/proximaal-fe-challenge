<template>
  <q-page class="flex flex-center">
    <q-card>
      <q-card-section>
        <div class="q-pa-md">
          <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
            <div class="row">
              <div class="col-12 q-pb-lg">
                <h3>Log in</h3>
              </div>
              <div class="col-12 q-pb-lg">
                <q-input filled v-model="username" label="Username" />
              </div>
              <div class="col-12 q-pb-lg">
                <q-input
                  filled
                  v-model="password"
                  type="password"
                  label="Password"
                />
              </div>
              <div class="col-12 text-right">
                <q-btn
                  label="Reset"
                  type="reset"
                  color="primary"
                  flat
                  class="q-ml-sm"
                />
                <q-btn
                  label="Submit"
                  type="submit"
                  color="primary"
                  @click="handleLogIn()"
                />
              </div>
            </div>
          </q-form>
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { useAuthStore } from "stores/auth";

export default defineComponent({
  name: "LoginPage",
  computed: {},
  methods: {
    handleLogIn() {
      const payload = {
        username: this.username,
        password: this.password,
      };
      this.authStore.logIn(payload).then((response) => {
        if (response.id) {
          sessionStorage.setItem("token", response.id);
          this.$router.push("/");
        }
      });
    },
  },
  mounted() {
    if (Boolean(sessionStorage.getItem("token"))) {
      this.$router.push("/");
    }
  },
  setup() {
    const authStore = useAuthStore();

    return {
      authStore,
    };
  },
});
</script>
