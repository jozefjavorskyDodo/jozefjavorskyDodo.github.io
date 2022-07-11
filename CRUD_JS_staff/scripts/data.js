"use strict";

export const employees_0 = [];

export const departments_positions = {
    Administrative: [
        "Administrative Assistant",
        "Administrative Coordinator",
        "Secretary"
    ],
    Business: [
        "Business Development Coordinator",
        "Business Reporter",
        "Actuary"
    ],
    Finance: [
        "Benefits Administrator",
        "Accountant",
        "Auditor"
    ],
    Leadership: [
        "Head of Operations",
        "Team Leader",
        "Officer"
    ],
    Legal: [
        "General Counsel",
        "Arbitrator",
        "Case Manager"
    ]
};

export const employees_15 = [
    {
        firstName: "Selena",
        lastName: "Davidson",
        gender: 'f',
        department: String(Object.keys(departments_positions)[0]),
        position: String(departments_positions[String(Object.keys(departments_positions)[0])][0]),
        eMail: function () {
            return String(this.firstName.toLowerCase() + '.' + this.lastName.toLowerCase() + "@ETL.com");
        },
        employeeID: "36638899",
        startDate: "08-10-2010",
        endDate: "07-14-2023",
        salary: Number(2976)
    },
    {
        firstName: "Shana",
        lastName: "Britt",
        gender: "na",
        department: String(Object.keys(departments_positions)[1]),
        position: String(departments_positions[String(Object.keys(departments_positions)[1])][0]),
        eMail: function () {
            return String(this.firstName.toLowerCase() + '.' + this.lastName.toLowerCase() + "@ETL.com");
        },
        employeeID: "49707885",
        startDate: "05-27-2019",
        endDate: '',
        salary: Number(3406)
    },
    {
        firstName: "Britney",
        lastName: "Padilla",
        gender: 'f',
        department: String(Object.keys(departments_positions)[2]),
        position: String(departments_positions[String(Object.keys(departments_positions)[2])][0]),
        eMail: function () {
            return String(this.firstName.toLowerCase() + '.' + this.lastName.toLowerCase() + "@ETL.com");
        },
        employeeID: "88474609",
        startDate: "01-11-2016",
        endDate: "02-15-2019",
        salary: Number(4895)
    },
    {
        firstName: "Arturo",
        lastName: "Preston",
        gender: "na",
        department: String(Object.keys(departments_positions)[3]),
        position: String(departments_positions[String(Object.keys(departments_positions)[3])][0]),
        eMail: function () {
            return String(this.firstName.toLowerCase() + '.' + this.lastName.toLowerCase() + "@ETL.com");
        },
        employeeID: "32346761",
        startDate: "08-19-2021",
        endDate: '',
        salary: Number(4651)
    },
    {
        firstName: "Harlan",
        lastName: "Ross",
        gender: "na",
        department: String(Object.keys(departments_positions)[4]),
        position: String(departments_positions[String(Object.keys(departments_positions)[4])][0]),
        eMail: function () {
            return String(this.firstName.toLowerCase() + '.' + this.lastName.toLowerCase() + "@ETL.com");
        },
        employeeID: "45891588",
        startDate: "09-06-2020",
        endDate: "10-02-2030",
        salary: Number(3576)
    },
    {
        firstName: "Andres",
        lastName: "Jordan",
        gender: "na",
        department: String(Object.keys(departments_positions)[0]),
        position: String(departments_positions[String(Object.keys(departments_positions)[0])][1]),
        eMail: function () {
            return String(this.firstName.toLowerCase() + '.' + this.lastName.toLowerCase() + "@ETL.com");
        },
        employeeID: "87298855",
        startDate: "01-08-2014",
        endDate: "09-01-2025",
        salary: Number(2147)
    },
    {
        firstName: "Davian",
        lastName: "Haley",
        gender: 'm',
        department: String(Object.keys(departments_positions)[1]),
        position: String(departments_positions[String(Object.keys(departments_positions)[1])][1]),
        eMail: function () {
            return String(this.firstName.toLowerCase() + '.' + this.lastName.toLowerCase() + "@ETL.com");
        },
        employeeID: "23538638",
        startDate: "04-26-2011",
        endDate: '',
        salary: Number(4589)
    },
    {
        firstName: "Ernest",
        lastName: "Hayes",
        gender: 'm',
        department: String(Object.keys(departments_positions)[2]),
        position: String(departments_positions[String(Object.keys(departments_positions)[2])][1]),
        eMail: function () {
            return String(this.firstName.toLowerCase() + '.' + this.lastName.toLowerCase() + "@ETL.com");
        },
        employeeID: "41110754",
        startDate: "12-18-2017",
        endDate: '',
        salary: Number(3872)
    },
    {
        firstName: "Lucia",
        lastName: "Francis",
        gender: "na",
        department: String(Object.keys(departments_positions)[3]),
        position: String(departments_positions[String(Object.keys(departments_positions)[3])][2]),
        eMail: function () {
            return String(this.firstName.toLowerCase() + '.' + this.lastName.toLowerCase() + "@ETL.com");
        },
        employeeID: "11572069",
        startDate: "07-12-2015",
        endDate: '',
        salary: Number(3124)
    },
    {
        firstName: "Dixie",
        lastName: "Thatcher",
        gender: 'f',
        department: String(Object.keys(departments_positions)[4]),
        position: String(departments_positions[String(Object.keys(departments_positions)[4])][1]),
        eMail: function () {
            return String(this.firstName.toLowerCase() + '.' + this.lastName.toLowerCase() + "@ETL.com");
        },
        employeeID: "45350377",
        startDate: "05-01-2024",
        endDate: '',
        salary: Number(3201)
    },
    {
        firstName: "Marcos",
        lastName: "Khan",
        gender: 'm',
        department: String(Object.keys(departments_positions)[0]),
        position: String(departments_positions[String(Object.keys(departments_positions)[0])][2]),
        eMail: function () {
            return String(this.firstName.toLowerCase() + '.' + this.lastName.toLowerCase() + "@ETL.com");
        },
        employeeID: "57544625",
        startDate: "03-09-2010",
        endDate: '',
        salary: Number(3015)
    },
    {
        firstName: "Leona",
        lastName: "Sawyer",
        gender: 'f',
        department: String(Object.keys(departments_positions)[1]),
        position: String(departments_positions[String(Object.keys(departments_positions)[1])][2]),
        eMail: function () {
            return String(this.firstName.toLowerCase() + '.' + this.lastName.toLowerCase() + "@ETL.com");
        },
        employeeID: "10028601",
        startDate: "01-12-2020",
        endDate: '',
        salary: Number(4703)
    },
    {
        firstName: "Karissa",
        lastName: "Marsh",
        gender: 'f',
        department: String(Object.keys(departments_positions)[2]),
        position: String(departments_positions[String(Object.keys(departments_positions)[2])][2]),
        eMail: function () {
            return String(this.firstName.toLowerCase() + '.' + this.lastName.toLowerCase() + "@ETL.com");
        },
        employeeID: "45051439",
        startDate: "05-22-2024",
        endDate: '',
        salary: Number(4083)
    },
    {
        firstName: "Santiago",
        lastName: "Barry",
        gender: 'm',
        department: String(Object.keys(departments_positions)[3]),
        position: String(departments_positions[String(Object.keys(departments_positions)[3])][1]),
        eMail: function () {
            return String(this.firstName.toLowerCase() + '.' + this.lastName.toLowerCase() + "@ETL.com");
        },
        employeeID: "61483443",
        startDate: "11-16-2014",
        endDate: '',
        salary: Number(3243)
    },
    {
        firstName: "Jayson",
        lastName: "Tucker",
        gender: 'm',
        department: String(Object.keys(departments_positions)[4]),
        position: String(departments_positions[String(Object.keys(departments_positions)[4])][2]),
        eMail: function () {
            return String(this.firstName.toLowerCase() + '.' + this.lastName.toLowerCase() + "@ETL.com");
        },
        employeeID: "02596036",
        startDate: "08-27-2015",
        endDate: '',
        salary: Number(3639)
    }
];

export const employees_2 = [
    employees_15[0],
    employees_15[1]
];
