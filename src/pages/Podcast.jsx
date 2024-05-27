import React, { useEffect } from "react";
import Header from "../components/Header";
import { useSelector, useDispatch } from "react-redux";
import believer from "../assets/songs/believer.mp3";
import carnival from "../assets/songs/carnival.mp3";
import despacito from "../assets/songs/despacito.mp3";
import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/img3.jpg";
import { useState} from "react";
import { formatNumber } from "../utils/conversion";
import { changeSnackBarState } from "../slices/commonSlice";
import SnackBar from "../components/SnackBar";
import PodcastPlayer from "../components/Podcast/PodcastPlayer";
import { setNowPlaying,setIsPlaying, setContextList, setCurrentIdx } from "../slices/podcastSlice";
import Comment from "../components/Comment/Comment";
import { truncateText } from "../utils/conversion";

const Podcast = ({player,
}) => {

  // variables to control functions of audio player
  const dispatch = useDispatch();
  // to show lyrics
  let [showLyrics, setShowLyrics] = useState(false);

  const nowPlaying = useSelector((state) => state.podcast.nowPlaying);
  const isPlaying = useSelector((state)=>state.podcast.isPlaying);
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
  const [disliked, setDisliked] = useState(false);

  // handling share button
  const handleShare = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url);
    dispatch(
      changeSnackBarState({
        message: "Copied to clipboard",
        icon: "ri-clipboard-line text-blue-500",
        visible: true,
      })
    );
  };
  const [following, setFollowing] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false); // to keep track of viewport and apply viewport specific styles
  const [textColor, setTextColor] = useState(""); // to create a contrasting color based on bgImage
  // handling viewport smallscreen state
  useEffect(() => {
    // Function to handle changes in screen size
    const handleResize = () => {
      // Accessing the computed styles to check if the screen is small or not
      const screenWidth = window.innerWidth;
      setIsSmallScreen(screenWidth < 768); // Example: consider 768px width as the threshold for small screens
    };

    // Initial check on mount
    handleResize();

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  // dynamic text color
  useEffect(() => {
    const image = new Image();
    image.src = nowPlaying.thumbnail;

    image.onload = () => {
      // Use canvas to get the average color of the image
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");
      context.drawImage(image, 0, 0, 1, 1);

      // Get pixel data
      const pixelData = context.getImageData(0, 0, 1, 1).data;

      // Calculate luminance using formula
      const luminance =
        (0.2126 * pixelData[0] +
          0.7152 * pixelData[1] +
          0.0722 * pixelData[2]) /
        255;

      // Set text color based on luminance
      setTextColor(luminance > 0.5 ? "gray-800" : "white");
    };
  }, [nowPlaying]);

  // useEffect(()=>{
  //   console.log(isPlaying , currentTime)
  // },[isPlaying])

  return (
    <>
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
      animation:scrollTextY 50s linear infinite;
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

    .fadeShadow::before{
        content:"";
        height:10rem;
        width:100%;
        position: absolute;
        top: 0;
        left:0%;
        z-Index:50;
        color: black;
        display: block;
        background: linear-gradient(to bottom, rgba(11, 13, 16, 1) ,rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.2),rgba(0, 0, 0, 0));

}

      .fadeShadow::after{
        content:"";
        height:15rem;
        width:100%;
        position: absolute;
        bottom: 0;
        left:0%;
        z-Index:50;
        color: black;
        display: block;
        background: linear-gradient(to top, rgba(11, 13, 16, 1) ,rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.2),rgba(0, 0, 0, 0));
        Z-Index:50;
      }
    }
    `}</style>
      <div className="flex flex-col h-full w-full sm:pr-4 transition-all duration-500">
        <div className="w-full max-sm:px-4 transition-all duration-500">
          <Header urlName="Podcast" />
        </div>

        {/* main content of body */}
        <div
          className={`${
            mode ? "bg-zinc-950" : "bg-gray-50"
          } flex max-lg:flex-col gap-6 mt-1 w-full h-full sm:rounded-xl  sm:px-6 sm:py-4 overflow-hidden overflow-y-auto select-none transition-all duration-500`}
        >
          {/*podcast playing div */}
          <div
            className={`${
              mode ? "bg-black " : "bg-white "
            } flex flex-col w-[75%] max-lg:w-full h-fit max-sm:w-full sm:rounded-xl sm:shadow-lg transition-all duration-500`}
          >
            <div
              className={`flex max-sm:flex-col h-[55vh] max-sm:h-[85vh] backdrop-blur-xl sm:rounded-t-xl max-sm:items-center w-full relative overflow-hidden transition-all duration-500 ${
                mode && isSmallScreen && "fadeShadow"
              }`}
            >
              {!showLyrics && (
                <div
                  className="flex flex-col justify-evenly max-sm:h-[95%] h-full w-full max-sm:px-6 items-center relative z-30 transition-all duration-500 cursor-pointer"
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
                    <p
                      className={` whitespace-nowrap animate-scrollText text-md text-${textColor}`}
                    >
                      {nowPlaying.title}
                    </p>
                    <p className={`text-sm text-${textColor}`}>
                      {nowPlaying.artist}
                    </p>
                  </div>
                </div>
              )}
              {showLyrics && (
                <div
                  className="flex justify-center mt-5 max-sm:mt-0 max-sm:pt-10 sm:h-[65%] max-sm:h-[80%] p-1 sm:rounded-xl w-full max-sm:px-8 items-center relative z-30 transition-all duration-100  overflow-hidden overflow-y-auto cursor-pointer "
                  onClick={() => setShowLyrics(!showLyrics)}
                >
                  <p
                    className={`h-full w-full sm:w-[50%] max-sm:text-sm   text-center text-${textColor}`}
                  >
                    {nowPlaying.lyrics}
                  </p>
                </div>
              )}
              {/* adding a podcast player compomnent */}
              <div className="flex sm:absolute sm:bottom-3 w-full sm:px-3 relative z-[100] transition-all duration-500">
                <div className="flex max-sm:flex-col w-full sm:backdrop-blur-3xl items-center rounded-md sm:shadow-lg max-sm:fixed max-sm:bottom-4">
                  <PodcastPlayer
                    audioRef={player}
                    large={true}
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
            <div className="sm:h-full flex flex-col w-full sm:p-6 max-sm:pt-3 px-6 sm:px-8 gap-5 transition-all duration-500">
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
                      {isSmallScreen && truncateText(nowPlaying.artist,10)}
                      {!isSmallScreen && nowPlaying.artist}
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
                      title="Follow"
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
                    title="Share"
                    className="bg-green-500 flex gap-2 p-1 px-3 rounded-lg text-sm text-white cursor-pointer hover:bg-green-400 transition-all duration-500"
                    onClick={() => {
                      handleShare();
                    }}
                  >
                    <i className="ri-share-forward-line"></i>
                  </div>
                </div>
              </div>
              <hr
                className={`${
                  mode ? "border border-zinc-800" : ""
                } transition-all duration-500`}
              ></hr>
              <div className="flex flex-col  transition-all duration-500  overflow-hidden ">
                <div className="flex flex-wrap shrink-0 max-sm:w-full overflow-hidden transition-all duration-500">
                  {nowPlaying?.tags.map((item, idx) => (
                    <p
                      className={`${
                        mode ? "text-blue-400" : "text-blue-700"
                      }  text-sm max-sm:text-xs max-w-full transition-all duration-500 cursor-pointer`}
                      key={idx}
                    >
                      #{item}
                      {idx !== nowPlaying?.tags.length - 1 && (
                        <span className="mr-2"> </span>
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
                  <div className="flex gap-2 items-center px-1 ">
                    <i
                      id="like"
                      title="Like"
                      className={`${mode ? "text-blue-400" : "text-blue-600"} ${
                        liked ? "ri-thumb-up-fill" : "ri-thumb-up-line"
                      } text-2xl max-sm:text-lg  cursor-pointer transform transition-transform duration-300  hover:text-blue-500   hover:scale-125 hover:ri-thumb-up-fill `}
                      onClick={(e) => {
                        if (liked === false) {
                          if (disliked) {
                            setDisliked(!disliked);
                          }
                        }
                        setLiked(!liked);
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
                      title="Dislike"
                      className={`${mode ? "text-zinc-200" : ""} ${
                        disliked ? "ri-thumb-down-fill" : "ri-thumb-down-line"
                      } text-2xl max-sm:text-lg cursor-pointer hover:scale-125 transform transition-transform duration-300`}
                      onClick={(e) => {
                        if (disliked === false) {
                          if (liked) {
                            setLiked(!liked);
                          }
                        }
                        setDisliked(!disliked);
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
                <div className="flex w-full mx-[-8px] pt-6">
                <Comment/>
                </div>
                
                {/* All related episodes */}
                {nowPlaying.type === "playlist" && (
                  <div className="flex flex-col w-full">
                    <p
                      className={`${
                        mode ? "text-zinc-300" : "font-bold"
                      } mt-8 mb-4  `}
                    >
                      Related Episodes
                    </p>
                    <div className="flex max-sm:flex-col gap-8 max-sm:gap-0">
                      <div className="flex gap-6 w-[90%] max-sm:w-full max-sm:overflow-x-scroll snap-mandatory snap-x">
                        {episodes?.length > 0
                          ? episodes.slice(0, 3).map((item, idx) => (
                              <div
                                className=" cursor-pointer flex flex-col w-[90%] max-sm:min-w-full gap-3  snap-center transition-all duration-500"
                                key={idx}
                              >
                                <img
                                  className=" h-[65%] w-full object-cover rounded-md transition-all duration-500"
                                  src={item.thumbnail}
                                  alt=""
                                  onClick={() => {
                                    if (
                                      JSON.stringify(nowPlaying) ==
                                      JSON.stringify(item)
                                    ) {
                                      if (!isPlaying) {
                                        dispatch(setIsPlaying(true));
                                      } else {
                                        dispatch(setIsPlaying(false));
                                      }
                                    } else {
                                      dispatch(setNowPlaying(item));
                                      dispatch(setContextList(episodes));
                                      dispatch(setCurrentIdx(idx))
                                      dispatch(setIsPlaying(true));
                                    }
                                  }}
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
                                        mode
                                          ? "text-zinc-500"
                                          : "text-gray-600 "
                                      } text-xs transition-all duration-500`}
                                    >
                                      {item.artist}
                                    </p>
                                    <div
                                      className={`${
                                        mode
                                          ? "text-zinc-400 "
                                          : "text-gray-600"
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
                                          JSON.stringify(item) && isPlaying
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
                                          if (!isPlaying) {
                                            dispatch(setIsPlaying(true));
                                          } else {
                                            dispatch(setIsPlaying(false));
                                          }
                                        } else {
                                          dispatch(setNowPlaying(item));
                                          dispatch(setContextList(episodes));
                                          dispatch(setCurrentIdx(idx))
                                          dispatch(setIsPlaying(true));
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
                        <div
                          className={`${
                            mode
                              ? "hover:bg-zinc-900 text-zinc-300"
                              : "hover:bg-gray-100"
                          } flex flex-col justify-center items-center p-2 max-sm:px-4 rounded-lg  cursor-pointer`}
                        >
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
          {/* recommended podcasts */}
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
                className=" h-[60%] object-cover rounded-md transition-all duration-500 cursor-pointer"
                src={topRecommended.thumbnail}
                alt=""
                onClick={() => {
                  if (
                    JSON.stringify(nowPlaying) == JSON.stringify(topRecommended)
                  ) {
                    if (!isPlaying) {
                      dispatch(setIsPlaying(true))
                    } else {
                      dispatch(setIsPlaying(false))
                    }
                  } else {
                    dispatch(setNowPlaying(topRecommended));
                    dispatch(setContextList(topRecommended));
                    dispatch(setCurrentIdx(0));
                    dispatch(setIsPlaying(true));
                  }
                }}
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
                        JSON.stringify(topRecommended) && isPlaying
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
                        if (!isPlaying) {
                          dispatch(setIsPlaying(true))
                        } else {
                          dispatch(setIsPlaying(false))
                        }
                      } else {
                        dispatch(setNowPlaying(topRecommended));
                        dispatch(setContextList(topRecommended));
                        dispatch(setCurrentIdx(0))
                        dispatch(setIsPlaying(true))
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
              </div>
              <hr
                className={`${
                  mode ? " border border-zinc-900" : ""
                } transition-all duration-500`}
              ></hr>
              {/* tags for recommendation  */}
              <div className="flex gap-2 p-2 overflow-x-hidden hover:overflow-x-scroll max-sm:overflow-x-scroll w-full px-2 transition-all duration-500">
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
                {recommendations?.slice(0, 6).map((item, idx) => (
                  <div
                    className={`${
                      mode ? "hover:bg-zinc-950" : "hover:bg-gray-50"
                    } flex w-full p-2 gap-4    rounded-md group cursor-pointer transition-all duration-500`}
                    key={idx}
                    onClick={() => {
                      dispatch(setNowPlaying(item));
                      dispatch(setContextList(recommendations));
                      dispatch(setCurrentIdx(idx))
                      dispatch(setIsPlaying(true))
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
    </>
  );
};

export default Podcast;
