<template>
  <div>
    <Breadcrumbs :title="$t('account.title')" />
    <section class="section-b-space">
   
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

</style>