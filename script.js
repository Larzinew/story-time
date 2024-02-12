window.addEventListener("load", () => {
    const input = document.getElementById("upload");
    const filewrapper = document.getElementById("filewrapper");

    input.addEventListener("change", (e) => {
        let fileName = e.target.files[0].name;
        let filetype = fileName.split(".").pop(); // Use fileName instead of e.target.value
        fileshow(fileName, filetype);
    });

    const fileshow = (fileName, filetype) => { // Use curly braces instead of square brackets
        const showfileboxElem = document.createElement("div");
        showfileboxElem.classList.add("showfilebox");
        const leftElem = document.createElement("div");
        leftElem.classList.add("left");
        const filetypeElem = document.createElement('span');
        filetypeElem.classList.add("filetype");
        filetypeElem.textContent = filetype.toUpperCase(); // Use textContent to set text
        leftElem.append(filetypeElem);
        const filetitleElem = document.createElement("h3");
        filetitleElem.textContent = fileName; // Use textContent to set text
        leftElem.append(filetitleElem);
        showfileboxElem.append(leftElem);
        const rightElem = document.createElement("div"); // Create rightElem
        rightElem.classList.add("right");
        const crossElem = document.createElement("span");
        crossElem.innerHTML = "&#215;";
        rightElem.append(crossElem);
        showfileboxElem.append(rightElem); // Append rightElem to showfileboxElem
        filewrapper.append(showfileboxElem);

        crossElem.addEventListener("click",()=>{
            filewrapper.removeChild(showfileboxElem);
        })
    };
});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;

        // Here you can handle the captured name and email address
        console.log('Name:', name);
        console.log('Email:', email);

        // Clear the form fields
        form.reset();
    });
});

