import "./styles.css";
import { PostList } from "./redux/post/PostList";
import AddPostForm from "../src/redux/post/AddPostForm";
import SinglePostPage from "./redux/post/SinglePostPage";
import Layout from "./components/Layout";
import EditPostForm from "./redux/post/EditPostForm";
import { Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<PostList />} />

        <Route path="post">
          <Route index element={<AddPostForm />} />
          <Route path=":postId" element={<SinglePostPage />} />
          <Route path="edit/:postId" element={<EditPostForm />} />
        </Route>
      </Route>
    </Routes>
  );
}
