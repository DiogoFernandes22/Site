const sections = document.querySelectorAll(".skills, .experience, .projects, .about, .contact"); //Restringe o scroll a tudo que vem depois do hero

sections.forEach(section => {
    section.classList.add("hidden");
});


const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }

    });

});


sections.forEach(section=>{
    observer.observe(section);
});

const form = document.querySelector("form");
form.addEventListener("submit", () => {
    alert("A sua mensagem foi enviada, obrigado pelo contacto");
});

const progress = document.createElement("div");

document.body.appendChild(progress);
//definir a posição da barra
progress.style.position = "fixed";
progress.style.top = "0"; //começa no topo
progress.style.left = "0"; // Encostar ao canto esquerdo
progress.style.width = "4px"; //espessura da barra
progress.style.height = "0%"; //começa vazia e vai aumentado com o scroll
progress.style.background = "#0096FF";
progress.style.zIndex = "9999"; //coloca a barra em frente a todos os elementos
progress.style.transition = "height .2s ease"; // suaviza o crescimento da barra

// Executa sempre que o utilizador faz scroll
window.addEventListener("scroll",()=>{
// Calcula a percentagem da página percorrida
    const scroll = window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100; //quantidade de pixels que o utilizador já desceu

    progress.style.height = scroll + "%"; //atualiza a altura da barra conforme o scroll

});

document.getElementById("year").textContent = new Date().getFullYear(); //atualiza de forma automática o ano, new Date().getFullYear() obtém o ano atual do sistema do utilizador