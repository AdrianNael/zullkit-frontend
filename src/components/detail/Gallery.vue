<script setup>
import { ref } from "vue";

defineProps({
  thumbnails: String,
  galleries: Array,
});

const defaultImage = ref("");

function changeImage(image) {
  this.defaultImage = image;
}
</script>

<template>
  <section id="gallery">
    <img :src="defaultImage" alt="" class="w-full mt-6 rounded-2xl" />
    <div class="grid grid-cols-4 gap-4 mt-4">
      <template v-for="gallery in galleries" :key="gallery.id">
        <div
          @click="defaultImage = gallery.url"
          class="overflow-hidden cursor-pointer rounded-2xl"
          :class="{
            'ring-2 ring-indigo-500  ': defaultImage == gallery.image,
          }"
        >
          <img :src="gallery.url" class="w-full" alt="" />
        </div>
      </template>
    </div>
  </section>
</template>
