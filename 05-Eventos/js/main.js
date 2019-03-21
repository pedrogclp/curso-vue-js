const vm = new Vue({
    el: 'main',
    data: {
        nuevaTarea: null,
        tareas: [
            'Hacer la compra',
            'Aprender Vue y Firebase',
            'Ir al gimnasio',
        ]
    },
    methods: {
        agregarTarea: function() {
            // this hace referencia a la misma estancia.
            this.tareas.unshift(this.nuevaTarea);
            this.nuevaTarea = null;
        }
    }
})