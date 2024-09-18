from random import randrange
from fastapi import FastAPI, HTTPException, Response, status
from pydantic import BaseModel

# models
class Post(BaseModel):
    title: str
    content: str
    published: bool = True
    rating: int = None    
    
# temp data & fcns
my_posts = [
    {
        "title": "ok1",
        "content": "ok1",
        "id": 1
    },
    {
        "title": "ok2",
        "content": "ok2",
        "id": 2
    }, 
]

def find_post(id):
    for post in my_posts:
        if post["id"] == id:
            return post
        
def find_post_idx(id):
    for idx, post in enumerate(my_posts):
        if post["id"] == id:
            return idx


# app
app = FastAPI()

@app.get("/")
def read_root():
    return {"Hello!!!": "World:)))"}

@app.get("/posts")
def get_posts():
    return {
        "data": my_posts
    }
    
@app.get("/posts/{id}")
def get_post(id: int, response: Response):
    post = find_post(id)
    
    if not post:
        raise HTTPException(
            status_code = status.HTTP_404_NOT_FOUND,
            detail = f"post with id: {id} was not found"
        )
        # response.status_code = status.HTTP_404_NOT_FOUND
        # return {
        #     "message": f"post with id: {id} was not found"
        # }
    
    return {
        "post_details": post
    }

@app.post("/posts", status_code = status.HTTP_201_CREATED)
def create_post(post: Post):  
    post_dict = post.model_dump()
    post_dict["id"] = randrange(1, 1000000)
    
    # append to our makeshift my_posts
    my_posts.append(post_dict)
    
    return {
        "data": post_dict
    }
    
@app.delete("/posts/{id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_post(id: int):
    # deleting post
    # find the idx in the my_posts array that has the id
    # my_posts.pop(idx)
    idx = find_post_idx(id)
    
    if not idx:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"post with id {id} doesn't exist"
        )
    
    my_posts.pop(idx)
        
    # return {
    #     "message": f"your post with id {id} was successfully deleted"
    # }
    return Response(
        status_code=status.HTTP_204_NO_CONTENT
    )
    

@app.put("/posts/{id}")
def update_post(id: int, post: Post):
    # must find idx of post in the dict first
    idx = find_post_idx(id)
    
    if not idx:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"post with id {id} doesn't exist"
        )
    
    post_dict = post.model_dump()
    post_dict["id"] = id # add id to post
    my_posts[idx] = post_dict # update the post in the "db"
    
    return {
        "data": post_dict
    }