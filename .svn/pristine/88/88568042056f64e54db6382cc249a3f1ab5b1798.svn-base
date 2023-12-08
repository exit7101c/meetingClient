<template>
  <section class="main-section">
    <slot name="title"></slot>
    <div class="main-section-content">
      <slot name="content"></slot>
    </div>
  </section>
</template>
<script>
export default {
  name: 'MainSection'
};
</script>
<style scoped lang="scss">
.main-section {

  + .main-section {
    margin-top: 24px;
  }

  &:first-of-type {
    margin-top: 24px;
  }
}
</style>
