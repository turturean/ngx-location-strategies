export type Post = {
  id: number,
  name: string,
  description: string
}

export const postsState: Post[] = generatePosts(50)

function generatePosts(total: number) {
  let posts: Post[] = [];

  for(let index = 0; index < total; index++) {
    posts.push({
      id: index,
      name: `post name ${index}`,
      description: `some description ${index}`
    })
  }

  return  posts
}
