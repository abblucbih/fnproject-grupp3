const express = require('express');
const { PrismaClient } = require('@prisma/client');
var cors = require('cors')
const app = express();
app.use(cors())
const prisma = new PrismaClient();
app.use(express.json())
const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))


// Get all users
app.get("/users", async (req:any, res:any) => {
    try {
        const users = await prisma.user.findMany()

        res.json(users)
       
    } catch (error) {
        res.status(500).json({
            message: "Something went wrong",
        })
    }
})

// Check email and password authentication
app.post('/auth', async (req:any, res:any) => {
    const { email, password } = req.body
  try{
 const users = await prisma.user.findMany({
  where: {
    email: email,
    password: password
  },
  take: 1
})    
// error dosent get thrown
 if (users.length == 0) {
       throw new Error('Email or password is incorrect');
    }
const user = users[0]
res.status(200).json(user || "error occured")
} catch (error) {
    res.status(400).json({ "error": "Email or password is incorrect" });
  }

});

// Create a user checking for no duplicated emails
app.post('/users', async (req:any, res:any) => {
try {
const email = req.body.email
const existingUser = await prisma.user.findMany({
  where: {
    email: email,
  }
});
if (existingUser.length > 0) {
  return res.status(400).send({ error: 'A user with this email already exists.' });
}

const user = await prisma.user.create({
  data: {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  }
});
res.status(200).json(user)
} catch (error) {
console.error(error);
res.status(500).send({ error: 'An error occurred while creating the user.' });
}
});


// Post to the fishPost table
app.post('/fish', async (req:any, res:any) => {
 await prisma.fishPost.create({
  data: {
    title: "European Eel ",
    description: "The European eel is a migratory fish that is found in rivers and coastal waters throughout Europe and northern Africa. They are threatened by overfishing, habitat loss, and climate change.",
    path: "https://www.science.org/cms/asset/59c7981f-6975-4f1c-b9f3-e2ab34c551a2/372_1271a_f1.gif"
  }
});
console.log("Fish added")

});

// Post to the seaPost table
app.post('/sea', async (req:any, res:any) => {
 await prisma.seaPost.create({
  data: {
    title: "The canals of Africa",
    description: "The canals of Africa are in need of cleaning and til this day there are multiple organizations working on making the seas a better place",
    path: "https://lqd.imgix.net/blog-images/RwandaDirtyWater.jpg?auto=format&ixlib=react-9.0.3"
  }
})
console.log("Sea added")
});

app.get('/fish', async (req:any, res:any) => {

 const fish = await prisma.fishPost.findMany();
      res.json(fish)
});

app.get('/sea', async (req:any, res:any) => {

 const sea = await prisma.seaPost.findMany();
      res.json(sea)
});

app.get('/book', async (req:any, res:any) => {

 const sea = await prisma.bookMarked.findMany();
      res.json(sea)
});



// Get all fish post
app.post('/post/fish', async (req:any, res:any) => {
  const postId = req.body.postId
 const fish = await prisma.fishPost.findMany({
  where:{
    id: postId
  }
 });
      res.json(fish)
});

// Get all sea post
app.post('/post/sea', async (req:any, res:any) => {
const postId = req.body.postId
 const sea = await prisma.seaPost.findMany({
  where:{
    id: postId
  }
 });
      res.json(sea)
});

// Add post to bookmarked
app.post('/book', async (req:any, res:any) => {
  const postId = req.body.postId
  const userId = req.body.userId
  const table = req.body.table
  const existingBook = await prisma.bookMarked.findMany({
  where: {
    postId:postId,
    userId:userId
  }
});
if (existingBook.length > 0) {
  return res.status(400).json({ 'error': 'A user with this email already exists.' });
}
 await prisma.bookMarked.create({
  data: {
    postId: postId,
    userId: userId,
    table: table
  }
});


});

app.post('/bookM', async (req:any, res:any) => {
 const userId = req.body.userId
 const book = await prisma.bookMarked.findMany(
  {
  where: {
    userId: userId
  }
}
 );
      res.json(book)
});

app.post('/delBook', async (req:any, res:any) => {
 const postId = req.body.postId
  await prisma.bookMarked.deleteMany(
  {
  where: {
    id: postId
  }
}
 );
      res.status(200).json("Post deleted")
});
// Delete all or specific users
app.get("/del", async (req:any, res:any) => {
    await prisma.user.deleteMany({
  })
 

}); 
