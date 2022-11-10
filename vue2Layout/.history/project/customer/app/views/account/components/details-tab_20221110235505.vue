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
            You may edit your details so your account is totally up to date.
          </div>
          <!-- <div class="welcome-msg">
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
          </div> -->

          <!-- Account Information START -->
          <div class="wrapper">
            <div class="left">
              <div class="imgWrapper">
                 <!-- Avatar START -->
                  <!-- <img class="img"
                    :src="
                      formData.avatar
                        ? `${formData.avatar}?x-oss-process=image/resize,m_fixed,h_250,w_250`
                        : 'https://starsnet-production.oss-cn-hongkong.aliyuncs.com/png/1216838e-1f12-46b8-ae6e-49d279ab531a.png?x-oss-process=image/resize,m_fixed,h_250,w_250'
                    "
                    alt=""  /> -->
                 <!-- Avatar END -->
              </div> 
            </div>
            <div class="right">
              <div class="box">
                  <div class="box-content tab-product">
                    <form class="theme-form" @submit.prevent="onSubmit">
                      <div class="form-row">
                        <!-- Name START -->
                        <div class="col-md-12">
                          <label for="name"
                            >{{ $t("account.address_tab.name") }} *</label
                          >

                          <input
                            v-model="formData.username"
                            type="text"
                            class="form-control"
                            id="name"
                            :placeholder="$t('account.address_tab.name')"
                            name="name"
                            required
                          />
                        </div>
                        <!-- Name END -->

                        <!-- Gender START -->
                        <div class="col-md-6">
                          <label for="gender">
                            {{ $t("account.details_tab.gender") }}
                          </label>

                          <div class="payment-box">
                            <div class="upper-box">
                              <div class="payment-options row">
                                <div class="radio-option col-3">
                                  <input
                                    v-model="formData.gender"
                                    type="radio"
                                    name="payment-group"
                                    id="payment-1"
                                    checked="checked"
                                    value="MALE"
                                  />
                                  <label for="payment-1">
                                    {{ $t("account.details_tab.male") }}
                                  </label>
                                </div>
                                <div class="radio-option col-3">
                                  <input
                                    v-model="formData.gender"
                                    type="radio"
                                    value="FEMALE"
                                    name="payment-group"
                                    id="payment-3"
                                  />
                                  <label for="payment-3">
                                    {{ $t("account.details_tab.female") }}
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <!-- Gender END -->
                      </div>
                      <div class="form-row">
                        <!-- Email START -->
                        <div class="col-md-6">
                          <label for="email">{{ $t("general.email") }}</label>

                          <input
                            v-model="formData.email"
                            type="email"
                            class="form-control"
                            id="email"
                            :placeholder="$t('general.email')"
                            name="email"
                            :disabled="$auth.user.type == 'EMAIL'"
                          />
                        </div>
                        <!-- Email END -->

                        <!-- Phone START -->
                        <div class="col-md-6 checkout-page">
                          <label for="phone">{{ $t("general.phone") }}</label>

                          <div class="d-flex checkout-form">
                            <!-- Area code -->
                            <select
                              v-model="formData.area_code"
                              class="form-control mr-2"
                              :disabled="$auth.user.type == 'PHONE'"
                            >
                              <option :value="null" disabled>
                                {{ $t("general.select") }}
                              </option>
                              <option
                                v-for="(area_code, idx) in getConfig[
                                  'area-codes'
                                ].list"
                                :key="`${area_code.value}-${idx}`"
                                :value="area_code.value"
                              >
                                {{ area_code.text[$i18n.locale] }}
                              </option>
                            </select>

                            <!-- Number input -->
                            <input
                              v-model="formData.phone"
                              type="text"
                              class="form-control"
                              id="phone"
                              :placeholder="$t('general.phone')"
                              name="phone"
                              :disabled="$auth.user.type == 'PHONE'"
                            />
                          </div>
                        </div>
                        <!-- Phone END -->
                      </div>
                      <div class="form-row">
                        <!-- Select country START -->
                        <div class="col-md-6 checkout-page">
                          <label for="email">
                            {{ $t("account.details_tab.country") }}
                          </label>
                          <div class="checkout-form">
                            <select
                              class="form-control mb-3"
                              v-model="formData.country"
                            >
                              <option :value="null" disabled>
                                {{ $t("general.select") }}
                              </option>
                              <option
                                v-for="(country, idx) in getConfig['area-codes']
                                  .list"
                                :key="idx"
                                :value="country.country_code"
                              >
                                {{ country.country[$i18n.locale] }}
                              </option>
                            </select>
                          </div>
                        </div>
                        <!-- Select country END -->
                      </div>
                    </form>
                    <button @click.prevent="onSubmit" class="btn btn-solid">
                      {{ $t("general.save") }}
                    </button>
                    <button
                      @click.prevent="onCancel"
                      class="btn btn-solid"
                      :disabled="$objEquiv(formData, getAccount)"
                    >
                      {{ $t("general.cancel") }}
                    </button>
                  </div>
                </div>
                <!-- Form END -->
            </div>
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

<style scoped>
  .wrapper{
    display: flex;
    justify-content: space-around;
  }
  .wrapper .left{
    width: 30%;
    background: cyan;
    padding-top: 20px;
  }
  .wrapper .left .imgWrapper{
    width: 80%;
    height: 50%;
    margin: 0 auto;
    /* border-radius: 50%; */
    background: black;
  }
  .wrapper .left .imgWrapper .img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
   .wrapper .right{
    /* width: 65%; */
  }

</style>
