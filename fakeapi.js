doctors = ['d1', 'd2', 'd3']

//index of inner array stand in for days of the week starting with 0 for Sunday and up to 6 for Saturday

schedule = [
  [
    {
      doctor: 'd1',
      appointments: [
        {
          timeslot: 9,
          patient: 'p1'
        },
        {
          timeslot: 10,
          patient: 'p2'
        },
        {
          timeslot: 11,
          patient: 'p4'
        },
        {
          timeslot: 12,
          patient: ''
        },
        {
          timeslot: 13,
          patient: ''
        },
        {
          timeslot: 14,
          patient: 'p7'
        },
        {
          timeslot: 15,
          patient: 'p10'
        },
        {
          timeslot: 16,
          patient: ''
        },
        {
          timeslot: 17,
          patient: 'p12'
        }
      ]
    },
    {
      doctor: 'd2',
      appointments: [
        {
          timeslot: 9,
          patient: 'p3'
        },
        {
          timeslot: 10,
          patient: 'p5'
        },
        {
          timeslot: 11,
          patient: ''
        },
        {
          timeslot: 12,
          patient: 'p6'
        },
        {
          timeslot: 13,
          patient: 'p8'
        },
        {
          timeslot: 14,
          patient: 'p9'
        },
        {
          timeslot: 15,
          patient: ''
        },
        {
          timeslot: 16,
          patient: ''
        },
        {
          timeslot: 17,
          patient: 'p11'
        }
      ]
    },
    {
      doctor: 'd3',
      appointments: [
        {
          timeslot: 9,
          patient: 'p25'
        },
        {
          timeslot: 10,
          patient: 'p26'
        },
        {
          timeslot: 11,
          patient: 'p27'
        },
        {
          timeslot: 12,
          patient: 'p28'
        },
        {
          timeslot: 13,
          patient: 'p29'
        },
        {
          timeslot: 14,
          patient: 'p30'
        },
        {
          timeslot: 15,
          patient: 'p31'
        },
        {
          timeslot: 16,
          patient: 'p32'
        },
        {
          timeslot: 17,
          patient: 'p33'
        }
      ]
    }
  ],
  [
    {
      doctor: 'd1',
      appointments: [
        {
          timeslot: 9,
          patient: 'p13'
        },
        {
          timeslot: 10,
          patient: 'p14'
        },
        {
          timeslot: 11,
          patient: ''
        },
        {
          timeslot: 12,
          patient: 'p15'
        },
        {
          timeslot: 13,
          patient: ''
        },
        {
          timeslot: 14,
          patient: 'p19'
        },
        {
          timeslot: 15,
          patient: ''
        },
        {
          timeslot: 16,
          patient: 'p21'
        },
        {
          timeslot: 17,
          patient: ''
        }
      ]
    },
    {
      doctor: 'd2',
      appointments: [
        {
          timeslot: 9,
          patient: 'p16'
        },
        {
          timeslot: 10,
          patient: ''
        },
        {
          timeslot: 11,
          patient: 'p17'
        },
        {
          timeslot: 12,
          patient: 'p18'
        },
        {
          timeslot: 13,
          patient: 'p20'
        },
        {
          timeslot: 14,
          patient: ''
        },
        {
          timeslot: 15,
          patient: 'p22'
        },
        {
          timeslot: 16,
          patient: 'p23'
        },
        {
          timeslot: 17,
          patient: 'p24'
        }
      ]
    }
  ],
  [
    {
      doctor: 'd1',
      appointments: [
        {
          timeslot: 9,
          patient: 'p34'
        },
        {
          timeslot: 10,
          patient: 'p35'
        },
        {
          timeslot: 11,
          patient: 'p36'
        },
        {
          timeslot: 12,
          patient: 'p37'
        },
        {
          timeslot: 13,
          patient: 'p38'
        },
        {
          timeslot: 14,
          patient: 'p39'
        },
        {
          timeslot: 15,
          patient: 'p40'
        },
        {
          timeslot: 16,
          patient: 'p41'
        },
        {
          timeslot: 17,
          patient: 'p42'
        }
      ]
    },
    {
      doctor: 'd2',
      appointments: [
        {
          timeslot: 9,
          patient: 'p43'
        },
        {
          timeslot: 10,
          patient: 'p44'
        },
        {
          timeslot: 11,
          patient: 'p45'
        },
        {
          timeslot: 12,
          patient: 'p46'
        },
        {
          timeslot: 13,
          patient: 'p47'
        },
        {
          timeslot: 14,
          patient: 'p48'
        },
        {
          timeslot: 15,
          patient: 'p49'
        },
        {
          timeslot: 16,
          patient: 'p50'
        },
        {
          timeslot: 17,
          patient: 'p51'
        }
      ]
    },
    {
      doctor: 'd3',
      appointments: [
        {
          timeslot: 9,
          patient: 'p52'
        },
        {
          timeslot: 10,
          patient: 'p53'
        },
        {
          timeslot: 11,
          patient: 'p54'
        },
        {
          timeslot: 12,
          patient: 'p55'
        },
        {
          timeslot: 13,
          patient: 'p56'
        },
        {
          timeslot: 14,
          patient: 'p57'
        },
        {
          timeslot: 15,
          patient: 'p58'
        },
        {
          timeslot: 16,
          patient: 'p59'
        },
        {
          timeslot: 17,
          patient: 'p60'
        }
      ]
    }
  ]
]

// expected output: [{doctor: 'd1', patient: 'p1', timeslot: 9}, ...]
function getAppointments(date) {
  const appointmentList = [];
  try {
    const daySchedule = schedule[date];
    let i = 0;
    while (i < doctors.length) {
      let doctor;
      let appointments;

      const scheduleIndex = daySchedule.map(itinerary => itinerary.doctor).indexOf(doctors[i]);
      const drItinerary = daySchedule[scheduleIndex];
      if(drItinerary) {
        ({ doctor, appointments } = drItinerary);

        for (let i = 0; i < appointments.length; i++) {
          if (appointments[i].patient !== '') {
            appointments[i].doctor = doctor;
            appointmentList.push(appointments[i]);
          };
        };
      };

      i++;
    };

    return appointmentList;
  }catch(err) {
    console.log(err);
  };
}

console.log(getAppointments(1))


function makeAppointment(date, patient, doctor=null, timeslot=null) {
  day = {
    0: 'Sunday',
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday'
  };
  time = {
    9: '9:00 AM',
    10: '10:00 AM',
    11: '11:00 AM',
    12: '12:00 PM',
    13: '1:00 PM',
    14: '2:00 PM',
    15: '3:00 PM',
    16: '4:00 PM',
    17: '5:00 PM'
  }
  let appointmentList = [];
  let daySchedule = schedule[date] ? schedule[date] : [];
  let idx;
  // schedule[date] = [{doctor: 'd1', appointments: [{timeslot: 9, patient: 'p1'}, ...],{...}}]
  try {
    i = 0;
    const visitedDoctors = [...doctors]
    while (i < daySchedule.length) {
      const drSchedule = daySchedule[i].appointments.map(appointment => {
        return {...appointment};
      })
      const currentDoctor = daySchedule[i].doctor;
      visitedDoctors.splice(visitedDoctors.indexOf(currentDoctor), 1);

      const appointments = drSchedule.filter(appointment => appointment.patient === '')
      appointmentList.push(...appointments.map(appointment => {
        newObj = {...appointment}
        newObj.doctor = currentDoctor;
        return newObj;
      }));

      i++
    }

    while(visitedDoctors.length > 0) {
      const currentDoctor = visitedDoctors.shift()
      daySchedule.push(
        {
          doctor: currentDoctor,
          appointments: [
            {
              timeslot: 9,
              patient: ''
            },
            {
              timeslot: 10,
              patient: ''
            },
            {
              timeslot: 11,
              patient: ''
            },
            {
              timeslot: 12,
              patient: ''
            },
            {
              timeslot: 13,
              patient: ''
            },
            {
              timeslot: 14,
              patient: ''
            },
            {
              timeslot: 15,
              patient: ''
            },
            {
              timeslot: 16,
              patient: ''
            },
            {
              timeslot: 17,
              patient: ''
            }
          ]
        }
      );
      appointments = [
        { timeslot: 9, patient: '', doctor: currentDoctor},
        { timeslot: 10, patient: '', doctor: currentDoctor },
        { timeslot: 11, patient: '', doctor: currentDoctor },
        { timeslot: 12, patient: '', doctor: currentDoctor },
        { timeslot: 13, patient: '', doctor: currentDoctor },
        { timeslot: 14, patient: '', doctor: currentDoctor },
        { timeslot: 15, patient: '', doctor: currentDoctor },
        { timeslot: 16, patient: '', doctor: currentDoctor },
        { timeslot: 17, patient: '', doctor: currentDoctor}
      ]
      appointmentList.push(...appointments);
    }


    if(!doctor && !timeslot) {

      if(appointmentList.length > 0) {
        return {message: 'These are the available appointment openings for ' + day[date] + ', please select a doctor and a timeslot:', appointmentList};
      }else {
        return {message: 'There are no available openings for ' + day[date] + '. Please choose a different date'};
      }
    } else if(doctor && !timeslot) {
      appointmentList = appointmentList.filter(appointment => appointment.doctor === doctor);

      if(appointmentList.length > 0) {
        return {message: 'Dr. ' + doctor + ' has the following openings for ' + day[date] + ', please select a timeslot:',
        appointmentList};
      } else {
        return {message:'Dr. ' + doctor + ' does not have any openings for ' + day[date] + ', please select another doctor or choose a different date'}
      }

    } else {
      idx = daySchedule.map(itinerary => itinerary.doctor).indexOf(doctor);
      appointmentList = appointmentList.filter(appointment =>
        appointment.doctor === doctor && appointment.timeslot === timeslot)
      if(appointmentList.length === 1) {
        daySchedule[idx].appointments = daySchedule[idx].appointments.filter(appointment => appointment.timeslot !== timeslot)
        daySchedule[idx].appointments.push({timeslot, patient})
        return {message: 'Appointment created for ' + patient + ' on ' + day[date] + ' with Dr. ' + doctor + ' at ' + time[timeslot] + '.'}
      }else{
        return {message: 'Dr. ' + doctor + ' does not have an opening on ' + day[date] + ' at ' + time[timeslot] + '. Please make another selection.'}
      }
    }
  }catch(err) {
    console.log(err)
  }

}

console.log(`example of no doctor or time selected when there are openings, but one doc fully booked`, makeAppointment(0, 'Carlos Rodriguez'))
console.log(`-----`)
console.log(`example of no doctor or time selected when there are openings, but one doc is completely open`, makeAppointment(1, 'Carlos Rodriguez'))
console.log(`-----`)
console.log(`example of no doctor or time selected when there are no openings`, makeAppointment(2, 'Carlos Rodriguez'))
console.log(`-----`)
console.log(`example of no doctor or time selected when the day is completely open`, makeAppointment(3, 'Carlos Rodriguez'))
console.log(`-----`)
console.log(`example of a call with a doctor but no selected time when there are openings`, makeAppointment(1, 'Carlos Rodriguez', 'd1'))
console.log(`-----`)
console.log(`example of a call with a doctor but no selected time when there are no openings available for that doctor`, makeAppointment(0, 'Carlos Rodriguez', 'd3'))
console.log(`-----`)
console.log(`example of a call with a doctor and time when that appointment is not available`, makeAppointment(0, 'Carlos Rodriguez', 'd1', 9))
console.log(`-----`)
console.log(`example of a call with a doctor and time when that appointment is available`, makeAppointment(0, 'Carlos Rodriguez', 'd1', 12))

function deleteAppointment(date, doctor, timeslot) {
  day = {
    0: 'Sunday',
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday'
  };
  time = {
    9: '9:00 AM',
    10: '10:00 AM',
    11: '11:00 AM',
    12: '12:00 PM',
    13: '1:00 PM',
    14: '2:00 PM',
    15: '3:00 PM',
    16: '4:00 PM',
    17: '5:00 PM'
  }

  const daySchedule = schedule[date] ? schedule[date] : [];
  let idx = daySchedule.map(itinerary => itinerary.doctor).indexOf(doctor);

  daySchedule[idx].appointments = daySchedule[idx].appointments.filter(appointment => appointment.timeslot !== timeslot)
  daySchedule[idx].appointments.push({ timeslot, patient: '' })

  return {message: 'Your appointment on ' + day[date] + ' at ' + time[timeslot] + ' with Dr. ' + doctor + ' has been cancelled.'}
}

console.log(`example of deleting an appointment`, deleteAppointment(0, 'd1', 12))
