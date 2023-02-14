const configuration = {
    apiKey: '26dc9033b6e5ff7071d29db7f08d5cf7',
}

let movieData, genreData, searchData,trendingData, popularMoviesData, nowPlayingData, upcomingData, topRatedData, popularTVData, airingData;

let createUI = (data) => {
    
    //Header*****************************************************************************************************************************

    //Logo
    let header = document.getElementById('Header');
    header.innerHTML = "";

    const imageLogoH = document.createElement('div');
    imageLogoH.innerHTML = `<div class="Logo">
                                <h1><i class='fa-solid fa-video'></i>
                                Movies10Stars</h1>
                           </div>`;

    //Menu Bar
    const menuBar = document.createElement('div');
    const menuNav = document.createElement('nav');
    
    const home    = document.createElement('li');
    home.innerHTML = `<a href="#home">Home</a>`;
    const menuHome = document.createElement('ul');
    const continueW = document.createElement('li');
    continueW.innerHTML = `<a href="#continuew">Continue Watching</a>`;
    const trendingH = document.createElement('li');
    trendingH.innerHTML = `<a onclick="fetchTrending()" href="#Movies_list">Trending Now</a>`;
    const myListH = document.createElement('li');
    myListH.innerHTML = `<a href="#mylist">My List</a>`;
    const settings = document.createElement('li');
    settings.innerHTML = `<a href="#settings">Settings</a>`;
    menuHome.append(continueW, trendingH, myListH, settings);
    home.append(menuHome);
    
    const movies  = document.createElement('li');
    movies.innerHTML = `<a href="#movies">Movies</a>`;
    const menuMovies = document.createElement('ul');
    const popularMovies = document.createElement('li');
    popularMovies.innerHTML = `<a onclick="fetchPopularMovies()" href="#Movies_list">Popular</a>`;
    const nowPlay = document.createElement('li');
    nowPlay.innerHTML = `<a onclick="fetchNowPlaying()" href="#Movies_list">Now Playing</a>`;
    const upCome  = document.createElement('li');
    upCome.innerHTML = `<a onclick="fetchUpcoming()" href="#Movies_list">Upcoming</a>`;
    const topRatedMovies = document.createElement('li');
    topRatedMovies.innerHTML = `<a onclick="fetchTopRated()" href="#Movies_list">Top Rated</a>`;
    menuMovies.append(popularMovies, nowPlay, upCome, topRatedMovies);
    movies.append(menuMovies);

    const tvShows  = document.createElement('li');
    tvShows.innerHTML = `<a href="#tvshows">TV Shows</a>`;
    const menuTvShows = document.createElement('ul');
    const popularTvShows = document.createElement('li');
    popularTvShows.innerHTML = `<a onclick="fetchPopularTv()" href="#Movies_list">Popular</a>`;
    const airing = document.createElement('li');
    airing.innerHTML = `<a onclick="fetchAiring()" href="#Movies_list">Airing Today</a>`;
    const onTv  = document.createElement('li');
    onTv.innerHTML = `<a href="#ontv">On TV</a>`;
    const topRatedTvShows = document.createElement('li');
    topRatedTvShows.innerHTML = `<a href="#topratedtvshows">Top Rated</a>`;
    menuTvShows.append(popularTvShows, airing, onTv, topRatedTvShows);
    tvShows.append(menuTvShows);

    const mylistM  = document.createElement('li');
    mylistM.innerHTML = `<a href="#mylist">My List</a>`;
    const menumyListM = document.createElement('ul');
    const mylistML = document.createElement('li');
    mylistML.innerHTML = `<a href="#mylist">My List</a>`;
    menumyListM.append(mylistML);
    mylistM.append(menumyListM);

    const newPlay = document.createElement('li');
    newPlay.innerHTML = `<a href="#new">New</a>`;
    const menunewPlay = document.createElement('ul');
    const trendingNewPlay = document.createElement('li');
    trendingNewPlay.innerHTML = `<a onclick="fetchTrending()" href="#Movies_list">Trending Now</a>`;
    const topRatedNewPlay = document.createElement('li');
    topRatedNewPlay.innerHTML = `<a href="#topratednewolay">Top Rated</a>`;
    menunewPlay.append( trendingNewPlay, topRatedNewPlay);
    newPlay.append(menunewPlay);

    const accountH = document.createElement('li');
    accountH.innerHTML = `<i class='fa-solid fa-user'></i><a class="Account_format" href="#account">Account</a>`;
    const menuAccountH = document.createElement('ul');
    const createAccount = document.createElement('li');
    createAccount.innerHTML = `<a href="#createaccount">Create account</a>`;
    const signIn = document.createElement('li');
    signIn.innerHTML = `<a href="#signin">Sign In</a>`;
    menuAccountH.append( createAccount, signIn);
    accountH.append(menuAccountH);

    //Social Bar
    const headerSocialBar = document.createElement('div');
    headerSocialBar.innerHTML = `<div class="Header_social_bar">
                                        <nav class="Nav_social_media_buttons">
                                            <li>
                                                <a class="Social_link" href="https://www.instagram.com" title="Instagram" target="_blank">
                                                    <svg class="Icon">
                                                        <path d="M12 16a4 4 0 100-8 4 4 0 000 8z"></path>
                                                        <path d="M3 16V8a5 5 0 015-5h8a5 5 0 015 5v8a5 5 0 01-5 5H8a5 5 0 01-5-5z"></path>
                                                        <path d="M17.5 6.51l.01-.011"></path>
                                                    </svg>
                                                </a> 
                                            </li>           
                                            <li>
                                                <a class="Social_link" href="https://www.facebook.com" title="Facebook" target="_blank">
                                                    <svg class="Icon">
                                                        <path d="M17 2h-3a5 5 0 00-5 5v3H6v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3V2z"></path>
                                                    </svg>
                                                </a>
                                            </li>
                                            <li>
                                                <a class="Social_link" href="https://www.pinterest.ca" title="Pinterest" target="_blank">
                                                    <svg class="Icon">
                                                        <path d="M8 14.5c-3-4.5 1.462-8 4.5-8 3.038 0 5.5 1.654 5.5 5.5 0 3.038-2 5-4 5s-3-2-2.5-5m.5-2L9 21.5"></path>
                                                        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                                                    </svg>
                                                </a>
                                            </li>
                                            <li>
                                                <a class="Social_link" href="https://www.youtube.com" title="YouTube" target="_blank">
                                                    <svg class="Icon">
                                                        <path d="M14 12l-3.5 2v-4l3.5 2z"></path>
                                                        <path d="M2 12.707v-1.415c0-2.895 0-4.343.905-5.274.906-.932 2.332-.972 5.183-1.053C9.438 4.927 10.818 4.9 12 4.9c1.181 0 2.561.027 3.912.065 2.851.081 4.277.121 5.182 1.053.906.931.906 2.38.906 5.274v1.415c0 2.896 0 4.343-.905 5.275-.906.931-2.331.972-5.183 1.052-1.35.039-2.73.066-3.912.066a141.1 141.1 0 01-3.912-.066c-2.851-.08-4.277-.12-5.183-1.052C2 17.05 2 15.602 2 12.708z"></path> -->
                                                    </svg>
                                                </a>
                                            </li>
                                        </nav>
                                    </div>`;


    menuNav.append(home, movies, tvShows, mylistM, newPlay, accountH);
    menuBar.append(menuNav);
    header.append(imageLogoH, menuBar, headerSocialBar);


    //Search Section*****************************************************************************************************************************
    let searchMain = document.getElementById('Search');
    let searchSection = document.getElementById('Search_cointaner_add');
    searchSection.innerHTML = " ";
    searchSection.innerHTML = `<div class="Search_section_container">
                                                <div class="Search_section_content">
                                                    <h3>Movies and TV shows.</h4>
                                                    <p>Watch anywhere. Cancel anytime.</p>
                                                    <p>Click here to create you account.</p>
                                                    <div>
                                                        <a class="Search_section_button" href="#account">
                                                            Create Account
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>`;
       
       let searchPositon = document.getElementById('Search_positon');                                   
       let searchNameFormat = document.getElementById('Search_name_format');
       let searchName = document.getElementById('Search_name');
       searchNameFormat.append(searchName);

    //    let searchLangFormat = document.getElementById('Search_lang_format');
    //    let searchLang = document.getElementById('Search_lang');
    //    searchLangFormat.append(searchLang);

    //    let searchCountryFormat = document.getElementById('Search_country_format'); 
    //    let searchCountry = document.getElementById('Search_country');
    //    searchCountryFormat.append(searchCountry);

       let searchYearFormat = document.getElementById('Search_year_format');
       let searchYear = document.getElementById('Search_year');
       searchYearFormat.append(searchYear);

    //    let searchGenreFormat = document.getElementById('Search_genre_format');
    //    let searchGenre = document.getElementById('Search_genre'); 
    //    searchGenreFormat.append(searchGenre);

    // searchPositon.append(searchNameFormat, searchLangFormat, searchCountryFormat, searchYearFormat, searchGenreFormat);   
    searchPositon.append(searchNameFormat, searchYearFormat);
    searchMain.append(searchSection, searchPositon);


    //Movie List Section*****************************************************************************************************************************
    let searchList = document.getElementById('Movies_list');
    searchList.innerHTML = "";

      data.results.forEach((results) => { 
        if (results.poster_path){
            if(results.title){
            searchList.innerHTML  += ` <div class="Movie"> 
                                            <h4>${results.title}</h4>
                                            <img src=https://image.tmdb.org/t/p/w185/${results.poster_path}>
                                            <p>Release date: ${results.release_date}</p>
                                            <p>Popularity: ${results.vote_average}</p>
                                    </div> `  
            }else{
            searchList.innerHTML  += ` <div class="Movie"> 
                                    <h4>${results.name}</h4>
                                    <img src=https://image.tmdb.org/t/p/w185/${results.poster_path}>
                                    <p>Release date: ${results.release_date}</p>
                                    <p>Popularity: ${results.vote_average}</p>
                                </div> `
            }                     
                                }});    


    //Footer*****************************************************************************************************************************
    let footer = document.getElementById('Footer');
    footer.innerHTML = "";

    const imageLogoF = document.createElement('div');
    imageLogoF.innerHTML= imageLogoH.innerHTML;
    
    const footerColumns = document.createElement('nav');
    const company = document.createElement('div');
    const aboutUs = document.createElement('li');
    aboutUs.innerHTML = `<a href="#aboutus">About Us</a>`;
    const carrers = document.createElement('li');
    carrers.innerHTML = `<a href="#carrers">Careers</a>`;
    const pressCenter = document.createElement('li');
    pressCenter.innerHTML = `<a href="#presscenter">Press Centre</a>`;

    const customer = document.createElement('div');
    const accountF =  document.createElement('li');
    accountF.innerHTML  = `<a href="#account">Account</a>`;
    const giftCards = document.createElement('li');
    giftCards.innerHTML = `<a href="#giftcards">Gift Cards</a>`;
    const helpCenter = document.createElement('li');
    helpCenter.innerHTML = `<a href="#helpecenter">Help Center</a>`; 

    const followUs = document.createElement('div');

    followUs.innerHTML = `<h4 class="Footer_social_bar">Follow Us</h4>${headerSocialBar.innerHTML}`;

    const legalLinks = document.createElement('nav');
    const rights = document.createElement('small');
    rights.innerHTML = `Copyright © 2023 movies10stars.com<sup>TM</sup>. All rights reserved.`;

    const terms = document.createElement('div');
    terms.innerHTML = `<a class="Legal_links" href="/terms-and-conditions">Terms &amp; Conditions</a>`;
    const policy = document.createElement('div');
    policy.innerHTML  = `<a class="Legal_links" href="/privacy-policy">Privacy policy</a>`;
    const cookie = document.createElement('div');
    cookie.innerHTML = `<a class="Legal_links" href="/accessibility">Accessibility</a>`;

    company.append(aboutUs, carrers, pressCenter);
    customer.append(accountF, giftCards, helpCenter);
    footerColumns.append(company, customer, followUs);

    legalLinks.append(rights, terms, policy, cookie);
    footer.append(imageLogoF, footerColumns, legalLinks);

     } 


//Fetch*****************************************************************************************************************************
const fetchMovieData = async (lang, country, year, genre) => {

    let { apiKey} = configuration; 

    try {
        const data = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&include_adult=false&include_video=false&page=1&with_original_language=${lang}&with_origin_country=BR&primary_release_year=${year}&with_genres=${genre}`);
        const jsonData = await data.json();
        movieData = jsonData;

        createUI(movieData);
    
    } catch (error) {
        alert("There was an error somewhere!");
    }
}


const fetchSearchName = async () => {
    const searchN = document.getElementById('Search_name');
    console.log(searchN.value);

    let { apiKey} = configuration;

    try {
        const searchDataName = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&&query=${searchN.value}&page=1&include_adult=false`);
        const jsonSearch = await searchDataName.json();
        searchData = jsonSearch;

        createUI(searchData);
    
    } catch (error) {
        alert("There was an error somewhere!");
    }

}


const fetchSearch = async () => {

    const searchLang = document.getElementById('Search_lang');
    console.log(searchLang.value);

    const searchCountry = document.getElementById('Search_country');
    console.log(searchCountry.value);

    const searchYear = document.getElementById('Search_year');
    console.log(searchYear.value);

    const searchGenre = document.getElementById('Search_genre');
    console.log(searchGenre.value);

    fetchMovieData(searchLang.value, searchCountry.value, searchYear.value, searchGenre.value);
}


const fetchSearchGenre = async () => {

    // const searchGenre = document.getElementById('search_genre');
    // console.log(searchGenre.value);


    let { apiKey} = configuration;

    try {
        const gData = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US&page=1`);
        const jsonGData = await gData.json();
        genreData = jsonGData;

        // fetchMovieData(searchGenre.value);
        // createUI(searchData);
    
    } catch (error) {
        alert("There was an error somewhere!");
    }

}


const fetchTrending = async() => {
    let {apiKey} = configuration;

    try{

        const tData = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}`);
        const jsonTData = await tData.json();
        trendingData = jsonTData;

    }catch (error) {
        alert("There was an error somewhere!");
    }

    createUI(trendingData);
}


const fetchPopularMovies = async() => {
    let {apiKey} = configuration;

    try{

        const pMoviesData = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`);
        const jsonPMoviesData = await pMoviesData.json();
        popularMoviesData = jsonPMoviesData;

    }catch (error) {
        alert("There was an error somewhere!");
    }

    createUI(popularMoviesData);
}


const fetchNowPlaying = async() => {
    let {apiKey} = configuration;

    try{

        const nPData = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`);
        const jsonNPData = await nPData.json();
        nowPlayingData = jsonNPData;

    }catch (error) {
        alert("There was an error somewhere!");
    }

    createUI(nowPlayingData);
}


const fetchUpcoming = async() => {
    let {apiKey} = configuration;

    try{

        const upData = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`);
        const jsonUpData = await upData.json();
        upcomingData = jsonUpData;

    }catch (error) {
        alert("There was an error somewhere!");
    }

    createUI(upcomingData);
}


const fetchTopRated = async() => {
    let {apiKey} = configuration;

    try{

        const topRData = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`);
        const jsontopRData = await topRData.json();
        topRatedData = jsontopRData;

    }catch (error) {
        alert("There was an error somewhere!");
    }

    createUI(topRatedData);
}


const fetchPopularTv = async() => {
    let {apiKey} = configuration;

    try{

        const pTVData = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=en-US&page=1`);
        const jsonPTVData = await pTVData.json();
        popularTVData = jsonPTVData;

    }catch (error) {
        alert("There was an error somewhere!");
    }

    createUI(popularTVData);
}


const fetchAiring = async() => {
    let {apiKey} = configuration;

    try{

        const airData = await fetch(`https://api.themoviedb.org/3/tv/airing_today?api_key=${apiKey}&language=en-US&page=1`);
        const jsonAiringData = await airData.json();
        airingData = jsonAiringData;

    }catch (error) {
        alert("There was an error somewhere!");
    }

    createUI(airingData);
}


fetchMovieData("en", "", "", "");