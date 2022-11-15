<template>
  <div>
    <Breadcrumbs :title="$t('account.title')" />
    <section class="section-b-space">
      <div class="container"> 
        <div class="row">
         <b-card no-body v-bind:class="'dashboardtab'">
            <b-tabs pills card vertical >
              <div class="avatarPlace"></div>
              <!-- MY DETAILS START -->
              <details-tab :is_active="slug == 'details'" />
              <!-- MY DETAILS END -->

              <!-- MEMBERSHIP START -->
              <!-- TODO Product related -->
              <membership-tab :is_active="slug == 'membership'" />
              <!-- MEMBERSHIP END -->

              <!-- CHANGE PASSWORD START -->
              <password-tab :is_active="slug == 'password'" />
              <!-- CHANGE PASSWORD END -->

              <!-- CHANGE EMAIL START -->
              <email-tab
                v-if="$auth.user.type == 'EMAIL'"
                :is_active="slug == 'email'"
              />
              <!-- CHANGE EMAIL END -->

              <!-- CHANGE PHONE START -->
              <phone-tab
                v-if="$auth.user.type == 'PHONE'"
                :is_active="slug == 'phone'"
              />
              <!-- CHANGE PHONE END -->

              <!-- ADDRESS BOOK START -->
              <address-tab :is_active="slug == 'address'" />
              <!-- ADDRESS BOOK END -->

              <!-- PAYMENT METHODS START -->
              <payment-tab :is_active="slug == 'payment'" />
              <!-- PAYMENT METHODS END -->

              <!-- CONTACT PREFERENCES START -->
              <contact-tab :is_active="slug == 'contact'" />
              <!-- CONTACT PREFERENCES END -->
            </b-tabs>
          </b-card>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import Breadcrumbs from "~/components/Starsnet/breadcrumbs";

import AddressTab from "./components/address-tab";
import ContactTab from "./components/contact-tab";
import DetailsTab from "./components/details-tab";
import EmailTab from "./components/email-tab.vue";
import MembershipTab from "./components/membership-tab";
import PasswordTab from "./components/password-tab";
import PaymentTab from "./components/payment-tab";
import PhoneTab from "./components/phone-tab";
export default {
  middleware: ["auth"],
  components: {
    Breadcrumbs,

    AddressTab,
    ContactTab,
    DetailsTab,
    EmailTab,
    MembershipTab,
    PasswordTab,
    PaymentTab,
    PhoneTab,
  },
  data() {
    return {
      slug: this.$route.params.slug,
    };
  },
};
</script>

<style scoped>
  .avatarPlace{
    width: 30%;
    height: 5rem;
    background: black;
  }
  /* 使用 >>>   /deep/ 也可以 */
  >>> .dashboardtab ul.card-header{
    border-left: 1px solid #ddd !important;
  }
</style>