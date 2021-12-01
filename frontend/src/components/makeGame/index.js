import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { makeGame } from "../../store/games";
import { getCategories } from "../../store/categories";
import "./makeGame.css";

function MakeGamePage() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const genres = useSelector((state) => {
    return state?.genres;
  });
  const genresList = genres?.list;

  const [title, setTitle] = useState("");
  const [genre1, setGenre1] = useState(1);
  const [genre2, setGenre2] = useState(1);
  const [genre3, setGenre3] = useState(1);
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    return dispatch(
      makeGame({ title, genre1, genre2, genre3, url, description })
  )};

  if (!genresList) return null;
  return (
    <form onSubmit={handleSubmit} className="gameForm">
      <label>
        Title
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </label>
      <label>
        Genre 1
        <select onChange={(e) => setGenre1(e.target.value)}>
          {genresList.map((genre) => (
            <option value={genre.id}>{genre.genre}</option>
          ))}
        </select>
      </label>
      <label>
        Genre 2
        <select onChange={(e) => setGenre2(e.target.value)}>
          {genresList.map((genre) => (
            <option value={genre.id}>{genre.genre}</option>
          ))}
        </select>
      </label>
      <label>
        Genre 3
        <select onChange={(e) => setGenre3(e.target.value)}>
          {genresList.map((genre) => (
            <option value={genre.id}>{genre.genre}</option>
          ))}
        </select>
      </label>
      <label>
        img Url
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
        />
      </label>
      <label>
        desc:
        <textarea onChange={(e) => setDescription(e.target.value)}></textarea>
      </label>
      <button type="submit">Sign Up</button>
    </form>
  )

}

export default MakeGamePage;
