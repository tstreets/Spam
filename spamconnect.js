async function getArtists() {
    const artistsResponse = await fetch(
      "https://class-api-six.vercel.app/api/fall-24/underrated-music/all"
    );
  
    const artistsData = await artistsResponse.json();
  
    return artistsData;
  }
  
  async function qUeensOfTheStoneAge() {
    const dogsRef = document.querySelector(".artists");
  
    const allArtists = await getArtists();
    dogsRef.innerHTML=""
    for (let i = 0; i < allArtists.length; i++) {
      const artistInfo = allArtists[i];
      dogsRef.innerHTML += `<a href="${artistInfo.url}">${artistInfo.name}</a>
      <div class="artistsect">
        <img src="${artistInfo.cover_image}" alt="Queens" /> <div class="arti">
          <h3>Little Sister</h3>
         <audio src="${artistInfo.songs[0]}" controls="true"></audio>
        </div>
        <div class="arti2">
          <h3>My God Is The Sun</h3>
          <audio src="${artistInfo.songs[1]}" controls="true"></audio>
        </div>
        <div class="arti2">
          <h3>I Sat By The Ocean</h3>
          <audio src="${artistInfo.songs[2]}" controls="true"></audio>
        </div>
        <div class="albumz">
          
        </div>
      </div>`
    }
  }
  qUeensOfTheStoneAge();



  
  
  
  
  
  
  