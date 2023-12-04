let tarea;
const tareas = [];
const seccion = document.querySelector('#tbody');

const agregarTarea = (e) => {
    e.preventDefault();
    const getTarea = document.getElementById('inputTarea').value;
    tarea = getTarea;
    sumarTareaArray();
    actualizarTabla();
}

const sumarTareaArray = () => {
    tareas.push(tarea);
}

const actualizarTabla = () => {
    seccion.innerHTML = '';

    tareas.forEach(function (tarea, index) {
        const fila = `<tr>
                        <th class="col-1"  scope="row">${index + 1}</th>
                        <td class="col-10" >${tarea}</td>
                        <td class="col-1"> 
                            <button class="border-0 bg-white btnDelete" onclick="borrarItem(${index})">
                                <i class="fa-solid fa-trash"></i>
                            </button>
                        </td>
                    </tr>`;

        seccion.innerHTML += fila;
    });

}

const borrarItem = (i) => {
    tareas.splice(i, 1);
    actualizarTabla();
}
