const modals = () => {
	function bindModal(triggerSelector, modalSelector, closeSelector) {
		const trigger = document.querySelectorAll(triggerSelector);
		const modal = document.querySelector(modalSelector);
		const close = document.querySelector(closeSelector);

		trigger.forEach(elem => {
			elem.addEventListener('click', (e) => {
				if (e.target) {
					e.preventDefault();

				}
				modal.classList.add("active")
				document.body.style.overflow = "hidden";
			});
		});

		close.addEventListener("click", (e) => {
			modal.classList.remove("active");
			document.body.style.overflow = "";
		});

		modal.addEventListener("click", (e) => {
			if (e.target === modal) {
				modal.classList.remove("active");
				document.body.style.overflow = "";
			}
		})
	}
	function showModalByTime(modalSelector, classSelector, time) {
		const modal = document.querySelector(modalSelector)
		setTimeout(() => {
			modal.classList.add(classSelector)
		}, time);
	}

	bindModal(".popup_engineer_btn", ".popup_engineer", ".popup_engineer .popup_close");
	bindModal(".phone_link", ".popup", ".popup .popup_close");
	showModalByTime(".popup_engineer", "active", 3000);
};
export default modals;