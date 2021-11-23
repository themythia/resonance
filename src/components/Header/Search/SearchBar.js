import React, {useState} from 'react';

import {Search} from '@styled-icons/boxicons-regular/'
import {CloseOutline} from '@styled-icons/evaicons-outline/'
import {SearchContainer, SearchInputs, SongResults, Input, DataItem} from  '../../../styled/SearchBar';

const SearchBar = ({placeholder, songs}) => {
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("")

    const handleFilter= (event)=>{
        const searchWord= event.target.value;
        setWordEntered(searchWord)
        const newFilter = songs.filter((song)=>{
            return song.name.toLowerCase().includes(searchWord.toLowerCase());
        });
        if (searchWord === "") {
            setFilteredData([])
        } else {
            setFilteredData(newFilter);
        }
        
    };
    const clearInput = ()=>{
        setFilteredData([]);
        setWordEntered("");
    };
    return (
        <SearchContainer>
        <SearchInputs>
            <Input type="text" placeholder={placeholder} value={wordEntered} onChange={handleFilter}/>
            {filteredData.length ===0 ? 
            <Search color= "white" size='25' /> : 
            <CloseOutline color= "white" size='25' cursor="pointer" onClick={clearInput}/>}
            
        </SearchInputs>
        {filteredData.length !==0 && (
        <SongResults>
            {filteredData.slice(0, 15).map((song, key)=>{
                return <DataItem>
                    {song.name}
                    {song.artist}
                    </DataItem>
                       
            })}
        </SongResults>
        )}
        </SearchContainer>
        
    )
}

export default SearchBar
