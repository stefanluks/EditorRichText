window.onload = () => {
    const body = document.querySelector("body");
    const app = document.querySelector("#app");
    let modelos = document.querySelector(".modelos");
    let btns = document.querySelectorAll(".btn");
    let editor = document.querySelector("iframe");
    editor.contentDocument.designMode = "on";
    let att = editor.contentDocument;
    btns.forEach(btn => {
        btn.addEventListener("click", () => {
            console.log(btn.id)
            if (btn.id != 'save' || btn.id != 'open') {
                let paramentro = null;
                if (btn.id == "createLink") paramentro = prompt("Digite seu link aqui:");
                att.execCommand(btn.id, false, paramentro);
            } else {
                alert("Função Desabilitada!");
            }
            if (btn.id === 'open') {
                if (modelos.style.right == "0px") modelos.style.right = "-100%";
                else modelos.style.right = "0px";
            }
        });
    });

    let selectSize = document.querySelector("#tamanho");
    for (let i = 1; i < 8; i++) {
        let op = document.createElement("option");
        op.textContent = "" + i;
        selectSize.appendChild(op);
    }
    selectSize.addEventListener("change", () => {
        att.execCommand('fontSize', false, selectSize.value)
    })

    const fonts = ['Arial', 'Calibri', 'Comic Sans MS', 'Impact'];
    let selectFont = document.querySelector("#fonts");
    fonts.forEach(f => {
        let o = document.createElement("option");
        o.textContent = f;
        selectFont.appendChild(o);
    });
    selectFont.addEventListener("change", () => {
        att.execCommand('fontName', false, selectFont.value)
    })

    window.addEventListener("resize", ajusteTela);
    ajusteTela();

    function ajusteTela() {
        if (screen.width < 550) {
            body.style.justifyContent = 'flex-start';
            app.style.width = '95%';
            editor.style.marginTop = "70px";
            editor.style.width = "100%";
        } else {
            app.style.width = '';
            body.style.justifyContent = 'center';
            editor.style.marginTop = "50px";
            editor.style.width = "";
        }
    }

    let modes = document.querySelector("#modelos-base").querySelectorAll("a");
    modes.forEach(item => {
        item.addEventListener('click', () => {
            console.log("teste")
            modelos.style.right = "-100%";
            editor.src = 'modelos/' + item.textContent + ".html";
        });
    });
}