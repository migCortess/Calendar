import { Calendar} from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'

import { NavBar, CalendarEvent, CalendarModal } from "../"
import { localizer, getMessagesES } from '../../helpers'
import { useState } from 'react'
import { useUiStore, useCalendarStore } from '../../hooks'


export const CalendarPage = () => {

  const {openDateModal} = useUiStore();
  const {events, setActiveEvent} = useCalendarStore();

  const [lastView, setLastView] = useState(localStorage.getItem('lastView')  || 'week')

  const eventStyleGetter = (event, start, end, isSelected) => {

    const style = {
      backgroundColor: "#FFF",
      borderRadius: '0px',
      opacity: 0.8,
      color: "#420A61",
      boxShadow : "1px 3px 5px #bfbfbf",
      textAlign : "center"
    }
    return {style}
  }

  const onDoubleClick = (event) => {
    console.log({DoubleClick: event})
    openDateModal();
  }

  const onSelect = (event) => {
    console.log({Click: event})
    setActiveEvent(event)
  }

  const onViewChanged = (event) => {
    localStorage.setItem('lastView',event)
    setLastView(event)
  }
  return (
    <>
    <NavBar/>
    <Calendar
    culture='es'
      localizer={localizer}
      events={events}
      defaultView = {lastView}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 'calc(100vh - 80px)' }}
      messages = {getMessagesES('es')}
      eventPropGetter = {eventStyleGetter}
      components = {
        {event: CalendarEvent}
      }
      onDoubleClickEvent = {onDoubleClick}
      onSelectEvent = {onSelect}
      onView = {onViewChanged}
    />
    <CalendarModal/>
    </>
  )
}
