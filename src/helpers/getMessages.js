export const getMessagesES = (culture) => {
    let language = {}
    if(culture === 'es'){
        language = {
            allDay: 'Todo el día',
            previous: '<',
            next: '>',
            today: 'Hoy',
            month: 'Mes',
            week: 'Semana',
            day: 'Día',
            agenda: 'Agenda',
            date: 'Fecha',
            time: 'Hora',
            event: 'Evento',
            noEventsInRange: 'No hay eventos en este rango',
            showMore: total => `+ Ver más (${total})`
    }
    }
    if(culture === 'en'){
        language = {
            allDay: 'All day',
            previous: '<',
            next: '>',
            today: 'Today',
            month: 'Month',
            week: 'Week',
            day: 'Day',
            agenda: 'Scheduler',
            date: 'Date',
            time: 'Hour',
            event: 'Event',
            noEventsInRange: 'Dont Hace Register Event of this range',
            showMore: total => `+ See more (${total})`
    }
    }

    return language;
}