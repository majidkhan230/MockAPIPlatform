import express from "express";
import { configDotenv } from "dotenv";
import { posts } from "./models/post.js";
import { comments } from "./models/comment.js";

configDotenv();

const app = express();

// apis
app.get("/", (req, res) => {
  res.status(200).send({ message: "welcome to Backend" });
});

app.get("/posts", (req, res) => {
  res.status(200).send({
    status:"200",
    message: "welcome to Products",
    data: posts,
  });
});

// app.get("/posts/:id/", (req, res) => {
//   const id = req.params.id;
//   res.status(200).send({ message: `product ${id}` });
// });


app.get("/posts/:id/comments", (req, res) => {
  const id = req.params.id;

const filterComments = comments.filter((item)=>{
    return item.postId == id
})

// filtercomments
if (filterComments.length === 0) {
    return res.status(404).send({
      status: "404",
      message: `No comments found for product ${id}`,
      comments: [],
    });
  }

res.status(200).send({
    status:"200",
    message:`product ${id}`,
    comments:filterComments
})

});

app.get("/posts/comments",(req,res)=>{
     const {id} = req.query;
const filterComments = comments.filter((item)=>{
    return item.postId == id
})

// filtercomments
if (filterComments.length === 0) {
    return res.status(404).send({
      status: "404",
      message: `No comments found for postId ${id}`,
      comments: [],
    });
  }

res.status(200).send({
    status:"200",
    message:`Comments for postId ${id}`,
    comments:filterComments
})
})



const PORT = process.env.PORT;


// server
app.listen(PORT, () => {
  console.log("servers is sucessfully started");
});
