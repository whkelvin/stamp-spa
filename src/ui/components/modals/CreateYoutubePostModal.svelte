<script lang="ts">
  import Emoji from "../icons/Emoji.svelte";
  import {
    ModalType,
    openModal,
    CreateYoutubePostModalCheckboxId,
    closeModal,
  } from "../../services/modalService";
  import { ResponseError } from "stamp-api-client";
  import {
    NotificationType,
    showNotification,
  } from "../../services/notificationService";
  import * as postsFeedService from "../../services/postsFeedService";
  import { type NewPost } from "../../models/newPost";

  let title = "";
  let link = "";

  class ValidationError extends Error {
    constructor(message: string) {
      super(message);
      this.name = "ValidationError";
    }
  }

  async function writeYoutubePost() {
    try {
      const newPost: NewPost = {
        title: title,
        link: link,
        rootDomain: "youtube.com",
        description: "",
      };
      if (title == "" || title == null || title == undefined) {
        throw new ValidationError("Title is required.");
      }
      if (link == "" || link == null || link == undefined) {
        throw new ValidationError("Link is required.");
      }

      await postsFeedService.createPost(newPost);
      closeModal(ModalType.CreateYoutubePostModal);
    } catch (error) {
      if (error.name == "ResponseError") {
        const responseError = error as ResponseError;
        if (
          responseError?.response?.status == 401 ||
          responseError?.response?.status == 403
        ) {
          showNotification({
            id: crypto.randomUUID(),
            description: "Please log in first.",
            type: NotificationType.warning,
          });
          openModal(ModalType.LoginModal);
          return;
        }
      }

      if (error.name == "ValidationError") {
        showNotification({
          id: crypto.randomUUID(),
          description: error.message,
          type: NotificationType.warning,
        });
        return;
      }

      showNotification({
        id: crypto.randomUUID(),
        description:
          "Cannot Create Post. Check your inputs or try again later.",
        type: NotificationType.error,
      });
    }
  }
</script>

<input
  type="checkbox"
  id={CreateYoutubePostModalCheckboxId}
  class="modal-toggle"
/>

<label
  for={CreateYoutubePostModalCheckboxId}
  class="modal modal-bottom sm:modal-middle cursor-pointer"
  id={ModalType.CreateYoutubePostModal.toString()}
>
  <label class="modal-box" for="">
    <div class="flex">
      <h3 class="font-bold text-lg m-auto mb-8">Share From Youtube</h3>
    </div>
    <div class="flex flex-col">
      <input
        bind:value={title}
        type="text"
        placeholder="TITLE"
        class="input input-md input-bordered w-full max-w-xs mb-3 font-bold m-auto"
      />

      <input
        bind:value={link}
        type="text"
        placeholder="LINK"
        class="input input-md input-bordered w-full max-w-xs mb-3 font-bold m-auto"
      />
    </div>

    <button class="flex flex-col m-auto" on:click={writeYoutubePost}>
      <div class="btn btn-primary btn-wide m-auto">
        <Emoji symbol="🚀" label="deploy" />
        <div class="ml-2">Deploy</div>
      </div>
    </button>
  </label>
</label>
