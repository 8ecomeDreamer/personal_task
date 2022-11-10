<template>
  <b-tab
    :title="$t('account.details_tab.title')"
    :active="is_active"
    @click="$router.push(localePath({ path: '/account/details' }))"
  >
    <div>
      <div class="dashboard-right">
        <div class="dashboard">
          <div class="page-title">
            <h2>{{ $t("account.details_tab.title") }}</h2>
          </div>
          <div class="welcome-msg">
            <p>{{ $t("account.greeting") + $auth.user.account.username }} !</p>
            <p>
              {{ $t("account.details_tab.account_created_at") }}
              {{ $moment($auth.user.created_at) }}
            </p>
            <p>
              {{ $t("account.details_tab.last_logged_in") }}
              {{ $moment($auth.user.last_logged_in_at) }}
            </p>
            <p>
              {{ $t("account.details_tab.message") }}
            </p>
          </div>

          <!-- Account Information START -->
          <div>
          <!-- Account Information END -->
        </div>
      </div>
    </div>
  </b-tab>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import fileUpload from "~/mixins/fileUpload.js";

export default {
  props: ["is_active"],

  async fetch() {
    await this.getAccountDetails().then(() => {
      this.formData = {
        ...this.getAccount,
      };
    });
  },
  data() {
    return {
      formData: {},
    };
  },
  methods: {
    ...mapActions({
      getAccountDetails: "account/getAccountDetails",
      updateAccountDetails: "account/updateAccountDetails",
    }),
    clickImage() {
      document.querySelector("#imageInput").click();
    },
    async uploadImage(e) {
      const url = await this.$upload(e);
      this.formData.avatar = url;
    },
    onSubmit() {
      this.$onResponseToast({
        method: this.updateAccountDetails(this.formData),
      }).catch(() => {
        this.formData = { ...this.getAccount };
      });
    },
    onCancel() {
      this.formData = { ...this.getAccount };
    },
  },
  computed: {
    ...mapGetters({
      getAccount: "account/getAccount",
      getConfig: "configuration/getConfig",
    }),
  },
};
</script>

<style></style>
