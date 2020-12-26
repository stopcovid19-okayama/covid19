<template>
  <v-col cols="12" md="6" class="DataCard">
    <simple-number-card
      title-id="number-of-medical-system-bed"
      :title="$t('確保病床')"
      :date="MedicalSystem.date"
      :number="MedicalSystem.items.bed"
      :unit="$t('床')"
    />
  </v-col>
</template>

<script>
import SimpleNumberCard from '@/components/cards/SimpleNumberCard.vue'
import MedicalSystem from '@/data/medical_system.json'

export default {
  components: {
    SimpleNumberCard,
  },
  data() {
    const data = {
      MedicalSystem,
    }
    return data
  },
}
</script>
