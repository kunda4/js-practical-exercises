/**
1. Imagine you are developing a real-time news application, and you need to fetch posts from three different sources to provide users with the latest updates. 

The API endpoints for getting posts are:

- `https://dummyjson.com/posts`
- `https://this-may-not-exist.com/posts`
- `https://jsonplaceholder.typicode.com/posts`

To ensure a seamless user experience, you are supposed to create a function called `getFastPosts` that fetches posts from these endpoints simultaneously (concurrently) and only presents data from the source that responds the quickest, while ignoring slower or potentially unreliable sources.  

 
Example of how the function should be used

// getFastPosts() code here...

getFastPosts().then((posts) => {
	console.log(posts)
})
 */

// async function fetchPosts(url) {
//   try {
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error(`Failed to fetch data in ${url}`);
//     }
//     return await response.json();
//   } catch (error) {
//     throw new Error(`Failed to fetch data in ${url}: ${error.message}`);
//   }
// }

// async function fetchFastPost() {
//   const urls = [
//     "https://dummyjson.com/posts",
//     "https://this-may-not-exist.com/posts",
//     "https://jsonplaceholder.typicode.com/posts",
//   ];
//   const promises = urls.map((url) => fetchPosts(url));
//   try {
//     const fastestPost = await Promise.race(promises);
//     console.log(
//       `fastest Response from: ${urls[promises.indexOf(fastestPost)]}`
//     );
//     return fastestPost;
//   } catch (error) {
//     console.log(`All request failed: ${error.message}`);
//     throw error;
//   }
// }
// fetchFastPost()
//   .then((data) => {
//     console.log("Fastest response data:", data);
//   })
//   .catch((error) => {
//     console.error("Error:", error.message);
//   });

// other ways

let arr = [
  "https://dummyjson.com/posts",
  "https://this-may-not-exist.com/posts",
  "https://jsonplaceholder.typicode.com/posts",
];

function getFastPost() {
  return Promise.race(
    arr.map((url) => {
      return new Promise((resolve) => {
        fetch(url).then((res) => resolve(res.json()));
      });
    })
  );
}
getFastPost().then((res) => {
  console.log(res);
});
