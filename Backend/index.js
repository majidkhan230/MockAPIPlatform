const express = require('express')
const path = require("path")
const fs =  require("fs")


require('dotenv').config()


// import { posts } from "./models/post.js";
// import { comments } from "./models/comment.js";

// configDotenv();


const app = express();

app.use(express.json())


const dataPath = path.join(__dirname,'data.json')

const data = JSON.parse(fs.readFileSync(dataPath,"utf-8"))


app.get("/", (req, res) => {
    res.status(200).send({ message: "welcome to Backend" });
  });

app.get("/posts",(req,res)=>{
  res.status(200).send(data.posts)
})

app.get("/comments",(req,res)=>{
  res.status(200).send(data.comments)
})

app.get("/albums",(req,res)=>{
  res.status(200).send(data.albums)
})

app.get("/photos",(req,res)=>{
  res.status(200).send(data.photos)
})

app.get("/users",(req,res)=>{
  res.status(200).send(data.users)
})

app.get("/todos",(req,res)=>{
  res.status(200).send(data.todos)
})


// console.log(path.join(__dirname, 'data.json'));
// console.log(fs.readFileSync(dataPath,'utf-8'))











// apis
// app.get("/", (req, res) => {
//   res.status(200).send({ message: "welcome to Backend" });
// });

// app.get("/posts", (req, res) => {
//   res.status(200).send({
//     status:"200",
//     message: "welcome to Products",
//     data: posts,
//   });
// });

// // app.get("/posts/:id/", (req, res) => {
// //   const id = req.params.id;
// //   res.status(200).send({ message: `product ${id}` });
// // });


// app.get("/posts/:id/comments", (req, res) => {
//   const id = req.params.id;

// const filterComments = comments.filter((item)=>{
//     return item.postId == id
// })

// // filtercomments
// if (filterComments.length === 0) {
//     return res.status(404).send({
//       status: "404",
//       message: `No comments found for product ${id}`,
//       comments: [],
//     });
//   }

// res.status(200).send({
//     status:"200",
//     message:`product ${id}`,
//     comments:filterComments
// })

// });

// app.get("/posts/comments",(req,res)=>{
//      const {id} = req.query;
// const filterComments = comments.filter((item)=>{
//     return item.postId == id
// })

// // filtercomments
// if (filterComments.length === 0) {
//     return res.status(404).send({
//       status: "404",
//       message: `No comments found for postId ${id}`,
//       comments: [],
//     });
//   }

// res.status(200).send({
//     status:"200",
//     message:`Comments for postId ${id}`,
//     comments:filterComments
// })
// })



const PORT = process.env.PORT;


// server
app.listen(PORT, () => {
  console.log("servers is sucessfully started");
});
