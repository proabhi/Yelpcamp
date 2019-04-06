var express    = require('express'),
    app        = express(),
    bodyParser = require('body-parser')
var campground=[
  {name:"manali",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqFPxuA8jaGMqJ8B3F79wL34XHWN7BnUYuBBO8aJbaExxo3mvT"},
  {name:"silent_river",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmrsn2impJUY3zlXbbwNgBNfBWQjuEsZ7oq6scgxhyakxrfQHD"},
  {name:"river",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqFPxuA8jaGMqJ8B3F79wL34XHWN7BnUYuBBO8aJbaExxo3mvT"},
  {name:"forest_hood",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlyMbtbMYmKqJKl4v5HjF9s9FIqe0bstlcSULbMMC5t8YDocJygA"}
];

app.set('view engine','ejs')

app.use(bodyParser.urlencoded({ extended: false }))

//Home page
app.get('/', function (req, res) {
  res.render('home');
})

//Add  page
app.get('/add',(req, res)=>{
    res.render('add');
})

//campground page
app.get('/campgrounds',(req, res)=>{
    res.render('campgrounds',{campground:campground})
})

app.post('/create',(req, res)=>{
    let new_campground={
        name:req.body.name,
        image:req.body.image
    }
    campground.push(new_campground);
    res.redirect('/campgrounds')    
})





 
app.listen(3000,()=>{console.log('running on port 3000')} )