const botonMes = document.querySelectorAll('.mesbtn');
const calendarEl = document.getElementById('calendario');

const calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    locale: 'es',
    themeSystem: 'bootstrap5',
    initialDate: new Date(),
    headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
    },
    events: [
        {
            title: 'Día de la Independencia',
            start: '2024-07-09',
            description: 'Declaración de la Independencia en 1816'
        },
        {
            title: 'Receso Invernal',
            start: '2024-07-15',
            end: '2024-07-26',
            description: 'Período de receso de invierno - No hay clases'
        },
        {
            title: 'Acto Escolar',
            start: '2024-07-10T16:00:00',
            description: 'Acto en conmemoración al día de la Independencia'
        },
        {
            title: 'Día del Maestro',
            start: '2024-09-11',
            description: 'En conmemoración a Domingo Faustino Sarmiento'
        },
        {
            title: 'Día del Estudiante Secundario',
            start: '2024-09-16',
            description: 'En conmemoración a la noche de los lápices'
        },
        {
            title: 'Día de la Primavera',
            start: '2024-09-21',
            description: 'Cambio en la estación del año'
        },
    ],
    eventDidMount: function (info) {
        tippy(info.el, {
            content: info.event.extendedProps.description,
            placement: 'top',
            theme: 'light'
        });
    }
});



document.addEventListener('DOMContentLoaded', function () {
    calendar.render();
});

botonMes.forEach((cadaBoton, i) => {
    botonMes[i].addEventListener('click', () => {
        let month = String(i+1);
        let year = new Date().getFullYear();
        let date = new Date(year, month, 1);
        calendar.gotoDate(date);
    })
})