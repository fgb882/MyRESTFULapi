# MyRESTFULapi
A RESTful API made on Express and MongoDB

To create new files you use a post request on "localhost:3000/posts"
{
"title": "desired title"
"description": "desired description"
}

To see all posts you use a get request on "localhost:3000/posts" and you'll see all posts with the id for the post that looks like it:

        {
        "_id": "60e1e03171766b23cc30356b",
        "title": "test post",
        "description": "description",
        "date": "2021-07-04T16:22:09.909Z",
        "__v": 0}

To see a specific post you send a get request on "localhost:3000/postId", you'll get the postId from the get request on "localhost:3000" and use it to search for the specific post

To delete a post you send a delete request on "localhost:3000/postId", the command will delete the specific post.

To update a post you send a patch request on "localhost:3000/postId" with the desired change on post like 

         {
         "title": "this is a test title"
         }
this will change the title of the post
