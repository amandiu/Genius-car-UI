export const assignedJobsData = [
  {
    id: "job1",
    service: "Engine Repair",
    customer: "Rahim",
    location: "Dhanmondi",
    price: 2500,
    status: "assigned",
    mechanicId: "mech001",
    failureReason: ""
  },
  {
    id: "job2",
    service: "Oil Change",
    customer: "Karim",
    location: "Mirpur",
    price: 1200,
    status: "assigned",
    mechanicId: "mech001",
    failureReason: ""
  },
  {
    id: "job3",
    service: "Brake Service",
    customer: "Sabbir",
    location: "Uttara",
    price: 1800,
    status: "assigned",
    mechanicId: "mech001",
    failureReason: ""
  },
  {
    id: "job4",
    service: "Battery Replacement",
    customer: "Nayeem",
    location: "Bashundhara",
    price: 3000,
    status: "assigned",
    mechanicId: "mech001",
    failureReason: ""
  },
  {
    id: "job5",
    service: "AC Repair",
    customer: "Hasan",
    location: "Mohakhali",
    price: 2200,
    status: "assigned",
    mechanicId: "mech001",
    failureReason: ""
  },
  {
    id: "job6",
    service: "Suspension Check",
    customer: "Imran",
    location: "Farmgate",
    price: 2700,
    status: "assigned",
    mechanicId: "mech001",
    failureReason: ""
  },
  {
    id: "job7",
    service: "Tyre Replacement",
    customer: "Fahim",
    location: "Banani",
    price: 4000,
    status: "assigned",
    mechanicId: "mech001",
    failureReason: ""
  },
  {
    id: "job8",
    service: "Car Wash",
    customer: "Shanto",
    location: "Badda",
    price: 800,
    status: "assigned",
    mechanicId: "mech001",
    failureReason: ""
  },
  {
    id: "job9",
    service: "Gearbox Repair",
    customer: "Rakib",
    location: "Tejgaon",
    price: 6500,
    status: "assigned",
    mechanicId: "mech001",
    failureReason: ""
  },
  {
    id: "job10",
    service: "Wheel Alignment",
    customer: "Sajid",
    location: "Rampura",
    price: 1500,
    status: "assigned",
    mechanicId: "mech001",
    failureReason: ""
  },
  // 👉 duplicate pattern till 20+
  ...Array.from({ length: 12 }, (_, i) => ({
    id: `job${i + 11}`,
    service: "General Servicing",
    customer: `Customer ${i + 11}`,
    location: "Dhaka",
    price: 2000 + i * 100,
    status: "assigned",
    mechanicId: "mech001",
    failureReason: ""
  }))
];
