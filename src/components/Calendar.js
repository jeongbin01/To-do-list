import React, { useState } from 'react';
import {
  format,
  startOfMonth,
  endOfMonth,
  addMonths,
  subMonths,
  eachDayOfInterval,
  getDay,
  isSameDay,
} from 'date-fns';

const Calendar = ({ setSelectedDate, selectedDate }) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const firstDay = startOfMonth(currentDate);
  const lastDay = endOfMonth(currentDate);
  const days = eachDayOfInterval({ start: firstDay, end: lastDay });
  const leadingDays = Array(getDay(firstDay)).fill(null);

  const handlePrevMonth = () => setCurrentDate(subMonths(currentDate, 1));
  const handleNextMonth = () => setCurrentDate(addMonths(currentDate, 1));

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <button onClick={handlePrevMonth}>&lt; 이전</button>
        <h2>{format(currentDate, 'yyyy년 MM월')}</h2>
        <button onClick={handleNextMonth}>다음 &gt;</button>
      </div>
      <div className="calendar-grid">
        {['일', '월', '화', '수', '목', '금', '토'].map((day) => (
          <div key={day} className="calendar-day-header">{day}</div>
        ))}
        {leadingDays.map((_, index) => (
          <div key={`empty-${index}`} className="calendar-day empty"></div>
        ))}
        {days.map((day) => {
          const formattedDate = format(day, 'yyyy-MM-dd');
          return (
            <div
              key={formattedDate}
              className={`calendar-day ${
                isSameDay(day, new Date()) ? 'today' : ''
              } ${formattedDate === selectedDate ? 'selected' : ''}`}
              onClick={() => setSelectedDate(formattedDate)}
            >
              {format(day, 'd')}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;