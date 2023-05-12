function loader() {
    window.addEventListener('load', function() {
        const loader = document.querySelector('.loader');
        loader.classList.add('hidden');
    });
}

export default loader;