class DollarsModal extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    async connectedCallback() {
        try {
            const response = await fetch('https://dolarapi.com/v1/dolares');
            const data = await response.json();

            this.shadowRoot.innerHTML = `
                <style>
                    .modal {
                        display: none;
                        flex-direction: column;
                        gap: 15px;
                        margin-top: 25px;
                        background: var(--dark-bg);
                        color: var(--text-light);
                        border-radius: var(--radius);
                        box-shadow: var(--shadow);
                        padding: 5px;
                    }

                    .modal.modal-active{
                        display:flex;
                    }

                    .rate{
                        background-color: var(--primary);
                        border-radius: var(--radius);
                        padding: 5px;
                    }

                    @media screen and (min-width: 625px){
                        .modal{
                            display: none;
                            grid-template-columns: repeat(2, 1fr);
                            gap: 15px;
                        }

                        .modal.modal-active{
                            display: grid;
                        }

                        .rate{
                            width: 90%;
                            height: auto;
                        }
                    }
                </style>

                <div class="modal">
                    <h2>Dollar Rates</h2>
                    ${data.map((item) => `
                        <div class="rate">
                            <span>${item.nombre}</span>
                            <div>
                                <span class="buy">Buy: ${item.compra}</span> |
                                <span class="sell">Sell: ${item.venta}</span>
                            </div>
                    </div>`).join('')}
                </div>`;
        } catch (error) {
            this.shadowRoot.innerHTML = `<p>Error loading data.</p>`;
            console.error('Error fetching data:', error);
        }
    }
}

customElements.define('dollars-modal', DollarsModal);