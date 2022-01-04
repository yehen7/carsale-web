import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import { Button } from '../button'
import { Marginer } from '../marginer'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons'
import { SCREENS } from '../responsive'


const CardContainer=styled.div`
${
    tw`
flex
justify-center
items-center
rounded-md
bg-white
pt-1
pb-3
pr-2
pl-2
md:pt-2
md:pb-2
md:pl-6
md:pr-6

    `
};
`
const ItemContainer=styled.div`
${tw`
flex relative

`}

`
const Icon =styled.span`

${
    tw`
    text-red-500
    fill-current
    text-xs
    md:text-base
    mr-1
    md:mr-3
    
    `
}

`

const Name=styled.span`
${tw`

text-gray-600
text-xs
md:text-sm
cursor-pointer
select-none
`}



`

const SmallIcon=styled.span`

${tw`

fill-current
text-gray-500
text-xs
md:text-base
ml-1

`}



`

const LineSperator=styled.span`

width:2px;
height:45%;


${tw`

bg-gray-300
mr-2
ml-2
md:mr-5
md:ml-5

`}




`

const DateCalender=styled(Calendar)`
max-width:none;
position:absolute;
user-select:none;
top:0;
left:0;

@media(min:width:${SCREENS.md}){
    top:3.5em;
    left:-2em;
}

`





export function BookCard(){

    const[startDate,setStartDate]=useState(new Date());
    const[startCalender,setStartCalender]=useState(false);
    
    const[returnDate,setReturnDate]=useState(new Date());
    const[returnCalender,setReturnCalender]=useState(false);
    
const toggleStartCalender=()=>{
    setStartCalender(!startCalender);
    if(returnCalender)setReturnCalender(false);
}
const toggleReturntCalender=()=>{
    setReturnCalender(!returnCalender);
    if(startCalender)setStartCalender(false);
}

    return(   <CardContainer>
        <ItemContainer>
            <Icon>
                <FontAwesomeIcon icon={faCalendarAlt}/>
            </Icon>
            <Name onClick={toggleStartCalender}>Pick up Date</Name>
            <SmallIcon>
                <FontAwesomeIcon icon={startCalender ? faCaretUp:faCaretDown} />
            </SmallIcon>
            {startCalender && <DateCalender value={startDate} onChange={setStartDate}/>}
            
        </ItemContainer>
        <LineSperator/>
        <ItemContainer>
            <Icon>
                <FontAwesomeIcon icon={faCalendarAlt}/>
            </Icon>
            <Name onClick={toggleReturntCalender}>Return Date</Name>
            <SmallIcon>
                <FontAwesomeIcon icon={returnCalender ? faCaretUp:faCaretDown} />
            </SmallIcon>
            {returnCalender && <DateCalender value={returnDate} onChange={setReturnDate}/>}
        </ItemContainer>
        <Marginer direction='horizontal' margin='2em'/>
        <Button text='Book Your Ride'/>
    </CardContainer>)

 
}