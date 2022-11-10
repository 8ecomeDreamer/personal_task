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
          <div class="wrapper">
            <div class="left">
              <div class="imgWrapper ml-2">
                 <!-- Avatar START -->
                  <img
                        :src="
                          formData.avatar
                            ? `${formData.avatar}?x-oss-process=image/resize,m_fixed,h_250,w_250`
                            : 'https://starsnet-production.oss-cn-hongkong.aliyuncs.com/png/1216838e-1f12-46b8-ae6e-49d279ab531a.png?x-oss-process=image/resize,m_fixed,h_250,w_250'
                        "
                        alt=""
                      />
                      <!-- <div class="media-body ">
                        <input
                          id="imageInput"
                          type="file"
                          class="form-control"
                          @change="uploadImage"
                          hidden
                          accept="image/png, image/jpeg, image/jpg"
                        />
                        <button @click="clickImage" class="btn btn-solid">
                          {{ $t("general.upload") }}
                        </button>
                      </div> -->
                    </div>
                  </div>
                </div>
                <!-- Avatar END -->
              </div> 
            </div>
            <div class="right"></div>
          </div>
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

<style>
  .wrapper{
    display: flex;
    justify-content: space-around;
  }
  .wrapper .left{
    /* width: 30%; */
  }
  .wrapper .left .imgwrapper{
    width: 2rem;
    height: 1rem;
  }
  .wrapper .left .imgwrapper img{
    width: 100%;
    height: 100%;
  }
   .wrapper .right{
    width: 65%;
  }

</style>
