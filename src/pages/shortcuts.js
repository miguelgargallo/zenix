document.addEventListener('keydown', (event) => {
    const key = event.key;

    if (key === '1') {
        window.location = '/';
    } else if (key === '2') {
        window.location = '/blog';
    } else if (key === '3') {
        window.location.href = '/about';
    } else if (key === '4') {
        window.location.href = 'https://twitter.miguelgargallo.es';
    } else if (key === '5') {
        window.location.href = 'https://github.miguelgargallo.es';
    } else if (key === '6') {
        window.location.href = 'https://twitch.miguelgargallo.es';
    } else if (key === '7') {
        window.location.href = 'https://youtube.miguelgargallo.es';
    } else if (key === '8') {
        window.location.href = 'https://ig.miguelgargallo.es';
    }
});