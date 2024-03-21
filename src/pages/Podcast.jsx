import React from "react";
import Header from "../components/Header";
import { useSelector, useDispatch } from "react-redux";
import believer from "../assets/songs/believer.mp3";
import carnival from "../assets/songs/carnival.mp3";
import despacito from "../assets/songs/despacito.mp3";
import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/img3.jpg";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { useState, useRef, useEffect } from "react";
import { formatNumber } from "../utils/conversion";
import { changeSnackBarState } from "../slices/commonSlice";
import SnackBar from "../components/SnackBar";

const Podcast = () => {
  // variables to control functions of audio player
  const player = useRef();
  const disptach = useDispatch();
  let [playerPaused, setPlayerPaused] = useState(false);
  // to show lyrics
  let [showLyrics, setShowLyrics] = useState(false);
  const recommendations = [
    {
      title: "How to face big decisions 1",
      artist: "TOM HEART 1",
      duration: " 1hr 11 min",
      thumbnail: img1,
      audio: despacito,
      category: "Exclusive",
      views: 787866,
      likes: 9882198,
      tags: ["business", "knowledge", "experience"],
      type: "playlist",
      about:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Reiciendis illum cum est explicabo voluptatem! Fuga facilis, hic sapiente suscipit praesentium architecto quo error, voluptate ducimus deserunt similique dolore iste expedita.",
      lyrics:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.",
    },
    {
      title: "How to face big decisions 2",
      artist: "TOM HEART 2",
      duration: " 1hr 12 min",
      thumbnail: img2,
      audio: believer,
      category: "Exclusive",
      views: 787866,
      likes: 9882198,
      tags: ["business", "knowledge", "experience"],
      type: "single",
      about:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Reiciendis illum cum est explicabo voluptatem! Fuga facilis, hic sapiente suscipit praesentium architecto quo error, voluptate ducimus deserunt similique dolore iste expedita.",
      lyrics:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.",
    },
    {
      title: "How to face big decisions 3",
      artist: "TOM HEART 3",
      duration: " 1hr 13 min",
      thumbnail: img3,
      audio: carnival,
      category: "News & Politics",
      views: 787866,
      likes: 9882198,
      tags: ["business", "knowledge", "experience"],
      type: "playlist",
      about:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Reiciendis illum cum est explicabo voluptatem! Fuga facilis, hic sapiente suscipit praesentium architecto quo error, voluptate ducimus deserunt similique dolore iste expedita.",
      lyrics:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.",
    },
    {
      title: "How to face big decisions 4",
      artist: "TOM HEART 4",
      duration: " 1hr 14 min",
      thumbnail: img1,
      audio: despacito,
      category: "Music",
      views: 787866,
      likes: 9882198,
      tags: ["business", "knowledge", "experience"],
      type: "playlist",
      about:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Reiciendis illum cum est explicabo voluptatem! Fuga facilis, hic sapiente suscipit praesentium architecto quo error, voluptate ducimus deserunt similique dolore iste expedita.",
      lyrics:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.",
    },
    {
      title: "How to face big decisions 5",
      artist: "TOM HEART 5",
      duration: " 1hr 15 min",
      thumbnail: img2,
      audio: believer,
      category: "other",
      views: 787866,
      likes: 9882198,
      tags: ["business", "knowledge", "experience"],
      type: "single",
      about:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Reiciendis illum cum est explicabo voluptatem! Fuga facilis, hic sapiente suscipit praesentium architecto quo error, voluptate ducimus deserunt similique dolore iste expedita.",
      lyrics:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.",
    },
  ];
  const episodes = [
    {
      title: "How to face big decisions4",
      artist: "TOM HEART 1",
      duration: " 1hr 11 min",
      thumbnail: img3,
      audio: despacito,
      category: "Exclusive",
      views: 787866,
      likes: 9882198,
      tags: ["business", "knowledge", "experience"],
      type: "playlist",
      about:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Reiciendis illum cum est explicabo voluptatem! Fuga facilis, hic sapiente suscipit praesentium architecto quo error, voluptate ducimus deserunt similique dolore iste expedita.",
      lyrics:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.",
    },
    {
      title: "How to face big decisions 2",
      artist: "TOM HEART 2",
      duration: " 1hr 12 min",
      thumbnail: img2,
      audio: believer,
      category: "Exclusive",
      views: 787866,
      likes: 9882198,
      tags: ["business", "knowledge", "experience"],
      type: "single",
      about:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Reiciendis illum cum est explicabo voluptatem! Fuga facilis, hic sapiente suscipit praesentium architecto quo error, voluptate ducimus deserunt similique dolore iste expedita.",
      lyrics:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.",
    },
    {
      title: "How to face big decisions 3",
      artist: "TOM HEART 3",
      duration: " 1hr 13 min",
      thumbnail: img1,
      audio: carnival,
      category: "News & Politics",
      views: 787866,
      likes: 9882198,
      tags: ["business", "knowledge", "experience"],
      type: "playlist",
      about:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Reiciendis illum cum est explicabo voluptatem! Fuga facilis, hic sapiente suscipit praesentium architecto quo error, voluptate ducimus deserunt similique dolore iste expedita.",
      lyrics:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.",
    },
    {
      title: "How to face big decisions 4",
      artist: "TOM HEART 4",
      duration: " 1hr 14 min",
      thumbnail: img1,
      audio: despacito,
      category: "Music",
      views: 787866,
      likes: 9882198,
      tags: ["business", "knowledge", "experience"],
      type: "playlist",
      about:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Reiciendis illum cum est explicabo voluptatem! Fuga facilis, hic sapiente suscipit praesentium architecto quo error, voluptate ducimus deserunt similique dolore iste expedita.",
      lyrics:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.",
    },
    {
      title: "How to face big decisions 5",
      artist: "TOM HEART 5",
      duration: " 1hr 15 min",
      thumbnail: img2,
      audio: believer,
      category: "other",
      views: 787866,
      likes: 9882198,
      tags: ["business", "knowledge", "experience"],
      type: "single",
      about:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Reiciendis illum cum est explicabo voluptatem! Fuga facilis, hic sapiente suscipit praesentium architecto quo error, voluptate ducimus deserunt similique dolore iste expedita.",
      lyrics:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.",
    },
  ];
  const [nowPlaying, setNowPlaying] = useState({
    title: "How to face big decisions 1",
    artist: "TOM HEART 1",
    duration: " 1hr 11 min",
    thumbnail: img1,
    audio: despacito,
    category: "Exclusive",
    views: 787866,
    likes: 9882198,
    type: "playlist",
    tags: [
      "business",
      "knowledge",
      "experience",
      "business",
      "knowledge",
      "experience",
      "business",
      "knowledge",
      "experience",
    ],
    about:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit.Reiciendis illum cum est explicabo voluptatem! Fuga facilis, hic sapiente suscipit praesentium architecto quo error, voluptate ducimus deserunt similique dolore iste expedita. Lorem ipsum dolor sit, amet consectetur adipisicing elit.Reiciendis illum cum est explicabo voluptatem! Fuga facilis, hic sapiente suscipit praesentium architecto quo error, voluptate ducimus deserunt similique dolore iste expedita.Lorem ipsum dolor sit, amet consectetur adipisicing elit.Reiciendis illum cum est explicabo voluptatem! Fuga facilis, hic sapiente suscipit praesentium architecto quo error, voluptate ducimus deserunt similique dolore iste expedita.",
    lyrics:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.",
  });

  const topRecommended = {
    title: "How to face big decisions 1",
    artist: "TOM HEART 1",
    duration: " 1hr 11 min",
    thumbnail: img2,
    audio: despacito,
    category: "Exclusive",
    views: 787866,
    likes: 9882198,
    tags: ["business", "knowledge", "experience"],
    type: "single",
    about:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Reiciendis illum cum est explicabo voluptatem! Fuga facilis, hic sapiente suscipit praesentium architecto quo error, voluptate ducimus deserunt similique dolore iste expedita.Lorem ipsum dolor sit, amet consectetur adipisicing elit.Reiciendis illum cum est explicabo voluptatem! Fuga facilis, hic sapiente suscipit praesentium architecto quo error, voluptate ducimus deserunt similique dolore iste expedita.Lorem ipsum dolor sit, amet consectetur adipisicing elit.Reiciendis illum cum est explicabo voluptatem! Fuga facilis, hic sapiente suscipit praesentium architecto quo error, voluptate ducimus deserunt similique dolore iste expedita.",
    lyrics:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.",
  };

  const followerCount = 909009;
  const mode = useSelector((state) => state.common.mode);

  // function for read more
  const [showFullText, setShowFullText] = useState(false);
  const aboutShowFull = (about) => {
    return !showFullText
      ? about.split(" ").slice(0, 22).join(" ") + "..."
      : about;
  };

  // handing like and dislike buttons
  const [liked, setLiked] = useState(false);
  const handleIconClick = (iconId) => {
    const icon = document.getElementById(iconId);

    if (iconId === "like") {
      if (icon.classList.contains("ri-thumb-up-fill")) {
        setLiked(true);
      } else {
        setLiked(false);
      }
      icon.classList.toggle("ri-thumb-up-line");
      icon.classList.toggle("ri-thumb-up-fill");

      const oppositeIcon = document.getElementById("dislike");
      oppositeIcon.classList.remove("ri-thumb-down-fill");
      oppositeIcon.classList.add("ri-thumb-down-line");
    } else if (iconId === "dislike") {
      if (icon.classList.contains("ri-thumb-down-fill")) {
        setLiked(false);
      } else {
        setLiked(true);
      }
      icon.classList.toggle("ri-thumb-down-line");
      icon.classList.toggle("ri-thumb-down-fill");

      const oppositeIcon = document.getElementById("like");
      oppositeIcon.classList.remove("ri-thumb-up-fill");
      oppositeIcon.classList.add("ri-thumb-up-line");
    }
  };

  // handling share button
  const handleShare = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url);
    disptach(
      changeSnackBarState({
        message: "Copied Url",
        icon: "",
        visible: true,
      })
    );
  };
  const [following, setFollowing] = useState(false);

  return (
    <div className="flex flex-col h-full w-full sm:pr-4 transition-all duration-500">
      <style>{`
        .rhap_container {
          box-shadow: 0 0 0 0 !important;
          outline: none !important;
        }
        .rhap_progress-indicator {
          background-color: white !important;
          width: 18px !important;
          height: 18px !important;
          border: 4px solid rgb(60, 57, 57) !important;
        }
        .rhap_progress-filled {
          background-color: rgb(65, 64, 64) !important;
        }
        .rhap_time {
          font-size: 12px !important;
        }

        .rhap_main-controls-button {
          color: white !important;
          font-size: 24px !important;
        }

        .rhap_play-pause-button {
          font-size: 32px !important;
          outline:none !important;
        }

        .rhap_repeat-button {
          font-size: 20px !important;
          color: white !important;
        }

        .rhap_volume-button {
          font-size: 20px !important;
          color: white !important;
        }
        .rhap_volume-button:hover {
          color: #c3c7c9 !important;
        }

        .rhap_play-pause-button:hover {
          color: #c3c7c9 !important;
        }

        .rhap_main-controls-button:hover {
          color: #c3c7c9 !important;
        }

        .rhap_repeat-button:hover {
          color: #c3c7c9 !important;
        }
        .rhap_volume-indicator {
          background-color: white !important;
          width: 12px !important;
          height: 12px !important;
          border: 3px solid rgb(48, 46, 46);
        }
        #rhap_current-time {
          color: white !important;
          width: 2.5rem !important;
          font-size : 15px !important;
        }
        .rhap_total-time {
          color: white !important;
          font-size : 15px !important;
        }
        .rhap_container {
          background-color: transparent !important;
        }
        .animate-scrollText{
          animation:scrollText 10s linear infinite;
        }
        .animate-scrollTextY{
          animation:scrollTextY 100s linear infinite;
        }
        @keyframes scrollText{
          0%{
            transform: translateX(100%);
          }100%{
            transform: translateX(-100%);
          }
        }
        @keyframes scrollTextY{
          0%{
            transform: translateY(100%);
          }100%{
            transform: translateY(-100%);
          }
        }
        .truncate-2-lines {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .truncate-none {
          -webkit-line-clamp: unset;
          overflow: unset;
        }
        `}</style>
      <div className="w-full max-sm:px-4 transition-all duration-500">
        <Header urlName="Podcast" />
      </div>

      <div
        className={`${
          mode ? "bg-zinc-950" : "bg-gray-50"
        } flex max-lg:flex-col gap-6 mt-1 w-full h-full sm:rounded-xl  sm:px-6 sm:py-4 overflow-auto select-none transition-all duration-500`}
      >
        {/*podcast playing div */}
        <div
          className={`${
            mode ? "bg-black" : "bg-white"
          } flex flex-col w-[75%] max-lg:w-full h-fit max-sm:h-fit sm:rounded-xl sm:shadow-lg transition-all duration-500`}
        >
          <div
            className={`flex max-sm:flex-col h-[55vh] max-sm:h-[90vh] backdrop-blur-xl rounded-t-xl items-center w-full relative overflow-hidden transition-all duration-500`}
          >
            {!showLyrics && (
              <div
                className="flex flex-col justify-evenly max-sm:h-[75%] h-full w-full max-sm:px-6 items-center relative z-30 transition-all duration-500"
                onClick={() => setShowLyrics(!showLyrics)}
              >
                <img
                  className={`object-cover w-full sm:h-full rounded-t-xl max-sm:rounded-xl`}
                  src={nowPlaying.thumbnail}
                  alt=""
                ></img>
                <div
                  className={` sm:hidden flex flex-col gap-2 justify-center items-center w-[90%] transition-all duration-500`}
                >
                  <p className=" whitespace-nowrap animate-scrollText text-md ">
                    {nowPlaying.title}
                  </p>
                  <p className="text-sm">{nowPlaying.artist}</p>
                </div>
              </div>
            )}
            {showLyrics && (
              <div
                className="flex justify-center  h-[75%] p-4 sm:rounded-xl w-full max-sm:px-8 items-center relative z-30 transition-all duration-100"
                onClick={() => setShowLyrics(!showLyrics)}
              >
                <p className="sm:w-[50%] max-h-[50%] text-xl m-6 text-center animate-scrollTextY ">
                  {nowPlaying.lyrics}
                </p>
              </div>
            )}
            {/* adding a audio player component from react-h5-audio-player */}
            <div className="flex sm:absolute sm:bottom-3 w-full sm:px-3 relative z-30 transition-all duration-500">
              <div className="flex max-sm:flex-col w-full sm:backdrop-blur-3xl items-center rounded-md sm:shadow-lg max-sm:fixed">
                <AudioPlayer
                  autoPlay
                  src={nowPlaying.audio}
                  onPlay={() => {
                    setPlayerPaused(false);
                  }}
                  onPause={() => {
                    setPlayerPaused(true);
                  }}
                  showSkipControls={true}
                  ref={player}
                />
              </div>
            </div>
            <img
              className="object-cover sm:rounded-t-xl h-full w-full absolute top-0 left-0  brightness-100 z-10"
              src={nowPlaying.thumbnail}
              alt=""
            />
            <div className="h-full w-full absolute top-0 left-0 z-20 backdrop-blur-3xl transition-all duration-500"></div>
          </div>
          {/* Podcast information */}
          <div className="sm:h-full flex flex-col w-full sm:p-6 max-sm:pt-3 px-6 max-sm:px-3 sm:px-8 gap-5 transition-all duration-500">
            <div className="flex justify-between items-center transition-all duration-500">
              <div
                className="flex gap-3 justify-center items-center cursor-pointer transition-all duration-500"
                title="Artist"
              >
                <div className="flex w-10 h-10 rounded-full transition-all duration-500">
                  <img
                    className="w-full h-full rounded-full object-cover"
                    src={nowPlaying.thumbnail}
                  ></img>
                </div>
                <div className="flex flex-col justify-center">
                  <p
                    className={`${
                      mode ? "text-zinc-300 " : ""
                    } text-md font-bold transition-all duration-500`}
                  >
                    {nowPlaying.artist}
                  </p>
                  <p
                    className={`${
                      mode ? "text-zinc-400" : "text-gray-600"
                    } text-xs transition-all duration-500`}
                  >
                    {" "}
                    {formatNumber(followerCount)} Followers
                  </p>
                </div>
              </div>
              <div className="flex gap-2 w-fit">
                {following ? (
                  <div
                    className={`bg-blue-500 flex gap-2 p-1 px-3 rounded-lg text-sm text-white cursor-pointer hover:bg-blue-400 transition-all duration-500`}
                    onClick={() => {
                      setFollowing(false);
                    }}
                  >
                    <i className="ri-check-line"></i>
                    <p>Following</p>
                  </div>
                ) : (
                  <div
                    className={`bg-blue-500  flex gap-2 p-1 px-3 rounded-lg text-sm text-white cursor-pointer hover:bg-blue-400 transition-all duration-500`}
                    onClick={() => {
                      setFollowing(true);
                    }}
                  >
                    <i className="ri-user-follow-line"></i>
                    <p>Follow</p>
                  </div>
                )}

                <div
                  className="bg-green-500 flex gap-2 p-1 px-3 rounded-lg text-sm text-white cursor-pointer hover:bg-green-400 transition-all duration-500"
                  onClick={() => {
                    handleShare();
                  }}
                >
                  <i className="ri-share-forward-line"></i>
                  <p>Share</p>
                </div>
              </div>
            </div>
            <hr
              className={`${
                mode ? "border border-zinc-800" : ""
              } transition-all duration-500`}
            ></hr>
            <div className="flex flex-col transition-all duration-500">
              <div className="flex flex-wrap max-w-[90%] max-sm:w-full transition-all duration-500">
                {nowPlaying?.tags.map((item, idx) => (
                  <p
                    className={`${
                      mode ? "text-blue-400" : "text-blue-700"
                    }  text-sm max-sm:text-xs transition-all duration-500`}
                    key={idx}
                  >
                    #{item}
                    {idx !== nowPlaying?.tags.length - 1 && (
                      <span className="mr-1"> </span>
                    )}
                  </p>
                ))}
              </div>

              <div
                className={` flex max-sm:mt-2  justify-between gap-2 items-center mt-2 transition-all duration-500`}
              >
                <p
                  className={`${
                    mode ? "text-zinc-300" : "font-bold"
                  } text-lg max-sm:text-md w-[70%] break-words transition-all duration-500 `}
                >
                  {nowPlaying.title}
                </p>
                <div className="flex gap-2 items-center ">
                  <i
                    id="like"
                    className={`${
                      mode ? "text-blue-400" : "text-blue-600"
                    } ri-thumb-up-line text-2xl max-sm:text-lg  cursor-pointer transform transition-transform duration-300  hover:text-blue-500   hover:scale-125 hover:ri-thumb-up-fill `}
                    onClick={(e) => {
                      handleIconClick("like");
                    }}
                  ></i>
                  <p
                    className={`${
                      mode ? "text-blue-400" : "text-blue-600"
                    } max-sm:text-sm`}
                  >
                    {formatNumber(nowPlaying.likes)}
                  </p>
                  <p className={`${mode ? "text-zinc-200" : ""}`}>|</p>
                  <i
                    id="dislike"
                    className={`${
                      mode ? "text-zinc-200" : ""
                    } ri-thumb-down-line text-2xl max-sm:text-lg cursor-pointer hover:scale-125 transform transition-transform duration-300`}
                    onClick={(e) => {
                      handleIconClick("dislike");
                    }}
                  ></i>
                </div>
              </div>
              <div className="flex gap-2 text-xs w-fit">
                <i
                  className={`${
                    mode ? "text-zinc-200" : ""
                  } ri-eye-line transition-all duration-500`}
                ></i>{" "}
                <p
                  className={`${
                    mode ? "text-zinc-200" : ""
                  } transition-all duration-500`}
                >
                  {formatNumber(nowPlaying.views)}
                </p>
              </div>
              <p
                className={`${
                  mode ? "text-zinc-300" : ""
                } text-sm mt-2 transition-all duration-700`}
              >
                {aboutShowFull(nowPlaying.about)}
                <span
                  onClick={() => setShowFullText(!showFullText)}
                  className="w-fit text-sm cursor-pointer text-blue-500 hover:underline transition-all ml-2"
                >
                  {showFullText ? "show less" : "more"}
                </span>
              </p>

              {/* All related episodes */}
              {nowPlaying.type === "playlist" && (
                <div className="flex flex-col w-full">
                  <p className="mt-8 mb-4 font-bold ">Related Episodes</p>
                  <div className="flex max-sm:flex-col gap-8 max-sm:gap-0">
                    <div className="flex max-sm:flex-col gap-6 max-sm:gap-0 w-[90%] max-sm:w-full">
                      {episodes?.length > 0
                        ? episodes.slice(0, 3).map((item, idx) => (
                            <div className="flex flex-col w-[90%] max-sm:w-full gap-3 transition-all duration-500" key={idx}>
                              <img
                                className=" h-[65%] w-full object-cover rounded-md transition-all duration-500"
                                src={item.thumbnail}
                                alt=""
                              ></img>
                              <div className="flex w-full justify-between items-center transition-all duration-500">
                                <div className="flex flex-col  w-full px-2 gap-1 transition-all duration-500">
                                  <p
                                    className={`${
                                      mode ? "text-zinc-300" : ""
                                    } font-bold transition-all duration-500`}
                                  >
                                    {item.title}
                                  </p>
                                  <p
                                    className={`${
                                      mode ? "text-zinc-500" : "text-gray-600 "
                                    } text-xs transition-all duration-500`}
                                  >
                                    {item.artist}
                                  </p>
                                  <div
                                    className={`${
                                      mode ? "text-zinc-400 " : "text-gray-600"
                                    } flex text-xs  gap-2 transition-all duration-500`}
                                  >
                                    <i className="ri-eye-line"></i>
                                    <p>{formatNumber(item.views)}</p>
                                  </div>
                                </div>
                                <div className="flex">
                                  <i
                                    className={`${
                                      JSON.stringify(nowPlaying) ===
                                        JSON.stringify(item) && !playerPaused
                                        ? "ri-pause-circle-fill"
                                        : "ri-play-circle-fill"
                                    } ${
                                      mode
                                        ? "text-white hover:text-zinc-300"
                                        : "hover:text-gray-700"
                                    } text-3xl  hover:scale-125 transform transition-all duration-500 cursor-pointer`}
                                    onClick={() => {
                                      if (
                                        JSON.stringify(nowPlaying) ==
                                        JSON.stringify(item)
                                      ) {
                                        if (playerPaused) {
                                          player.current.audio.current.play();
                                          setPlayerPaused(false);
                                        } else {
                                          player.current.audio.current.pause();
                                          setPlayerPaused(true);
                                        }
                                      } else {
                                        setNowPlaying(item);
                                        player.current.audio.current.play();
                                        setPlayerPaused(false);
                                      }
                                    }}
                                  ></i>
                                </div>
                              </div>
                            </div>
                          ))
                        : null}
                    </div>
                    <div className="flex flex-col justify-center items-center">
                      <div className="flex flex-col justify-center items-center p-2 max-sm:px-4 rounded-lg hover:bg-gray-100">
                        <i className="ri-arrow-right-line text-xl"></i>
                        <p className="text-[10px] mt-[-5px]">See all</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div
          className={`${
            mode ? "bg-black " : "bg-white"
          } flex flex-col w-[25%] max-lg:w-full h-fit rounded-xl shadow-lg p-2 max-sm:px-0 transition-all duration-500`}
        >
          {/* Top recommendation div */}
          <div className="flex flex-col h-[40vh] w-full p-3 gap-3 transition-all duration-500">
            <p
              className={`${
                mode ? "text-zinc-300" : "font-bold"
              } transition-all duration-500 `}
            >
              Top recommendations
            </p>
            <img
              className=" h-[60%] object-cover rounded-md transition-all duration-500"
              src={topRecommended.thumbnail}
              alt=""
            ></img>
            <div className="flex w-full justify-between items-center transition-all duration-500">
              <div className="flex flex-col  w-full px-2 gap-1 transition-all duration-500">
                <p
                  className={`${
                    mode ? "text-zinc-300" : ""
                  } font-bold transition-all duration-500`}
                >
                  {topRecommended.title}
                </p>
                <p
                  className={`${
                    mode ? "text-zinc-500" : "text-gray-600 "
                  } text-xs transition-all duration-500`}
                >
                  {topRecommended.artist}
                </p>
                <div
                  className={`${
                    mode ? "text-zinc-400 " : "text-gray-600"
                  } flex text-xs  gap-2 transition-all duration-500`}
                >
                  <i className="ri-eye-line"></i>
                  <p>{formatNumber(topRecommended.views)}</p>
                </div>
              </div>
              <div className="flex">
                <i
                  className={`${
                    JSON.stringify(nowPlaying) ===
                      JSON.stringify(topRecommended) && !playerPaused
                      ? "ri-pause-circle-fill"
                      : "ri-play-circle-fill"
                  } ${
                    mode
                      ? "text-white hover:text-zinc-300"
                      : "hover:text-gray-700"
                  } text-3xl  hover:scale-125 transform transition-all duration-500 cursor-pointer`}
                  onClick={() => {
                    if (
                      JSON.stringify(nowPlaying) ==
                      JSON.stringify(topRecommended)
                    ) {
                      if (playerPaused) {
                        player.current.audio.current.play();
                        setPlayerPaused(false);
                      } else {
                        player.current.audio.current.pause();
                        setPlayerPaused(true);
                      }
                    } else {
                      setNowPlaying(topRecommended);
                      player.current.audio.current.play();
                      setPlayerPaused(false);
                    }
                  }}
                ></i>
              </div>
            </div>
          </div>

          {/* Recommendations div */}
          <div className="flex flex-col gap-1 p-4 transition-all duration-500">
            <div className="flex justify-between transition-all duration-500">
              <p className={`${mode ? "text-zinc-300" : ""}`}>
                Recommendations
              </p>
              <i
                className={`${
                  mode ? "text-zinc-300" : ""
                } ri-more-fill cursor-pointer transition-all duration-500`}
              ></i>
            </div>
            <hr
              className={`${
                mode ? " border border-zinc-900" : ""
              } transition-all duration-500`}
            ></hr>
            {/* tags for recommendation  */}
            <div className="flex gap-2 p-2 overflow-x-hidden hover:overflow-x-scroll w-full px-2 transition-all duration-500">
              {nowPlaying?.tags.map((item, idx) => (
                <p
                  className={`${
                    mode
                      ? "border-zinc-700 hover:border-zinc-400 text-zinc-400 hover:text-zinc-300"
                      : " border-gray-300 hover:border-gray-800 text-gray-700 hover:text-black"
                  } p-1 px-2 cursor-pointer border  text-xs rounded-xl transition-all duration-500 `}
                  key={idx}
                >
                  {item}
                </p>
              ))}
            </div>

            <hr
              className={`${
                mode ? " border border-zinc-900" : ""
              } transition-all duration-500`}
            ></hr>
            {/* recommended podcasts */}
            <div className="w-full h-fit flex flex-col gap-2 pt-2 justify-center items-center transition-all duration-500">
              {recommendations?.slice(0, 4).map((item, idx) => (
                <div
                  className={`${
                    mode ? "hover:bg-zinc-950" : "hover:bg-gray-50"
                  } flex w-full p-2 gap-4    rounded-md group cursor-pointer transition-all duration-500`}
                  key={idx}
                  onClick={() => {
                    setNowPlaying(item);
                    player.current.audio.current.play();
                  }}
                >
                  <div className="flex w-[30%] h-full cursor-pointer transition-all duration-500">
                    <img
                      className="w-full h-full object-cover rounded-lg transition-transform duration-300 transform group-hover:scale-125"
                      src={item.thumbnail}
                      alt=""
                    ></img>
                  </div>
                  <div className="flex flex-col gap-1 ">
                    <p
                      className={`${
                        mode ? "text-zinc-200" : ""
                      } text-xs font-bold`}
                    >
                      {item.title}
                    </p>
                    <p
                      className={`${
                        mode ? "text-zinc-500" : "text-gray-600"
                      } text-xs  `}
                    >
                      {item.artist}
                    </p>
                    <p
                      className={`${
                        mode ? "text-gray-400" : "text-gray-600"
                      } text-xs  flex gap-1`}
                    >
                      <i className="ri-eye-line"></i>
                      {formatNumber(item.views)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <SnackBar />
    </div>
  );
};

export default Podcast;
