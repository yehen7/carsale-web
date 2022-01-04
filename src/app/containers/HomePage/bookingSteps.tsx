import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons";
import { faCarSide, faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components"
import tw from "twin.macro"

const Container=styled.div`

${tw`
w-full
flex
flex-col
items-center
pt-3
pb-3
lg:pt-6
lg:pb-6

`}



`

const Title=styled.h2`

${tw`

text-xl
lg:text-4xl
text-black 
font-extrabold
`}


`
const StepsContainer=styled.div`
${
    tw`
    flex
    justify-evenly
    flex-wrap
    mt-7
    lg:mt-16

    `
}


`
const StepContainer=styled.div`

${tw`
flex
flex-col

md:w-96
items-center
transition-colors
hover:text-red-500

`}



`
const Step=styled.div`

box-shadow:0 1.3px 12px -3px rgba(0,0,0,0.4) ;


${tw`

flex
rounded-lg
items-center
p-6
justify-center
p-6
`}


`
const StepsTitle=styled.h4`

${tw`

text-black
text-lg
font-semibold
mt-4
`}


`
const StepsDescription=styled.p`

${
    tw`
    
    text-xs
    md:text-sm
    w-10/12
    text-center
    text-gray-600
    `
}


`
const StepsIcon=styled.span`
${tw`

text-red-500
text-3xl


`}



`


export function BookingSteps(){


    return(

        <Container>
<Title>Our Steps</Title>
            <StepsContainer>
                <StepContainer>
                    <Step>
                        <StepsIcon>
                            <FontAwesomeIcon icon={faMapMarkedAlt}/>
                        </StepsIcon>
                    </Step>
                    <StepsTitle>Choose Location</StepsTitle>
                    <StepsDescription>Find the near place you can ride</StepsDescription>
                </StepContainer>
                <StepContainer>
                    <Step>
                        <StepsIcon>
                            <FontAwesomeIcon icon={faCalendarAlt}/>
                        </StepsIcon>
                    </Step>
                    <StepsTitle>Pick up Date</StepsTitle>
                    <StepsDescription>Get the bset date for pickup</StepsDescription>
                </StepContainer>
                <StepContainer>
                    <Step>
                        <StepsIcon>
                            <FontAwesomeIcon icon={faCarSide}/>
                        </StepsIcon>
                    </Step>
                    <StepsTitle>Book your car</StepsTitle>
                    <StepsDescription>Book your car with the ease</StepsDescription>
                </StepContainer>





            </StepsContainer>
            
        </Container>
    )

}