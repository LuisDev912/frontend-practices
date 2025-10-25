class DollarsModal extends HTMLElement {
    connectedCallBack() {
        this.innerHTML = `
        <div class="modal">
            <h2>Types of dollars:</h2>
            <div class"dollar-list"></div>
        </div>
        `;
    }
}

