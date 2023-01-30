

import Article from "./Article";
import blogData from "../data/blog";
let posts = blogData.posts;
console.log(posts);
let articles = posts.map((article) => {
  return (
    <Article
      key={article.id}
      title={article.title}
      date={article.date}
      preview={article.preview}
    />
  );
});
function ArticleList() {
  return <main>{/* return an array of article components */ articles}</main>;
}

export default ArticleList;
