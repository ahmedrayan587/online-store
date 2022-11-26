let dark = document.getElementById("dark");
let light = document.getElementById("light");
window.onload = () => {
    if (window.localStorage.secondaryColor !== undefined) {
        document.querySelector('html').style.setProperty('--secondary-color', window.localStorage.secondaryColor);
        document.querySelector('html').style.setProperty('--page-color', window.localStorage.pageColor);
        document.querySelector('html').style.setProperty('--para-color', window.localStorage.paraColor);
        document.querySelector('html').style.setProperty('--border-color', window.localStorage.hoverColor);
    };
    if (window.localStorage.dark === 'true') {
        dark.classList.add('d-none');
        light.classList.remove('d-none');
    };
};
dark.onclick = () => {
    dark.classList.toggle("d-none");
    light.classList.toggle("d-none");
    window.localStorage.secondaryColor = '#198754';
    document.querySelector('html').style.setProperty('--secondary-color', window.localStorage.secondaryColor);
    window.localStorage.pageColor = 'black';
    document.querySelector('html').style.setProperty('--page-color', window.localStorage.pageColor);
    window.localStorage.paraColor = 'white';
    document.querySelector('html').style.setProperty('--para-color', window.localStorage.paraColor);
    window.localStorage.hoverColor = 'darkorange';
    document.querySelector('html').style.setProperty('--border-color', window.localStorage.hoverColor);
    window.localStorage.dark = dark.classList.contains('d-none');
}
light.onclick = () => {
    dark.classList.toggle("d-none");
    light.classList.toggle("d-none");
    window.localStorage.secondaryColor = 'rgb(106, 0, 255)';
    document.querySelector('html').style.setProperty('--secondary-color', window.localStorage.secondaryColor);
    window.localStorage.pageColor = 'white';
    document.querySelector('html').style.setProperty('--page-color', window.localStorage.pageColor);
    window.localStorage.paraColor = 'black';
    document.querySelector('html').style.setProperty('--para-color', window.localStorage.paraColor);
    window.localStorage.hoverColor = 'rgb(62, 209, 62)';
    document.querySelector('html').style.setProperty('--border-color', window.localStorage.hoverColor);
    window.localStorage.dark = dark.classList.contains('d-none');
}
