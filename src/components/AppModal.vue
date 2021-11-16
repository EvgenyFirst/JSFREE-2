<template>
  <!-- Modal -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">
            {{ character.name }}
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body" style="padding-bottom: 0">
          <img
            :src="character.thumbnail"
            :alt="character.name"
            style="max-width: 100%"
          />
        </div>
        <div class="modal-body" style="padding-top: 0">
          <p class="text-muted">{{ character.modified }}</p>

          <h1 style="font-size: 1.25rem">Описание:</h1>
          <p>
            {{ character.description }}
          </p>

          <h5>Комиксы:</h5>
          <ul>
            <li v-for="elComics in character.comics" :key="elComics.id">
              {{ elComics.name }}
            </li>
          </ul>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Закрыть
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- Modal -->
</template>

<script>
export default {
  name: "AppModal",
  props: ["character"],
};
</script>

<style scoped>
</style>
