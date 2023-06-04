const ComingSoonModalId = "coming-soon-modal";
const CreateYoutubePostModalId = "create-youtube-post-modal";
const LoginModalId = "login-modal";

export enum ModalType {
  ComingSoonModal = ComingSoonModalId,
  CreateYoutubePostModal = CreateYoutubePostModalId,
  LoginModal = LoginModalId,
}

export function openModal(modalType: ModalType) {
  const modal = document.getElementById(
    modalType.toString()
  ) as HTMLInputElement;
  modal.checked = true;
}

export function closeModal(modalType: ModalType) {
  const modal = document.getElementById(
    modalType.toString()
  ) as HTMLInputElement;
  modal.checked = false;
}
