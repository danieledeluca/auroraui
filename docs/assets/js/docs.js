/* global Swal, hljs */

const Toast = Swal.mixin({
    toast: true,
    position: 'bottom',
    showConfirmButton: false,
    timer: 3000,
});

function fireToast() {
    Toast.fire({
        icon: 'success',
        title: 'Copied!',
    });
}

document.querySelectorAll('.subsection__code').forEach((item) => {
    const codeToolbarElement = document.createElement('div');
    codeToolbarElement.classList.add('code__toolbar');
    codeToolbarElement.innerHTML = `
        <a href="#" class="button show-code">
            <span>Show code</span>
            <i class="icon-corner-right-down"></i>
        </a>
        <a href="#" class="button button--primary button--icon copy-code">
            <i class="icon-clipboard"></i>
        </a>
    `;

    item.prepend(codeToolbarElement);
});

document.querySelectorAll('.show-code').forEach((item) => {
    item.addEventListener('click', () => {
        item.closest('.subsection__code').classList.toggle('is-active');
    });
});

document.querySelectorAll('.copy-code').forEach((item) => {
    item.addEventListener('click', () => {
        if (navigator.clipboard) {
            navigator.clipboard
                .writeText(item.closest('.subsection__code').querySelector('code').textContent)
                .then(fireToast);
        }
    });
});

document.querySelectorAll('.icon__wrapper').forEach((item) => {
    item.addEventListener('click', () => {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(item.querySelector('.icon__name').textContent).then(fireToast);
        }
    });
});

hljs.highlightAll();
