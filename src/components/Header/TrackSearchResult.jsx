import React from 'react'
import styled from 'styled-components';

const TrackSearchResultContainer=styled.div`
    display: flex;
    margin: 2;
    align-items: center;
    cursor: pointer;
`
const TrackInfo=styled.div`
    margin-left: 3;
`
const Title=styled.div``
const Artists=styled.div`
    
`

const TrackSearchResult = ({track, chooseTrack}) => {
    const handlePlay=()=>{
        chooseTrack(track)
    }
    return (
        <TrackSearchResultContainer onClick={handlePlay}>
            <img src={track.albumUrl} style={{height:'64px', width: '64px'}} alt=''/>
            <TrackInfo>
            <Title>{track.title}</Title>
            <Artists>{track.artists}</Artists>
            </TrackInfo>
        </TrackSearchResultContainer>
    )
}

export default TrackSearchResult
