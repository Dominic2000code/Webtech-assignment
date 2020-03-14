const router = require('express').Router();

const students = [
    {
        name: "Carl Michelson",
        DOB: "12/20/2000",
        program: "BSC ICT",
        level: "200",
        image:"/images/a.jpg"
        
    },
    {
        name: "Frankenstein Volk",
        DOB: "1/20/1998",
        program: "BSC CS",
        level: "200",
        image:"/images/b.jpg"
    },
    {
        name: "Walton Wizen",
        DOB: "12/30/1990",
        program: "BSC CS",
        level: "200",
        image:"/images/c.jpg"
    },
    {
        name: "Bootstrap Bill",
        DOB: "12/10/1980",
        program: "BSC MIS",
        level: "200",
        image:"/images/d.jpg"
    },
    {
        name: "Yvette Karlson",
        DOB: "12/13/1997",
        program: "BSC ICT",
        level: "200",
        image:"/images/e.jpg"
    },
    {
        name: "Kelvin Loop",
        DOB: "12/2/1998",
        program: "BSC CS",
        level: "200",
        image:"/images/f.jpg"
    },
    {
        name: "Moldova Lope",
        DOB: "2/7/2008",
        program: "BSC MIS",
        level: "200",
        image:"/images/g.jpg"
    },
    {
        name: "Mary Volk",
        DOB: "2/2/2000",
        program: "BSC ICT",
        level: "200",
        image:"/images/h.jpg"
    },
    {
        name: "Stephanie Quacoe",
        DOB: "1/20/2001",
        program: "BSC CS",
        level: "200",
        image:"/images/i.jpg"
    },
    {
        name: "Leonidas Wolf",
        DOB: "1/25/1990",
        program: "BSC MIS",
        level: "200",
        image:"/images/m.jpg"
    },
]

router.get('/', (req, res)=>{
    res.render('home', {
        title:'Home',
        students
    })
});

router.get('/studentdetails/:id', (req, res)=>{
    const id = req.params.id;
    const student = students[id];
    res.render('studentdetails.ejs', {
        title: students[id].name,
        student
    })
});
module.exports = router;