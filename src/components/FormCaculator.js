import { useState } from 'react'
import styled from 'styled-components'


//Testing
// 1. Should show initialstate correctly (all input values and results should equal to 0)
// 2. Should replace the initial state with input numbers
// 3. Input values should not be less than 0
// 4. Should not be able to input string, accept only numbers
// 5. Should not change display when the caculation result appears
// 6. The income result should equal the input income
// 7. Total time based cost = price per hour * hours (15 * 2 = 30)
// 8. Total distance based cost = price per km * km (20 * 2 = 40)
// 9. Profitability = income - (total time based cost + total distance based cost)
// 9a.Profitability caculation example:  2000 - (120 + 200) = 1680
// 10. If the profit value is a interger number, it should ground to 2 digits (2384.9339393 = 2384.93)


const FormCaculator = () => {

    //Set up initial state to update the value later when the input changes
    const [distance, setDistance] = useState(0);
    const [hours, setHours] = useState(0);
    const [pricePerHour, setPricePerHour] = useState(0);
    const [pricePerKm, setPricePerKm] = useState(0);
    const [income, setIncome] = useState(0);

    //Formular to caculate the profitability
    const profitability = income - ((distance*pricePerKm) + (hours*pricePerHour));

    return (
        <Form>
            <BoardContainer>
                <Label htmlFor='income'>
                    Income ($)
                    <input 
                        id='income'
                        type='number'
                        value={income}
                        min='0'
                        onChange={(e) => setIncome((e.target.value))}
                    />
                </Label>
                <LabelContainer>
                    <Label htmlFor='distance'>
                        Distance (km)
                        <input 
                            id='distance'
                            type='number'
                            value={distance}
                            min='0'
                            onChange={(e) => setDistance(e.target.value)}
                        /> 
                    </Label>
                    <Label htmlFor='price-per-km'>
                        Price ($/km)
                        <input 
                            id='price-per-km'
                            type='number'
                            value={pricePerKm}
                            min='0'
                            onChange={(e) => setPricePerKm(e.target.value)}
                        />
                    </Label>
                </LabelContainer>
                <LabelContainer>
                    <Label htmlFor='hours'>
                        Time (hours)
                        <input 
                            id='hours'
                            type='number'
                            value={hours}
                            min='0'
                            onChange={(e) => setHours(e.target.value)}
                        />
                    </Label>
                    <Label htmlFor='price-per-hour'>
                        Price ($/hour)
                        <input 
                            id='price-per-hour'
                            type='number'
                            value={pricePerHour}
                            min='0'
                            onChange={(e) => setPricePerHour(e.target.value)}
                        />
                    </Label>
                </LabelContainer>
            </BoardContainer>
            <ResultContainer>
                <Data>
                    <ResultDetail>Income: 
                        <span>{income} $</span>
                    </ResultDetail>
                    <ResultDetail>
                        Total distance based cost: 
                        <span>{(distance*pricePerKm)} $</span>
                    </ResultDetail>
                    <ResultDetail>
                        Total time based cost: 
                        <span>{hours*pricePerHour} $</span>
                    </ResultDetail>
                </Data>
                <Profit>
                    <ProfitResult>
                        Profitability: 
                        <span>{profitability.toFixed(2)} $</span>
                    </ProfitResult>
                </Profit>
            </ResultContainer>
        </Form>
    )
}

export default FormCaculator

//Styling using style components
const Form = styled.form`
    display: flex;
    flex-direction: row;
    gap: 2rem;
    width: 1200px;
    
    
    @media (max-width: 650px) {
        flex-direction: column;
        width: 37.5rem;
        height: 100vh;
    }
`

const BoardContainer = styled.div`
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 55%;
    height: 400px;
    padding: 4rem;
    box-shadow: rgba(0, 0, 0, 0.05) 1.95px 1.95px 2.6px;

    @media (max-width: 650px) {
        width: 30rem;
        height: 600px;

    }
`
const LabelContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 5rem;

    @media (max-width: 650px) {
        flex-direction: column;
        gap: 2rem;
    }
`

const Label = styled.label`
    font-size: 1.8rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    margin-bottom: 2rem;


    input {
        border: none;
        border-radius: 5px;
        padding: 1.2rem;
        width: 28rem;
        height: 5rem;
        font-size: 1.6rem;
        box-sizing: border-box;
        background-color: #f5f5f5;
    }
    
`

const ResultContainer = styled.div`
   display: flex;
   flex-direction: column;
   gap: 2rem;
   width: 30%;

   @media (max-width: 650px) {
        width: 30rem;
    }

   
   `
const Data = styled.div`
    display: flex;
    flex-direction: column;
    padding: 4rem;
    width: 100%;
    height: 200px;
    background-color: #fff;

`

const Profit = styled(Data)`
    height: 10rem;
    
    `
const ResultDetail = styled.p`
    font-size: 1.8rem;
    display: flex;
    width: 100%;
    justify-content: space-between;
`
const ProfitResult = styled(ResultDetail)`
    font-size: 2rem;
    font-weight: bold;
    letter-spacing: 1px;
    
    @media (max-width: 650px) {
        font-size: 1.8rem;
    }
`