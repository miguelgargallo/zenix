<script>
    function updateApiField() {
        const apiField = document.querySelector('input[name="api"]');
    apiField.value =
    "cil" +
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 16) +
    Math.random().toString(36).substring(2, 12);
      }
    function getRandomTitle(domain) {
        const titles = [
    `[Domain] Add .${domain} to this f* awesome registry 🔥🔥🔥`,
    `[Domain] Eth suc* 💧💧💧 add .${domain} to this amazing world of HNS`,
    `[Domain] H A N D S H A K E and my tld .${domain} 🚀🚀🚀 rocks`,
    `[Domain] HNS is the future, add .${domain} to this registry`,
    `[Domain] WHY NOT .${domain} 🤷‍♂️🤷‍♂️🤷‍♂️ on Handshake registry`,
    `[Domain] Add .${domain} to Handshake, ✨✨✨ it's awesome`,
    ];
    const index = Math.floor(Math.random() * titles.length);
    return titles[index];
      }
    const form = document.querySelector("#form");
      form.addEventListener("submit", (event) => {
        event.preventDefault();
    const wallet = document.querySelector('input[name="wallet"]').value;
    const api = document.querySelector('input[name="api"]').value;
    const domain = document.querySelector('input[name="domain"]').value;
    const body = `Wallet: ${wallet}\nAPI: ${api}\nDomain: ${domain}`;
    const title = getRandomTitle(domain);
    const url = `https://github.com/Pencil-li/Domains/issues/new?title=${encodeURIComponent(
        title
    )}&body=${encodeURIComponent(body)}`;
    window.open(url, "_blank");
      });
    updateApiField();
</script>