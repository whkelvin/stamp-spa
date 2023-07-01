<script lang="ts">
  import Emoji from "../icons/Emoji.svelte";
  import { ModalType, openModal } from "../../services/modalService";
  import { ResponseError } from "stamp-api-client";
  import {
    NotificationType,
    showNotification,
  } from "../../services/notificationService";
  import * as postsFeedService from "../../services/postsFeedService";
  import { type NewPost } from "../../models/newPost";

  let title = "";
  let link = "";

  async function writeYoutubePost() {
    try {
      const newPost: NewPost = {
        title: title,
        link: link,
        rootDomain: "youtube.com",
        description: "",
      };
      await postsFeedService.createPost(newPost);
    } catch (error) {
      if (error.name == "ResponseError") {
        const responseError = error as ResponseError;
        if (
          responseError?.response?.status == 401 ||
          responseError?.response?.status == 403
        ) {
          showNotification({
            id: crypto.randomUUID.toString(),
            description: "Please log in first.",
            type: NotificationType.warning,
          });
          openModal(ModalType.LoginModal);
        }
      } else {
        console.error("create post failed");
      }
    }
  }
</script>

<input
  type="checkbox"
  id={ModalType.CreateYoutubePostModal.toString()}
  class="modal-toggle"
/>
<label
  for={ModalType.CreateYoutubePostModal.toString()}
  class="modal modal-bottom sm:modal-middle cursor-pointer z-10"
>
  <div class="modal-box">
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

    <div class="modal-action flex flex-col" on:click={writeYoutubePost}>
      <label
        for={ModalType.CreateYoutubePostModal.toString()}
        class="btn btn-primary btn-wide m-auto"
      >
        <Emoji symbol="🚀" label="deploy" />
        <div class="ml-2">Deploy</div>
      </label>
    </div>
  </div>
</label>
