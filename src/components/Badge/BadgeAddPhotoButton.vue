<template>
  <ion-item
    lines="none"
    class="add-photo type-img"
  >
    <template v-if="regPhoto == null">
      <ion-button
        class="add-photo-button"
        expand="block"
        fill="clear"
      >
        <ion-icon
          :icon="image"
          color="light"
          class="add-image-icon"
        />
      </ion-button>
    </template>
    <template v-else>
      <ion-img
        :src="'https://' + regPhoto"
        class="add-photo-img"
      />
    </template>
  </ion-item>
</template>
<script>
import { image } from "ionicons/icons";

export default {
  name: "BadgeAddPhotoButton",
  props: {
    regPhoto: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      image
    };
  }
};
</script>
<style lang="scss" scoped>
/* add photo */
$width: 108px;
.add-photo {
  position: relative;
  --padding-start: 0;
  --inner-padding-end: 0;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  min-width: $width;
  max-width: 100%;
  width: 100%;
  height: 100%;
  margin: 0 auto;

  &.type-img {
    ion-button {
      border-color: #dbdbdb;
      background-color: var(--ion-border-color);
    }
  }

  ion-button {
    width: 100%;
    height: $width;
    border: 2px solid var(--ion-border-color);
    border-radius: 10px;
    margin: 0;

    &:hover {
      opacity: 1;
    }

    ion-text {
      position: absolute;
      bottom: 15px;
      right: 0;
      display: block;
      margin-top: 10px;
    }
  }

  ion-img.add-photo-img {
    width: 100%;
    height: $width;
    object-fit: cover;
    border: 2px solid var(--ion-color-primary);
    border-radius: 10px;
    overflow: hidden;
  }
}

.bonus-label {
  position: absolute;
  left: 0;
  top: 0;
  min-width: 32px;
  height: 20px;
}

.add-image-icon {
  width: 30px;
  height: 30px;
  padding: 10px;
  border-radius: 50%;
  background-color: var(--ion-color-dark);
}

.add-plus-icon {
  width: 30px;
}

.PhotoDelete {
  position: absolute;
  top: 0px;
  right: 0px;
}

.photo_delete {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3px;
  border-radius: 50%;
  background: var(--ion-color-danger);
  color: #ffffff;
}
</style>
