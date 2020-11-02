import React, { useEffect } from "react";
import axios from "axios";
import "./App.css";
import Row from "./Row";
import requests from "./requests";
import Nav from "./Nav";
import Banner from "./Banner";

function App() {
    useEffect(() => {
        axios("/api/data").then((res) => console.log(res));
    }, []);

    return (
        <div className="app">
            {/* Nav bar */}
            <Nav />
            {/* Banner */}
            <Banner />
            <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true} />
            <Row title="Trending Now" fetchUrl={requests.fetchTrendig} />
            <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
            <Row title="Actoin Movies" fetchUrl={requests.fetchActionMoviews} />
            <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
            <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
            <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
            <Row title="Documenttaries" fetchUrl={requests.fetchDocumentaries} />
        </div>
    );
}

export default App;
