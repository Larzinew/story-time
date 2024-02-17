window.addEventListener("load", () => {
    const input = document.getElementById("upload");
    const filewrapper = document.getElementById("filewrapper");

    input.addEventListener("change", (e) => {
        const fileName = e.target.files[0].name;
        const filetype = fileName.split(".").pop();
        fileshow(fileName, filetype);
    });

    const fileshow = (fileName, filetype) => {
        const showfileboxElem = document.createElement("div");
        showfileboxElem.classList.add("showfilebox");
        const leftElem = document.createElement("div");
        leftElem.classList.add("left");
        const filetypeElem = document.createElement('span');
        filetypeElem.classList.add("filetype");
        filetypeElem.textContent = filetype.toUpperCase();
        leftElem.append(filetypeElem);
        const filetitleElem = document.createElement("h3");
        filetitleElem.textContent = fileName;
        leftElem.append(filetitleElem);
        showfileboxElem.append(leftElem);
        const rightElem = document.createElement("div");
        rightElem.classList.add("right");
        const crossElem = document.createElement("span");
        crossElem.innerHTML = "&#215;";
        rightElem.append(crossElem);
        showfileboxElem.append(rightElem);
        filewrapper.append(showfileboxElem);

        crossElem.addEventListener("click", () => {
            filewrapper.removeChild(showfileboxElem);
        });
    };
});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('story-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const name = document.getElementById('story-title').value;
        const content = document.getElementById('story-content').value;

        // Here you can handle the captured story title and content
        console.log('Title:', name);
        console.log('Content:', content);

        // Clear the form fields
        form.reset();
    });
});
