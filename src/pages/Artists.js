import React from "react";
import MainLayout from "layouts/MainLayout"
import { Link } from "react-router-dom";

const ArtistsList = [
    {
        id: '1',
        name: "Alex Grey",
        image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7e60ee14-4c66-42fb-aa29-4df92522a212/d4svtc0-6c7f21bd-60c8-4bb5-aa13-f6514c4db8c7.jpg/v1/fill/w_800,h_799,q_75,strp/bardobeing_by_ianc3_d4svtc0-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9Nzk5IiwicGF0aCI6IlwvZlwvN2U2MGVlMTQtNGM2Ni00MmZiLWFhMjktNGRmOTI1MjJhMjEyXC9kNHN2dGMwLTZjN2YyMWJkLTYwYzgtNGJiNS1hYTEzLWY2NTE0YzRkYjhjNy5qcGciLCJ3aWR0aCI6Ijw9ODAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.8La1dW2KhKLIDXSs2z3CTKNYslQ7CcXU5BCif8szJYQ",
        artistImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Alex_Grey_2013.jpg/220px-Alex_Grey_2013.jpg",
        desc: "American visual artist, author, teacher, and Vajrayana practitioner known for creating spiritual and psychedelic paintings.[1] He works in multiple forms including performance art, process art, installation art, sculpture, visionary art, and painting",
    },
    {
        id: '1',
        name: "Alex Grey",
        image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7e60ee14-4c66-42fb-aa29-4df92522a212/d4svtc0-6c7f21bd-60c8-4bb5-aa13-f6514c4db8c7.jpg/v1/fill/w_800,h_799,q_75,strp/bardobeing_by_ianc3_d4svtc0-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9Nzk5IiwicGF0aCI6IlwvZlwvN2U2MGVlMTQtNGM2Ni00MmZiLWFhMjktNGRmOTI1MjJhMjEyXC9kNHN2dGMwLTZjN2YyMWJkLTYwYzgtNGJiNS1hYTEzLWY2NTE0YzRkYjhjNy5qcGciLCJ3aWR0aCI6Ijw9ODAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.8La1dW2KhKLIDXSs2z3CTKNYslQ7CcXU5BCif8szJYQ",
        artistImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Alex_Grey_2013.jpg/220px-Alex_Grey_2013.jpg",
        desc: "American visual artist, author, teacher, and Vajrayana practitioner known for creating spiritual and psychedelic paintings.[1] He works in multiple forms including performance art, process art, installation art, sculpture, visionary art, and painting",
    },
    {
        id: '1',
        name: "Alex Grey",
        image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7e60ee14-4c66-42fb-aa29-4df92522a212/d4svtc0-6c7f21bd-60c8-4bb5-aa13-f6514c4db8c7.jpg/v1/fill/w_800,h_799,q_75,strp/bardobeing_by_ianc3_d4svtc0-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9Nzk5IiwicGF0aCI6IlwvZlwvN2U2MGVlMTQtNGM2Ni00MmZiLWFhMjktNGRmOTI1MjJhMjEyXC9kNHN2dGMwLTZjN2YyMWJkLTYwYzgtNGJiNS1hYTEzLWY2NTE0YzRkYjhjNy5qcGciLCJ3aWR0aCI6Ijw9ODAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.8La1dW2KhKLIDXSs2z3CTKNYslQ7CcXU5BCif8szJYQ",
        artistImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Alex_Grey_2013.jpg/220px-Alex_Grey_2013.jpg",
        desc: "American visual artist, author, teacher, and Vajrayana practitioner known for creating spiritual and psychedelic paintings.[1] He works in multiple forms including performance art, process art, installation art, sculpture, visionary art, and painting",
    }
]

const ArtistCard = (props) => {
    const { artist } = props;
    return (
        <div class="max-w-sm w-full lg:max-w-full lg:flex">
            <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{ backgroundImage: artist.image }}>
                <img src={artist.image} alt={ artist.name}/>
            </div>
            <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <p class="text-gray-900 text-2xl leading-none">{ artist.name}</p>
                <div class="mb-8">
                    <div class="text-gray-900 font-bold text-xl mb-2">{artist.desc}</div>
                </div>
                <div class="flex items-center">
                    <img class="w-10 h-10 rounded-full mr-4" src={artist.artistImage} alt={ artist.name}/>
                    <div class="text-sm">
                        <p class="text-gray-900 leading-none">{ artist.name}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Artists = () => {
  return (
    <MainLayout>
        <div className="pb-16">
            <p className="text-4xl text-white">Artists</p>
        </div>
        <div>
              {ArtistsList.map(artist =>
                  <Link to={`/artists/${artist.id}`}>
                    <div className="mb-4 hover:">
                        <ArtistCard artist={artist} />
                    </div>
                </Link>
            )}
        </div>
    </MainLayout>
  );
}

export default Artists;
