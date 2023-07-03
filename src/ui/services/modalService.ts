const ComingSoonModalId = "coming-soon-modal";
const CreateYoutubePostModalId = "create-youtube-post-modal";
const LoginModalId = "login-modal";

export enum ModalType {
  ComingSoonModal = ComingSoonModalId,
  CreateYoutubePostModal = CreateYoutubePostModalId,
  LoginModal = LoginModalId,
}

const checkboxStr = "-checkbox";
export const ComingSoonModalCheckboxId =
  ModalType.ComingSoonModal.toString() + checkboxStr;
export const CreateYoutubePostModalCheckboxId =
  ModalType.CreateYoutubePostModal.toString() + checkboxStr;
export const LoginModalCheckboxId =
  ModalType.LoginModal.toString() + checkboxStr;

let currentMaxZIndex = 10;

export function openModal(modalType: ModalType) {
  const checkbox = document.getElementById(
    modalType.toString() + checkboxStr
  ) as HTMLInputElement;
  checkbox.checked = true;

  const modal = document.getElementById(
    modalType.toString()
  ) as HTMLLabelElement;
  modal.style.zIndex = (currentMaxZIndex + 10).toString();
  currentMaxZIndex++;
}

export function closeModal(modalType: ModalType) {
  const checkbox = document.getElementById(
    modalType.toString() + checkboxStr
  ) as HTMLInputElement;
  checkbox.checked = false;
}
