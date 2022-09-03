const toggleModal = () => {
    document.addEventListener('DOMContentLoaded', () => {
        const $modals = document.querySelectorAll('.modal');
        const $openModalButtons = document.querySelectorAll('.js-open-modal');
        const $closeModalButtons = document.querySelectorAll('.js-close-modal');
        const $overlay = document.querySelector('.overlay');

        $openModalButtons.forEach((button) => {
            button.addEventListener('click', function(event) {
                event.preventDefault();
                let modalId = this.dataset.modal;
                let $modal = document.querySelector(`#${modalId}`);

                $modals.forEach((modal) => {
                    modal.classList.add('modal--hidden');
                    modal.setAttribute('aria-hidden', 'true');
                });

                $modal.classList.remove('modal--hidden');
                $modal.setAttribute('aria-hidden', 'false');
                $overlay.classList.remove('overlay--hidden');
            });
        });

        $closeModalButtons.forEach((button) => {
            button.addEventListener('click', function() {
                let $parentModal = this.closest('.modal');
                $parentModal.classList.add('modal--hidden');
                $parentModal.setAttribute('aria-hidden', 'true');
                $overlay.classList.add('overlay--hidden');
            });
        });

        if ($overlay) {
            $overlay.addEventListener('click', function() {
                $modals.forEach((modal) => {
                    modal.classList.add('modal--hidden');
                    modal.setAttribute('aria-hidden', 'true');
                });
                this.classList.add('overlay--hidden');
            });
        }

        const handleKeyDown = (event) => {
            const keyCode = event.keyCode || event.which;
            if (keyCode === 27) {
                $modals.forEach((modal) => {
                    modal.classList.add('modal--hidden');
                    modal.setAttribute('aria-hidden', 'true');
                });
                $overlay.classList.add('overlay--hidden');
            }
        }

        document.addEventListener('keydown', handleKeyDown);
    });
};

toggleModal();
