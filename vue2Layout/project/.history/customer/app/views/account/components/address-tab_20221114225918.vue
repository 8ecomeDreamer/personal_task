<template>
  <b-tab
    :title="$t('account.address_tab.title')"
    :active="is_active"
    @click="$router.push(localePath({ path: '/account/address' }))"
  >
    <div>
      <div class="dashboard-right">
        <!-- <div class="dashboard">
          <div class="page-title">
            <h2>{{ $t("account.address_tab.title") }}</h2>
          </div>
          <div class="welcome-msg">
            <p>{{ $t("account.greeting") + $auth.user.account.username }}</p>
            <p>
              {{ $t("account.address_tab.message") }}
            </p>
          </div> -->
          <!-- Form START -->
          <div class="box-account box-info">
            <div class="box">
              <div class="box-content tab-product">
                <form class="theme-form">
                  <div class="form-row">
                    <!-- Name START -->
                    <div class="col-md-6">
                      <label for="name">
                        {{ $t("account.address_tab.recipient_name") }}
                      </label>

                      <input
                        v-model="formData.name"
                        type="text"
                        class="form-control"
                        id="name"
                        :placeholder="$t('account.address_tab.name')"
                        name="name"
                      />
                    </div>
                    <!-- Name END -->

                    <!-- Phone START -->
                    <div class="col-md-6 checkout-page">
                      <label for="phone">{{ $t("general.phone") }}</label>

                      <div class="d-flex checkout-form">
                        <!-- Area code -->
                        <select
                          v-model="formData.area_code"
                          class="form-control mr-2"
                        >
                          <option :value="null" disabled>
                            {{ $t("general.select") }}
                          </option>
                          <option
                            v-for="(area_code, idx) in getConfig['area-codes']
                              .list"
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
                        />
                      </div>
                    </div>
                    <!-- Phone END -->
                  </div>
                  <div class="form-group">
                    <label for="address">
                      {{ $t("account.address_tab.address") }}
                    </label>

                    <textarea
                      v-model="formData.address"
                      class="form-control"
                      :placeholder="$t('account.address_tab.address')"
                      id="address"
                      rows="4"
                    ></textarea>
                  </div>
                </form>
                <button
                  type="submit"
                  class="btn btn-solid"
                  @click.prevent="onSubmit"
                >
                  {{ $t("general.save") }}
                </button>
                <button
                  @click.prevent="onCancel"
                  class="btn btn-solid"
                  :disabled="$objEquiv(formData, getDeliveryRecipient)"
                >
                  {{ $t("general.cancel") }}
                </button>
              </div>
            </div>
          </div>
          <!-- Form END -->
        </div>
      </div>
    </div>
    {{ getDeliveryRecipient }}
    {{ formData }}
  </b-tab>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  props: ["is_active"],

  async fetch() {
    await this.getDeliveryRecipientDetails().then(() => {
      this.formData = {
        ...this.getDeliveryRecipient,
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
      getDeliveryRecipientDetails: "account/getDeliveryRecipientDetails",
      updateDeliveryRecipientDetails: "account/updateDeliveryRecipientDetails",
    }),
    onSubmit() {
      this.$onResponseToast({
        method: this.updateDeliveryRecipientDetails(this.formData),
      }).catch(() => {
        this.formData = { ...this.getDeliveryRecipient };
      });
    },
    onCancel() {
      this.formData = { ...this.getDeliveryRecipient };
    },
  },
  computed: {
    ...mapGetters({
      getDeliveryRecipient: "account/getDeliveryRecipient",
      getConfig: "configuration/getConfig",
    }),
  },
};
</script>

<style></style>
